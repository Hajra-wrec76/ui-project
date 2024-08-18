function    Background(){
    return(
        <>
        {/* circle in the background */}
        
         <div className="absolute bottom-16 flex items-center justify-center ml-56 border-none bg-gradient-to-b from-gray-800 to-black rounded-full h-48 w-48 p-96"></div>

        <div className="absolute mt-[30rem]">
        <div className="ml-52 mt-[24rem]">
              <h1 className="text-gray-800 text-200  font-semibold">2</h1>
            </div>
            <div className="ml-52 mt-[7rem]">
            <h1 className="text-gray-800 text-200 font-semibold">4</h1>
            </div>
        </div>

        <div className="absolute mt-96 px-96 w-full ">
        <div className="ml-80 px-52 mt-60">
              <h1 className="text-gray-800 text-200 font-semibold">1</h1>
            </div>
            <div className="ml-80 px-52 mt-[10rem]">
            <h1 className="text-gray-800 text-200 font-semibold">3</h1>
            </div>
        </div>

        <div className="absolute flex items-center ml-[33rem] h-[7rem] py-96 text-center mt-[40rem] w-52 bg-gray-800 rounded-full">
            <div className="flex items-center py-80 ml-24 h-96 text-center mt-11 w-3 text-white bg-gray-700 rounded-full" ></div>
        </div>


        </>
    );
}
export default Background;