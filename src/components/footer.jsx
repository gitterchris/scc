import React from 'react';

const Footer = () => (
  <div id="footer-wrapper">
    <footer
      id="page-footer"
      className="container"
    >
      <div className="row">
        <div className="12u">
          <div className="side-padded">
            <section>
              <h2>Contact Us</h2>
              <p>
                If you are interested in working with us, or just want to say hello,
                send us a message or give us a call.
              </p>
              <ul className="contact">
                <li className="fa-home">
                  Suniga Construction Company
                  <br />
                  61 Serrano Ramos
                  <br />
                  Tarlac, Philippines
                </li>
                <li className="fa-envelope">
                  <a href="emailto:scc_suniga@yahoo.com">scc_suniga@yahoo.com</a>
                </li>
                <li className="fa-facebook">
                  <a href="http://www.facebook.com/scc">facebook.com/scc</a>
                </li>
                <li className="fa-phone">
                  +63 929 114-0026
                </li>
              </ul>
            </section>

          </div>
        </div>
      </div>
      <div id="copyright">
        Copyright &copy; Suniga Construction Company, Inc. All rights reserved. Website powered by
        {' '}
        <a href="http://www.chrisababan.com">Chris Ababan</a>
        .
      </div>
    </footer>
  </div>
);

export default Footer;
