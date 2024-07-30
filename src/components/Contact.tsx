export const Contact = () => {
  return (
    <div className="h-[65vh] bg-slate-700 flex flex-col items-center ">
      <div className="w-[50%] text-center p-6">
        <h1 className="text-[2.2vw] font-bold text-white">Contact Me</h1>
        <h1 className="text-gray-200">
          Please contact me directly at{" "}
          <a href=" mailto:saketsingh00078@gmail.com " className=" underline">
            saketsingh00078@gmail.com
          </a>{" "}
          or through this form.
        </h1>
        <form className="flex flex-col items-center">
          <input
            className="p-3 text-lg rounded-lg w-[80%] my-4 focus:outline-none"
            type="text"
            placeholder="Your Email"
          />
          <textarea
            className="p-3 text-lg rounded-lg w-[80%] h-[25vh] focus:outline-none mb-4"
            placeholder="Your message"
          />
          <button className="text-left px-4 py-2 bg-slate-600 rounded-full text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
