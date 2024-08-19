import styles from "./homepage.module.css";
import ImageCard from "./components/image-card";
import { dummyImages } from "@/dummy-data/homepage";

export default function Home() {
  return (
    <div className={styles.homepage}>
      <h1>The App</h1>
      <div className={styles.imageScroller}>
        {dummyImages.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}
