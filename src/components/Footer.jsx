import { useState } from 'react';
import Modal from './Modal';

function Footer() {
  const [footerIsOpen, setFooterIsOpen] = useState(false);

  const openFooter = () => {
    setFooterIsOpen(true);
  };

  const closeFooter = () => {
    setFooterIsOpen(false);
  };

  return (
    <>
      <p className="footer" onClick={openFooter}>
        Copyright 2024 Greg Cain
      </p>
      <Modal isOpen={footerIsOpen} onClose={closeFooter}>
        <h4>Thanks</h4>
        <a target="_blank" href="https://icons8.com/icon/407/rewind">
          Rewind
        </a>{' '}
        icon by{' '}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
        <h4>Image Use Policy</h4>
        <p>
          The images included in this project are owned by Greg Cain and are not
          covered by the MIT License. They are provided for viewing within the
          context of this website only and may not be copied, reused, or
          redistributed without explicit permission from the owner.
        </p>
        <h4>License</h4>
        <p>
          MIT License Copyright (c) 2024 Greg Cain Permission is hereby granted,
          free of charge, to any person obtaining a copy of this software and
          associated documentation files (the &quot;Software&quot;), to deal in
          the Software without restriction, including without limitation the
          rights to use, copy, modify, merge, publish, distribute, sublicense,
          and/or sell copies of the Software, and to permit persons to whom the
          Software is furnished to do so, subject to the following conditions:
          The above copyright notice and this permission notice shall be
          included in all copies or substantial portions of the Software.
          <br />
          THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY
          KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
          OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
          NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
          LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
          OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
          WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </p>
      </Modal>
    </>
  );
}

export default Footer;
