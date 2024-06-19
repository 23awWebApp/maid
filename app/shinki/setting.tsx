import React from "react";
import ItemButton from "@/components/ItemButton";
import SaveButton from "@/components/SaveButton";
import { HStack, Box, Text } from "@gluestack-ui/themed";
import useSelectedItemStore from '@/store/useSelectedItemStore';

const ShinkiSetting = () => {
    const { selectedItems } = useSelectedItemStore();

    return (
        <>
            <center>
                <h2>選択した掃除項目</h2>
                <HStack justifyContent="center" flexWrap="wrap">
                    {selectedItems.map((item, index) => (
                        <ItemButton key={index} text={item} selected={true} onClick={() => { }} />
                    ))}
                </HStack>
                <Box mt={20} />
                <SaveButton href="/shinki/setting" text={"次へ"} />
            </center>
        </>
    );
};

export default ShinkiSetting;
