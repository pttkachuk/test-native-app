import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    modalView: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 30,
        margin: 20,
        backgroundColor: "#fff",
        borderRadius: 8,
        paddingTop: 25,
        paddingBottom: 25,
        paddingLeft: 30,
        paddingRight: 30,
    },
    button: {
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 15,
        elevation: 10,
    },
    textStyle: {
        color: "#fff",
        fontFamily: "Fira-Sans-Light",
        textAlign: "center",
    },
    btnbox: {
        alignItems: "center",
        margin: 0,
        padding: 0,
    },
    btnText: {
        margin: 0,
        padding: 0,
        paddingTop: 10,
        fontFamily: "Fira-Sans-Light",
        fontSize: 12,
    },
});