import React from 'react';
import { List } from 'semantic-ui-react';
import './footer.css';

const Footer = () => (
  <div id="footer-wrapper">
    <footer
      className="page-footer container middle"
    >
      <section>
        <h2>Contact Us</h2>
        <p>
          If you are interested in working with us, or just want to say hello,
          send us a message or give us a call.
        </p>
        <List>
          <List.Item>
            <List.Icon  name="home" />
            <List.Content>
              <List.Header>
                Suniga Construction Company
              </List.Header>
              <List.Description>
                <p>
                  61 Serrano Ramos
                  <br />
                  Tarlac, Philippines
                </p>             
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item 
            icon="mail"
            content={
              <a 
                target="_blank"
                href="emailto:design_build@sunigaconstruction.com"
              >
                design_build@sunigaconstruction.com
              </a>
            }
          />
          <List.Item 
            icon="phone"
            content="+63 919 004 3037"
          />
          <List.Item 
            icon="facebook"
            content={
              <a 
                target="_blank"
                href="https://www.facebook.com/suniga.company"
              >
                facebook.com/suniga.company
              </a>
            }
          />
          <List.Item 
            icon="youtube"
            content={
              <a 
                target="_blank"
                href="https://www.youtube.com/c/SccTV28"
              >
                youtube.com/c/SccTV28
              </a>
            }
          />
        </List>
      </section>

      <div className="copyright">
        Copyright &copy; Suniga Construction Company, Inc. All rights reserved.
      </div>
    </footer>
  </div>
);

export default Footer;
