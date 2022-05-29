import React, { useState } from 'react';
import { Autocomplete } from '../..';

// import example data
import data from './data.json';
const { countries } = data;

const AutoCompleteExample = () => {
  const [value, setValue] = useState<string | undefined>('');
  const allCountries = countries.map((country) => country.name);
  return (
    <div className="mt-16">
      <h2 className="mb-6 text-gray-600 text-lg font-bold md:text-2xl">
        Example
      </h2>
      <Autocomplete
        value={value ? value : ''}
        setValue={setValue}
        name="country"
        label="Country"
        suggestions={allCountries}
        placeholder="where are you from?"
        notFound="No suggestions available!"
      />
    </div>
  );
};

export default AutoCompleteExample;
