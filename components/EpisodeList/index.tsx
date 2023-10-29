import { View, Text } from '../../components/Themed';
import React from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { Image, Pressable } from 'react-native';
import styles from './styles';
import { Episode } from '../../src/models';
import { useState } from 'react';


interface EpisodeListProps {
    episode: Episode;
    onPress: (episode: Episode) => {}
}


const EpisodeList = (props: EpisodeListProps) => {
    const { episode, onPress } = props;
    return (
        <Pressable style={{ margin: 10 }} onPress={() => onPress(episode)}>
            <View style={styles.row} >
                <Image style={styles.image} source={{ uri: episode.poster }} />
                <View style={styles.container}>
                    <Text style={styles.title}>{episode.title}</Text>
                    <Text style={styles.duration}>{episode.duration}</Text>
                </View>
                <EvilIcons name="play" size={40} color="black" />
            </View>

        </Pressable>
    )
}
export default EpisodeList;