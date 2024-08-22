import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-black text-white py-8 w-full">
            <div className="w-full  max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-evenly items-start">
                <div className="flex flex-col mb-8 lg:mb-0">
                    <div className="flex items-center gap-2 mb-4">
                        <FaLinkedin size={25} color="#0077B5" />
                        <p className="text-lg font-semibold">Hostelin.com</p>
                    </div>
                    <ul className="space-y-4 text-gray-400  hover:text-white text-sm">
                        <li>Home</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div className="bg-gray-100 text-black  rounded-lg  p-4 flex flex-col items-stretch space-y-4">
                    <div className="flex items-center  gap-2">
                        <FaEnvelope size={25} color="black" />
                        <p className="text-sm ">support@hostelin.com</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaLinkedin size={25} color="#0077B5" /> 
                       

                        <p className="text-sm">www.linkedin.com/in/marfowa-kianat-b346712b1

</p>
                    </div>
                    <div className="flex space-x-4 mt-2">
                        <FaFacebook size={30} color="black" />
                        <FaInstagram size={30} color="black" />
                    </div>
                </div>
            </div>
            <div className="text-center text-gray-400 hover:text-white text-xs mt-8 w-full">
                <p>Copyright ©2024 Hostelin.com</p>
                <p>Designed by <a href="https://theobjectorientedguy.com" className="text-blue-500">TheObjectOrientedGuy</a></p>
            </div>
        </footer>
    );
}

export default Footer;
