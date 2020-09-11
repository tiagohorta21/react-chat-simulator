// Modules
import React from "react";
// Material UI
import { AccountCircle } from "@material-ui/icons";
// Styles
import styles from "./SideBar.css";

function SideBar() {
    return (
        <div style={styles.container}>
            <div style={styles.contactContainer}>
                <AccountCircle style={styles.contactIcon} />
                <span style={styles.contactName}>Awesome User</span>
            </div>
        </div>
    );
}

export default SideBar;
