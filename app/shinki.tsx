import React from "react";
import ItemButton from "@/components/ItemButton";
import SaveButton from "@/components/SaveButton";
export default function shinki() {
    return (
        <>
            <h2>掃除したいところは？</h2>
            <ItemButton text={"へや"} />
            <ItemButton text={"キッチン"} />
            <ItemButton text={"洗濯"} />
            <ItemButton text={"洗い物"} />
            <ItemButton text={"トイレ"} />
            <ItemButton text={"お風呂"} />
            <ItemButton text={"洗面台"} />
            <ItemButton text={"ベランダ"} />
            <ItemButton text={"玄関"} />
            <SaveButton href="/index" text={"次へ"} />
        </>
    )
}