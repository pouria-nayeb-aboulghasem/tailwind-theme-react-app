import type { UnsplashPhoto } from "@/types";

type PhotoCardProps = {
  photo: UnsplashPhoto;
};

function PhotoCard({ photo }: PhotoCardProps) {
  return (
    <figure>
      <img
        src={photo.urls.small}
        alt={photo.alt_description ?? "Unsplash photo"}
        className="h-64 w-full rounded-xl object-cover"
      />

      <figcaption>
        Photo by <a href={photo.user.links.html}>{photo.user.name}</a> on{" "}
        <a href="https://unsplash.com">Unsplash</a>
      </figcaption>
    </figure>
  );
}

export default PhotoCard;
