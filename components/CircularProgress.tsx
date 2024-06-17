// CircularProgress.tsx
import React from 'react';
import Svg, { Circle } from 'react-native-svg';

type Props = {
    size: number;
    width: number;
    fill: number; // percentage of the circle to be filled
    backgroundColor: string;
    tintColor: string;
};

const CircularProgressComponent: React.FC<Props> = ({ size, width, fill, backgroundColor, tintColor }) => {
    const radius = (size - width) / 2;
    const circumference = 2 * Math.PI * radius;
    const progress = (fill / 100) * circumference;

    return (
        <Svg width={size} height={size}>
            {/* Background Circle */}
            <Circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={backgroundColor}
                strokeWidth={width}
            />
            {/* Progress Circle */}
            <Circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={tintColor}
                strokeWidth={2}
                strokeDasharray={`${progress},${circumference}`}
            />
        </Svg>
    );
};

export default CircularProgressComponent;
