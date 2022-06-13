import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

const TextFieldFormURLs = ({ buildMyIndividualURLs, socialArrayFromUser, formCounter1 }) => {
    // Pass the Formik() hook initial form values and a submit function that will
    // be called when the form is submitted
    // returns to us a goodie bag of form state and helper methods in a variable we call formik

    // click handler to push into an array
    const [URLsArray, setURLsArray] = useState([])

    function renderButton(buttonCounter) {
        if (buttonCounter < socialArrayFromUser.length - 1) {
            return (
                <button type="submit" className="m-5 w-1/2 h-1/2 flex place-self-center items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white text-indigo-700 bg-indigo-100 hover:bg-indigo-200  md:py-4 md:text-lg md:px-10" >Save and add another</button>
            )
        }
        else {
            return (
                <button type="submit" aria-label="Proceed" disabled="" className="w-1/2 m-5 flex place-self-center items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">✓ Finished adding</button>
            )
        }
    }

    // console.log(socialArrayFromUser);
    return (
        <div className="space-y-4">
            <h2 className="text-xl TitleForUserClass text-center" id="SoMeEmbedSelect">Paste your profile URL for <span style={{ fontWeight: "700" }}>{socialArrayFromUser[formCounter1]}</span> below</h2>
            <Formik
                initialValues={{
                    thisTextFieldForm: '',
                }}
                onSubmit={async (values, actions) => {
                    await new Promise((r) => setTimeout(r, 500));
                    // console.log(values)
                    setURLsArray([...URLsArray, values.thisTextFieldForm])
                    // console.log(URLsArray)
                    buildMyIndividualURLs(URLsArray)
                    // console.log(URLsArray)
                    actions.resetForm();
                }}
            >
                <Form className="space-x-4 space-y-4 text-center ">
                    <label htmlFor="thisTextFieldForm">URL for <span style={{ fontWeight: "900" }}>{socialArrayFromUser[formCounter1]}</span></label>
                    <Field type="text" id="thisTextFieldForm" name="thisTextFieldForm" placeholder="Profile URL Here" />
                    <div className="flex flex-col" id="myBottomContainer" >
                        {renderButton(formCounter1)}
                    </div>
                </Form>
            </Formik>
        </div>
    );
}
export default TextFieldFormURLs;
// ReactDOM.render(<MyTextFieldForm />, document.getElementById('root'));
