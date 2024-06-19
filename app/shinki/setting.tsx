import React from 'react';
import { HStack, Box } from '@gluestack-ui/themed';
import ItemButton from '@/components/ItemButton';
import SaveButton from '@/components/SaveButton';
import useSelectedItemStore from '@/store/useSelectedItemStore';

const ShinkiSetting = () => {
    const { selectedItems } = useSelectedItemStore(); // 確保這裡使用了正確的 hook

    console.log(selectedItems); // 在這裡加入 console.log，確保顯示項目是否正確

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
                <SaveButton href="/setting1" text={"次へ"} />
            </center>
        </>
    );
};

export default ShinkiSetting;
