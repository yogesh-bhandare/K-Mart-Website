import React from "react";

export default function AppAdv() {
    return (
        <>
            <div className="mx-auto max-w-[100%] max-h-[900px] w-full h-[900px] flex justify-center font-[Poppins] overflow-hidden text-[#402C28]">
                <div className=" bg-white text-center w-[100%]">
                    <h1 className=" font-semibold text-4xl mb-1">Features</h1>
                    <div className="flex justify-center">
                        <div className="grid grid-flow-row grid-rows-3 w-[100%] px-[160px]">
                            <div className="grid grid-flow-col grid-cols-2 items-center text-left border-b-2 border-[#402C28]">
                                <div>
                                    <h1 className=" font-semibold text-2xl">Intelligent Selling Recommendations:</h1>
                                    <p className=" font-normal text-xl">Receive personalized notifications on the best markets to sell your specific crop, ensuring you secure the highest price.</p>
                                </div>
                                <div className=" flex justify-center">
                                    <img className="h-[250px]" src="./Resources/advimg.jpg" alt="" />
                                </div>
                            </div>
                            <div className="grid grid-flow-col grid-cols-2 items-center text-left border-b-2 border-[#402C28]">
                                <div>
                                    <h1 className=" font-semibold text-2xl">Direct Market Connection:</h1>
                                    <p className=" font-normal text-xl">Browse and connect with nearby shops and buyers, fostering transparency and building trust.</p>
                                </div>
                                <div className=" flex justify-center">
                                    <img className="h-[250px]" src="./Resources/advimg.jpg" alt="" />
                                </div>
                            </div>
                            <div className="grid grid-flow-col grid-cols-2 items-center text-left border-b-2 border-[#402C28]">
                                <div>
                                    <h1 className=" font-semibold text-2xl">Data-Driven Yield Management:</h1>
                                    <p className=" font-normal text-xl">Track and manage your yield, project potential earnings based on current market prices, and access resources to optimize your crop production and marketability.</p>
                                </div>
                                <div className=" flex justify-center">
                                    <img className="h-[250px]" src="./Resources/advimg.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}