import { useAppSelector } from "../../app/hooks";
import { selectUserById } from "../users/userSlice";

interface PostAuthorProps {
  userId: string;
}

const PostAuthor = ({ userId }: PostAuthorProps) => {
  const author = useAppSelector((state) => selectUserById(state, userId));
  return (
    <span className="text-sm text-gray-500 italic">
      by {author ? author.name : "Unknown author"}
    </span>
  );
};

export default PostAuthor;
