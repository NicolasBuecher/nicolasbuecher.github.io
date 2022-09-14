import type { Image } from "./Image";
import type { Video } from "./Video";

/**
 * An object representing an image or a video illustrating a project.
 */
export type ProjectMedia = {

  /**
   * An image illustrating the project or an image preview of the video illustrating the project.
   */
  img: Image;

  /**
   * An alt text for the image illustrating the project.
   */
  alt: string;

  /**
   * A video illustrating the project.
   */
  clip?: Video;

}
