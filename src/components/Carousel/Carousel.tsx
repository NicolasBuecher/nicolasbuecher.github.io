import ImageGallery from "react-image-gallery";
import type { ReactImageGalleryItem } from "react-image-gallery";
import type { ProjectMedia } from "../../types/ProjectMedia";
import "react-image-gallery/styles/css/image-gallery.css";
import "./Carousel.css";


interface CarouselProps {
  content: Array<ProjectMedia>;
}

/**
 * Returns a React component displaying a carousel supporting images and videos.
 *
 * @param {Array<ProjectMedia>} props.content A list of images and/or videos to display in the carousel
 * @returns {JSX.Element}
 */
function Carousel({ content }: CarouselProps): JSX.Element {

  // Custom renderItem function when the item is a video
  const renderVideo = (video: string): JSX.Element => (
    <video
      src={video}
      muted
      autoPlay
      loop
      data-testid="carousel-video"
    />
  );

  // Convert content into ReactImageGallery items
  const items: Array<ReactImageGalleryItem> = content.map<ReactImageGalleryItem>(media => ({
    original : media.img,
    originalAlt : media.alt,
    thumbnail : media.img,
    thumbnailAlt : media.alt,
    loading : "lazy",
    renderItem : media.clip
      ? (() => {
        const { clip } = media;
        return () => renderVideo(clip);
      })()
      : undefined
  }));

  return (
    <ImageGallery
      additionalClass="carousel"
      items={items}
      lazyLoad
      showPlayButton={false}
      showFullscreenButton={items.length !== 0}
    />
  );

}

export default Carousel;
