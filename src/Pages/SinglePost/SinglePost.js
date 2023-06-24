import { useNavigate, useParams } from "react-router-dom";
import { MainLayout } from "../../Component/MainLayout/MainLayout";
import { PostCard } from "../../Component/PostCard/PostCard";
import { forumData } from "../../db";
import "./SinglePost.css";

import { BiComment } from "react-icons/bi";
import { AiOutlineShareAlt } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";

export const CommentCard = ({ comment, replyingTo }) => {
  return (
    <div className="comment-container">
      <div>
        <img src={comment.picUrl} height="40" width="40" />
      </div>
      <div className="comment-info">
        <span>
          {comment.name} <span>@{comment.username}</span>
        </span>
        <div>
          Replying to <span>@{replyingTo}</span>
        </div>
        <p>{comment.comment}</p>
        <div className="comment-action">
          <AiOutlineHeart />
          <BiComment />
          <AiOutlineShareAlt />
        </div>
      </div>
    </div>
  );
};

export const SinglePost = () => {
  const { id } = useParams();
  const post = forumData.posts.find(({ postId }) => postId === id);
  const navigate = useNavigate();
  return (
    <MainLayout hideShort>
      <div className="singlepost">
        <div className="singlepost-header" onClick={()=>navigate("/")}>
          <BiArrowBack /> <span>Home</span>
        </div>
        <PostCard post={post} />
        {post.comments.map((com) => (
          <CommentCard comment={com} replyingTo={post.username} />
        ))}
      </div>
    </MainLayout>
  );
};
