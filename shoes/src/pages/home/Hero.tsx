const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute top-1/2 transform -translate-y-1/2 ps-4 md:ps-6 lg:ps-8 xl:ps-10">
        <p className="text-[12px] sm:text-[16px] lg:text-[20px] xl:text-[24px] font-open xl:font-semibold text-gray">
          Sadece geçerli süreyle
        </p>
        <h1 className="text-[20px] sm:text-[25px] md:text-[30px] lg:text-[50px]  xl:text-[74px] font-semibold text-white">
          %30 indirim
        </h1>
        <p className="font-open text-[10px] sm:text-[12px] md:text-[14px] lg:text-[18px] xl:text-[20px] text-gray max-w-[60%]">
          Sneakers made with your comfort in mind so you can put all of
          your focus into your next session.
        </p>
      </div>

      <img src="/banner.png" />
    </div>
  );
};

export default Hero;
