import React from 'react';
import { Formik, Field, Form } from 'formik';

// Issue item accepts a single issue as a prop
// This component is responsible for displaying the specific information for a given issue
const RadioOptionItem = ({ option }) => {
    return (
        <label className="mycustomlabel aspect-square block max-h-80px border-gray-50 rounded-xl border-2 border-blue-900 transition duration-500 hover:border-white transition duration-500 focus:border-white" 
        style={{ backgroundColor: "var(--darkest)" }} ><Field type="radio" name="embedSelection" className="" value={option.buttontext}/>{option.buttontext}<img className="h-20 mx-auto my-auto" alt={option.buttontext} src={option.piclink}></img></label>
        
    );
};

export default RadioOptionItem;

