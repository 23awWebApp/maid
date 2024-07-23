import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/tabs/MainPage');
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Maid App!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 24,
    color: '#000', 
  },
});
