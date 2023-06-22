import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import {
  Text,
  ExternalLink,
} from '@atoms';
import {
  Layout,
} from '@templates';
import ending from '../public/end-ing-story.png';

const MePage = () => (
  <Layout>
    <SBody>
      <SImage src={ending} alt="A collage of screenshots of possible domain names ending with .ng" width={400} height={600} />
      <SText styleType="regular">
        <p>Hey there, I&apos;m Nico. Welcome to end-i.ng</p>
        <p>Truth is, it&apos;s really just the beginning.</p>
        <p>
          I&apos;m 🇺🇸🇩🇪🇲🇽🇪🇸 and grew up in Berkeley, CA. I graduated from Stanford in 2020 with a major in Computer Science, specializing in artificial intelligence. Since then, I&apos;ve been in Brooklyn (that&apos;s sick dude) finding myself at the intersection of design and engineering. First at
          {' '}
          <ExternalLink href="https://cent.co/">Cent</ExternalLink>
          {' '}
          and now
          {' '}
          <ExternalLink href="https://taxbit.com/enterprise-accounting">TaxBit</ExternalLink>
          . Interested in my work? Check out
          {' '}
          <ExternalLink href="https://www.dropbox.com/s/efw44sg6f3zu9i5/nicolai-garcia_design-portfolio.pdf?dl=0">my portfolio</ExternalLink>
          .
        </p>
        <p>
          Outside of the professional world, I like to dance, snowboard, and take the occasional photo. I&apos;m constantly thinking about the\
          {' '}
          <ExternalLink href="https://www.moma.org/calendar/exhibitions/5440">Wolfgang Tillmans MoMA show</ExternalLink>
          {' '}
          and Ludwig Mies van der Rohe&apos;s
          {' '}
          <ExternalLink href="https://en.wikipedia.org/wiki/Farnsworth_House">Farnsworth House</ExternalLink>
          . Artists that have been in my rotation lately are Little Dragon, Frank Ocean, Nicolas Jaar, Young Nudy, and The Blaze. &ldquo;–&rdquo; is a concept I&apos;m working on. More on that to come.
        </p>
        <p>I hope you enjoy my little corner of the internet. HMU with any questions / suggestions.</p>
        <p>Also, shout out 🇳🇬 for the domain.</p>
        <p>--</p>
        <p><ExternalLink href="mailto:nicolaigarciastudios@gmail.com">Electronic mail</ExternalLink></p>
        <p><ExternalLink href="https://www.instagram.com/galeo_00/">Gram</ExternalLink></p>
        <p><ExternalLink href="https://twitter.com/galeo_00">Twitter</ExternalLink></p>
        <p><ExternalLink href="https://www.linkedin.com/in/nicolai-garcia-66254114b/">LinkedIn</ExternalLink></p>
        <p><ExternalLink href="https://music.apple.com/profile/galeo_00">Apple Music</ExternalLink></p>
      </SText>
    </SBody>
  </Layout>
);

const SBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const SImage = styled(Image)`
  padding: 0;
`;

const SText = styled(Text)`
  margin-top: 32px;
  width: 100%;
  max-width: 800px;
`;

export default MePage;
