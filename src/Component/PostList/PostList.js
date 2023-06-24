import "./PostList.css";

import { useNavigate } from "react-router-dom";
import { PostCard } from "../PostCard/PostCard";
import { useData } from "../../Context/dataContext";

export const PostList = () => {
  const { sortedData } = useData();
  return (
    <div className="postilist-container">
      {sortedData?.map((post) => (
        <PostCard post={post} />
      ))}
    </div>
  );
};

// {forumData.posts?.map((post) => (
//   <div key={post.postId} className="postlist-card">
//     <div className="postlist-vote">
//       <div className="postlist-vote-btn">▲</div>
//       <div>{post.upvotes}</div>
//       <div className="postlist-vote-btn">▼</div>
//     </div>
//     <div className="postlist-info">
//       <div className="postlist-info-header">
//         <img src={post.picUrl} height="40" alt="profile" />
//         <span>
//           Posted by <span>@{post.username}</span>
//         </span>
//       </div>
//       <div className="postlist-info-content">
//         <h2>{post.post}</h2>
//         {post.tags.map((tag) => (
//           <span className="postilists-info-tags">{tag}</span>
//         ))}
//         <p>{post.postDescription}</p>
//       </div>
//       <hr />
//       <div className="postlist-actions">
//         <BiComment onClick={() => navigate("/post/" + post.postId)} />
//         <AiOutlineShareAlt />
//         <BsBookmark />
//       </div>
//     </div>
//   </div>
// ))}
