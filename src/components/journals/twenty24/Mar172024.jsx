import { useState } from 'react';
import { Link } from 'react-router-dom';
import Lightbox from 'yet-another-react-lightbox';
import { Fullscreen } from 'yet-another-react-lightbox/plugins';
import Modal from '../../Modal';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import '../../../styles/journal.css';

import { mar17 } from '../../../data/twenty24';

function Mar172024() {
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
        <h3>
          a test,
          <br /> a start
        </h3>
        <h4>Pentax PC35AF // Ilford HP5+400</h4>
        <p>
          developed and scanned at{' '}
          <a href="https://takeiteasylab.com/" target="_blank" rel="noreferrer">
            Take it Easy
          </a>
        </p>
      </div>
      <p onClick={openModal}>click me/read me</p>
      <Modal isOpen={modalIsOpen} onClose={closeModal}>
        <>
          <p>i bought a new (to me) camera, a Pentax PC35AF</p>
          <p>
            to test it out i loaded it with some HP5+, and took the camera out
            on a quiet wander through Leeds Uni
          </p>
          <p>
            everything seems ok with the camera; looking forward to taking more
            photos with it
          </p>
        </>
      </Modal>
      <div className="img-container">
        <div className="grid">
          {mar17.map((img, index) => (
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
          slides={mar17}
          plugins={[Fullscreen]}
        />
      </div>
    </div>
  );
}

export default Mar172024;
