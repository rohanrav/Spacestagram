import { FETCH_IMAGES } from "../actions/types";

const imagesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_IMAGES:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default imagesReducer;
