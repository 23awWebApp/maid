import React from 'react';
import { Pressable, Text } from "@gluestack-ui/themed";

interface ItemButtonProps {
    text: string;
    selected: boolean;
    onClick: () => void;
}

const ItemButton: React.FC<ItemButtonProps> = ({ text, selected, onClick }) => {
    return (
        <Pressable
            onPress={onClick}
            width={150}
            height={50}
            justifyContent='center'
            m="$5"
            borderWidth={selected ? "$2" : "$1"}
            rounded="$sm"
            borderColor={selected ? "#00A9C3" : "#B0E0E6"}
            softShadow="1"
            $hover-bg="#B0E0E6"
        >
            <Text
                textAlign="center"
                color={selected ? "#00A9C3" : "#000"}
                fontWeight={selected ? "$bold" : "normal"}
            >
                {text}
            </Text>
        </Pressable>
    );
}

export default ItemButton;
