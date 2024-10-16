import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { Button, ImageBackground, StyleSheet, Text,  TouchableOpacity, View } from 'react-native'
import { RootStackParamList } from '../type/type.navigation';


type DetailScreenRouteProp = RouteProp<RootStackParamList, 'countdown'>;
export default function CountDown() {
  const route = useRoute<DetailScreenRouteProp>();
  const {countdown,name,title} = route.params;
  const [count,setCount] = useState<number>(countdown);
  const navigation:NavigationProp<RootStackParamList> = useNavigation();
  useEffect(()=>{
    const timer = setInterval(()=>{if(count>0)setCount(count-1000)},1000)
    return ()=>{
      clearInterval(timer)
    }
  },[count])
  const seconds = Math.floor((count / 1000) % 60);
  const minutes = Math.floor((count / (1000 * 60)) % 60);
  const hours = Math.floor((count / (1000 * 60 * 60)) % 24);
  const days = Math.floor(count / (1000 * 60 * 60 * 24));
  
  return (
    <View style={styles.container}>
      <ImageBackground
      source={require("../assets/img/bg.png")}
      style={{flex:1,width:"100%"}}
      resizeMode='cover'
      >
      <View style={styles.bgOpacity}></View>
      {count>0?(
        <View style={styles.container}>
        <Text style={styles.timerText}>{title}</Text>
      <Text style={styles.timerText}>
        {days<10? `0${days}`:days}  {hours<10?`0${hours}`:hours}:{minutes<10?`0${minutes}`:minutes}:{seconds<10?`0${seconds}`:seconds}
      </Text>
     
      
      <TouchableOpacity style={styles.button}
      onPress={()=>{
        navigation.navigate("Home")
      }}
      >
        <Text style={styles.buttonText}>Stop</Text>
      </TouchableOpacity>
    </View>
      ):(
       <View style={styles.container}>
         <TouchableOpacity style={styles.button}
      onPress={()=>{
        navigation.navigate("Home")
      }}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
       </View>
      )}
      </ImageBackground>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  bgOpacity:{
    position:"absolute",
    top:0,
    bottom:0,
    left:0,
    right:0,
    backgroundColor:"rgba(255,255,255,0.5)"
  },
  timerText: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
})