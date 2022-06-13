import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const EmbedForm = ({ buildMySocialChoice }) => {
    // Pass the Formik() hook initial form values and a submit function that will
    // be called when the form is submitted
    // returns to us a goodie bag of form state and helper methods in a variable we call formik
    
    return (
        <>
            <Formik
                initialValues={{
                    socialArray: [],
                }}
                onSubmit={async (values) => {
                    await sleep(500);
                    buildMySocialChoice(values)
                    // alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ values }) => (
                    <Form>
                        {/* 
                            Multiple checkboxes with the same name attribute, but different
                            value attributes will be considered a "checkbox group". Formik will automagically
                            bind the socialArray values to a single array for your benefit. All the add and remove
                            logic will be taken care of for you.
                        */}
                        <div className='flex-col myFormContainer place-content-center'>
                            <h2 className="py text-xl TitleForUserClass text-center" id="SoMeSocialSelect">Which social URLs would you like to add?</h2>
                            <p className="py-5 myInstructionsToUserClass text-center" id="SoMeSocialSelectInstruct">Select your social profiles.</p>
                            <div role="group" aria-labelledby="checkbox-group" className="grid gap-4 place-content-center specialGrid ">
                                <label className=" aspect-square block max-h-100px border-gray-50 rounded-xl border-2 border-blue-900 transition duration-500 hover:border-white transition duration-500 focus:border-white" style={{ backgroundColor: "var(--darkest)" }} >
                                    <Field className="" type="checkbox" name="socialArray" value="Charlie" />Charlie
                                </label>
                                <label className="aspect-square block max-h-100px border-gray-50 rounded-xl border-2 border-blue-900 transition duration-500 hover:border-white transition duration-500 focus:border-white" style={{ backgroundColor: "var(--darkest)" }} >
                                    <Field type="checkbox" name="socialArray" value="Mary" />Mary
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
