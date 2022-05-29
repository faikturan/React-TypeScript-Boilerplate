import React from 'react';
import { Code } from '../..';

const BlackCode = (): JSX.Element => (
  <div className="mb-12">
    <h2 className="mb-5 text-gray-600 text-lg font-bold md:text-2xl">Black</h2>
    <Code variant="black" acceptCopy={true}>
      yarn add tailwindcss
    </Code>
  </div>
);

export default BlackCode;
