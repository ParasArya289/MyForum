import "./Sortbar.css";
import { BiSort } from "react-icons/bi";
import { useData } from "../../Context/dataContext";
export const SortBar = () => {
  const { setSort } = useData();
  return (
    <div className="sortbar">
      <h2>Sort by</h2>
      <div>
        <span>
          <BiSort />
        </span>
        <select onChange={(e) => setSort(e.target.value)}>
          <option disabled defaultChecked>
            Sort
          </option>
          <option value="date">Sort by date</option>
          <option value="upvote">Sort by Upvotes</option>
        </select>
      </div>
    </div>
  );
};
