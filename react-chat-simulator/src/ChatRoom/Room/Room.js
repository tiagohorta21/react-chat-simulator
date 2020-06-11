// Modules
import React, { Fragment, useState } from "react";
// Components
import BottomBar from "./BottomBar";
// Styles
import styles from "./Room.css";

function Room() {
    const [messages, setMessage] = useState([]);

    function addMessage(message, sender) {
        const messagesCopy = [...messages];

        messagesCopy.push({ message, sender });
        setMessage(messagesCopy);
    }

    return (
        <div style={styles.container}>
            <div style={styles.messageContainer}>
                {messages.map((message, index) => {
                    return (
                        <Fragment key={index}>
                            {message.sender === "me" ? (
                                <div style={styles.newMessageContainer}>
                                    <div style={styles.newMessage}>
                                        <span>{message.message}</span>
                                    </div>
                                </div>
                            ) : (
                                <div style={styles.receivedMessageContainer}>
                                    <div style={styles.receivedMessage}>
                                        <span>{message.message}</span>
                                    </div>
                                </div>
                            )}
                        </Fragment>
                    );
                })}
            </div>
            <BottomBar addMessage={addMessage} />
        </div>
    );
}

export default Room;
