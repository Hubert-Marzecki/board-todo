import React from "react";

export const MenuTab = () => {
    return (
        <div className="flex m-4 justify-between">
            <div className="flex">
                <h3 className="mr-4">TailwindComponents.com</h3>
                <ul className="list-reset  hidden md:flex">
                    <li><span className="font-bold text-lg px-2">☆</span></li>
                    <li><span className="border-l border-blue-lighter px-2 text-sm">Business Name</span> <span
                        className="rounded-lg bg-blue-light text-xs px-2 py-1">Free</span></li>
                    <li><span className="border-l border-blue-lighter px-2 text-sm ml-2">Team Visible</span></li>
                </ul>
            </div>
            <div className=" font-sm text-underlined hidden md:flex items-center underline mr-5">
                <svg className="h-4 fill-current  cursor-pointer mr-2" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24">
                    <path
                        d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z"/>
                </svg>
                {/*Show menu*/}
            </div>
        </div>
    )
}
