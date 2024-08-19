'use client';
import React, { useState } from 'react';
import styles from '../../homepage.module.css';

interface LikeButtonProps {
  imageId: number;
  initialLikes: number;
}

const LikeButton = ({ imageId, initialLikes }: LikeButtonProps) => {
  const [likes, setLikes] = useState(initialLikes);

  const handleLike = () => {
    setLikes(likes + 1);
    // api call to update like count
  };

  return (
    <button onClick={handleLike} className={styles.likeButton}>
      ❤️ {likes}
    </button>
  );
}

export default LikeButton;
