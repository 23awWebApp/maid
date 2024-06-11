import React from 'react';
import { Box, VStack, HStack } from "@gluestack-ui/themed";
import Image from "../assets/images/adaptive-icon.png";
import { Image as RNImage } from "react-native";
import SquareButton from "../components/SquareButton";
import { Link } from 'expo-router';

export default function Home() {
  return (
    <Box flex={1} backgroundColor="$black">
      {/* for the character */}
      <Box flex={1 / 3}>
        <RNImage
          source={Image}
          style={{ width: "100%", height: "100%", resizeMode: "cover" }}
        />
      </Box>

      {/* for buttons */}
      <Box flex={2 / 3} justifyContent="center" alignItems="center" paddingHorizontal="$4">
        <VStack space={"4xl"}>
          <HStack space={"4xl"}>
            <SquareButton href="/page1" text="Go to Page 1" />
            <SquareButton href="/page2" text="Go to Page 2" />
          </HStack>
          <HStack space={"4xl"}>
            <SquareButton href="/page3" text="Go to Page 3" />
            <SquareButton href="/page4" text="Go to Page 4" />
          </HStack>
          <HStack space={"4xl"}>
            <SquareButton href="/page5" text="Go to Page 5" />
            <SquareButton href="/tabs/tab1" text="Go to Page 6" />
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
}
