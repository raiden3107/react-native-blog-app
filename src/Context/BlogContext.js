import createDataCreation from "./createDataCreation";

const blogReducer = (state, actions) => {
  switch (actions.type) {
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: actions.payload.title,
          content: actions.payload.content
        },
      ];
    case "delete_blogpost":
      return state.filter((item) => item.id !== actions.payload);
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "add_blogpost", payload: { title, content } });
    callback()
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
