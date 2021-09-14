import axios from "axios";
import format from "date-fns/format";

import { FETCH_IMAGES, ADD_LIKED_IMAGE, REMOVE_LIKED_IMAGE } from "./types";

const baseURL = "https://api.nasa.gov/mars-photos";

export const fetchImages =
  (date = format(new Date(), "yyyy-MM-dd")) =>
  async (dispatch) => {
    try {
      const imagesRes = await axios.get(
        `${baseURL}/api/v1/rovers/curiosity/photos`,
        {
          params: {
            earth_date: date,
            api_key: process.env.REACT_APP_NASA_API_KEY,
          },
        }
      );

      dispatch({
        type: FETCH_IMAGES,
        payload: imagesRes.data.photos,
      });
    } catch (e) {
      console.error(`Error fetching images from NASA API: ${e.message}`);
    }
  };

export const addLikedImage = (id) => async (dispatch, getState) => {
  const { images } = getState();
  const likedImage = images.filter((img) => id === img.id.toString())[0];
  dispatch({
    type: ADD_LIKED_IMAGE,
    payload: likedImage,
  });
};

export const removeLikedImage = (id) => {
  return {
    type: REMOVE_LIKED_IMAGE,
    payload: id,
  };
};
