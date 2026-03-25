const Hero = () => {
  return (
    <div className="container mx-auto mt-7 px-3">
      <div className="relative overflow-hidden rounded-3xl bg-black">
        <img
          className="w-full h-full object-cover"
          src="/src/assets/bg-shadow.png"
          alt=""
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center ">
          <img
            className="w-20 sm:w-30 md:w-50"
            src="/src/assets/banner-main.png"
            alt=""
          />
          <div className="text-center">
            <h1 className="text-white text-[16px] sm:text-2xl md:text-3xl lg:text-[40px] font-bold mt-3">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="text-[14px] md:text-[18px] lg:text-2xl text-[#FFFFFF70] text-center font-medium">
              Beyond Boundaries Beyond Limits
            </p>
            <div className="flex justify-center ">
              <p className="p-1 border-2 rounded-2xl border-[#E7FE29]">
                <button className="btn bg-[#E7FE29] outline-none rounded-xl font-semibold ">
                  Claim Free Credit
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
