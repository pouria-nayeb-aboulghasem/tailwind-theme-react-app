import { useEffect, useState } from "react";
import type { UnsplashPhoto } from "@/types";
import { searchPhotos } from "@/services";

function usePhotos(query: string) {
  const [photos, setPhotos] = useState<UnsplashPhoto[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    async function loadPhotos() {
      try {
        setLoading(true);

        const data = await searchPhotos(query);

        setPhotos(data.results);
        setTotal(data.total);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch Photos");
      } finally {
        setLoading(false);
      }
    }

    void loadPhotos();
  }, [query, refreshKey]);

  function refresh() {
    setRefreshKey((key) => key + 1);
  }

  return { photos, total, loading, error, refresh };
}

export { usePhotos };
