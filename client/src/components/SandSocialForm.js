import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import CheckOptionList from './CheckOptionList';
import buttondata from './button-data'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const SandEmbedForm = ({ buildMySocialChoice }) => {
    // Pass the Formik() hook initial form values and a submit function that will
    // be called when the form is submitted
    // returns to us a goodie bag of form state and helper methods in a variable we call formik

    return (
        <>
            <Formik
                initialValues={{
                    socialsArray: [],
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
                            This first radio selected will result in a boolean value being stored. Note that the `value` prop
                            on the <Field/> is omitted
                        */}
                        <div className='flex-col flex myFormContainer place-content-center'>
                            <h2 className="py text-xl TitleForUserClass text-center" id="SoMeEmbedSelect">Which social profiles would you like to link on your page?</h2>
                            <p className="py-5 myInstructionsToUserClass text-center" id="SoMeEmbedSelectInstruct">Select <span style={{fontWeight:"bold"}}>multiple</span> social profiles to link below.</p>
                            <CheckOptionList options={buttondata}></CheckOptionList>
                            <div className="flex container place-content-center" id="myBottomContainer" >
                                <button type="submit" aria-label="Proceed to next step" disabled="" className="myButtonAdvanceClass justify-self-center">↓</button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default SandEmbedForm;
