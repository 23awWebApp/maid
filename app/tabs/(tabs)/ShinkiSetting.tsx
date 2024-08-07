import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Select, Icon, Button, ButtonText, ChevronDownIcon } from "@gluestack-ui/themed";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import useSelectedItemStore from "../../../store/useSelectedItemStore";
import { RootStackParamList } from "../types";
type ShinkiSettingNavigationProp = NavigationProp<RootStackParamList, 'ShinkiSetting'>;

const ShinkiSetting: React.FC = () => {
    const selectedItems = useSelectedItemStore((state) => state.selectedItems);
    const daysMapFromStore = useSelectedItemStore((state) => state.daysMap);
    const setDaysForItem = useSelectedItemStore((state) => state.setDaysForItem);
    const [selectedTab, setSelectedTab] = useState(selectedItems[0]);
    const [daysMap, setDaysMap] = useState<{ [key: string]: string | null }>({});
    const navigation = useNavigation<ShinkiSettingNavigationProp>();

    useEffect(() => {
        // Initialize daysMap with the values from the store
        const initialDaysMap = selectedItems.reduce((acc, item) => {
            acc[item] = daysMapFromStore[item] ?? null;
            return acc;
        }, {} as { [key: string]: string | null });
        setDaysMap(initialDaysMap);
    }, [selectedItems, daysMapFromStore]);

    const handleDaysChange = (value: string) => {
        setDaysMap((prev) => ({ ...prev, [selectedTab]: value }));
        setDaysForItem(selectedTab, value);
    };

    const handleNext = () => {
        const allSelected = Object.values(daysMap).every((day) => day !== null);
        if (allSelected) {
            navigation.navigate("LoadingScreen");
        } else {
            const nextTab = selectedItems.find((item) => daysMap[item] === null);
            if (nextTab) {
                setSelectedTab(nextTab);
            }
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.tabBar}>
                {selectedItems.map((item) => (
                    <TouchableOpacity
                        key={item}
                        onPress={() => setSelectedTab(item)}
                        style={[styles.tab, selectedTab === item && styles.activeTab]}
                    >
                        <Text style={styles.tabText}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <Text style={styles.question}>{`${selectedTab}の掃除は何日前しましたか？`}</Text>
            <Select style={styles.bar} selectedValue={daysMap[selectedTab]} onValueChange={handleDaysChange}>
                <Select.Trigger>
                    <Select.Input placeholder="選択" />
                    <Select.Icon as={ChevronDownIcon} />
                </Select.Trigger>
                <Select.Portal>
                    <Select.Backdrop />
                    <Select.Content>
                        <Select.DragIndicatorWrapper>
                            <Select.DragIndicator />
                        </Select.DragIndicatorWrapper>
                        <Select.Item label="1日" value="1" />
                        <Select.Item label="2日" value="2" />
                        <Select.Item label="3日" value="3" />
                        <Select.Item label="4日" value="4" />
                        <Select.Item label="5日" value="5" />
                        <Select.Item label="6日" value="6" />
                        <Select.Item label="7日" value="7" />
                        <Select.Item label="8日" value="8" />
                        <Select.Item label="9日" value="9" />
                        <Select.Item label="10日" value="10" />
                    </Select.Content>
                </Select.Portal>
            </Select>
            <Button style={styles.nextButton} onPress={handleNext}>
                <ButtonText>次へ</ButtonText>
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    tabBar: {
        flexDirection: "row",
        marginBottom: 30,
    },
    tab: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 5,
        borderBottomColor: "transparent",
    },
    activeTab: {
        borderBottomColor: "#B0E0E6",
    },
    tabText: {
        fontSize: 16,
        color: "#000",
    },
    question: {
        fontSize: 20,
        marginBottom: 40,
        textAlign: "center",
    },
    bar: {
        width: "50%",
    },
    select: {
        width: "80%",
        marginBottom: 20,
    },
    nextButton: {
        width: "80%",
        height: 60,
        marginTop: 200,
        backgroundColor: "#00A9C3",
    },
});

export default ShinkiSetting;
