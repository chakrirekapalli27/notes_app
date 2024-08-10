import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import useCreateDate from "../useCreateData";

const CreateNote = ({ setNotes }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const date = useCreateDate();

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && details) {
      const note = { id: uuid(), title, details, date };
      setNotes((prevNotes) => [note, ...prevNotes]);
      navigate("/");
    }
  };

  return (
    // <section className="flex justify-center items-center m-2 p-4">
    //   <div className="">
    //     <div className="border-2 p-3 m-2 flex justify-between items-center gap-x-3">
    //       <Link to="/" className="bg-[#525050] p-2 rounded-lg">
    //         <IoIosArrowBack size={20} color="white" />
    //       </Link>
    //       <h1 className="text-white text-[24px] font-medium">Create Note</h1>
    //       <button
    //         className="border-2 text-white rounded-lg px-4 py-1"
    //         type="submit"
    //         onClick={handleSubmit}
    //       >
    //         Save
    //       </button>
    //     </div>

    //     <form className="flex flex-col gap-y-4 m-2" onSubmit={handleSubmit}>
    //       <input
    //         type="text"
    //         placeholder="Title"
    //         autoFocus
    //         name="title"
    //         onChange={(e) => setTitle(e.target.value)}
    //         value={title}
    //         className="text-[18px] p-2 bg-transparent border-[1px] text-[white] border-[#525050] rounded-lg outline-[#a8a8a8]"
    //       />
    //       <textarea
    //         name="details"
    //         onChange={(e) => setDetails(e.target.value)}
    //         value={details}
    //         rows="15"
    //         placeholder="Note details..."
    //         className="text-[18px] p-2 bg-transparent border-[1px] text-[white] border-[#525050] rounded-lg outline-[#a8a8a8]"
    //       ></textarea>
    //     </form>
    //   </div>
    //   <div className="border-2 py-10 border-black px-2"></div>
    // </section>
    <section className="relative">
      <h1 className="text-gray-700 sticky top-0 text-2xl font-semibold leading-10 px-5 bg-white">
        Create Notes
      </h1>
      <div className="mx-2">
        <div className="flex justify-between items-center py-1 ">
          <Link to="/" className="border-[#525050] border-[1px] p-2 rounded-lg">
            <IoIosArrowBack size={20} color="#525050" />
          </Link>
          <button
            className="border-gray-500 border px-7 py-2 rounded-lg text-gray-500 cursor-pointer"
            type="submit"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
      <div className=" w-[60%] mx-auto">
        <form className="flex flex-col gap-y-4 m-2" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            autoFocus
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="text-[18px] p-2 bg-transparent border-[1px] text-[#525050] border-[#525050] rounded-lg outline-[#a8a8a8]"
          />
          <textarea
            name="details"
            onChange={(e) => setDetails(e.target.value)}
            value={details}
            rows="9"
            placeholder="Note details..."
            className="text-[18px] p-2 bg-transparent border-[1px] text-[#525050] border-[#525050] rounded-lg outline-[#a8a8a8]"
          ></textarea>
        </form>
      </div>
    </section>
  );
};

export default CreateNote;
