function GetInTouch() {
    return (
    
        <section>
<h6 className="text-gray-400 hover:text-white">Say Hi!</h6>
    <h2 className="text-3xl font-bold text-white">Get in Touch</h2>

<div className="mt-5 ">
<div className="flex flex-col ml-[17rem] mr-30 h-[12rem] justify-between rounded-3xl bg-gray-50 p-4 md:flex-row md:items-center md:p-8  justify-text w-[25rem]">
  <div className="space-y-2 ">
    
    <input className="text-xl font-semibold leading-loose text-gray-900 text-start" type="text" placeholder="Type a message..." />
    <div className=" border-gray-400 border-4">

    <input className="text-base  text-gray-600  md:text-lg" type="email"  placeholder="Enter your email" />
    <button className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"type="submit">Send</button>
    
    
    </div>

    
    

     
    
  </div>
 
</div>
</div>
</section>
    );
}

export default GetInTouch;
