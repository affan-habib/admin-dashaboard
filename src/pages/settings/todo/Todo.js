import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { callApi } from "../../../reducers/apiSlice";

const Todo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      callApi({
        operationId: "api/todos",
        output: "todo",
      })
    );
  }, []);
  return <div></div>;
};

export default Todo;
