import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h1>QUBE</h1>
        <p>lighting Solutions Pvt Ltd</p>
        <p>@all right reserved</p>
      </div>
      <div>
        <h5>Address</h5>
        <p>
          Qube lighting solutions Pvt Ltd No.69 2cross near madduramma temple
          road, srigadha kavala heganahalli, Bengalore 560091
        </p>
        <p>Landmark balaji apartment</p>
      </div>
      <div>
        <h5>Phone Number</h5>
        <p>+91 9876543210</p>
      </div>
      <div>
        <h5>Follow Us</h5>

        <div>
          <a href="google.com" target={'blank'}>
            Youtube
          </a>
          <a href="google.com" target={'blank'}>
            Facebook
          </a>
          <a href="google.com" target={'blank'}>
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
