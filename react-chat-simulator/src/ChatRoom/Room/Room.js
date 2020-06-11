// Modules
import React, { Fragment, useState, useEffect } from "react";
import { LoremIpsum } from "lorem-ipsum";
// Material UI
import { Alert } from "@material-ui/lab";
import { ArrowDownward } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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
    const classes = muiStyles();

    // React Hooks State
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
            {notifyNewMessage && (
                <Button
                    classes={{ root: classes.notificationButton }}
                    onClick={scrollToBottom}
                >
                    <Alert
                        classes={{
                            root: classes.notificationContainer,
                            message: classes.infoMessageContainer
                        }}
                        severity="info"
                        variant="filled"
                    >
                        <span>New Message Received!</span>
                        <ArrowDownward style={styles.arrowDownIcon} />
                    </Alert>
                </Button>
            )}
            <BottomBar
                addMessage={addMessage}
                appendRandomMessages={appendRandomMessages}
            />
        </div>
    );
}

const muiStyles = makeStyles({
    infoMessageContainer: styles.infoMessageContainer,
    notificationButton: styles.notificationButton,
    notificationContainer: styles.notificationContainer
});

export default Room;
