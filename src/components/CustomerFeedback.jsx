import React from 'react';

function CustomerFeedback() {
    return (
       
        <section className="mt-[5rem]  flex gap-4">
      <div className=" mt-[4rem]  flex items-center rounded-full h-5 w-5 bg-white">
        <a
          href="#"
          className="mx-1  cursor-not-allowed text-sm font-semibold text-black"
        >
          ←
        </a>
      </div>

      <div className="   w-[200px] rounded-3xl border  bg-gray-400 ">
        <div className="  p-4">
          <h1 className=" flex text-lg text-white font-semibold">
            Indigo Heights
          </h1>
          <p className="mb-3 text-sm text-white">
          "Amazing stay, friendly staff, and perfect location!"          </p>
          <p className="text-white">***</p>
        </div>
      </div>
      <div className="w-[200px] rounded-3xl border bg-white ">
        <div className="p-4">
          <h1 className="text-lg  text-black font-semibold">Comments</h1>
          <p className="mb-3 text-sm text-black">
          "Fantastic value, clean rooms, and great social events!"
          </p>
          <p className="text-gray-500">***</p>
        </div>
      </div>
      <div className="w-[200px] rounded-3xl border  bg-gray-400   ">
        <div className="p-4">
          <h1 className="text-lg  text-white font-semibold">Hostel Reviews</h1>
          <p className="mb-3 text-sm text-white">
          "Disappointing stay, dirty room, and helpful staff."
          </p>
          <p className="text-gray-200">***</p>
        </div>
      </div>
      <div className="w-[200px] rounded-3xl border  bg-gray-400   ">
        <div className="p-4">
          <h1 className="text-lg  text-white font-semibold">Hostel Ratings</h1>
          <p className="mb-3 text-sm text-white">
          "Decent experience, but rooms were small." 
          </p>
          <p className="text-gray-200">***</p>
        </div>
      </div>
      <div className=" mt-[4rem] flex items-center rounded-full h-5 w-5 bg-white">
        <a
          href="#"
          className="mx-1 cursor-not-allowed text-sm font-semibold text-black"
        >
          →
        </a>
      </div>
    </section>
    );
}

export default CustomerFeedback;
