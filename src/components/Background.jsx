function Background() {
    return (
        <>
            <div className=" bg-black">
                <div className="ml-[28rem] mt-[22rem] absolute bottom-16 flex items-center justify-center border-none bg-gradient-to-b from-gray-800 to-black rounded-full h-48 w-48 p-96"></div>

                <div className="absolute mt-[54rem] ml-[12rem]">
                    <div className="ml-52 mt-[24rem]">
                        <h1 className="text-gray-800 text-[7rem] font-semibold">2</h1>
                    </div>
                    <div className="ml-52 mt-[10rem] ">
                        <h1 className=" text-200 text-gray-800 text-[7rem] font-semibold">4</h1>
                    </div>
                </div>

                <div className="absolute px-96 w-full mt-[48rem] ml-[14rem] ">
                    <div className="ml-80 px-52  mt-[21rem] ">
                        <h1 className="text-gray-800 text-[7rem] font-semibold">1</h1>
                    </div>
                    <div className="ml-80 px-52 mt-[10rem]">
                        <h1 className="text-gray-800 text-[7rem] font-semibold ">3</h1>
                    </div>
                </div>

                <div className="absolute flex items-center ml-[45rem] h-[7rem] py-96 text-center mt-[65rem] w-52 bg-gray-800 rounded-full ">
                    <div className="flex items-center py-80 ml-24 h-96 text-center mt-11 w-3 text-white bg-gray-700 rounded-full" ></div>
                </div>
            </div>

        </>
    );
}
export default Background;