// Modules
import React from "react";
import { LoremIpsum } from "lorem-ipsum";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
// Styles
import styles from "./BottomBar.css";

const lorem = new LoremIpsum({
    wordsPerSentence: {
        max: 32,
        min: 4
    }
});

const BottomBar = ({ addMessage }) => {
    const classes = muiStyles();

    return (
        <div style={styles.container}>
            <Button
                classes={{ contained: classes.contained }}
                onClick={() => addMessage(lorem.generateSentences(1), "other")}
                variant="contained"
            >
                Receive Message
            </Button>
            <Button
                classes={{ contained: classes.contained }}
                onClick={() => addMessage(lorem.generateSentences(1), "me")}
                variant="contained"
            >
                Send Message
            </Button>
        </div>
    );
};

const muiStyles = makeStyles({
    contained: styles.contained
});

export default BottomBar;
