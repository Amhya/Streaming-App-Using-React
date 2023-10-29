import React, { useState, useEffect } from 'react';
import { MaterialIcons, FontAwesome5, Feather, AntDesign, Entypo } from '@expo/vector-icons';
import { Text, View } from '../../components/Themed';
import styles from './styles';
import { DataStore } from 'aws-amplify';
import { Movie, Episode } from '../../src/models';
import details from '../../assets/data/details';
import { Pressable, Image, FlatList, ActivityIndicator } from 'react-native';
import VideoPlayer from '../../components/VideoPlayer';
import EpisodeList from '../../components/EpisodeList';
import { useRoute } from '@react-navigation/native';

const listEpisode = details.episode.items[0];
const firstEpisode = listEpisode.episodes.items[0];

const MovieDetails = () => {
  const [movie, setMovie] = useState<Movie | undefined>(undefined);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [currentEpisode, setCurrentEpisode] = useState<Episode | undefined>(undefined);


  const route = useRoute();
  useEffect(() => {
    const fetchMovie = async () => {
      setMovie(await DataStore.query(Movie, route?.params?.id))

    };
    fetchMovie();
  }, [])

  useEffect(() => {
    if (!movie) {
      return;
    }

    const fetchEpisodes = async () => {
      const listEpisode = (
        await DataStore.query(Episode))
        .filter(e => e?.movieID === movie.id);
      setEpisodes(listEpisode);
      setCurrentEpisode(listEpisode[0]);
    }
    fetchEpisodes();
  }, [movie])


  if (!movie) {
    return <ActivityIndicator />
  }

  return (
    <View>
      {currentEpisode && <VideoPlayer episode={currentEpisode} />}

      <FlatList style={{ marginBottom: 220 }}
        data={episodes}
        renderItem={({ item }) => (
          <EpisodeList episode={item}
            onPress={setCurrentEpisode} />)}
        ListHeaderComponent={(
          <View style={{ padding: 8 }}>
            <Text style={styles.title}>{movie.title}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.info}>{movie.year}</Text>
              <Text style={styles.info}>{movie.duration}</Text>
              <MaterialIcons name="hd" size={24} color="black" />
            </View>


            <Pressable onPress={() => { console.warn('Play') }} style={styles.playbtn}>
              <Text style={styles.play}><FontAwesome5 name="play" size={18} color="white" style={{ marginRight: 5 }} /> Play</Text>
            </Pressable>

            <Pressable onPress={() => { console.warn('Download') }} style={styles.downloadbtn}>
              <Text style={styles.download}><Feather name="download" size={19} color="white" /> Download</Text>
            </Pressable>

            <Text style={{ marginVertical: 7 }}>{movie.plot}</Text>
            <Text style={styles.info}>Creator: {movie.creator}</Text>

            <View style={{ flexDirection: 'row' }}>
              <View style={{ alignItems: 'center', marginVertical: 20, marginHorizontal: 15 }}>
                <AntDesign name="pluscircleo" size={25} color="white" />
                <Text>My List</Text>
              </View>
              <View style={{ alignItems: 'center', marginVertical: 20, marginHorizontal: 15 }}>
                <AntDesign name="like2" size={25} color="white" />
                <Text>Like</Text>
              </View>
              <View style={{ alignItems: 'center', marginVertical: 20, marginHorizontal: 15 }}>
                <Entypo name="share" size={25} color="white" />
                <Text>Share</Text>

              </View>




            </View>
            <Text style={styles.episodeContainer}>Episode</Text>

          </View>

        )}

      />
    </View>
  )
};

export default MovieDetails;