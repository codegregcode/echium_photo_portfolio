import { useState } from 'react';
import { Link } from 'react-router-dom';
import Lightbox from 'yet-another-react-lightbox';
import { Fullscreen } from 'yet-another-react-lightbox/plugins';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import { Inline } from 'yet-another-react-lightbox/plugins';

import 'yet-another-react-lightbox/styles.css';
import '../../../styles/journal.css';

import {
  mansionOfSnakes,
  juneSnapShots,
  restOfJunePhotos,
} from '../../../data/twenty24';

function Jun2024() {
  const [mosImgIndex, setMosImgIndex] = useState(0);
  const [junImgIndex, setJunImgIndex] = useState(0);
  const [restJunImgIndex, setRestJunImgIndex] = useState(0);

  const updateMosImgIndex = ({ mosImgIndex: current }) => {
    setMosImgIndex(current);
  };

  const updateJunImgIndex = ({ junImgIndex: current }) => {
    setJunImgIndex(current);
  };

  const updateRestJunImgIndex = ({ restJunImgIndex: current }) => {
    setRestJunImgIndex(current);
  };

  return (
    <div className="journal-container">
      <Link to="/index">
        <div className="back-arrow" />
      </Link>
      <div className="top-text">
        <h3>Starting to develop</h3>
        <h4>
          Canon A1 & Pentax PC35AF // Kodak Tri-X 400 & Ilford HP5 Plus 400
        </h4>
        <p>
          developed by myself, then scanned at{' '}
          <a href="https://takeiteasylab.com/" target="_blank" rel="noreferrer">
            Take it Easy
          </a>
        </p>
      </div>
      <div className="words-pictures">
        <p>
          I took a photography course when I joined Exeter College back in 2008.
          And whilst I didn&apos;t really enjoy the course (there&apos;s a lot
          of coursework, which I was/am never very good at); I did really enjoy
          taking photos, as well as developing and printing them in the
          darkroom.
        </p>
        <p>
          So, when I started to pick up a camera again at the beginning of this
          year. I knew that developing film and making my own prints was
          something that I wanted to do.
        </p>
        <p>
          I bought all the supplies for developing (printing will come later,
          hopefully), and after it all arrived I decided to take the plunge and
          develop my first roll of film in nearly 16 years (god I feel old).
        </p>
        <p>
          The photos I decided to develop were from a roll of Kodak Tri-X 400. I
          was a bit unsure as to what was actually on the film, but I had an
          idea that it was from my time playing with my old band, Mansion of
          Snakes.
        </p>
        <p>
          Loading the film onto the reel in the pitch black was a bit fiddly,
          and after a number of unsuccessful attempts I finally had the film
          loaded onto the reel and put inside the development tank. I could
          finally leave the pitch black and start adding the necessary chemicals
          to start development.
        </p>
        <p>
          Then came the big moment, after the development, stop, fix and a wash,
          I could finally open the tank and take the film out. As I started to
          pull the film out of the reel, the images began to reveal themselves.
          They were of a recording session of the debut (and final) LP that we
          put out. It looks like we were doing some percussion and vocal
          overdubs.
        </p>
        <Lightbox
          index={mosImgIndex}
          slides={mansionOfSnakes}
          plugins={[Fullscreen, Slideshow, Inline]}
          inline={{
            style: {
              width: '80%',
              aspectRatio: '3 / 2',
              margin: '0 auto',
            },
          }}
          carousel={{
            padding: 0,
            spacing: 0,
            imageFit: '100%',
          }}
          on={{ view: updateMosImgIndex }}
        />
        <p>
          I was super pleased with how they came out (and that any image came
          out at all), so straight away I started developing some b&w film that
          I had taken over the last month.
        </p>
        <p>
          The next shots I took on the Pentax PC35AF. I shot at 380 ISO (on
          Ilford HP5 400 Plus) and developed as if shot at 400.
        </p>
        <Lightbox
          index={junImgIndex}
          slides={juneSnapShots}
          plugins={[Fullscreen, Slideshow, Inline]}
          inline={{
            style: {
              width: '80%',
              aspectRatio: '3 / 2',
              margin: '0 auto',
            },
          }}
          carousel={{
            padding: 0,
            spacing: 0,
            imageFit: '100%',
          }}
          on={{ view: updateJunImgIndex }}
        />
        <p>
          The next set of shots are from two rolls of film (both HP5). The shots
          of the Yorkshire Dales and Lake Coniston were shot and dev&apos;d at
          800, whilst the shots down at Leeds dock of the boats etc were at
          1600.
        </p>
        <Lightbox
          index={restJunImgIndex}
          slides={restOfJunePhotos}
          plugins={[Fullscreen, Slideshow, Inline]}
          inline={{
            style: {
              width: '80%',
              aspectRatio: '3 / 2',
              margin: '0 auto',
            },
          }}
          carousel={{
            padding: 0,
            spacing: 0,
            imageFit: '100%',
          }}
          on={{ view: updateRestJunImgIndex }}
        />
        <p>
          Developing film is fun, printing is more-so (from what I can
          remember), so now I just keep trawling through eBay to see what
          enlargers are for sale...
        </p>
      </div>
    </div>
  );
}

export default Jun2024;
