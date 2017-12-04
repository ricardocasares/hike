// internal
import PostComponent from "./Post";
import PostListComponent from "./PostList";
import { themed } from "providers/Theme";

export const Post = PostComponent;
export const PostList = themed(PostListComponent);
