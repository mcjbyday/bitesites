import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import RadioOptionList from './RadioOptionList';
import buttondata from './button-data'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const SandEmbedForm = ({ buildMyEmbedChoice }) => {
    // Pass the Formik() hook initial form values and a submit function that will
    // be called when the form is submitted
    // returns to us a goodie bag of form state and helper methods in a variable we call formik

    return (
        <>
            <Formik
                initialValues={{
                    embedSelection: [],
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
                            This first radio selected will result in a boolean value being stored. Note that the `value` prop
                            on the <Field/> is omitted
                        */}
                        <div className='flex-col flex myFormContainer place-content-center'>
                            <h2 className="py text-xl TitleForUserClass text-center" id="SoMeEmbedSelect">Which social would you like to embed?</h2>
                            <p className="py-5 myInstructionsToUserClass text-center" id="SoMeEmbedSelectInstruct">Select <span style={{fontWeight:"bold"}}>one</span>  social profile to embed. (required)</p>
                            <RadioOptionList options={buttondata}></RadioOptionList>
                            <div className="flex container place-content-center" id="myBottomContainer" >
                            <button type="submit" aria-label="Proceed" disabled="" className="w-1/2 m-5 flex place-self-center items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">✓ Added my embed</button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default SandEmbedForm;
