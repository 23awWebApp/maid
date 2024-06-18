import React from "react";
import ItemButton from "@/components/ItemButton";
import SaveButton from "@/components/SaveButton";
import { HStack, Button, Divider, Box } from "@gluestack-ui/themed";
import { Image } from "@gluestack-ui/themed";
export default function Shinki() {
    return (
        <>
            <center>
                <h2>掃除したいところは？</h2>
                {/* <Image source="../assets/Icons/test.png" /> */}
                <HStack justifyContent="center" flexWrap="wrap">
                    <ItemButton text={"へや"} />
                    <ItemButton text={"キッチン"} />
                    <ItemButton text={"洗濯"} />
                    <ItemButton text={"洗い物"} />
                    <ItemButton text={"トイレ"} />
                    <ItemButton text={"お風呂"} />
                    <ItemButton text={"洗面台"} />
                    <ItemButton text={"ベランダ"} />
                    <ItemButton text={"玄関"} />
                    <Button
                        width={150}
                        height={50}
                        variant="outline"
                        isDisabled={true}
                        m="$5"
                        rounded="$sm"
                        borderColor="#fff"
                    // isFocusVisible={false}
                    >
                    </Button>
                </HStack>
                <Box mt="$20" />
                <SaveButton href="/shinki/setting" text={"次へ"} />
            </center >
        </>
    );
}
