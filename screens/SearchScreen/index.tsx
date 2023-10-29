import React, { useEffect, useState } from 'react'
import { Image, FlatList, Pressable, TextInput } from 'react-native';
import { SearchBar } from 'react-native-screens';
import { Text, View } from '../../components/Themed';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
// import categories from '../../assets/data/categories';
import HomeCategory from '../../components/HomeCategories';
import { DataStore } from 'aws-amplify';
import { Movie } from '../../src/models';
import { useNavigation } from '@react-navigation/native';


const SearchScreen = () => {


    const [movie, setMovie] = useState<Movie[]>([]);
    useEffect(() => {
        const fetchMovie = async () => {
            setMovie(await DataStore.query(Movie));
        };
        fetchMovie();
    }, []);

    const navigation = useNavigation();

    const moviePress = (movie: Movie) => {
        navigation.navigate('MovieDetails' as never, { id: movie.id } as never)
    }

    return (
        <View>
            <Feather name="search" size={24} color="black" style={{ padding: 20 }} />
            <SearchBar
                placeholder="Type Here..."
            />
            <FlatList style={{ padding: 10 }}
                data={movie}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: 'row' }}>
                        <Pressable onPress={() => moviePress(item)}>
                            <Image style={styles.image} source={{ uri: item.poster }} />
                        </Pressable>
                        <View>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.details}>{item.duration}</Text>
                            <Text style={styles.details}>{item.year}</Text>
                        </View>

                    </View>
                )} />
        </View>

    );
}



export default SearchScreen;