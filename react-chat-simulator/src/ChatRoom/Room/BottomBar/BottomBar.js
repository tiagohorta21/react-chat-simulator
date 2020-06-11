// Modules
import React from "react";
import { LoremIpsum } from "lorem-ipsum";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
// Styles
import styles from "./BottomBar.css";

function BottomBar({ addMessage }) {
    const classes = muiStyles();

    const lorem = new LoremIpsum({
        wordsPerSentence: {
            max: 32,
            min: 4
        }
    });

    return (
        <div style={styles.container}>
            <Button
                classes={{ contained: classes.contained }}
                onClick={() => addMessage(lorem.generateSentences(1), "other")}
                variant="contained"
            >
                Receive new message
            </Button>
            <Button
                classes={{ contained: classes.contained }}
                onClick={() => addMessage(lorem.generateSentences(1), "me")}
                variant="contained"
            >
                Add new message
            </Button>
        </div>
    );
}

const muiStyles = makeStyles({
    contained: styles.contained
});

export default BottomBar;
