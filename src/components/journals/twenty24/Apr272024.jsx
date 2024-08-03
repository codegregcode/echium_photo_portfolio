import { useState } from 'react';
import { Link } from 'react-router-dom';
import Lightbox from 'yet-another-react-lightbox';
import { Fullscreen } from 'yet-another-react-lightbox/plugins';
import Modal from '../../Modal';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import '../../../styles/journal.css';

import { apr27 } from '../../../data/twenty24';

function Apr272024() {
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
        <h3>Porto</h3>
        <h4>Pentax PC35AF // Kodak Gold 200 // Fuji 200 // Metropolis</h4>
        <p>
          developed and scanned at{' '}
          <a href="https://takeiteasylab.com/" target="_blank" rel="noreferrer">
            Take it Easy
          </a>
        </p>
      </div>
      <p onClick={openModal}>click me/read me</p>
      <Modal isOpen={modalIsOpen} onClose={closeModal}>
        <p>will add some more text</p>
      </Modal>
      <div className="img-container">
        <div className="grid">
          {apr27.map((img, index) => (
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
          slides={apr27}
          plugins={[Fullscreen]}
        />
      </div>
    </div>
  );
}

export default Apr272024;
