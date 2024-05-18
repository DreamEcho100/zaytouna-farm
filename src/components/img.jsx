"use client";

import Image from "next/image";
import { forwardRef } from "react";

// /**
//  * @param {object} param0
//  * @param {string} param0.src
//  */
// function imageLoader({ src }) {
//   return `/images/${src}`; // REPLACE WITH YOUR IMAGE DIRECTORY
// }

/**
 * @typedef {import("next/image").ImageProps} NextImageProps
 *
 * @typedef {Omit<NextImageProps, 'alt'> & { alt?: string; }} ImgProps
 */

const Img = forwardRef(
  /**
   * @param {ImgProps} props
   * @param {React.ForwardedRef<HTMLImageElement>} ref
   */
  ({ alt, ...props }, ref) => {
    return <Image alt="" {...props} ref={ref} />;
  },
);

Img.displayName = "Img";

export default Img;
