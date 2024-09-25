import { useAppDispatch } from "../../app/hooks";
import type { Post, ReactionName } from "./postsSlice";
import { reactionAdded } from "./postsSlice";

const reactionEmojis: Record<ReactionName, string> = {
  thumbsUp: "👍",
  tada: "🎉",
  heart: "❤️",
  rocket: "🚀",
  eyes: "👀",
};

interface ReactionButtonsProps {
  post: Post;
}

const ReactionButtons = ({ post }: ReactionButtonsProps) => {
  const dispatch = useAppDispatch();
  const reactionButtons = Object.entries(reactionEmojis).map(
    ([stringName, emoji]) => {
      const reaction = stringName as ReactionName;
      return (
        <button
          key={reaction}
          type="button"
          onClick={() => dispatch(reactionAdded({ postId: post.id, reaction }))}
        >
          {emoji} {post.reactions[reaction]}
        </button>
      );
    }
  );
  return <div className="flex space-x-4 ">{reactionButtons}</div>;
};

export default ReactionButtons;
