import React from 'react';
import RadioOptionItem from './RadioOptionItem';

// Here we accept an array of options as a prop
const RadioOptionList = ({ options }) => {
  // console.log('RadioOptionList -> options', options);

  // We create a list of rendered RadioOptionItems by using the map method on `options`
  const renderedList = options.map((option) => {
    return <RadioOptionItem key={option.id} option={option} />;
  });
  // Here we return our array of RadioOptionItems wrapped inside a parent div
  return <div role="group" aria-labelledby="radio-group" className="grid gap-4 place-content-center specialGrid ">{renderedList}</div>
};

export default RadioOptionList;
