import { AntDesign, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import HomeScreen from '../screens/HomeScreen'
import MovieDetails from '../screens/MovieDetails';
import TabTwoScreen from '../screens/TabTwoScreen';
import SearchScreen from '../screens/SearchScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}


/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen name="TabOne" component={HomeStackScreen} options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
        headerShown: false, tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color="black" />,

      })}
      />
      <BottomTab.Screen name="TabTwo" component={SearchScreen} options={{
        title: 'Discover', tabBarIcon: ({ color }) => <FontAwesome5 name="compass" size={22} color="black" />,
      }}
      />

      <BottomTab.Screen name="TabThree" component={SettingScreen} options={({ navigation }: RootTabScreenProps<'TabThree'>) => ({
        title: 'My List', tabBarIcon: ({ color }) => <Ionicons name="add-circle-outline" size={24} color="black" />,
        headerRight: () => (
          <Pressable
            onPress={() => navigation.navigate('Settings')}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}>
            <AntDesign name="setting" size={24} color="black" style={{ marginRight: 15 }} />
          </Pressable>
        ),
      })}
      />
    </BottomTab.Navigator>
  );
}


/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const HomeStack = createNativeStackNavigator<RootStackParamList>();


function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
        }} />
      <HomeStack.Screen
        name="MovieDetails"
        component={MovieDetails}
        options={{ title: '' }} />
    </HomeStack.Navigator>
  );
}

const SettingStack = createNativeStackNavigator();

function SettingScreen() {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen
        name="MyList"
        component={TabTwoScreen}
        options={{ headerShown: false }} />
      <SettingStack.Group screenOptions={{ title: '' }}>
        <SettingStack.Screen name="Settings" component={ModalScreen} />
      </SettingStack.Group>
    </SettingStack.Navigator>

  )
}

