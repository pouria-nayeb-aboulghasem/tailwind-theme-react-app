const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const API_ENDPOINTS = {
  PhotosQuery: "search/photos",
} as const;

export { API_BASE_URL, API_ACCESS_KEY, API_ENDPOINTS };
