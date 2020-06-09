// Modules
import React from "react";
// Components
import Room from "./Room";
import SideBar from "./SideBar";
// Styles
import styles from "./ChatRoom.css";

function App() {
    return (
        <div style={styles.container}>
            <SideBar />
            <Room />
        </div>
    );
}

export default App;
