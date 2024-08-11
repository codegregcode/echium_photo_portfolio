import { animated } from '@react-spring/web';
import useAnimation from '../hooks/useAnimation';
import Journals from './Journals';

import '../styles/IndexPage.css';

function Index() {
  const { props1, props2, props3, props4, props5 } = useAnimation();

  return (
    <div className="index-component">
      <div className="index-text">
        <animated.p style={props1}>based in Leeds</animated.p>
        <animated.p style={props2}>snapping away on film</animated.p>
        <a href="https://www.instagram.com/echium_photo/" target="_blank">
          <animated.p style={props4}>follow me on instagram</animated.p>
        </a>
        <a href="https://www.lomography.com/homes/echium_photo" target="_blank">
          <animated.p style={props5}>or on lomography</animated.p>
        </a>
        <animated.p style={props3}>see what i&apos;ve been up to:</animated.p>
      </div>
      <div className="journal-cards">
        <Journals />
      </div>
    </div>
  );
}

export default Index;
