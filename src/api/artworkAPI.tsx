import axiosInstance from "./axios";

const BASE_URL = "http://localhost:3000";

export const updateArtworkImageUrl = async (id: number, imageUrl: string) => {
  try {
    const response = await axiosInstance.put(
      `${BASE_URL}/mlt_plan/exhib_list/${id}/artwork_image_url`,
      {
        artwork_image_url: imageUrl,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating artwork image URL:", error);
    throw error;
  }
};

export const fetchArtworkImageUrls = async (id: number) => {
  try {
    const response = await axiosInstance.get(
      `/mlt_plan/exhib_list/${id}/artwork_image_url`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching artwork image URLs:", error);
    throw error;
  }
};
