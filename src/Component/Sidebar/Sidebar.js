import "./Sidebar.css";

import { BiUserCircle } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { BsRocket } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <AiOutlineHome />
        <span>Home</span>
      </div>
      <div>
        <BsRocket />
        <span>Explore</span>
      </div>
      <div>
        <BsBookmark />
        <span>Bookmark</span>
      </div>
      <div>
        <BiUserCircle />
        <span>Profile</span>
      </div>
    </div>
  );
};
