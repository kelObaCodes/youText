import React, { useState, useEffect } from 'react';

const NotificationContext = React.createContext();

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Check if there are notifications
    if (notifications.length > 0) {
      // Set a timeout for the first notification
      const timeoutId = setTimeout(() => {
        // Trigger the slideOut animation and remove the first notification after 0.5 seconds
        setNotifications(prevNotifications =>
          prevNotifications.map((notification, index) => {
            return index === 0 ? { ...notification, slideOut: true } : notification;
          })
        );

        // Remove the first notification from the state after 0.5 seconds
        setTimeout(() => {
          removeNotification(0);
        }, 500);
      }, 5000);

      // Clear the timeout when the component unmounts or when notifications change
      return () => clearTimeout(timeoutId);
    }
  }, [notifications]);

  function addNotification(type, message) {
    const newNotification = { type, message, slideOut: false };
    setNotifications(prevNotifications => [...prevNotifications, newNotification]);
  }

  function removeNotification(index) {
    setNotifications(prevNotifications =>
      prevNotifications.filter((_, i) => i !== index)
    );
  }

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        removeNotification,
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
    <>
      <div className='notification-cover'>
        {notifications.map((notification, index) => (
          <div
            key={notification.type + index}
            className={`notification notification-${notification.type} animated ${
              notification.slideOut ? 'slideOut' : 'slideIn'
            }`}
          >
            <div className="notification-message">{notification.message}</div>
            <button className="remove-notification" onClick={() => removeNotification(index)}>
              Okay
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export function useNotificationAdd() {
  const { addNotification } = useNotification();

  return {
    addSuccess: message => addNotification('success', message),
    addWarning: message => addNotification('warning', message),
    addError: message => addNotification('error', message),
  };
}
