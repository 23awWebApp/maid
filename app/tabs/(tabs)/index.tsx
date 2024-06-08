import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, Center, Heading, Divider } from "@gluestack-ui/themed";
import { GluestackUIProvider, Button, ButtonText } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

export default function Home() {
  return (
    <GluestackUIProvider config={config}>
      <Center flex={1} justifyContent="center" alignItems="center" padding={4}>
        <Button>
          <ButtonText>Hello world</ButtonText>
        </Button>
        <Heading bold size="2xl" mt={4}>
          Expo V3333
        </Heading>
        <Divider marginVertical={30} width="80%" />
        <Text p="$4" textAlign="center">
          Example below to use gluestack-ui components.
        </Text>
        <EditScreenInfo path="app/(app)/(tabs)/index.tsx" />
      </Center>
    </GluestackUIProvider>
  );
}
