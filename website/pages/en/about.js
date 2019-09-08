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
	        <div>
	          <header>
	            <h1>Hi beech</h1>
	          </header>
					</div>
				</Container>
			</div>
	);
}

module.exports = About;
