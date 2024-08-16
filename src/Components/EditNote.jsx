import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
// import useCreateDate from "../useCreateDate";
// import useCreacteDate from "../useCreateData";
import useCreateDate from "../useCreateData";

const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams();

  const note = notes.find((item) => item.id === id);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    if (title && details) {
      const newNote = { ...note, title, details, date };
      const newNotes = notes.map((item) => (item.id === id ? newNote : item));

      setNotes(newNotes);
      navigate("/");
    }
  };

  const handleDelete = () => {
    const newNotes = notes.filter((item) => item.id !== id);
    setNotes(newNotes);
    navigate("/");
  };

  return (
    // <section className="flex justify-center items-center m-2 p-4">
    //   <div className="min-w-[400px] w-[60%] mx-auto bg-[#181717]">
    //     <div className="border-2 p-3 m-2 flex justify-between items-center gap-x-3">
    //       <Link to="/" className="bg-[#525050] p-2 rounded-lg">
    //         <IoIosArrowBack size={20} color="white" />
    //       </Link>
    //       <button
    //         className="border-2 text-white rounded-lg px-4 py-1"
    //         type="submit"
    //         onClick={handleForm}
    //       >
    //         Save
    //       </button>
    //       <button onClick={handleDelete}>
    //         <MdDeleteOutline size={24} color="red" />
    //       </button>
    //     </div>

    //     <form className="flex flex-col gap-y-4 m-2" onSubmit={handleForm}>
    //       <input
    //         name="title"
    //         value={title}
    //         onChange={(e) => setTitle(e.target.value)}
    //         type="text"
    //         placeholder="Title"
    //         autoFocus
    //         className="text-[18px] p-2 bg-transparent border-[1px] text-[white] border-[#525050] rounded-lg outline-[#a8a8a8]"
    //       />
    //       <textarea
    //         name="details"
    //         value={details}
    //         onChange={(e) => setDetails(e.target.value)}
    //         rows="15"
    //         placeholder="Note details..."
    //         className="text-[18px] p-2 bg-transparent border-[1px] text-[white] border-[#525050] rounded-lg outline-[#a8a8a8]"
    //       ></textarea>
    //     </form>
    //   </div>
    // </section>
    <section className="relative">
      <h1 className=" text-gray-700 sticky top-0 text-2xl font-semibold leading-10 px-5 bg-white">
        Edit Notes
      </h1>
      <div className="mx-2">
        <div className="flex justify-between items-center py-1 ">
          <Link to="/" className="border-[#525050] border-[1px] p-2 rounded-lg">
            <IoIosArrowBack size={20} color="#525050" />
          </Link>
          <button
            className="border-gray-500 border px-7 py-2 rounded-lg text-gray-500 cursor-pointer"
            type="submit"
            onClick={handleForm}
          >
            Save
          </button>
        </div>
      </div>
      <div className=" w-[60%] mx-auto">
        <form className="flex flex-col gap-y-4 m-2" onSubmit={handleForm}>
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

export default EditNote;
