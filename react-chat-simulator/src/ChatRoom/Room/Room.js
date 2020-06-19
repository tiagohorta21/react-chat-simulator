// Modules
import React, { useState, useEffect } from "react";
import { LoremIpsum } from "lorem-ipsum";
// Components
import BottomBar from "./BottomBar";
import Messages from "./Messages";
import Notification from "./Notification";
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
    const [isScrollInBottom, setIsScrollInBottom] = useState(false);
    const [messages, setMessage] = useState([]);
    const [notifyNewMessage, setNotifyNewMessage] = useState(false);
    const [previousScrollBottom, setPreviousScrollBottom] = useState(0);

    useEffect(() => {
        scrollToBottom();
    }, []);

    useEffect(() => {
        if (append) {
            var div = document.getElementById("messagesContainer");
            div.scrollTop = div.scrollHeight - previousScrollBottom;
        }

        if (isScrollInBottom) {
            scrollToBottom();
        }

        // eslint-disable-next-line
    }, [messages]);

    function addMessage(message, sender) {
        const messagesCopy = [...messages];

        messagesCopy.push({ message, sender });

        var div = document.getElementById("messagesContainer");
        const isScrollInBottom =
            div.scrollTop + div.offsetHeight === div.scrollHeight;

        if (!isScrollInBottom) {
            setNotifyNewMessage(true);
        } else {
            setNotifyNewMessage(false);
        }

        setAppend(false);
        setIsScrollInBottom(isScrollInBottom);
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
        const isScrollInBottom =
            div.scrollTop + div.offsetHeight === div.scrollHeight;

        setAppend(true);
        setIsScrollInBottom(isScrollInBottom);
        setMessage(messagesCopy);
        setPreviousScrollBottom(div.scrollHeight - div.scrollTop);
    }

    function onScroll() {
        var div = document.getElementById("messagesContainer");
        const isScrollInBottom =
            div.scrollTop + div.offsetHeight === div.scrollHeight;

        if (isScrollInBottom) {
            setNotifyNewMessage(false);
        }
    }

    function scrollToBottom() {
        var div = document.getElementById("messagesContainer");
        div.scrollTop = div.scrollHeight - div.clientHeight;
    }

    return (
        <div style={styles.container}>
            <Messages messages={messages} onScroll={onScroll} />
            {notifyNewMessage && (
                <Notification scrollToBottom={scrollToBottom} />
            )}
            <BottomBar
                addMessage={addMessage}
                appendRandomMessages={appendRandomMessages}
            />
        </div>
    );
}

export default Room;
