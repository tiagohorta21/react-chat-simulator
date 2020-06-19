// Modules
import React, { Fragment } from "react";
// Styles
import styles from "./Messages.css";

function Messages({ messages, onScroll }) {
    return (
        <div
            id="messagesContainer"
            onScroll={onScroll}
            style={styles.messagesContainer}
        >
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
    );
}

export default Messages;
