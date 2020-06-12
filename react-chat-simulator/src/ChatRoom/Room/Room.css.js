const styles = {
    arrowDownIcon: {
        fontSize: "22px"
    },
    container: {
        backgroundColor: "#F0F0F0",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "hidden",
        padding: "0px 200px",
        width: "100%"
    },
    infoMessageContainer: {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
    },
    messagesContainer: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        marginBottom: "16px",
        overflow: "auto"
    },
    newMessage: {
        backgroundColor: "#3578E5",
        borderRadius: "8px",
        color: "#FFFFFF",
        display: "flex",
        fontFamily: "roboto",
        padding: "12px",
        width: "65%"
    },
    newMessageContainer: {
        display: "flex",
        flex: "0 0 auto",
        justifyContent: "flex-end",
        marginTop: "16px",
        width: "100%"
    },
    notificationButton: {
        bottom: "90px",
        display: "block",
        padding: "0px",
        position: "absolute",
        right: "200px",
        width: "300px"
    },
    notificationContainer: {
        alignItems: "center",
        display: "flex"
    },
    receivedMessage: {
        backgroundColor: "#FFFFFF",
        borderRadius: "8px",
        display: "flex",
        fontFamily: "roboto",
        padding: "12px",
        width: "65%"
    },
    receivedMessageContainer: {
        display: "flex",
        flex: "0 0 auto",
        justifyContent: "flex-start",
        marginTop: "16px",
        width: "100%"
    }
};

export default styles;
