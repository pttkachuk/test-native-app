import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: "#fff",
    },
    photoContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 300,
        backgroundColor: "#073C85",
        borderRadius: 8,
        marginBottom: 15,
        overflow: "hidden",
    },
    photoInContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 300,
        backgroundColor: "transparent",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#D3D3D3",
        marginBottom: 15,
        overflow: "hidden",
    },
    textInput: {
        width: "100%",
        height: 50,
        fontFamily: "Fira-Sans-Light",
        paddingLeft: 15,
        backgroundColor: "transparent",
        borderRadius: 8,
    },
    photo: {
        width: "100%",
        height: "100%",
        borderRadius: 8,
        objectFit: "contain",
    },
    bottomBtns: {
        display: "flex",
        width: "100%",
        height: 75,
        padding: 0,
        marginTop: 160,
        justifyContent: "space-between",
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
    },
    btn: {
        backgroundColor: "#073C85",
        alignItems: 'center',
        width: 150,
        maxWidth: 150,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 8,
    },
    btnText: {
        color: "#fff",
        fontFamily: "Fira-Sans-Regular",
        fontSize: 12,
    },
    exitBtnWrap: {
        width: "100%",
        height: 75,
        marginTop: 145,
        padding: 0,
        justifyContent: "center",
        alignItems: "center",
    },
    exitBtn: {
        width: "100%",
        backgroundColor: "#073C85",
        alignItems: "center",
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 8,
    },
    exitBtnText: {
        color: "#fff",
        fontFamily: "Fira-Sans-Regular",
        fontSize: 12,
    },
    alertText: {
        color: "#D3D3D3",
        fontFamily: "Fira-Sans-Light",
        fontSize: 12,
        marginBottom: 10,
    },
});