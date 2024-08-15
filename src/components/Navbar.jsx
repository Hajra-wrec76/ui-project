import images from '../assets/images.jpg'
function Navbar() {
    return (
        <>
            <div className="absolute ml-[4rem] mt-[2rem]">
                <img src={images} alt="Image description" className="h-8 w-8 object-cover rounded-lg" />
            </div>


            <div className="relative flex justify-center sm:py-6 lg:py-8">


                <div className="flex justify-center shadow-lg bg-gray-700 text-white rounded-full py-1 px-4 sm:px-10 sm:space-x-4">

                    <a href="#" className="text-sm text-gray-400 hover:text-white  sm:text-base lg:text-lg">
                        Home
                    </a>
                    <a href="#" className="text-sm text-gray-400 hover:text-white  sm:text-base lg:text-lg">
                        Features
                    </a>
                    <a href="#" className="text-sm  text-gray-400 hover:text-white  sm:text-base lg:text-lg">
                        Pricing
                    </a>
                    <a href="#" className="text-sm text-gray-400 hover:text-white sm:text-base lg:text-lg">
                        About
                    </a>

                </div>

                <button className="absolute right-0 transform translate-x-1/2 bg-blue-500 text-white rounded-full px-2 py-0.5 sm:px-4 sm:py-2 mr-8 md:mr-[6rem]">
                    Login
                </button>

            </div>
        </>
    );
}

export default Navbar;