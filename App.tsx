
import {     View } from 'react-native';
import InputTime from './component/inputTime';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CountDown from './component/countdown';
import { RootStackParamList } from './type/type.navigation';

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
    
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={InputTime} />
      <Stack.Screen name='countdown' component={CountDown}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}


