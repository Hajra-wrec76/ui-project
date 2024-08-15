import React from 'react';

function CustomerFeedback() {
    return (
        <>

            <section className="min-h-screen bg-black flex items-center justify-center py-10">

                <div className="flex items-center gap-4">


                    {/* Left Arrow */}
                    <div className="flex items-center justify-center rounded-full h-10 w-10 bg-white cursor-pointer">
                        <a
                            href="#"
                            className="text-sm font-semibold text-black"
                        >
                            ←
                        </a>
                    </div>

                    {/* Feedback Cards */}
                    <div className="flex gap-4 overflow-x-auto">
                        <div className="w-60 rounded-3xl border bg-gray-400 p-4">
                            <h1 className="text-lg text-white font-semibold">Indigo Heights</h1>
                            <p className="mb-3 text-sm text-white">Saves a lot of manual effort!</p>
                            <p className="text-white">*****</p>
                        </div>
                        <div className="w-60 rounded-3xl border bg-white p-4">
                            <h1 className="text-lg text-black font-semibold">Indigo Heights</h1>
                            <p className="mb-3 text-sm text-black">Saves a lot of manual effort!</p>
                            <p className="text-gray-500">*****</p>
                        </div>
                        <div className="w-60 rounded-3xl border bg-gray-400 p-4">
                            <h1 className="text-lg text-white font-semibold">Indigo Heights</h1>
                            <p className="mb-3 text-sm text-white">Saves a lot of manual effort!</p>
                            <p className="text-white">*****</p>
                        </div>
                        <div className="w-60 rounded-3xl border bg-gray-400 p-4">
                            <h1 className="text-lg text-white font-semibold">Indigo Heights</h1>
                            <p className="mb-3 text-sm text-white">Saves a lot of manual effort!</p>
                            <p className="text-white">*****</p>
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <div className="flex items-center justify-center rounded-full h-10 w-10 bg-white cursor-pointer">
                        <a
                            href="#"
                            className="text-sm font-semibold text-black"
                        >
                            →
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CustomerFeedback;
