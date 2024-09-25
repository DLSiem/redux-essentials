import { useAppSelector } from "../../app/hooks";
import { selectUserById } from "../users/userSlice";

interface PostAuthorProps {
  userId: string;
}

const PostAuthor = ({ userId }: PostAuthorProps) => {
  const author = useAppSelector((state) => selectUserById(state, userId));
  return (
    <span className="text-sm text-gray-500 ">
      by{" "}
      <span className="font-semibold">
        {author ? author.name : "Unknown author"}
      </span>
    </span>
  );
};

export default PostAuthor;
