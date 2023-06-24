import { BiComment } from "react-icons/bi";
import { AiOutlineShareAlt } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
export const PostCard = ({ post }) => {
  const navigate = useNavigate();
  return (
    <div key={post.postId} className="postlist-card">
      <div className="postlist-vote">
        <div className="postlist-vote-btn">▲</div>
        <div>{post.upvotes}</div>
        <div className="postlist-vote-btn">▼</div>
      </div>
      <div className="postlist-info">
        <div className="postlist-info-header">
          <img src={post.picUrl} height="40" alt="profile" />
          <span>
            Posted by <span>@{post.username}</span>
          </span>
        </div>
        <div className="postlist-info-content">
          <h2>{post.post}</h2>
          {post.tags.map((tag) => (
            <span className="postilists-info-tags">{tag}</span>
          ))}
          <p>{post.postDescription}</p>
        </div>
        <hr />
        <div className="postlist-actions">
          <BiComment onClick={() => navigate("/post/" + post.postId)} />
          <AiOutlineShareAlt />
          <BsBookmark />
        </div>
      </div>
    </div>
  );
};
