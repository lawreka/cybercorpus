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
	        <div className="intro">
            <span className="oblique">Cyber Corpus</span> was my final thesis to graduate Reed College in Portland, OR, with an art history degree in May of 2014. Eventually I'd like to link this document with the Virtual Thesis Tower at the Reed library, but for now please enjoy reading my undergraduate adventures in cyberfeminist art history (unedited from the print edition, some footnotes have been re-numbered for clarity).
          </div>
				</Container>
			</div>
	);
}

module.exports = About;
