import React, { useState } from 'react';
import { Pressable, Text } from "@gluestack-ui/themed";

interface ItemButtonProps {
    text: string;
}

const ItemButton: React.FC<ItemButtonProps> = ({ text }) => {
    const [pressed, setPressed] = useState(false);

    const handlePress = () => {
        console.log('Hello');
        setPressed(prevState => !prevState);
    };

    return (
        <Pressable
            onPress={handlePress}
            width={150}
            height={50}
            justifyContent='center'
            m="$5"
            borderWidth={pressed ? "$2" : "$1"}
            rounded="$sm"
            borderColor={pressed ? "#00A9C3" : "#B0E0E6"}
            softShadow="1"
            $hover-bg="#B0E0E6"
        >
            <center>
                <Text
                    color={pressed ? "#00A9C3" : "#000"}
                    fontWeight={pressed ? "$bold" : "normal"}
                >
                    {text}
                </Text>
            </center>
        </Pressable>
    );
}

export default ItemButton;
