import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import { Card, Box } from "@gluestack-ui/themed";
import AntDesign from '@expo/vector-icons/AntDesign';
import { FontAwesome } from '@expo/vector-icons';
import styles from './CardItemStyles';

interface CardItemProps {
    item: string;
    daysMap: { [key: string]: string | null };
    deleteMode: boolean;
    itemImage: any;
    handleCardPress: (item: string) => void;
    handleDeleteItem: (item: string) => void;
}

const CardItem: React.FC<CardItemProps> = ({
    item,
    daysMap,
    deleteMode,
    itemImage,
    handleCardPress,
    handleDeleteItem,
}) => {
    return (
        <TouchableOpacity onPress={() => handleCardPress(item)}>
            <Card style={styles.card}>
                {deleteMode && (
                    <TouchableOpacity
                        style={styles.deleteIcon}
                        onPress={() => handleDeleteItem(item)}
                    >
                        <AntDesign name="minuscircle" size={24} color="#F44F4F" />
                    </TouchableOpacity>
                )}
                <Box style={styles.cardIcon}>
                    <FontAwesome name="chevron-right" size={16} color="#404040" />
                </Box>
                <Image source={itemImage} style={styles.cardImage} />
                <Text style={styles.cardTitle}>{item}</Text>
                <Text style={styles.cardSubtitle}>
                    {daysMap[item] ? `${daysMap[item]}日前 掃除しました` : '未設定'}
                </Text>
            </Card>
        </TouchableOpacity>
    );
};

export default CardItem;
