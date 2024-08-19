import React from 'react'
import Image from "next/image";
import styles from "../../homepage.module.css";
import LikeButton from '../like-button';
import { ImageData } from "../../types";

export const ImageCard = ({ image }:{image: ImageData}) => {
  return (
    <div className={styles.imageCard}>
        <Image
          src={image.url}
          alt={image.caption}
          width={600}
          height={800}
          layout="responsive"
        />
        <p className={styles.caption}>{image.caption}</p>
        <LikeButton imageId={image.id} initialLikes={image.likes} />
      </div>
  )
}

export default ImageCard;