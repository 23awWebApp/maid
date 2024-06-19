import React from "react";
import ItemButton from "@/components/ItemButton";
import SaveButton from "@/components/SaveButton";
import { HStack, Box, Text } from "@gluestack-ui/themed";
import { useSelectedItemStore } from "@/store/selectedItemStore";
import useBearStore from "@/store/useStore";
import { Pressable } from "react-native";
const ShinkiSetting: React.FC = () => {
    const { selectedItems } = useSelectedItemStore();
    const increasePopulation = useBearStore(({ increasePopulation }) => increasePopulation);
    return (
        <>
            <center>
                <h2>選択した掃除項目</h2>
                <Pressable onPress={increasePopulation}>
                    <Text>I've seen a bear!</Text>
                </Pressable>
                <HStack justifyContent="center" flexWrap="wrap">
                    {selectedItems.map((item, index) => (
                        <ItemButton key={index} text={item} selected={true} onClick={() => { }} />
                    ))}
                </HStack>
                <Box mt="$20" />
                <SaveButton href="/shinki/setting" text={"次へ"} />
            </center>
        </>
    );
};

export default ShinkiSetting;
