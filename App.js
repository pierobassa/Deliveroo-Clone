import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import Homescreen from './src/screens/Homescreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          {/* Screens */}
          <Stack.Screen name="Home" component={Homescreen} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}