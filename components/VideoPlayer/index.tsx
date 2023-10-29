import React, { useEffect, useRef, useState } from 'react';
import { Playback } from 'expo-av/build/Av';
import { Video } from 'expo-av';
import { Button } from 'react-native';
import { View, Text } from '../Themed';
import { Storage } from 'aws-amplify';
import styles from './styles';
import { Episode } from '../../types';
import details from '../../assets/data/details';

interface VideoPlayerProps {
    episode: Episode;

}

const VideoPlayer = (props: VideoPlayerProps) => {
    const { episode } = props;
    const [status, setStatus] = useState({});
    const [videoURL, setVideoURL] = useState('');
    const video = useRef<Video>(null);


    useEffect(() => {
        if (episode.video.startsWith('http')) {
            setVideoURL(episode.video);
            return;
        }
        Storage.get(episode.video).then(setVideoURL);

    }, [episode])

    useEffect(() => {
        if (!video) {
            return;
        }
        (async () => {
            await video?.current?.unloadAsync();
            await video?.current?.loadAsync(
                { uri: videoURL },
                {}, false
            );
        })();
    }, [videoURL])

    console.log(videoURL);

    if (videoURL === '') {
        return null;
    }

    return (
        <Video
            ref={video}
            style={styles.video}
            source={{ uri: videoURL }}
            posterSource={{ uri: episode.poster }}
            posterStyle={{
                resizeMode: 'cover',
            }}
            usePoster={false}
            useNativeControls
            resizeMode="contain"
            onPlaybackStatusUpdate={status => setStatus(() => status)} />



    )

}
export default VideoPlayer;