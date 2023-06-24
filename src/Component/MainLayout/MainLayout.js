import { Sidebar } from "../Sidebar/Sidebar";
import { SortBar } from "../SortBar/Sortbar";
import "./MainLayout.css";

export const MainLayout = ({ children, showSort }) => {
  return (
    <div className="mainLayout">

      <div className="mainLayout-sidebar">
        <div className="mainLayout-sidebar-content">
          <Sidebar />
        </div>
      </div>

      <div className="mainLayout-children">
        <p>Latest Posts</p>
        <div className="mainLayout-children-content">{children}</div>
      </div>

      <div className="mainLayout-sortbar">
        <div className="mainLayout-sortbar-content">
          <SortBar />
        </div>
      </div>
      
    </div>
  );
};
