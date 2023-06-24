import { forumData } from "../../db";
import "./PostList.css";
import { BiComment } from "react-icons/bi";
import { AiOutlineShareAlt } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";

export const PostList = () => {
  return (
    <div className="postilist-container">
      {forumData.posts?.map((post) => (
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
              <BiComment />
              <AiOutlineShareAlt />
              <BsBookmark />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
