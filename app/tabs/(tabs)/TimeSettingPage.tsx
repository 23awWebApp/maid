import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { Box } from "@gluestack-ui/themed";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import AntDesign from '@expo/vector-icons/AntDesign';

type TimeSettingPageNavigationProp = StackNavigationProp<RootStackParamList, 'TimeSettingPage'>;
type TimeSettingPageRouteProp = RouteProp<RootStackParamList, 'TimeSettingPage'>;


const TimeSettingPage: React.FC = () => {
    const route = useRoute<TimeSettingPageRouteProp>();
    const navigation = useNavigation<TimeSettingPageNavigationProp>();
    const { item } = route.params;
    const [selectedHours, setSelectedHours] = useState(0);
    const [selectedMinutes, setSelectedMinutes] = useState(0);

    const handleStart = () => {
        navigation.navigate('CountdownPage', { hours: selectedHours, minutes: selectedMinutes, item });
    };
    const goBack = () => {
        navigation.goBack();
    };
    return (
        <View style={styles.container}>
            <View style={styles.topWrap}>
                <TouchableOpacity onPress={goBack} style={styles.iconButton}>
                    <AntDesign name="left" size={25} color="#7A7A7A" />
                </TouchableOpacity>
                <Text style={styles.title}>タイマー</Text>
                <Box style={styles.box} />
            </View>
            <View style={styles.containWrap}>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={selectedHours}
                        style={styles.picker}
                        itemStyle={styles.pickerItem}
                        onValueChange={(itemValue) => setSelectedHours(itemValue)}
                    >
                        {[...Array(24).keys()].map((hour) => (
                            <Picker.Item key={hour} label={`${hour}`} value={hour} />
                        ))}
                    </Picker>
                    <Text style={styles.pickerLabel}>時</Text>
                    <Picker
                        selectedValue={selectedMinutes}
                        style={styles.picker}
                        itemStyle={styles.pickerItem}
                        onValueChange={(itemValue) => setSelectedMinutes(itemValue)}
                    >
                        {[...Array(60).keys()].map((minute) => (
                            <Picker.Item key={minute} label={`${minute}`} value={minute} />
                        ))}
                    </Picker>
                    <Text style={styles.pickerLabel}>分</Text>
                </View>
                <TouchableOpacity style={styles.startButton} onPress={handleStart}>
                    <Text style={styles.startButtonText}>スタート</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    topWrap: {
        flexDirection: 'row',
        height: 80,
        alignItems: 'center',

    },
    iconButton: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 50,
        padding: 10,
    },
    title: {
        flex: 2,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    box: {
        width: 20,
        height: 80,
        flex: 1,
    },
    containWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    pickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 50,
    },
    picker: {
        height: 200,
        width: 80,
        color: '#7a7a7a',
        borderWidth: 0,
    },
    pickerItem: {
        // fontSize: 36,
    },
    pickerLabel: {
        fontSize: 24, //分　時
        marginHorizontal: 10,
        color: '#7a7a7a',
    },
    startButton: {
        backgroundColor: '#00BCD4',
        borderRadius: 10,
        width: 350,
        height: 60,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    startButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },

});

export default TimeSettingPage;
