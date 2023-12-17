import React from "react";
import { NotificationList, useNotificationAdd } from "./Notifications";
function ComponentTest() {
    const { addSuccess } = useNotificationAdd();

    function handleClick() {
        addSuccess("This is a success message");
    }
    return (
        <header className="App-header">
            <NotificationList />
        </header>
    );
}

export default ComponentTest;
