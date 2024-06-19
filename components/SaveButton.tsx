import React from 'react';
import { Button, ButtonText } from '@gluestack-ui/themed';
import { Link } from 'expo-router'; // Adjust import based on actual library

interface SaveButtonProps {
    href: string;
    text: string;
}

const SaveButton: React.FC<SaveButtonProps> = ({ href, text }) => {
    const handleSave = () => {
        // Perform any save logic here if needed
        console.log('Saving...');
    };

    return (
        <Link href={href}>
            <Button
                bg="#00A9C3"
                style={{
                    width: 350,
                    height: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onPress={handleSave} // Use onPress for handling button click in React Native
            >
                <ButtonText>{text}</ButtonText>
            </Button>
        </Link>
    );
};

export default SaveButton;
