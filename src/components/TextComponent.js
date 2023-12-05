import '../App.css';
import React, { useState, useEffect } from 'react';
import { NotificationList, useNotificationAdd } from './Notifications';
function ComponentTest() {
  const { addSuccess } = useNotificationAdd();
  const [loaded, setLoaded] = useState(false);
  const loadPaycor = (callback) => {
    const existingScript = document.getElementById('paycor');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://recruitingbypaycor.com/career/iframe.action?clientId=8a7883d084f5018f01853687afd3212a';
      script.id = 'gnewtonjs';
      document.head.appendChild(script);
      script.onload = () => { 
        if (callback) callback();
      };
    }
    if (existingScript && callback) callback();
  };
  useEffect(() => {
    loadPaycor(() => {
      setLoaded(true);
    });
  },[loaded]);

  function handleClick() {
    addSuccess('This is a success message');

  }
  return (
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
        <button onClick={handleClick}>
          Learn React
        </button>
<NotificationList/>
      </header>


  );
}

export default ComponentTest;
