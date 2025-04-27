/* eslint-disable no-eval */
/* global importScripts, firebase */

importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js');

fetch('/firebase-config.json')
  .then((response) => {
    return response.json();
  })
  .then((jsContent) => {
    const config = eval(jsContent);
    firebase.initializeApp(config.firebaseConfig);
    const messaging = firebase.messaging();

    messaging.onBackgroundMessage((payload) => {
      console.log('[firebase-messaging-sw.js] Received background message ', payload);

      if (!payload.notification || !payload.notification.body || !payload.notification.title) {
        return;
      }

      const body = JSON.parse(payload.notification.body);
      if (!body || !body.dateTime || !body.amount || !body.userId) return;

      const title = payload.notification.title === 'deposit' ? 'Пополнение' : 'Снятие';

      const localStorageUserId = window.localStorage.getItem('wolf-bank-firebase-user-id');
      if (localStorageUserId !== body.userId) return;

      window.self.registration.showNotification(title, {
        body: `${body.dateTime} - ${body.amount}руб.`
      });
    });
  })
  .catch((error) => {
    console.error('Error initializing Firebase in service worker:', error);
  });
