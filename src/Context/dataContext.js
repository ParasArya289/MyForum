import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { forumData } from "../db";

const dataContext = createContext();

export const DataContext = ({ children }) => {
  const [data, setData] = useState(forumData.posts);
  const [user,setUser] = useState(forumData)
  const [sort, setSort] = useState(null);

  const sortedData = useMemo(() => {
    let array = data
    if (sort) {
      if (sort === "date") {
        array = [...array].sort(function (a, b) {
          var dateA = new Date(a.createdAt);
          var dateB = new Date(b.createdAt);
          return dateB - dateA;
        });
        return array;
      } else if (sort === "upvote") {
        array = [...array].sort((a, b) => {
          return b.upvotes - a.upvotes;
        });
        return array;
      }
    }
    return array;
  }, [data, sort]);

  const voteHandler = (vote, id) => {
    if (vote) {
      setData((prev) => {
        return prev.map((post) =>
          post.postId === id ? { ...post, [vote]: post[vote] + 1 } : post
        );
      });
    }
    return;
  };
  console.log(data);

  return (
    <dataContext.Provider value={{user, data, sortedData, setSort, voteHandler }}>
      {children}
    </dataContext.Provider>
  );
};

export const useData = () => useContext(dataContext);
