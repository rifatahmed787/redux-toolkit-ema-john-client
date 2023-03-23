import React from "react";

const Connect = () => {
  return (
    <div className="flex justify-center items-center rounded-lg mt-5 container mx-auto h-80 bg-[#FFEBCD] dark:bg-black dark:border dark:text-white">
      <div>
        <div className="mt-5">
          <h1 className="text-4xl font-serif font-bold">LET'S STAY IN TOUCH</h1>
          <p className="py-2">Get updates on sales, special and more</p>
        </div>
        <div>
          <form>
            <div className="py-3">
              <input
                type="Email"
                placeholder="example@gmail.com"
                className="input input-bordered w-full dark:bg-black dark:text-white dark:border-white"
              />
            </div>
            <button
              type="submit"
              className="btn bg-orange-500 border-none hover:bg-orange-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Connect;
