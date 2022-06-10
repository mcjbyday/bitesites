import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const EmbedForm = ({ buildMyEmbedChoice }) => {
    // Pass the Formik() hook initial form values and a submit function that will
    // be called when the form is submitted
    // returns to us a goodie bag of form state and helper methods in a variable we call formik
    
    return (
        <>
            <Formik
                initialValues={{
                    checked: [],
                }}
                onSubmit={async (values) => {
                    await sleep(500);
                    buildMyEmbedChoice(values)
                    // alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ values }) => (
                    <Form>
                        {/* 
            This first radio will result in a boolean value being stored. Note that the `value` prop
            on the <Field/> is omitted
          */}
                        {/* 
            Multiple radioes with the same name attribute, but different
            value attributes will be considered a "radio group". Formik will automagically
            bind the checked values to a single array for your benefit. All the add and remove
            logic will be taken care of for you.
          */}
                        {/* <div id="radio-group" className="grid gap-4 place-content-center specialGrid ">Checked</div> */}
                        <div className='flex-col myFormContainer place-content-center'>
                            <div role="group" aria-labelledby="radio-group" className="grid gap-4 place-content-center specialGrid ">
                                <label className=" aspect-square block max-h-100px border-gray-50 rounded-xl border-2 border-blue-900 transition duration-500 hover:border-white transition duration-500 focus:border-white" style={{ backgroundColor: "var(--darkest)" }} >
                                    <Field className="" type="radio" name="checked" value="One" />One
                                </label>
                                <label className="aspect-square block max-h-100px border-gray-50 rounded-xl border-2 border-blue-900 transition duration-500 hover:border-white transition duration-500 focus:border-white" style={{ backgroundColor: "var(--darkest)" }} >
                                    <Field type="radio" name="checked" value="Two" />Two
                                </label>
                            </div>
                            <button type="submit" aria-label="Proceed to step 2" disabled="" className="myButtonAdvanceClass">↓</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default EmbedForm;
