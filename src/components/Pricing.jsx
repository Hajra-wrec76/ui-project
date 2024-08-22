import React, { useState } from 'react';

const Pricing = () => {
    const [selectedPlan, setSelectedPlan] = useState('Pro Plan');

    return ( 
        <div className=" bg-black text-white flex flex-col justify-center  items-center   py-10">
            <div className="text-center mb-8">
                <p className="text-gray-400">It's worth it!</p>
                <h2 className="text-3xl md:text-4xl font-semibold">Price Plans</h2>
            </div>

            <div className="flex bg-[#2d2c2c]  rounded-full  mb-8">
                <button
                    className={`px-4 py-2 rounded-full ${selectedPlan === 'Basic' ? 'bg-blue-500 text-white' : 'bg-[#2d2c2c]'}`}
                    onClick={() => setSelectedPlan('Basic')}
                >
                    Basic
                </button>
                <button
                    className={`px-4 py-2 rounded-full ${selectedPlan === 'Pro Plan' ? 'bg-blue-500 text-white' : 'bg-[#2d2c2c]'}`}
                    onClick={() => setSelectedPlan('Pro Plan')}
                >
                    Pro Plan
                </button>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                {/* Basic Plan */}
                <div
                    className={`rounded-lg p-6 w-80 ${selectedPlan === 'Basic'
                        ? 'bg-gray-300 text-black'
                        : 'bg-[#2d2c2c] text-white'
                        }`}
                >
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold">Basic</h3>
                        <span className={`px-2 py-1 rounded-full ${selectedPlan === 'Basic'
                            ? 'bg-black text-white'
                            : 'bg-gray-300 text-black'
                            }`}>3399 PKR</span>
                    </div>
                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <span className="mr-2">➜</span> Simple Reports
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2">➜</span> Limited Third Party Integration
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2">➜</span> Limited Technical Support
                        </li>
                    </ul>
                </div>

                {/* Pro Plan */}
                <div
                    className={`rounded-lg p-6 w-80 ${selectedPlan === 'Pro Plan'
                        ? 'bg-gray-300 text-black'
                        : 'bg-[#2d2c2c] text-white'
                        }`}
                >


                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold">Pro Plan</h3>
                        <span className={`px-2 py-1 rounded-full ${selectedPlan === 'Pro Plan'
                            ? 'bg-black text-white'
                            : 'bg-gray-500 text-black'
                            }`}>4899 PKR</span>
                    </div>
                    <ul className="space-y-2">
                        <li className="flex items-center">
                        <div>
                        <span className="mr-2">➜</span> Advanced Automation & Integration

                        </div>

                        </li>
                        <li className="flex items-center">
                            <span className="mr-2">➜</span> Detailed Financial Reports
                        </li>
                        <li className="flex items-center">
                        <div>
                        <span className="mr-2">➜</span> Enhanced Notifications, Security & Reporting

                        </div>
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2">➜</span> 24/7 Customer Support
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
