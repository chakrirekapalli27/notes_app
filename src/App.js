import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Notes from "./Components/Notes";
import CreateNote from "./Components/CreateNote";
import EditNote from "./Components/EditNote";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import { PiNotebook } from "react-icons/pi";
import { useTheme } from "./ContextTheme";
import classname from "classname";
import ThemeToggleButton from "./toggelBtn";

function App() {
  const { theme } = useTheme();

  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [text, setText] = useState("");
  const [filterNote, setFilterNote] = useState(notes);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
    setFilterNote(notes);
  }, [notes]);

  const handleSearch = (e) => {
    const searchText = e.target.value;
    setText(searchText);

    if (searchText === "") {
      setFilterNote(notes);
    } else {
      setFilterNote(
        notes.filter((note) =>
          note.title.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }
  };

  return (
    <BrowserRouter>
      <main
        id="app"
        className={classname("bg-black relative min-h-screen py-10 ", {
          "!bg-gray-100": theme === "light",
        })}
      >
        {/* <ThemeToggle /> */}
        <div className="right-5 absolute top-2">
          <ThemeToggleButton />
        </div>

        <div className=" relative w-[93%] lg:w-[80%] mx-auto mt-4 bg-white rounded-xl overflow-hidden shadow-2xl border-t-4 border-blue-500 border-b-2 p-3">
          <div className="pt-14 md:pt-2 bg-white">
            <div className="w-[70%] mx-auto flex justify-center items-center flex-col md:flex-row gap-3">
              <div className="relative w-full">
                <input
                  name="search"
                  value={text}
                  onChange={handleSearch}
                  placeholder="Search..."
                  type="text"
                  className="bg-gray-200 py-2 pl-10 w-full rounded-lg text-gray-700 outline-none"
                />
                <div className="absolute top-3 left-3">
                  <FiSearch color="black" size={20} />
                </div>
              </div>
              <div className="border-gray-500 border px-7 py-2 rounded-lg text-gray-500 cursor-pointer">
                <Link to="/create-note">
                  <div className="flex justify-center items-center">
                    <span className="mr-2"> Add</span> <FaPlus size={15} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-[#eaeaea] h-[450px] overflow-y-scroll hide-scrollbar">
            <Routes>
              <Route
                path="/"
                element={
                  <Notes
                    {...{
                      notes,
                      setNotes,
                      filterNote,
                      setFilterNote,
                      text,
                      setText,
                    }}
                  />
                }
              />
              <Route
                path="/create-note"
                element={<CreateNote setNotes={setNotes} />}
              />
              <Route
                path="/edit-note/:id"
                element={<EditNote notes={notes} setNotes={setNotes} />}
              />
            </Routes>
          </div>
          <div className="absolute top-6 right-6 bg-slate-600 p-2 rounded-full">
            <div className="relative">
              <PiNotebook size={20} color="white" />
              <div className="p-1 w-auto min-w-[20px] h-[20px] text-xs text-white bg-red-500 rounded-full absolute -right-3 -top-3 flex justify-center items-center shrink-0">
                {notes.length}
              </div>
            </div>
          </div>
          <div className="absolute top-1 left-3 p-2 text-[25px] font-semibold text-blue-600">
            My Notes
          </div>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
