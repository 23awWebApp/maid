// SaveButton.tsx
import React from 'react';
import { Button, ButtonText } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import { Dimensions } from "react-native";

const { height } = Dimensions.get("window");

interface SaveButtonProps {
    href: string;
    text: string;
}

const SaveButton: React.FC<SaveButtonProps> = ({ href, text }) => {
    return (
        <Link href={href}>
            <Button
                bg="#00A9C3"
                style={{
                    width: 350,
                    height: 60,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <ButtonText>{text}</ButtonText>
            </Button>
        </Link>
    );
};

export default SaveButton;
