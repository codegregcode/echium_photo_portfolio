import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import { Fullscreen } from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState();

  const slides = [
    {
      src: 'https://i.ibb.co/CzFNcWh/793039490023.jpg',
      caption: 'Image 1',
    },
    {
      src: 'https://i.ibb.co/BKXK14y/793039490025.jpg',
      caption: 'Image 2',
    },
    {
      src: 'https://i.ibb.co/Gxvzd4Y/793039490001.jpg',
      caption: 'Image 3',
    },
    {
      src: 'https://i.ibb.co/ysx2dcj/PRINT-17-17-03-24-Leeds-Uni-Circular-Walk-Pentax35-AFM-HP5-400.jpg',
      caption: 'Image 4',
    },
  ];

  const openLightbox = (index) => {
    setSlideIndex(index);
    setIsOpen(true);
  };

  return (
    <div>
      {slides.map((img, index) => (
        <img
          className="thumbnails"
          src={img.src}
          key={img.caption}
          onClick={() => openLightbox(index)}
        />
      ))}

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={slideIndex}
        slides={slides}
        plugins={[Fullscreen]}
      />
    </div>
  );
}

export default App;
