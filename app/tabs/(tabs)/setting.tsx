import React, { useEffect } from "react";
import { HStack, Box } from "@gluestack-ui/themed";
import ItemButton from "@/components/ItemButton";
import useSelectedItemStore from "@/store/useSelectedItemStore";

const ShinkiSetting = () => {
    const selectedItems = useSelectedItemStore((state) => state.selectedItems);

    useEffect(() => {
        console.log("ShinkiSetting selectedItems:", selectedItems);
    }, [selectedItems]);

    return (
        <center>
            <h2>選択した掃除項目</h2>
            <HStack justifyContent="center" flexWrap="wrap">
                {selectedItems.map((item, index) => (
                    <ItemButton key={index} text={item} selected={true} onClick={() => { }} />
                ))}
            </HStack>
            <Box mt={20} />
        </center>
    );
};

export default ShinkiSetting;
