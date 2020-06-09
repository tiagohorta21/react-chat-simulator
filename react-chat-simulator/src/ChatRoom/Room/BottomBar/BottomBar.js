// Modules
import React from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
// Styles
import styles from "./BottomBar.css";

const muiStyles = makeStyles({
    root: styles.root
});

function BottomBar() {
    const classes = muiStyles();

    return (
        <div style={styles.container}>
            <Button classes={{ root: classes.root }} variant="contained">
                Add new message
            </Button>
        </div>
    );
}

export default BottomBar;
