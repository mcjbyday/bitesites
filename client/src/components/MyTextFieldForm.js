import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

const MyTextFieldForm = ({ buildMyIndividualURLs, socialArrayFromUser, formCounter1 }) => {
    // Pass the Formik() hook initial form values and a submit function that will
    // be called when the form is submitted
    // returns to us a goodie bag of form state and helper methods in a variable we call formik

    // click handler to push into an array
    const [URLsArray, setURLsArray] = useState([])

    // console.log(socialArrayFromUser);
    return (
        <div>
            <h2 className="py text-xl TitleForUserClass text-center" id="SoMeEmbedSelect">Paste the URL to {socialArrayFromUser[formCounter1]} below?</h2>
                            <p className="py-5 myInstructionsToUserClass text-center" id="SoMeEmbedSelectInstruct">Select one social profile to embed. (required)</p>
            <Formik
                initialValues={{
                    thisTextFieldForm: '',
                }}
                onSubmit={async (values, actions) => {
                    await new Promise((r) => setTimeout(r, 500));
                    // console.log(values)
                    setURLsArray([...URLsArray, values.thisTextFieldForm])
                    // console.log(URLsArray)
                    actions.resetForm();
                    buildMyIndividualURLs(URLsArray)
                }}
            >
                <Form>
                    <label htmlFor="thisTextFieldForm">URL for { }</label>
                    <Field type="text" id="thisTextFieldForm" name="thisTextFieldForm" placeholder="Jane" />
                    <button type="submit" >Save Button</button>
                    <button type="submit" aria-label="Proceed to step 2" disabled="" className="myButtonAdvanceClass">↓</button>
                </Form>
            </Formik>
        </div>
    );
}
export default MyTextFieldForm;
// ReactDOM.render(<MyTextFieldForm />, document.getElementById('root'));
