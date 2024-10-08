export default Offices;

function Offices() {
  return (
    <section className=" flex flex-1 ml-[50px] justify-center mt-52">
      <div className="w-full flex flex-col  md:w-1/2 mt-8 md:mt-0 md:pl-8 ">
        <h2 className="text-xl font-bold mb-4">Offices</h2>
        <p className="text-gray-700 mb-5">
          <h4>United States</h4>
          500 5th Avenue Suite 400, NY 10110
        </p>
        <p className="text-gray-700 mb-5">
          <h4>United Kingdom</h4>
          High St, Bromley BR1 1DN
        </p>
        <p className="text-gray-700 mb-4">
          <h4>France</h4>
          80 avenue des Terroirs de France, Paris
        </p>
        <h2 className="text-xl font-bold mb-4">For Quick Inquiries</h2>
        <p className="text-gray-700 mb-4 flex">
          <img
            width={"23px"}
            src="icons/Flag_of_the_United_Kingdom_(3-5).svg"
            alt=""
          />

          <span className="ml-2">+44 7777777777</span>
        </p>
        <p className="text-gray-700 mb-4 flex">
          <img
            width={"23px"}
            src="icons/Flag_of_the_United_States.svg"
            alt=""
          />
          <span className="ml-2">+1 3333333330</span>
        </p>
        <h2 className="text-xl font-bold mb-4">
          Would you like to join our newsletter?
        </h2>
        <div className="flex items-center">
          <input
            type="email"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-black"
            placeholder="Email"
          />
          <button className=" ml-5 p-2 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-100 hover:bg-green-500 duration-300  bg-green-500 shadow-lg shadow-green-500/50 text-white py-2 disabled:bg-green-300">
            <img
              className="w-[20px] "
              src="icons/check-regular-24.png"
              alt="check"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
