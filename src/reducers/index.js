import { combineReducers } from "redux";
import imagesReducer from "./imagesReducer";
import likeImagesReducer from "./likeImagesReducer";

const reducers = combineReducers({
  images: imagesReducer,
  likedImages: likeImagesReducer,
});

export default reducers;
