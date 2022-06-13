import React from 'react';
import CheckOptionItem from './CheckOptionItem';

// Here we accept an array of options as a prop
const CheckOptionList = ({ options }) => {
  // console.log('CheckOptionList -> options', options);

  // We create a list of rendered CheckOptionItems by using the map method on `options`
  const renderedList = options.map((option) => {
    return <CheckOptionItem key={option.id} option={option} />;
  });
  // Here we return our array of CheckOptionItems wrapped inside a parent div
  return <div role="group" aria-labelledby="checkbox-group" className="grid gap-4 specialGrid">{renderedList}</div>
};

export default CheckOptionList;
