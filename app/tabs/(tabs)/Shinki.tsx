import React, { useEffect } from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ItemButton from "@/components/ItemButton";
import { HStack, Box, Button, ButtonText } from "@gluestack-ui/themed";
import useSelectedItemStore from "@/store/useSelectedItemStore";
import { RootStackParamList } from '../types'; // Ensure you have your types defined here
import { SafeAreaView } from 'react-native-safe-area-context';

type ShinkiNavigationProp = NavigationProp<RootStackParamList, 'Shinki'>;

const Shinki: React.FC = () => {
    const navigation = useNavigation<ShinkiNavigationProp>();
    const selectedItems = useSelectedItemStore((state) => state.selectedItems);
    const addSelectedItem = useSelectedItemStore((state) => state.addSelectedItem);
    const removeSelectedItem = useSelectedItemStore((state) => state.removeSelectedItem);

    useEffect(() => {
        console.log("Shinki selectedItems:", selectedItems);
    }, [selectedItems]);

    const handleItemClick = (text: string) => {
        if (selectedItems.includes(text)) {
            removeSelectedItem(text);
        } else {
            addSelectedItem(text);
        }
    };

    const handleNavigateToSetting = () => {
        navigation.navigate('ShinkiSetting');
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>掃除したいところは？</Text>
            <HStack justifyContent="center" flexWrap="wrap">
                <ItemButton text={"へや"} onClick={() => handleItemClick("へや")} selected={selectedItems.includes("へや")} />
                <ItemButton text={"キッチン"} onClick={() => handleItemClick("キッチン")} selected={selectedItems.includes("キッチン")} />
                <ItemButton text={"洗濯"} onClick={() => handleItemClick("洗濯")} selected={selectedItems.includes("洗濯")} />
                <ItemButton text={"洗い物"} onClick={() => handleItemClick("洗い物")} selected={selectedItems.includes("洗い物")} />
                <ItemButton text={"トイレ"} onClick={() => handleItemClick("トイレ")} selected={selectedItems.includes("トイレ")} />
                <ItemButton text={"お風呂"} onClick={() => handleItemClick("お風呂")} selected={selectedItems.includes("お風呂")} />
                <ItemButton text={"洗面台"} onClick={() => handleItemClick("洗面台")} selected={selectedItems.includes("洗面台")} />
                <ItemButton text={"ベランダ"} onClick={() => handleItemClick("ベランダ")} selected={selectedItems.includes("ベランダ")} />
                <ItemButton text={"玄関"} onClick={() => handleItemClick("玄関")} selected={selectedItems.includes("玄関")} />
            </HStack>
            <Box mt={20} />
            <Button style={styles.next} onPress={handleNavigateToSetting}>
                <ButtonText>次へ</ButtonText>
            </Button>
        </SafeAreaView>
    );
};

export default Shinki;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
    },
    heading: {
        fontSize: 24,
        marginBottom: 20,
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    next: {
        width: "80%",
        height: 60,
        backgroundColor: "#00A9C3",
    },
});
