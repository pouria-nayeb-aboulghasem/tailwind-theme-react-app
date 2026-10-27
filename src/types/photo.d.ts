type UnsplashPhoto = {
  id: string;
  alt_description: string | null;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  user: {
    name: string;
    links: {
      html: string;
    };
  };
};

type UnsplashSearchResponse = {
  total: number;
  total_pages: number;
  results: UnsplashPhoto[];
};

export type { UnsplashPhoto, UnsplashSearchResponse };
