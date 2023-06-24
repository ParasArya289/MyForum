import { MainLayout } from "../../Component/MainLayout/MainLayout";
import { PostList } from "../../Component/PostList/PostList";
import "./Home.css";

export const Home = () => {
  return (
    <MainLayout>
      <PostList />
    </MainLayout>
  );
};
