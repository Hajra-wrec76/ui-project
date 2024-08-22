import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCutlery } from '@fortawesome/free-solid-svg-icons';
function Features(){
    return(
        <>
          <div className='h-screen'>

            <div className=' ml-5 relative flex flex-col justify-center items-center mt-[7rem] text-white'>
              <h4  className='text-gray-400'>Some Cool Features</h4>
              <h1 className='font-semibold text-3xl'>Why Choose Us?</h1>
            </div>
            <div>

            <div className='relative flex flex-row'>

            <div className="relative flex items-center justify-center ml-[37rem] text-white bg-gray-700 border-black border-4 mt-[12rem] rounded-full h-20 w-20 ">
            <FontAwesomeIcon icon={faKey}  size="1.5x" />
            </div>
            <div className= 'text-white ml-40 text-center mt-[10rem]'>
              <h4 className='text-gray-400'>Allocate Rooms and Maintain Record</h4>
              <h1 className='font-bold text-2xl'>Smart Room Allocation</h1>
            </div>

            </div>

            <div className='relative flex flex-row'>

            <div className= 'text-white text-center ml-32 mt-[7rem]'>
              <h4 className='text-gray-400'>Record Payments and Alert Prayers</h4>
              <h1 className='font-bold text-2xl'>Payments and Alerts</h1>
            </div>
            
            <div className="relative flex items-center justify-center ml-[12rem] text-white bg-gray-300 border-black border-4 mt-[6rem] rounded-full h-20 w-20 ">
            <div className="relative flex items-center justify-center text-white bg-black border-black border-4 shadow-black rounded-full h-3 w-3 p-3 " >
            <FontAwesomeIcon icon={faDollarSign} />
            </div>
            </div>
            
           
            </div>

            <div className='relative flex flex-row'>

            <div className="relative flex items-center justify-center ml-[36.8rem] text-white bg-gray-700 border-black border-4 mt-[5rem] rounded-full h-20 w-20 ">
            <FontAwesomeIcon icon={faUser} size="1.5x" />
            </div>
            <div className= 'text-white ml-48 text-center mt-[5rem]'>
              <h4 className='text-gray-400'>See and Resolve Complaints</h4>
              <h1 className='font-bold text-2xl'>Manage Complaints</h1>
            </div>

            </div>

            <div className='relative flex flex-row'>

            <div className= 'text-white text-center ml-40 mt-[7rem]'>
            <h4 className='text-gray-400'>Display and Track Food Menu</h4>
            <h1 className='font-bold text-2xl'>Manage Food Menu</h1>
            </div>
            <div className="relative flex items-center justify-center ml-[12.7rem] text-white bg-gray-300 border-black border-4 mt-[6rem] rounded-full h-20 w-20 ">
            <div className="relative flex items-center justify-center text-white bg-black border-black border-4 shadow-black rounded-full h-3 w-3 p-3 " >
            <FontAwesomeIcon icon={faCutlery} />
            </div>
            </div>
            
          </div>

          </div>
          </div>
          
        </>
    )
}
export default Features