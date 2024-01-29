import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 55,
        backgroundColor: '#fff',
    },
    inputsContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 15,
    },
    input: {
        width: "100%",
        height: 45,
        fontFamily: "Fira-Sans-Light",
        paddingLeft: 15,
        backgroundColor: "transparent",
        borderRadius: 8,
    },
    photo: {
        width: 50,
        height: 50,
        marginBottom: 120,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    btn: {
        alignItems: 'center',
        maxWidth: '100%',
        backgroundColor: "#073C85",
        paddingTop: 10,
        paddingBottom: 10,
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
        color: '#073C85',
        marginBottom: 35,
        textAlign: 'center',
    },
    password: {
        fontFamily: 'Fira-Sans-Light',
        fontSize: 12,
        color: '#D3D3D3',
        textAlign: 'center',
        marginTop: 15,
    },
    bottomLogo: {
        width: 95,
        height: 70,
        marginTop: 110,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
});