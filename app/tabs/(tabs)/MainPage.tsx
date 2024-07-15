import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Icon, Card, Box, ChevronRightIcon, AddIcon, SettingsIcon } from "@gluestack-ui/themed";
import useSelectedItemStore from "@/store/useSelectedItemStore";
import { useNavigation } from '@react-navigation/native';
import styles from './MainPageStyles';

const MainPage: React.FC = () => {
  const selectedItems = useSelectedItemStore((state) => state.selectedItems) || [];
  const daysMap = useSelectedItemStore((state) => state.daysMap) || {};
  const incrementDaysMap = useSelectedItemStore((state) => state.incrementDaysMap);
  const navigation = useNavigation();
  const itemImages: { [key: string]: any } = {
    'へや': require('../../../assets/Icons/room.png'),
    'キッチン': require('../../../assets/Icons/kitchen.png'),
    '洗濯': require('../../../assets/Icons/washing.png'),
    '洗い物': require('../../../assets/Icons/dishwashing.png'),
    'トイレ': require('../../../assets/Icons/toilet.png'),
    'お風呂': require('../../../assets/Icons/bath.png'),
    '洗面台': require('../../../assets/Icons/basin.png'),
    'ベランダ': require('../../../assets/Icons/balcony.png'),
    '玄関': require('../../../assets/Icons/door.png'),
  };

  useEffect(() => {
    const interval = setInterval(() => {
      incrementDaysMap();
    }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds

    return () => clearInterval(interval);
  }, [incrementDaysMap]);

  const getCleanlinessPercentage = (daysAgo: string | null) => {
    if (daysAgo === null) return 0;
    return Math.max(100 - parseInt(daysAgo) * 10, 0);
  };

  const calculateAverageCleanliness = () => {
    const totalPercentage = selectedItems.reduce((acc, item) => {
      return acc + getCleanlinessPercentage(daysMap[item]);
    }, 0);
    return totalPercentage / selectedItems.length;
  };

  const averageCleanliness = calculateAverageCleanliness();

  const getBackgroundImage = () => {
    if (averageCleanliness >= 76) {
      return require('../../../assets/images/room01.png');
    } else if (averageCleanliness >= 51) {
      return require('../../../assets/images/room02.png');
    } else if (averageCleanliness >= 36) {
      return require('../../../assets/images/room03.png');
    } else {
      return require('../../../assets/images/room04.png');
    }
  };

  const handleCardPress = (item: string) => {
    navigation.navigate('TimeSettingPage', { item });
  };

  return (
    <View style={styles.container}>
      <Box style={styles.header}>
        <Image source={getBackgroundImage()} style={styles.backgroundImage} />
      </Box>
      <Box style={styles.settingsIconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Icon style={styles.settingsIcon} as={SettingsIcon} />
        </TouchableOpacity>
      </Box>
      <View style={styles.content}>
        {selectedItems.map((item, index) => (
          index % 2 === 0 && (
            <View key={index} style={styles.row}>
              <TouchableOpacity onPress={() => handleCardPress(item)}>
                <Card style={styles.card}>
                  <Box style={styles.cardIcon}><Icon as={ChevronRightIcon} style={styles.cardChevronRight} /></Box>
                  <Image source={itemImages[item]} style={styles.cardImage} />
                  <Text style={styles.cardTitle}>{item}</Text>
                  <Text style={styles.cardSubtitle}>{daysMap[item] ? `${daysMap[item]}日前 掃除しました` : '未設定'}</Text>
                </Card>
              </TouchableOpacity>
              {selectedItems[index + 1] && (
                <TouchableOpacity onPress={() => handleCardPress(selectedItems[index + 1])}>
                  <Card style={styles.card}>
                    <Box style={styles.cardIcon}><Icon as={ChevronRightIcon} style={styles.cardChevronRight} /></Box>
                    <Image source={itemImages[selectedItems[index + 1]]} style={styles.cardImage} />
                    <Text style={styles.cardTitle}>{selectedItems[index + 1]}</Text>
                    <Text style={styles.cardSubtitle}>{daysMap[selectedItems[index + 1]] ? `${daysMap[selectedItems[index + 1]]}日前 掃除しました` : '未設定'}</Text>
                  </Card>
                </TouchableOpacity>
              )}
            </View>
          )
        ))}
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('index')}>
          <Icon as={AddIcon} style={styles.addIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainPage;
