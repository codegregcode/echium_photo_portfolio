import Journals from './Journals';
import '../styles/IndexPage.css';

function Index() {
  return (
    <div className="index-component">
      <div className="index-text">
        <p>based in Leeds</p>
        <p>snapping away on film</p>
        <a href="https://www.instagram.com/echium_photo/" target="_blank">
          <p>follow me on instagram</p>
        </a>
        <a href="https://www.lomography.com/homes/echium_photo" target="_blank">
          <p>or on lomography</p>
        </a>
        <p>see what i&apos;ve been up to:</p>
      </div>
      <div className="journal-cards">
        <Journals />
      </div>
    </div>
  );
}

export default Index;
