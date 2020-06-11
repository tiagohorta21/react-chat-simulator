// Modules
import React, { Fragment, useState, useEffect } from "react";
import { LoremIpsum } from "lorem-ipsum";
// Components
import BottomBar from "./BottomBar";
// Styles
import styles from "./Room.css";

const lorem = new LoremIpsum({
    wordsPerSentence: {
        max: 32,
        min: 4
    }
});

function Room() {
    const [append, setAppend] = useState(false);
    const [messages, setMessage] = useState([]);
    const [previousScrollBottom, setPreviousScrollBottom] = useState(0);

    useEffect(() => {
        scrollToBottom();
    }, []);

    useEffect(() => {
        if (append) {
            var div = document.getElementById("messagesContainer");
            div.scrollTop = div.scrollHeight - previousScrollBottom;
        }

        // eslint-disable-next-line
    }, [messages]);

    function addMessage(message, sender) {
        const messagesCopy = [...messages];

        messagesCopy.push({ message, sender });

        setAppend(false);
        setMessage(messagesCopy);
    }

    function appendRandomMessages() {
        const randomNumber = Math.floor(Math.random() * 10 + 1);
        const messagesCopy = [...messages];

        for (let i = 0; i < randomNumber; i++) {
            messagesCopy.unshift({
                message: lorem.generateSentences(1),
                sender: randomNumber % 2 === 0 ? "me" : "other"
            });
        }

        var div = document.getElementById("messagesContainer");

        setPreviousScrollBottom(div.scrollHeight - div.scrollTop);
        setAppend(true);

        setTimeout(function () {
            setMessage(messagesCopy);
        }, 500);
    }

    function scrollToBottom() {
        var div = document.getElementById("messagesContainer");
        div.scrollTop = div.scrollHeight - div.clientHeight;
    }

    return (
        <div style={styles.container}>
            <div id="messagesContainer" style={styles.messagesContainer}>
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
            <BottomBar
                addMessage={addMessage}
                appendRandomMessages={appendRandomMessages}
            />
        </div>
    );
}

export default Room;
