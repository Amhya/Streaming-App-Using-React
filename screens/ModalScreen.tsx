import { StatusBar } from 'expo-status-bar';
import { Platform, Pressable, StyleSheet } from 'react-native';
import { Auth } from 'aws-amplify';


import { Text, View } from '../components/Themed';

export default function ModalScreen() {
  const logOut = () => {
    Auth.signOut();
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.options}>TVzone.version-1.0</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <Pressable onPress={logOut} style={{ padding: 15, backgroundColor: 'blue' }}>
        <Text>Log Out</Text>
      </Pressable>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  options: {
    fontSize: 15,
    padding: 10,

  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
