import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    timerContainer: {
        alignItems: 'center',
        marginBottom: 50,
        position: 'relative',
        justifyContent: 'center',
    },
    outerCircle: {
        position: 'absolute',
        width: 285,
        height: 285,
        borderRadius: 150,
        borderWidth: 1,
        borderColor: '#f0f0f0',
        justifyContent: 'center',
    },
    innerCircle: {
        position: 'absolute',
        width: 260,
        height: 260,
        borderRadius: 130,
        borderWidth: 1,
        borderColor: '#f0f0f0',
        justifyContent: 'center',
    },
    circleDecorator: {
        position: 'absolute',
        width: 285,
        height: 285,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        position: 'absolute',
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: '#00BCD4',
        top: 2,
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: 350,
        alignItems: 'center',
    },
    iconButton: {
        backgroundColor: '#fff',
        borderRadius: 50,
        width: 50,
        height: 50,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#7a7a7a',
    },
    playButton: {
        paddingLeft: 5,
    },
    stopButton: {
        backgroundColor: '#00BCD4',
        borderRadius: 50,
        width: 350,
        height: 60,
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    stopButtonText: {
        color: '#fff',
        fontSize: 18,


    },
});

export default styles;
