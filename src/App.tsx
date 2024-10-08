import "./App.css";
import Middle from "./components/Middle";
function App() {
  return (
    <>
   <div>
   <header className=" sm:hidden md:block w-full bg-white py-4 shadow">
                        <div className=" flex">
                            <h1 className="text-xl font-bold mr-[450px] flex ml-2">LOGO
                              <img width={"30px"} src="icons/check-mark-button-svgrepo-com.svg" alt="" />
                            </h1>
                            <nav className="flex gap-10">
                                <a href="#" className="text-gray-600 hover:text-black  hover:underline">Company</a>
                                <a href="#" className="text-gray-600 hover:text-black hover:underline">Services</a>
                                <a href="#" className="text-gray-600 hover:text-black hover:underline">FinTech Solutions</a>
                                <a href="#" className="text-gray-600 hover:text-black hover:underline">Products</a>
                                <a href="#" className="text-gray-600 hover:text-black hover:underline">Portfolio</a>
                                <a href="#" className="text-gray-600 hover:text-black hover:underline">Contact us</a>
                            </nav>
                        </div>
                    </header>
                    <Middle/>
                 </div>
      
    </>
  );
}

export default App;
