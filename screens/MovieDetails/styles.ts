import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'contain',

    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
    },
    info: {
        marginRight: 15,
        color: 'grey',

    },

    /*Press*/
    playbtn: {
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        borderRadius: 5,
        marginVertical: 3,

    },
    downloadbtn: {
        backgroundColor: 'darkgrey',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        borderRadius: 5,
        marginVertical: 3,
    },
    play: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    download: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    episodeContainer: {
        fontSize: 20,
        marginVertical: 10,
        marginHorizontal: 5,
        borderBottomColor: 'grey',
        borderBottomWidth: 4,

    }

})

export default styles;