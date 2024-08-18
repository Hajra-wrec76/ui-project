import React from "react";

const OurTeam = () => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center mt-[10rem] py-12">
            <div className="text-center mb-8">
                <p className="text-gray-400 text-sm md:text-base">Founders</p>
                <h2 className="text-2xl md:text-4xl font-semibold">Our Team</h2>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 max-w-4xl mx-auto space-x-6">
                {/* Card 1 */}
                <div className="w-[7.5rem] h-[9.25rem] md:w-[10rem] md:h-[12.75rem] sm:ml-12 bg-gradient-to-b from-black via-black to-white rounded-lg shadow-md">
                    <div className="w-28 h-36 md:w-[9.5rem] md:h-[11rem] bg-gray-300 border-8 border-black rounded-lg shadow-lg md:mt-6 flex justify-self-stretch ml-1 mb-[17rem]"></div>
                </div>
                {/* Card 2 */}
                <div className="w-[7.5rem] h-[9.25rem] md:w-[10rem] md:h-[12.75rem] sm:ml-12 bg-gradient-to-b from-black via-black to-white rounded-lg shadow-md md:mt-[7rem]">
                    <div className="w-28 h-36 md:w-[9.5rem] md:h-[11rem] bg-gray-300 border-8 border-black rounded-lg shadow-lg md:mt-6 flex justify-self-stretch ml-1 mb-[17rem]"></div>
                </div>
                {/* Card 3 */}
                <div className="w-[7.5rem] h-[9.25rem] md:w-[10rem] md:h-[12.75rem] sm:ml-12 bg-gradient-to-b from-black via-black to-white rounded-lg shadow-md ">
                    <div className="w-28 h-36 md:w-[9.5rem] md:h-[11rem] bg-gray-300 border-8 border-black rounded-lg shadow-lg md:mt-6 flex justify-self-stretch ml-1 mb-[17rem]"></div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
