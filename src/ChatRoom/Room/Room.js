// Modules
import React, { useState } from "react";
// Components
import BottomBar from "./BottomBar";
import Messages from "./Messages";
// Styles
import styles from "./Room.css";

const Room = () => {
    // React Hooks State
    const [messages, setMessage] = useState([]);

    function addMessage(message, sender) {
        const messagesCopy = [...messages];

        messagesCopy.push({ message, sender });

        setMessage(messagesCopy);
    }

    return (
        <div style={styles.container}>
            <Messages messages={messages} />
            <BottomBar addMessage={addMessage} />
        </div>
    );
};

export default Room;
