// Modules
import React from "react";
// Material UI
import { Alert } from "@material-ui/lab";
import { ArrowDownward } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// Styles
import styles from "./Notification.css";

function Notification({ scrollToBottom }) {
    const classes = muiStyles();

    return (
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
    );
}

const muiStyles = makeStyles({
    infoMessageContainer: styles.infoMessageContainer,
    notificationButton: styles.notificationButton,
    notificationContainer: styles.notificationContainer
});

export default Notification;
