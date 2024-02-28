import React from "react";

export default function Home() {
    const backgroundStyle = {
        backgroundImage: `url('./Resources/Farmer.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
      };
    return (
        <>
        <div style={backgroundStyle} className="flex items-center font-['Poppins']">
            <div className="flex flex-row-reverse w-[80%] h-[30%] mx-auto  ">
                <div>
                    <h1 className="text-[#402C28] font-bold text-8xl ">K-Mart</h1>
                    <p className="text-[#402C28] font-thin text-2xl pb-1">The Farmers Market App</p>
                    <button className="text-white bg-[#628C4F] font-normal text-3xl px-5 py-2 rounded-md"> Download App</button>
                </div>
            </div>
        </div>
        </>
    )
}