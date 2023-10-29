import React, { useEffect, useState } from 'react'
import { Image, FlatList, Pressable } from 'react-native';
import { Text } from '../../components/Themed';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { Category, Movie } from '../../src/models';
import { DataStore } from 'aws-amplify';


interface HomeCategoryProps {
  category: Category,

}

const HomeCategory = (props: HomeCategoryProps) => {
  const { category } = props;
  const [movies, setMovies] = useState<Movie[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    const fetchMovies = async () => {
      const result = (await DataStore.query(Movie))
        .filter((movie) => movie.categoryID == category.id)
      console.log(result);
      setMovies(result);

    };
    fetchMovies();
  }, [])


  const moviePress = (movie: Movie) => {
    navigation.navigate('MovieDetails' as never, { id: movie.id } as never)
  }

  return (
    <>
      <Text style={styles.cat}>{category.title}</Text>
      <FlatList data={movies} renderItem={({ item }) => (
        <Pressable onPress={() => moviePress(item)}>
          <Image style={styles.image} source={{ uri: item.poster }} />
        </Pressable>
      )} horizontal
      />
    </>
  );
}

export default HomeCategory;