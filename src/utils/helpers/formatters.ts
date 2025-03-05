import type { Decimal, DecimalValue, Timestamp } from '@/generated/api/models';

export const formatTimestamp = (timestamp?: Timestamp | null): string => {
  if (!timestamp?.seconds) return 'N/A';
  return new Date(Number(timestamp.seconds) * 1000).toLocaleDateString();
};

const bitLength = (num: number): number => {
  return Math.floor(Math.log2(num)) + 1;
};

const byteLength = (num: number): number => {
  return Math.ceil(bitLength(num) / 8);
};

const toBytes = (num: number): ArrayBuffer => {
  if (!Number.isSafeInteger(num)) {
    throw new TypeError('Number is out of range');
  }

  const size = num === 0 ? 0 : byteLength(num);
  const bytes = new Uint8ClampedArray(size);
  let x = num;
  for (let i = size - 1; i >= 0; i--) {
    const rightByte = x & 0xff;
    bytes[i] = rightByte;
    x = Math.floor(x / 0x100);
  }

  return bytes.buffer;
};

const fromBytes = (buffer: ArrayBuffer): number => {
  const bytes = new Uint8ClampedArray(buffer);
  const size = bytes.byteLength;
  let x = 0;
  for (let i = 0; i < size; i++) {
    const byte = bytes[i];
    x *= 0x100;
    x += byte;
  }
  return x;
};

const getScale = (decimalNumber: number): number => {
  const str = decimalNumber.toString();
  return str.includes('.') ? str.split('.')[1].length : 0;
};

export const toDecimalValue = (num: number): DecimalValue => {
  const scale = getScale(num);
  const unscaled = num * 10 ** scale;
  const precision = num.toString().replace('.', '').length;

  return { value: toBytes(unscaled), scale, precision };
};

export const toDecimal = (num: number): Decimal => ({
  unscaled: num * 10 ** getScale(num),
  scale: getScale(num)
});

export const formatDecimal = (decimalValue?: Decimal | DecimalValue | null): string => {
  if (!decimalValue) return 'N/A';

  if ('unscaled' in decimalValue && typeof decimalValue.unscaled === 'number') {
    return (decimalValue.unscaled / 10 ** (decimalValue.scale ?? 0)).toFixed(
      decimalValue.scale ?? 0
    );
  }

  if ('value' in decimalValue && decimalValue.value) {
    const unscaled = fromBytes(decimalValue.value);
    return (unscaled / 10 ** (decimalValue.scale ?? 0)).toFixed(decimalValue.scale ?? 0);
  }

  return 'N/A';
};
