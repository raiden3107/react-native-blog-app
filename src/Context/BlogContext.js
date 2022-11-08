import createDataCreation from "./createDataCreation";

const blogReducer = (state, actions) => {
  switch (actions.type) {
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: `Blog # ${state.length + 1}`,
        },
      ];
    case "delete_blogpost":
      return state.filter((item) => item.id !== actions.payload);
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "add_blogpost" });
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

export const { Context, Provider } = createDataCreation(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
);
