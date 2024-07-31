import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    card: {
        maxWidth: 165,
        height: 196,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    deleteIcon: {
        zIndex: 99,
        position: 'absolute',
        top: -5,
        left: -5,
    },
    cardIcon: {
        width: "100%",
        alignItems: 'flex-end',
    },
    cardImage: {
        width: 64,
        height: 64,
        resizeMode: 'contain',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 8,
    },
    cardSubtitle: {
        fontSize: 14,
        color: '#777',
        marginTop: 4,
    },
});
