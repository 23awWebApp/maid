import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface CustomModalProps {
    visible: boolean;
    message: string;
    onCancel: () => void;
    onConfirm: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({ visible, message, onCancel, onConfirm }) => {
    return (
        <Modal
            transparent={true}
            animationType="fade"
            visible={visible}
            onRequestClose={onCancel}
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.message}>{message}</Text>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={[styles.button, styles.borderButton]} onPress={onCancel}>
                            <Text style={[styles.buttonText, styles.borderButtonText]}>キャンセル</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={onConfirm}>
                            <Text style={styles.buttonText}>はい</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    message: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        flex: 1,
        padding: 10,
        marginHorizontal: 5,
        backgroundColor: '#00A9C3',
        borderRadius: 5,
        alignItems: 'center',
    },
    borderButton: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#00A9C3',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    borderButtonText: {
        color: '#00A9C3',
    },
});

export default CustomModal;
