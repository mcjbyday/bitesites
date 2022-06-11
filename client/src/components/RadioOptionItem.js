import React from 'react';
import { Formik, Field, Form } from 'formik';

// Issue item accepts a single issue as a prop
// This component is responsible for displaying the specific information for a given issue
const RadioOptionItem = ({ option }) => {
    return (
        <label className="aspect-square block max-h-100px border-gray-50 rounded-xl border-2 border-blue-900 transition duration-500 hover:border-white transition duration-500 focus:border-white" 
        style={{ backgroundColor: "var(--darkest)" }} ><img className="h-20 mx-auto my-auto" src={option.piclink}></img><Field type="radio" name="embedSelection" value={option.buttontext}/>{option.buttontext}</label>
    );
};

export default RadioOptionItem;

