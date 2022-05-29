import React from 'react';
import Socials from './Socials';
import Body from './FooterBody';
import Copywrite from './Copywrite';
import clsx from 'clsx';

import pjson from '../../../../package.json';
const { author, repository, version } = pjson;

export default function Footer() {
  return (
    <footer
      className={clsx('text-center lg:text-left bg-gray-100 text-gray-600')}
    >
      <Socials
        className={clsx('bg-secondary border-bottom border-gray-600')}
        github={repository}
      />
      {/* <Body /> */}
      <Copywrite
        className="bg-secondary"
        repo={repository}
        author={author}
        version={version}
      />
    </footer>
  );
}
