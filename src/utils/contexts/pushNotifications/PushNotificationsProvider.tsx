import type { ReactNode } from 'react';

import { getToken, onMessage } from 'firebase/messaging';
import { useEffect } from 'react';
import { toast } from 'sonner';

import { useProfile } from '../profile';
import { messaging } from './messaging';
import { PushNotificationsContext } from './PushNotificationsContext';

interface PushNotificationsProviderProps {
  children: ReactNode;
}

export const PushNotificationsProvider = ({ children }: PushNotificationsProviderProps) => {
  const profileContext = useProfile();

  const requestPermission = async (userId: string) => {
    const serviceWorkerRegistration = await navigator.serviceWorker.register(
      '/firebase-messaging-sw.js'
    );
    const permission = await Notification.requestPermission();

    if (permission === 'granted') {
      const token = await getToken(messaging, {
        vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
        serviceWorkerRegistration
      });

      // TODO send token and user Id
      console.log('#token', token);
      console.log('#userId', userId);
    } else if (permission === 'denied') {
      toast.error('You denied for the notification');
    }
  };

  useEffect(() => {
    if (!profileContext.profile?.userId) return;

    requestPermission(profileContext.profile.userId);

    onMessage(messaging, (payload) => {
      console.log('#notification', payload);
      if (payload.notification) {
        toast.info(payload.notification.title, {
          description: payload.notification.body,
          icon: payload.notification.icon
        });
      }
    });
  }, [profileContext.profile?.userId]);

  return <PushNotificationsContext value={{}}>{children}</PushNotificationsContext>;
};
