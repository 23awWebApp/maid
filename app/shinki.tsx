import React from "react";
import ItemButton from "@/components/ItemButton";
import SaveButton from "@/components/SaveButton";
import { HStack, Button, ChevronLeftIcon } from "@gluestack-ui/themed";
import { FlexAlignType } from "react-native";
export default function Shinki() {
    return (
        <>
            <center>
                <h2>掃除したいところは？</h2>

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
                    <ItemButton text={""} />
                </HStack>
                <SaveButton href="/index" text={"次へ"} />
            </center>
        </>
    );
}
