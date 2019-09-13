/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
      </h2>
    );


    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div class="introtext">
          <div class="intro"><em>Cyber Corpus</em> addresses the new media territory of cyberspace and the ways in which artists have adapted to represent embodied experience on this platform. The way that identities mutate and multiply on the Internet has been examined by feminist discourse and its descendent, cyber-feminism, begetting new representational strategies for female artists.</div>

          <div class="intro">The first chapter addresses the “selfie” as a representational strategy gaining momentum in broader cultural discourses of embodiment in cyberspace. This genre of self-portraiture reveals the male-dominated economy of images and the appropriation of women’s bodies, illustrated by the circulation and appropriation of their images online as pornography. The struggle of women to compose and control their own self-representation is identified in net artists’ revealing works and statements about the tension between their embodied experience and virtual co-existence.</div>

          <div class="intro">The second chapter explores alternative embodiment strategies, proposing the critical construction of individual identity through ambiguity, fragmentation, and networking as a defense against misrepresentation. Redefining cyberspace through the metaphor of the matrix and its connection to metaphors of the female body illustrates attempts to control the flow of information and relates to the problematization of pornographic images in the first chapter. The female body as metaphor and physical reality is complicated by the question of gender identity online and off, which has become increasingly fluid.</div>

          <div class="intro">The third chapter offers another re-conceptualization of the body and its relation to identity in cyberspace by analyzing the representational strategy of inhabiting avatars’ bodies. The disconnection of the surrogate identities of avatars from their human operators has been theorized to transcend the social stratifications of gender, race, and class, allowing the figure of the cyborg freedoms that the human body could not experience without technological mediation. I posit that the Tibetan Buddhist system of bardos is a constructive alternative framework for considering strategies of liberated embodied experience on and offline.</div>
        </div>
      </div>
    );
  }
}

module.exports = Index;
