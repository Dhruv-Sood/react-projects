function Hero() {
  return (
    <div className="flex w-full justify-around items-center py-10 flex-col md:flex-row">
          <div className="md:w-[50%] px-[10%] flex flex-col gap-10">
              <h1 className=" sm:text-[50px] lg:text-[70px] font-extrabold">YOUR FEET
                  DESERVE
                  THE BEST</h1>
              <p className="text-lg text-slate-600">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
              <div className="flex gap-7 text-lg">
                  <div className="btn px-2 py-1 bg-[#D01C28] text-white rounded-xl hover:text-white">Shop Now</div>
                <div className="btn px-2 py-1 border-black border-2 rounded-xl">Category</div>
              </div>
        </div>

        <div className="w-[50%] hidden md:block">
            <img src="../../public/shoe_image.png" alt="" />
        </div>
    </div>
  )
}
export default Hero