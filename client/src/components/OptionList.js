import React from 'react';
import OptionItem from './OptionItem';

// Here we accept an array of options as a prop
const OptionList = ({ options }) => {
  // console.log('OptionList -> options', options);

  // We create a list of rendered OptionItems by using the map method on `options`
  const renderedList = options.map((option) => {
    return <OptionItem key={option.id} option={option} />;
  });
  // Here we return our array of OptionItems wrapped inside a parent div
  return <div role="group" aria-labelledby="radio-group" className="grid gap-4 place-content-center specialGrid ">{renderedList}</div>
};

export default OptionList;
