import React from "react";
import { delay, motion } from "framer-motion";

export default function AboutApp() {
    return (
        <>
            <div className="max-w-[100%] max-h-[100%] w-[100%] h-[900px] flex justify-center font-[Poppins] overflow-hidden text-[#402C28]">
                <div className=" bg-white text-center">
                    <motion.h1 animate={{y: -10}} initial={{y: -100}} className=" font-semibold text-5xl mt-10">About App</motion.h1>
                    <div className="grid grid-flow-col grid-cols-2 w-80% h-[80vh]">
                        <div className="flex justify-start items-center px-[160px]">
                            <motion.div animate={{x: 10}} initial={{x:-1000}} className="text-left">
                                <h1 className="font-semibold text-2xl">Revolutionize the way you sell:</h1>
                                <p className="font-normal text-xl">Imagine having real-time market data and personalized insights at your fingertips. This is the power you unlock with the K-Mart, your one-stop solution for maximizing your yield's value.</p>
                            </motion.div>
                            <div>
                                
                            </div>
                        </div>
                        <motion.div animate={{x: -10}} initial={{x:1000}} className="flex items-center">
                            <img src="./Resources/phone.jpg" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}