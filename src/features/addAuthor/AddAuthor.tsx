import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../services/store";

export const AddAuthor = (userId: any) => {
  const user = useSelector((state: RootState) =>
    state.users.find((user) => user.id && userId)
  );

  return <span>by {user ? user.name : "Unknown author"}</span>;
};
