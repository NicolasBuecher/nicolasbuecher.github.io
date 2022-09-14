import type { Image } from "./Image";
import type { ProjectMedia } from "./ProjectMedia";


/**
 * An object representing a project.
 */
export type Project = {

  /**
   * A unique ID identyfing the project.
   */
  id: number;

  /**
   * An image illustrating the project.
   */
  img: Image;

  /**
   * An alt text for the image illustrating the project.
   */
  alt: string;

  /**
   * The title of the project. Must be really short.
   */
  title: string;

  /**
   * The subtitle of the project. Must be really concise.
   */
  subtitle: string;

  /**
   * The description of the project. A line break will be inserted between each string of the array.
   */
  description: Array<string>;

  /**
   * The launch date of the project.
   */
  date: string;

  /**
   * The URL to the project.
   */
  link?: string;

  /**
   * Whether I own the final project or not.
   */
  owned: boolean;

  /**
   * The URL to the GitHub repository of the project.
   */
  github?: string;

  /**
   * A list of media illustrating the project.
   */
  media: Array<ProjectMedia>;

}
