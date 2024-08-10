import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case "/create-note":
        return "Create Note";
      case "/edit-note/:id":
        return "Edit Note";
      default:
        return "Notes";
    }
  };

  return (
    <h1 className="text-gray-700 text-2xl font-semibold leading-10 px-5">
      {getTitle()}
    </h1>
  );
};

export default Header;
