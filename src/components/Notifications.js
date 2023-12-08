import React, { useState } from 'react';

const NotificationContext = React.createContext();

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);

  function addNotification(type, message) {
    setNotifications([...notifications, { type, message }]);
  }

  function removeNotification(index) {
    setNotifications(notifications.filter((_, i) => i !== index));
  }

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        removeNotification
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  const context = React.useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
}

export function NotificationList() {
  const { notifications, removeNotification } = useNotification();

  return (
    <div className='notification-cover'>
      {notifications.map((notification, index) => (
        <div
          key={notification.type+index}
          className={`notification notification-${notification.type}`}
        >
            <div className={`notification-header ${notification.type}-header`}>{notification.type}</div>
          <div className="notification-message">{notification.message}</div>
          <button className="remove-notification" onClick={() => removeNotification(index)}>
            Okay
          </button>
        </div>
      ))}
    </div>
  );
}

export function useNotificationAdd() {
  const { addNotification } = useNotification();

  return {
    addSuccess: message => addNotification('success', message),
    addWarning: message => addNotification('warning', message),
    addError: message => addNotification('error', message)
  };
}
