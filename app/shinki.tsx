import React from "react";
import ItemButton from "@/components/ItemButton";
import SaveButton from "@/components/SaveButton";
import { HStack, Box, Text } from "@gluestack-ui/themed";
import useSelectedItemStore from "@/store/useSelectedItemStore";

const Shinki = () => {
    const { selectedItems, addSelectedItem, removeSelectedItem } = useSelectedItemStore();

    const handleItemClick = (text: string) => {
        if (selectedItems.includes(text)) {
            removeSelectedItem(text);
        } else {
            addSelectedItem(text);
        }
    };

    return (
        <>
            <center>
                <h2>掃除したいところは？</h2>
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
                <SaveButton href="/shinki/setting" text={"次へ"} />
            </center>
        </>
    );
};

export default Shinki;
