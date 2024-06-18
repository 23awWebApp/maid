import React from "react";
import ItemButton from "@/components/ItemButton";
import SaveButton from "@/components/SaveButton";
import { HStack, Button, Box, Actionsheet } from "@gluestack-ui/themed";
import { Select, SelectTrigger, SelectIcon, Icon, SelectInput, SelectItem, SelectPortal, SelectBackdrop, SelectDragIndicatorWrapper, SelectDragIndicator, SelectContent, ChevronDownIcon } from '@gluestack-ui/themed';
import { Image } from "@gluestack-ui/themed";

export default function ShinkiSetting() {
    return (
        <>
            <center>
                <h2>へやの掃除は何日前しましたか？</h2>
                {/* <Image source="../assets/Icons/test.png" /> */}
                <HStack justifyContent="center" >
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

                <Select alignItems="center">
                    <SelectTrigger variant="outline" size="lg" width={238} height={60}>
                        <SelectInput placeholder="選択" />
                        <SelectIcon>
                            <Icon as={ChevronDownIcon} />
                        </SelectIcon>
                    </SelectTrigger>
                    <SelectPortal>
                        <SelectBackdrop />
                        <SelectContent>
                            <SelectDragIndicatorWrapper>
                                <SelectDragIndicator />
                            </SelectDragIndicatorWrapper>
                            <SelectItem label="今日" value="today" />
                            <SelectItem label="1日前" value="-1day" />
                            <SelectItem label="2日前" value="-2day" />
                            <SelectItem label="3日前" value="-3day" />
                            <SelectItem label="4日前" value="-4day" />
                            <SelectItem label="5日前" value="-5day" />
                            <SelectItem label="6日前" value="-6day" />
                            <SelectItem label="7日前" value="-7day" />
                            <SelectItem label="8日前" value="-8day" />
                            <SelectItem label="9日前" value="-9day" />
                            <SelectItem label="10日前" value="-10day" />
                        </SelectContent>
                    </SelectPortal>
                </Select>

                <Box mt="$20" />
                <SaveButton href="/shinki/setting" text={"次へ"} />
            </center >
        </>
    );
}

