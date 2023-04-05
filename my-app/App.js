import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import MainScreen from './screens/MainScreen';
import PackageDetails1 from './screens/PackageDetails1';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PackageDetails1" component={PackageDetails1} options={{  headerTitle: 'Package Details' , headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
