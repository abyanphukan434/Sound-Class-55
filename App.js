import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

class SoundButton extends Component {
  playSound =()=> {
   await Audio.Sound.createAsync(
   {
     uri: "http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3"
    },
    { shouldPlay: true }
  )
}
  render() {
   return(
    <TouchableOpacity style = {{
     backgroundColor: "red",
     marginLeft: 100,
     borderWidth: 5,
     borderColor: "orange",
     alignItems: "center",
     width: 200,
     height: 200,
     justifyContent: "center",
     borderRadius: 100,
     }} onPress = {this.playSound}>
    <Text style = {{
     fontWeight: "bold",
     fontSize: 20
     }}>
     Press Me
     </Text>
     </TouchableOpacity>
    );
  }
}

export default class App extends Component {
  render() {
   return(
    <View style = {{marginTop: 100}}>
      <SoundButton/>
     <View>
    );
  }
}
