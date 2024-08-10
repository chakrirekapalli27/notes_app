import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Noteitem = ({ title, details, date, id, handleDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const colors = [
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4caf50",
    "#8bc34a",
    "#cddc39",
    "#ffeb3b",
    "#ffc107",
    "#ff9800",
    "#ff5722",
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return (
    // <div className="bg-white p-3 rounded-lg border-l-[3px]  border-red-600">
    <div
      className={`bg-white p-3 rounded-lg border-l-[3px]`}
      style={{ borderColor: randomColor }}
    >
      <div className=" flex justify-end items-center gap-x-3 ">
        <Link to={`/edit-note/${id}`}>
          <FaRegEdit size={22} color={randomColor} />
        </Link>
        <button onClick={() => handleDelete(id)}>
          <MdDeleteOutline size={24} color={randomColor} />
        </button>
      </div>
      <h1 className="text-lg font-medium text-[20px] capitalize pt-3">
        {isExpanded ? (
          title
        ) : title.length > 30 ? (
          <>
            {title.substr(0, 30)}
            <span
              onClick={toggleExpanded}
              className="text-blue-500 cursor-pointer"
            >
              {" "}
              ...
            </span>
          </>
        ) : (
          <span onClick={toggleExpanded}>{title}</span>
        )}
      </h1>
      <p className="text-gray-400 text-[16px] pt-2 pb-3">
        {details.length > 80 ? details.substr(0, 80) + "..." : details}
      </p>
      <div className="flex justify-end items-center">
        <span className="text-gray-500 text-sm">{date}</span>
      </div>
    </div>
  );
};

export default Noteitem;
