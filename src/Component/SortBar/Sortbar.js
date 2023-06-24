import "./Sortbar.css";
import { BiSort } from "react-icons/bi";
export const SortBar = () => {
  return (
    <div className="sortbar">
      <h2>Sort by</h2>
      <div>
        <span>
          <BiSort />
        </span>
        <select>
          <option>Sort by date</option>
          <option>Sort by Upvotes</option>
        </select>
      </div>
    </div>
  );
};
