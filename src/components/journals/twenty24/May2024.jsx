import { useState } from 'react';
import { Link } from 'react-router-dom';
import Lightbox from 'yet-another-react-lightbox';
import { Fullscreen } from 'yet-another-react-lightbox/plugins';
import Modal from '../../Modal';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import '../../../styles/journal.css';

import { may } from '../../../data/twenty24';

function May2024() {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openLightbox = (index) => {
    setImgIndex(index);
    setLightboxIsOpen(true);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="journal-container">
      <Link to="/index">
        <div className="back-arrow" />
      </Link>
      <div className="top-text">
        <h3>Testing the A1</h3>
        <h4>
          Canon A1 // Flic Film Elektra 100 (Respooled Kodak Aerocolor 100)
        </h4>
        <p>
          developed and scanned at{' '}
          <a href="https://takeiteasylab.com/" target="_blank" rel="noreferrer">
            Take it Easy
          </a>
        </p>
      </div>
      <p onClick={openModal}>click me/read me</p>
      <Modal isOpen={modalIsOpen} onClose={closeModal}>
        <p>
          I&apos;ve had my Canon A1 from a number of years, and for a long time
          it has been mostly sat, unused, at my parent&apos;s house.
        </p>
        <p>
          Xmas &apos;23, and I picked up the camera and realised that A. it
          still worked (well the shutter fired), and B. why haven&apos;t I used
          this camera in years!
        </p>
        <p>
          I bought the Pentax point and shoot, because it&apos;s that much more
          convenient to take travelling. But that convenience comes at a cost,
          which is fine if you&apos;re just pointing and shooting what you see,
          but you soon miss the extra control that you get with an SLR.
        </p>
        <p>
          So, I loaded up the Canon A1 with some Flic Film Elektra 100, and took
          some test shots on a couple of walks in and outside of Leeds.
        </p>
      </Modal>
      <div className="img-container">
        <div className="grid">
          {may.map((img, index) => (
            <div key={img.caption} className="grid-item">
              <img
                className="thumbnails"
                src={img.src}
                onClick={() => openLightbox(index)}
              />
            </div>
          ))}
        </div>
        <Lightbox
          open={lightboxIsOpen}
          close={() => setLightboxIsOpen(false)}
          index={imgIndex}
          slides={may}
          plugins={[Fullscreen]}
        />
      </div>
    </div>
  );
}

export default May2024;
