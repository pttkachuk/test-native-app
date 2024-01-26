import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 50,
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
    },
    btnText: {
        paddingTop: 10,
        fontFamily: "Fira-Sans-Light",
        fontSize: 12,
    },
});