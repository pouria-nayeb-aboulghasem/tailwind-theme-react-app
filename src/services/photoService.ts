import {
  API_ACCESS_KEY,
  API_BASE_URL,
  API_ENDPOINTS,
} from "@/constants/apiEndpoints";

async function searchPhotos(query: string) {
  const response = await fetch(
    `${API_BASE_URL}/${API_ENDPOINTS.PhotosQuery}?query=${query.toLocaleLowerCase().trim()}&per_page=12`,
    {
      headers: {
        Authorization: `Client-ID ${API_ACCESS_KEY}`,
      },
    },
  );

  if (!response.ok) throw new Error(`Unsplash API error: ${response.status}`);

  return response.json();
}

export { searchPhotos };
