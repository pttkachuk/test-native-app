import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#fff',
        //justifyContent: 'center',
    },
    inputsContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        width: "100%",
        height: 50,
        fontFamily: "Fira-Sans-Light",
        paddingLeft: 15,
        backgroundColor: "transparent",
        borderRadius: 8,
        //marginBottom: 45,
    },
    btn: {
        backgroundColor: "#073C85",
        paddingTop: 13.5,
        paddingBottom: 13.5,
        borderRadius: 8,
    },
    btnText: {
        textAlign: 'center',
        color: "#fff",
        fontFamily: "Fira-Sans-Medium",
        fontSize: 14,
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
});