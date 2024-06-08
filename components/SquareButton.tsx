// SquareButton.tsx
import React from 'react';
import { Button, ButtonText } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import { Dimensions } from "react-native";

const { height } = Dimensions.get("window");
const buttonSize = Math.max(height / 16, 100);

interface SquareButtonProps {
    href: string;
    text: string;
}

const SquareButton: React.FC<SquareButtonProps> = ({ href, text }) => {
    return (
        <Link href={href}>
            <Button
                style={{
                    width: buttonSize,
                    height: buttonSize,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <ButtonText>{text}</ButtonText>
            </Button>
        </Link>
    );
};

export default SquareButton;
