import React from "react";
import { BoardSearch } from "./BoardSearch";
import { BoardName } from "./BoardName";
import { BoardUserInfo } from "./BoardUserInfo";
import { MenuTab } from "./MenuTab";
import { CardContainer } from "./CardContainer";
import { Page } from "../../App";
import { User } from "../../types";

export const Board = (props: { user: User }) => {
  return (
    <div className="bg-blue w-full h-content font-sans mt-5 ">
      <div className="flex p-2 bg-blue-dark items-center">
        {/* SEATCH */}
      
          <BoardSearch />

          {/*LOGO _ CENTER*/}
          <BoardName />

          {/* USER INFO */}
          <BoardUserInfo />
      </div>
      {/* MENU TAB */}
        <MenuTab />
      {/* CARD CONTAINER */}
        <CardContainer />
    </div>
  );
};

