import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: 100,
        height: 130,
        borderRadius: 10,
        resizeMode: 'cover',
        marginVertical: 5,

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 20,
        marginHorizontal: 10,
    },
    details: {
        fontSize: 15,
        color: 'grey',
        marginHorizontal: 10,
    }
});




export default styles;