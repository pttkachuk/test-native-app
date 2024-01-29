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
    // loginBtns: {
    //     display: "flex",
    //     width: "100%",
    //     padding: 0,
    //     justifyContent: "space-between",
    //     flexDirection: "row",
    //     alignContent: "center",
    //     alignItems: "center",
    //     height: 50,
    // },
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
        marginBottom: 45,
        textAlign: 'center',
    },


});