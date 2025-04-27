interface PushNotificationProps {
  notification: Notification;
}

export const PushNotification = ({ notification }: PushNotificationProps) => (
  <>
    <div id='notificationHeader'>
      <span>{notification.title}</span>
    </div>
    <div id='notificationBody'>{notification.body}</div>
  </>
);
