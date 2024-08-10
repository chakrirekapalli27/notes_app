import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Noteitem from "./Noteitem";
import { BsPlusSquare } from "react-icons/bs";

const Notes = ({ notes, setNotes, filterNote }) => {
  // const [deleteModel, setDeleteModel] = useState(true);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const newNotes = notes.filter((item) => item.id !== id);
    setNotes(newNotes);
    navigate("/");
  };

  return (
    <section className="relative">
      <h1 className="text-gray-700 sticky top-0 text-2xl font-semibold leading-10 px-5 bg-white">
        Notes
      </h1>
      <div className="p-5">
        {filterNote.length === 0 ? (
          <div className="flex justify-center items-center text-gray-700 text-2xl h-full">
            <p>No Notes Found...</p>
          </div>
        ) : (
          <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filterNote.map((note) => (
              <Noteitem
                key={note.id}
                title={note.title}
                details={note.details}
                date={note.date}
                id={note.id}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        )}
        {/* <div className="flex justify-end mt-5">
          <Link
            to="/create-note"
            className="text-white bg-blue-500 px-4 py-2 rounded-lg"
          >
            <BsPlusSquare size={20} />
          </Link>
        </div> */}
      </div>
      {/* {deleteModel && (
        <div className="absolute translate-x-1/2 translate-y-1/2 bg-slate-50 py-3">
          {" "}
        </div>
      )} */}
    </section>
  );
};

export default Notes;
