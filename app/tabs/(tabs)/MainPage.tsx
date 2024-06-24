import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Card, Box, ChevronRightIcon, AddIcon, SettingsIcon } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import useSelectedItemStore from "@/store/useSelectedItemStore";

const MainPage = () => {
  const navigation = useNavigation();
  const { selectedItems, cleanedItems } = useSelectedItemStore();

  return (
    <View style={styles.container}>
      <Box style={styles.header} />
      <Box style={styles.settingsIconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("setting")}>
          <Icon as={SettingsIcon} />
        </TouchableOpacity>
      </Box>
      <View style={styles.content}>
        <View style={styles.row}>
          {selectedItems.map((item, index) => (
            <Card key={index} style={styles.card}>
              <Icon as={ChevronRightIcon} style={styles.cardIcon} />
              <Text style={styles.cardTitle}>{item}</Text>
              <Text style={styles.cardSubtitle}>{cleanedItems[item] ? `${cleanedItems[item]}日前 掃除しました` : "未掃除"}</Text>
            </Card>
          ))}
          <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate("ShinkiSetting")}>
            <Icon as={AddIcon} style={styles.addIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 300,
    backgroundColor: '#b3e5fc',
  },

  settingsIconContainer: {
    position: 'absolute',
    top: 320,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 8,
    zIndex: 99,
  },
  content: {
    flex: 1,
    padding: 25,
    marginTop: 50,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    width: 170,
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
  cardIcon: {
    fontSize: 24,
    color: '#00bcd4',
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
  },
  addIcon: {
    fontSize: 50,
    color: '#00bcd4',
  },
});

export default MainPage;
