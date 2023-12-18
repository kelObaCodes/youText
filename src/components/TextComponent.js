import React from "react";
import { NotificationList, useNotificationAdd } from "./Notifications";
function ComponentTest() {
    const { addSuccess } = useNotificationAdd();

    return (
        <header className="App-header">
            <NotificationList />
        </header>
    );
}

export default ComponentTest;
