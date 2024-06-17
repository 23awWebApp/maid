import React from "react";
import ItemButton from "@/components/ItemButton";
import SaveButton from "@/components/SaveButton";
import { HStack, Button, ChevronLeftIcon, ButtonIcon } from "@gluestack-ui/themed";

export default function Shinki() {
    return (
        <>

            <Button borderRadius='$full' size='lg' p='$3.5' bg='$indigo600' borderColor='$indigo600' >
                {/* EditIcon is imported from 'lucide-react-native' */}
                <ButtonIcon as={ChevronLeftIcon} />
            </Button>
            <h2>掃除したいところは？</h2>
            <HStack flexWrap="wrap">
                <ItemButton text={"へや"} />
                <ItemButton text={"キッチン"} />
            </HStack>
            <HStack>
                <ItemButton text={"洗濯"} />
                <ItemButton text={"洗い物"} />
            </HStack>
            <HStack>
                <ItemButton text={"トイレ"} />
                <ItemButton text={"お風呂"} />
            </HStack>
            <HStack>
                <ItemButton text={"洗面台"} />
                <ItemButton text={"ベランダ"} />
            </HStack>
            <HStack>
                <ItemButton text={"玄関"} />
            </HStack>
            <SaveButton href="/index" text={"次へ"} />
        </>
    );
}
