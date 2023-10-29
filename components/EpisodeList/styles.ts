import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
    },

    image: {
        height: 75,
        aspectRatio: 16 / 9,
        resizeMode: 'cover',
        borderRadius: 2,

    },
    container: {
        flex: 1,
        padding: 10,

    },
    title: {

    },
    duration: {
        color: 'grey',

    }


})
export default styles;