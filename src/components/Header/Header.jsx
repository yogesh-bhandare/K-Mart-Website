import React from "react";

export default function Header(){
    return(
        <>
        <div className="bg-[#402C28] text-[#FFFDDC] border-b-2 border-[#628C4F] max-w-full h-12">
            <div className="max-w-[80%] h-12 mx-auto flex items-center justify-between font-medium ">
                <div>logo</div>
                <div>
                    <ul className="flex justify-evenly gap-10">
                        <li className="">Home</li>
                        <li className="">About Us</li>
                        <li className="">Technologies</li>
                    </ul>
                </div>
                <div>
                    <button>Download App</button>
                </div>
            </div>
        </div>
        </>
    )
}