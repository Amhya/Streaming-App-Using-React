import React, { useEffect, useState } from 'react'
import { Image, FlatList } from 'react-native';
import { Text, View } from '../../components/Themed';
import styles from './styles';
// import categories from '../../assets/data/categories';
import HomeCategory from '../../components/HomeCategories';
import { DataStore } from 'aws-amplify';
import { Category } from '../../src/models';






const HomeScreen = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      setCategories(await DataStore.query(Category));
    };
    fetchCategories();
  }, []);
  return (
    <View style={styles.container}>
      {/* Category List*/}
      <FlatList
        data={categories}
        renderItem={({ item }) =>
          <HomeCategory category={item} />}

      />

    </View>
  );
}


export default HomeScreen;
