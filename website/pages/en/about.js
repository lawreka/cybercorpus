const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

function About(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

	return (
	    <div className="docMainWrapper wrapper">
	      <Container className="mainContainer">
	        <div class="intro">
            A Thesis Presented to The Division of The Arts
          </div>
          <div class="intro">
            Reed College
          </div>
          <div class="intro">
            In Partial Fulfillment of the Requirements for the Degree Bachelor of Arts
          </div>
          <div class="intro">
            Kathryn Isabelle Lawrence
          </div>
          <div class="intro">
            May 2014
          </div>
				</Container>
			</div>
	);
}

module.exports = About;
