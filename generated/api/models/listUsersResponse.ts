/**
 * Generated by orval v7.6.0 🍺
 * Do not edit manually.
 * WolfBankGateway
 * OpenAPI spec version: 1.0
 */
import type { User } from './user';

export interface ListUsersResponse {
  /** @nullable */
  readonly users?: readonly User[] | null;
  total?: number;
}
