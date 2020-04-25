import React from "react";
import {BoardSearch} from "./BoardSearch";
import {BoardName} from "./BoardName";
import {BoardUserInfo} from "./BoardUserInfo";
import {MenuTab} from "./MenuTab";
import {CardContainer} from "./CardContainer";

export const Board = () => {

    return (

        <div className="bg-blue w-full h-content font-sans mt-5 ">
            <div className="flex p-2 bg-blue-dark items-center">
                {/* SEATCH */}
                <React.Fragment>
                <BoardSearch />

                {/*LOGO _ CENTER*/}
                <BoardName />

                {/* USER INFO */}
                <BoardUserInfo />
                   </React.Fragment>
            </div>
            {/* MENU TAB */}
            <React.Fragment>
        <MenuTab />
            </React.Fragment>
            {/* CARD CONTAINER */}
            <React.Fragment>
        <CardContainer />
            </React.Fragment>
        </div>


    )
}