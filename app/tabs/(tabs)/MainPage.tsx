import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Icon, Card, Box, ChevronRightIcon, AddIcon, SettingsIcon } from "@gluestack-ui/themed";
import useSelectedItemStore from "@/store/useSelectedItemStore";
import { useNavigation } from '@react-navigation/native';

const MainPage: React.FC = () => {
  const selectedItems = useSelectedItemStore((state) => state.selectedItems);
  const daysMap = useSelectedItemStore((state) => state.daysMap);
  const navigation = useNavigation();
  const itemImages: { [key: string]: string } = {
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

  const getCleanlinessPercentage = (daysAgo: number) => {
    if (daysAgo === undefined) return 0;
    return Math.max(100 - daysAgo * 10, 0);
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
    } else if (averageCleanliness <= 25) {
      return require('../../../assets/images/room04.png');
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
        <Icon style={styles.settingsIcon} as={SettingsIcon} />
      </Box>
      <View style={styles.content}>
        {selectedItems.map((item, index) => (
          index % 2 === 0 ? (
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
          ) : null
        ))}
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('index')}>
          <Icon as={AddIcon} style={styles.addIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: 390,
  },
  header: {
    marginTop: -5,
    height: 270,
    width: "100%",
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  settingsIconContainer: {
    position: 'absolute',
    top: 280,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 8,
    zIndex: 99,
  },
  settingsIcon: {
    width: 32,
    height: 32,
  },
  content: {
    flex: 1,
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 30,
    paddingRight: 30,

    marginTop: 50,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    maxWidth: 170,
    height: 196,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardChevronRight: {
    fontSize: 24,
    color: '#00bcd4',
  },
  cardIcon: {
    width: "100%",
    alignItems: 'flex-end',
  },
  cardImage: {
    width: 64,
    height: 64,
    resizeMode: 'contain',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
  addButton: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00bcd4',
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    alignSelf: 'center', // Center the button
    marginTop: 16,
  },
  addIcon: {
    fontSize: 50,
    color: '#00bcd4',
  },
});

export default MainPage;
