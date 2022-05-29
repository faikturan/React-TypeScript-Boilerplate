import React from 'react';
import { Button } from '../..';

const SizedButtons = (): JSX.Element => (
  <div className="mb-12">
    <h2 className="mb-3 text-gray-600 text-lg font-bold md:text-2xl">
      Different sizes
    </h2>
    <div className="mb-4 space-x-1 space-y-3 md:space-x-6">
      <Button color="primary">Primary</Button>
      <Button color="success" size="lg">
        Success
      </Button>
      <Button color="danger" size="sm">
        Danger
      </Button>
      <Button color="warning" size="lg">
        Warning
      </Button>
      <Button size="sm">Dark</Button>
      <Button color="indigo">Indigo</Button>
    </div>
  </div>
);

export default SizedButtons;
