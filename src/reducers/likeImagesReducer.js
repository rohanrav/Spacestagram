import { ADD_LIKED_IMAGE, REMOVE_LIKED_IMAGE } from "../actions/types";

const likeImagesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_LIKED_IMAGE:
      return [action.payload, ...state];
    case REMOVE_LIKED_IMAGE:
      return state.filter((ele) => ele.id.toString() !== action.payload);
    default:
      return state;
  }
};

export default likeImagesReducer;
