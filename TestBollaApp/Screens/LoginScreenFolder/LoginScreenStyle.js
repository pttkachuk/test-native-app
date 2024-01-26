import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    inputsContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 15,
    },
    input: {
        width: "100%",
        height: 50,
        fontFamily: "Fira-Sans-Light",
        paddingLeft: 15,
        backgroundColor: "transparent",
        borderRadius: 8,
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
    loginBtns: {
        display: "flex",
        width: "100%",
        padding: 0,
        //marginTop: "auto",
        justifyContent: "space-between",
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        height: 50,
    },
    btn: {
        alignItems: 'center',
        width: 150,
        maxWidth: 150,
        backgroundColor: "#073C85",
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 8,
    },
    btnText: {
        color: "#fff",
        fontFamily: "Fira-Sans-Regular",
        fontSize: 12,
    },
    title: {
        fontFamily: 'Fira-Sans-Medium',
        fontSize: 20,
        marginBottom: 45,
        textAlign: 'center',
    }

});