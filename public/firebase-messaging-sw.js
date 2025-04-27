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

      const notification = payload.data;

      const userId = window.localStorage.getItem('wolf-bank-user-id');
      console.log('#userId ', userId);
      if (userId !== notification.userId) return;

      window.self.registration.showNotification(`Test notification`, {
        body: 'Body'
      });
    });
  })
  .catch((error) => {
    console.error('Error initializing Firebase in service worker:', error);
  });
