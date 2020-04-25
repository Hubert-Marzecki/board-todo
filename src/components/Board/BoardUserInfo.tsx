import React from "react";

export const BoardUserInfo = () => {

    return (

        <div className="flex items-center ml-auto mr-5">
            {/* ADD BOARD */}
            <button className="bg-blue-light rounded h-8 w-8 font-bold  text-sm mr-2">+</button>
            {/* INFO */}
            <button className="bg-blue-light rounded h-8 w-8 font-bold  text-sm mr-2">i</button>
            {/* NOTOFICATION */}
            <button className="bg-red rounded h-8 w-8 font-bold  text-sm mr-2">
                <svg className="h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M12 2c-.8 0-1.5.7-1.5 1.5v.688C7.344 4.87 5 7.62 5 11v4.5l-2 2.313V19h18v-1.188L19 15.5V11c0-3.379-2.344-6.129-5.5-6.813V3.5c0-.8-.7-1.5-1.5-1.5zm-2 18c0 1.102.898 2 2 2 1.102 0 2-.898 2-2z"/>
                </svg>
            </button>
            {/* USER IMG */}
            <img src="https://i.imgur.com/OZaT7jl.png" className="rounded-full"/>
        </div>
    )
}