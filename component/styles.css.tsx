import { StyleSheet } from "react-native";

export const styleInputTime = StyleSheet.create({
    textError:{
      color:"red",
      marginTop:5
    },
    lableFirst:{
      paddingTop: 30, 
      paddingHorizontal: 16
    },
    textInput:{
      borderWidth: 1,
       padding: 10,
       borderRadius:10
    },
  
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255,255,255, 0.5)'
    },
    inputTime: {
      padding: 16,
    },
    input: {
      marginBottom: 10,
    },
    label: {
      fontSize: 16,
      marginBottom: 5,
    },
    customPicker:{
       backgroundColor:"#808080",
       borderRadius:10,
       height: 50,
      width: 200,
    },
    container: {
      
      justifyContent: "center",
      alignItems: "center",
      
    },
    button: {
      backgroundColor: "#4CAF50", 
      width: 200,
      paddingVertical: 15,
      borderRadius: 10,
      
    },
    buttonText: {
      color: "#fff", 
      textAlign: "center", 
      fontSize: 16,
      fontWeight:"500"
    },
  });