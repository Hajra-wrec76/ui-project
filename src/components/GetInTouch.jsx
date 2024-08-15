function GetInTouch() {
    return (
        <section className="text-center py-16 bg-black text-white">
            <h6 className="text-gray-400">Say Hi!</h6>
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <div className="mt-10 flex justify-center">
                <div className="w-[25rem] bg-gray-50 p-6 rounded-3xl flex flex-col items-center space-y-4">
                    <input
                        className="text-lg font-semibold text-gray-900 w-full p-3 rounded-lg "
                        type="text"
                        placeholder="Type a message..."
                    />
                    <input
                        className="text-base text-gray-600 w-full p-3 rounded-lg bg-gray-200"
                        type="email"
                        placeholder="Enter your email"
                    />
                    <button
                        className="bg-black text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-800"
                        type="submit"
                    >
                        Send Message
                    </button>

                </div>
            </div>
        </section>
    );
}

export default GetInTouch;
