// Modules
import React from "react";
// Components
import BottomBar from "./BottomBar";
// Styles
import styles from "./Room.css";

function Room() {
    return (
        <div style={styles.container}>
            <div style={{ height: "100%" }} />
            <BottomBar />
        </div>
    );
}

export default Room;
