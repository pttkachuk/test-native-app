import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    centeredModalView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 8,
        alignItems: 'center',
    },
    btnsContainer: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 30,
    },
    exitButton: {
        backgroundColor: "#073C85",
        borderRadius: 8,
        padding: 15,
    },
    cancelBtn: {
        backgroundColor: "#D22B2B",
        borderRadius: 8,
        padding: 15,
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
    titleTxt: {
        fontFamily: 'Fira-Sans-Regular',
        fontSize: 14,
    },
});