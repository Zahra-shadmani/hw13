import React, { useState } from "react";
import { classNames } from "./utils/classNames";
export default Middle;
import Offices from "./Offices";

function Middle() {
  const [numformat, setnumformat] = useState<string>("");
  const [numerror, setnumerror] = useState<string>("");
  const onchangenumformatHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const value = event.target.value.trim();

    if (isNaN(Number(value))) {
      return setnumerror("Please enter a valid number");
    }
    setnumerror("");
    setnumformat(value);
  };
  const sumbit = () => {
    if (!!numerror) {
      return;
    } else {
      console.log("sobmit");
    }
  };
  const [, setTextFormat] = useState<string>("");
  const [texterror, setTexterror] = useState<string>("");
  const onchangetextformatHandler: React.ChangeEventHandler<
    HTMLInputElement
  > = (event) => {
    const value = event.target.value.trim();

    if (value.length <= 3) {
      return setTexterror("Please enter a valid text with at least 3 letters");
    }
    setTexterror("");
    setTextFormat(value);
  };

  const [, setTextTwoFormat] = useState<string>("");
  const [textTwoerror, setTextTwoerror] = useState<string>("");
  const onchangetextTwoformatHandler: React.ChangeEventHandler<
    HTMLInputElement
  > = (event) => {
    const value = event.target.value.trim();

    if (value.length <= 3) {
      return setTextTwoerror(
        "Please enter a valid text with at least 3 letters"
      );
    }
    setTextTwoerror("");
    setTextTwoFormat(value);
  };
  const [, setTextTreeFormat] = useState<string>("");
  const [textTreeerror, setTextTreeerror] = useState<string>("");
  const onchangetextTreeformatHandler: React.ChangeEventHandler<
    HTMLInputElement
  > = (event) => {
    const value = event.target.value.trim();

    if (value.length <= 3) {
      return setTextTreeerror(
        "Please enter a valid text with at least 3 letters"
      );
    }
    setTextTreeerror("");
    setTextTreeFormat(value);
  };

  const [, setTextfourFormat] = useState<string>("");
  const [textfourerror, setTextfourerror] = useState<string>("");
  const onchangetextfourformatHandler: React.ChangeEventHandler<
    HTMLInputElement
  > = (event) => {
    const value = event.target.value.trim();

    if (value.length <= 3) {
      return setTextfourerror(
        "Please enter a valid text with at least 3 letters"
      );
    }
    setTextfourerror("");
    setTextfourFormat(value);
  };
  const [numTwoformat, setnumTwoformat] = useState<string>("");
  const [numTwoerror, setnumTwoerror] = useState<string>("");
  const onchangenumTwoformatHandler: React.ChangeEventHandler<
    HTMLInputElement
  > = (event) => {
    const value = event.target.value.trim();

    if (isNaN(Number(value))) {
      return setnumTwoerror("Please enter a valid number");
    }
    setnumTwoerror("");
    setnumTwoformat(value);
  };
  const sumbitited = () => {
    if (
      !!numerror ||
      !!texterror ||
      !!textTwoerror ||
      !!textTreeerror ||
      !!textfourerror ||
      !!numTwoerror
    ) {
      return;
    } else {
      console.log(FormData);
    }
  };
  //////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <div className="flex flex-row ju">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          sumbit();
        }}
        className="w-[500px] flex flex-col  gap-4 ml-20 mt-6"
      >
        <h1 className="text-3xl font-bold mt-4 mb-7">contact us</h1>
        <p className="text-gray-600 mb-8 text-l">
          Need an experienced and skilled hand with custom IT projects? Fill out
          the form to get a free consultation.
        </p>
        <div>
          <label className={"block text-gray-700"}>Your Company Name</label>
          <input
            onChange={onchangetextformatHandler}
            type="text"
            className={classNames(
              "w-full border-b border-gray-300 focus:outline-none focus:border-black",
              !texterror
                ? "border-gray-300 focus:outline-none focus:border-black"
                : "border-red-700"
            )}
          />
          <p className="text-red-700 ">{texterror}</p>
        </div>
        <div>
          <label className="block text-gray-700">Nature of Business</label>
          <input
            onChange={onchangetextTwoformatHandler}
            type="text"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-black"
          />
          <p className="text-red-700 ">{textTwoerror}</p>
        </div>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-gray-700">Address</label>
            <input
              onChange={onchangetextTreeformatHandler}
              type="text"
              className="w-full border-b border-gray-300 focus:outline-none focus:border-black"
            />
            <p className="text-red-700 ">{textTreeerror}</p>
          </div>
          <div>
            <label className=" text-gray-700">Postcode</label>
            <input
              onChange={onchangenumformatHandler}
              value={numformat}
              type="text"
              className={classNames(
                "w-full  border-b border-gray-300 focus:outline-none focus:border-black",
                !numerror
                  ? "border-gray-300 focus:outline-none focus:border-black"
                  : "border-red-700"
              )}
            />
            <p className="text-red-700 ">{numerror}</p>
          </div>
        </div>
        <div>
          <label className="block text-gray-700">Contact name</label>
          <input
            onChange={onchangetextfourformatHandler}
            type="text"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-black"
          />
          <p className="text-red-700 ">{textfourerror}</p>
        </div>
        <div>
          <label className="block text-gray-700">Contact Phone</label>
          <input
            value={numTwoformat}
            onChange={onchangenumTwoformatHandler}
            type="text"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-black"
          />
          <p className="text-red-700 ">{numTwoerror}</p>
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-black"
          />
        </div>
        <div>
          <label className="block text-gray-700">LinkedIn</label>
          <input
            type="text"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-black"
          />
        </div>
        <div>
          <label className="block text-gray-700">
            Let's talk about your idea
          </label>
          <input
            type="text"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-black"
          />
        </div>
        <div className="flex justify-center border-dashed border-2 border-gray-300 p-10 text-center">
          <img width={"25px"} src="icons/uploud.svg" alt="" />
          <button className="bg-white text-gray-700">
            upload additional file
          </button>
          <input className=" hidden" type="file" value="" />
        </div>
        <div>
          <button
            onClick={sumbitited}
            disabled={!!numerror || !!texterror}
            type="submit"
            className="  w-full transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-100 hover:bg-green-500 duration-300  bg-green-500 shadow-lg shadow-green-500/50 text-white py-2 disabled:bg-green-300"
          >
            SUBMIT
          </button>
        </div>
        <div className="flex items-center ">
          <input type="checkbox" className="mr-2" />

          <label className="text-gray-700">
            I want to protect my data by signing an NDA
          </label>
        </div>
      </form>
      <Offices />
    </div>
  );
}
