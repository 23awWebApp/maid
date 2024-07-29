import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import { useRouter } from 'expo-router';

const logoIcon = require('../assets/images/AppIcon.png');

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/tabs/MainPage');
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, [router]);

  return (
    <View style={styles.container}>
      <Image source={logoIcon} style={styles.logo} />
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
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    color: '#000',
  },
});
