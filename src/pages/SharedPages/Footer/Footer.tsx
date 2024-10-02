const Footer = () => {
  return (
    <div className="p-10 md:p-15 lg:p-20 bg-[#111518] ">
      <div className="lg:flex gap-10 justify-between">
        <div className="max-w-[1100px] mb-10">
          <h1 className="font-bold text-xl text-[#EDEFF2] mb-[36px]">
            FSDG | A Non-profit Organisation
          </h1>
          <div>
            <p>
              <img
                src="/src/assets/ic.gif"
                alt="IC Logo"
                className="float-left w-16 h-20 mr-4"
              />
            </p>
            <p className="text-[#687279]">
              FSDG is a non-profit and non-political organization which has been
              working informally with small scale farmers since 2007. A group of
              people who are committed to taking care of environment had been
              engaging themselves for health and wellbeing of vulnerable
              population and sustainable development in a Northern and a
              Southern district of the country. Later, they formed the
              organization having approval of the proper authority of the
              Peoples Republic of Bangladesh.
            </p>
          </div>
        </div>
        <div className="min-w-56 text-[#687279]">
          <h1 className="font-bold">Our Office Address:</h1>
          <p>
            2/12 Humayun Road, Mohammadpur, Dhaka-1207
            <br />
          </p>
          <p className="mt-10">Tel: +880 1714-006476</p>
        </div>
      </div>
      <hr className="mt-5" />
      <h1 className="flex-1 mt-5 text-[#687279] ">
        Copyright © {new Date().getFullYear()} FSDG | Developed by FSDG
      </h1>
    </div>
  );
};

export default Footer;
