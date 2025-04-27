import type { ReactNode } from 'react';

import { getToken, onMessage } from 'firebase/messaging';
import { useEffect } from 'react';
import { toast } from 'sonner';

import { usePostApiV1Firebase } from '@/generated/api/requests';
import { LOCAL_STORAGE_KEYS } from '@/utils/constants';

import { useProfile } from '../profile';
import { messaging } from './messaging';
import { PushNotificationsContext } from './PushNotificationsContext';

interface PushNotificationsProviderProps {
  children: ReactNode;
}

export const PushNotificationsProvider = ({ children }: PushNotificationsProviderProps) => {
  const profileContext = useProfile();

  const postApiV1Firebase = usePostApiV1Firebase();

  const requestPermission = async () => {
    const serviceWorkerRegistration = await navigator.serviceWorker.register(
      '/firebase-messaging-sw.js'
    );
    const permission = await Notification.requestPermission();

    if (permission === 'granted') {
      const token = await getToken(messaging, {
        vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
        serviceWorkerRegistration
      });

      const postApiV1FirebaseResponse = await postApiV1Firebase.mutateAsync({ data: { token } });

      if (postApiV1FirebaseResponse.userId) {
        localStorage.setItem(LOCAL_STORAGE_KEYS.FIREBASE_USER_ID, postApiV1FirebaseResponse.userId);
      }
    } else if (permission === 'denied') {
      toast.error('You denied for the notification');
    }
  };

  useEffect(() => {
    if (!profileContext.profile?.userId) return;

    requestPermission();

    onMessage(messaging, (payload) => {
      console.log('[PushNotificationsProvider] Received foreground message ', payload);

      if (!payload.notification || !payload.notification.body || !payload.notification.title) {
        return;
      }

      const body = JSON.parse(payload.notification.body) as {
        dateTime: string;
        userId: string;
        amount: number;
      };
      if (!body || !body.dateTime || !body.amount || !body.userId) return;

      const title = payload.notification.title === 'deposit' ? 'Пополнение' : 'Снятие';

      const localStorageUserId = window.localStorage.getItem(LOCAL_STORAGE_KEYS.FIREBASE_USER_ID);
      if (localStorageUserId !== body.userId) return;

      toast.info(title, {
        description: `${body.dateTime} - ${body.amount}руб.`
      });
    });
  }, [profileContext.profile?.userId]);

  return <PushNotificationsContext value={{}}>{children}</PushNotificationsContext>;
};
