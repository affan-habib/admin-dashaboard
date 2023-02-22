import { SaveAsOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../reducers/apiSlice";

const EditTodo = ({ shouldUpdate }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector(selectApi);
  return (
    <IconButton
      disabled={loading}
      color="primary"
      onClick={() =>
        // console.log(shouldUpdate)
        dispatch(
          callApi({
            operationId: `api/todos/${shouldUpdate._id}`,
            output: "todoUpdated",
            parameters: {
              method: "PUT",
              body: JSON.stringify(shouldUpdate),
            },
          })
        )
      }
    >
      <SaveAsOutlined />
    </IconButton>
  );
};

export default EditTodo;
