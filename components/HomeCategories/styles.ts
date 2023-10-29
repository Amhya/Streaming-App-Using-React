import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,

    },
    image: {
        width: 140,
        height: 190,
        borderRadius:10,
        resizeMode:'cover',
        margin: 7,
    },
    cat:{
        fontSize: 25,
        fontWeight: 'bold',
    }

});
export default styles;