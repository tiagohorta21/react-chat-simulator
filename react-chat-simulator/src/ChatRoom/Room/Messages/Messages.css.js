const styles = {
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
