import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Box, Text, Center, Spinner } from '@gluestack-ui/themed';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../types'; // Update the path according to your project structure

const LoadingScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('MainPage');
        }, 3000);

        return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
    }, [navigation]);

    return (
        <Center flex={1} bg="#B0E0E6">
            <Box style={styles.card}>
                <Box style={styles.innerCard}>
                    <Text style={styles.mainText}>あなたの掃除メイトを呼んでいます！</Text>
                    <Spinner size="large" color="#0891B2" />
                    <Text style={styles.subText}>少々お待ちください</Text>
                </Box>
            </Box>
        </Center>
    );
};

const styles = StyleSheet.create({
    card: {
        width: "80%",
        height: '50%',
        padding: 10, // Outer padding for the inner card
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        shadowColor: '#B8B8B8',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        justifyContent: 'center',
    },
    innerCard: {
        flex: 1,
        width: '100%',
        padding: 20,
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: '#0891B2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainText: {
        fontSize: 22,
        marginTop: 18,
        marginBottom: 25,
        textAlign: 'center',
        color: '#000',
    },
    subText: {
        fontSize: 16,
        marginTop: 25,
        textAlign: 'center',
        color: '#969696',
    },
});

export default LoadingScreen;
