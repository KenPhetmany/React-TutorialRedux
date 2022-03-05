import React from "react";
import { useDispatch } from "react-redux";
import { reactionAdded } from "../../services/reducers/todo/todoSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  hooray: "🎉",
  heart: "❤️",
  rocket: "🚀",
  eyes: "👀",
};

export const ReactionButtons = () => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="muted-button reaction-button"
        onClick={() => console.log("shd")}
      >
        {emoji}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};
