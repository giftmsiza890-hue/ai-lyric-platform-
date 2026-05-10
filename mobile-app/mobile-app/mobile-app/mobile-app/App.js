import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

export default function App() {
  const [lyrics, setLyrics] = useState('');

  const createVideo = () => {
    Alert.alert('Success', 'Lyric video request sent');
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',
        padding: 20,
        justifyContent: 'center'
      }}
    >
      <Text
        style={{
          color: 'white',
          fontSize: 30,
          fontWeight: 'bold',
          marginBottom: 20
        }}
      >
        AI Lyric Studio
      </Text>

      <TextInput
        placeholder='Paste lyrics here'
        placeholderTextColor='gray'
        multiline
        value={lyrics}
        onChangeText={setLyrics}
        style={{
          backgroundColor: '#111',
          color: 'white',
          height: 200,
          padding: 15,
          borderRadius: 12
        }}
      />

      <TouchableOpacity
        onPress={createVideo}
        style={{
          backgroundColor: 'white',
          padding: 18,
          borderRadius: 12,
}
