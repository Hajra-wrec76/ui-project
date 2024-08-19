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
            Saves a lot of manual effort!
          </p>
          <p className="text-white">***</p>
        </div>
      </div>
      <div className="w-[200px] rounded-3xl border bg-white ">
        <div className="p-4">
          <h1 className="text-lg  text-black font-semibold">Indigo Heights</h1>
          <p className="mb-3 text-sm text-black">
            Saves a lot of manual effort!
          </p>
          <p className="text-gray-500">***</p>
        </div>
      </div>
      <div className="w-[200px] rounded-3xl border  bg-gray-400   ">
        <div className="p-4">
          <h1 className="text-lg  text-white font-semibold">Indigo Heights</h1>
          <p className="mb-3 text-sm text-white">
            Saves a lot of manual effort!
          </p>
          <p className="text-gray-200">***</p>
        </div>
      </div>
      <div className="w-[200px] rounded-3xl border  bg-gray-400   ">
        <div className="p-4">
          <h1 className="text-lg  text-white font-semibold">Indigo Heights</h1>
          <p className="mb-3 text-sm text-white">
            Saves a lot of manual effort!
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
