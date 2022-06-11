import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

const TextFieldFormImageNameplate = ({buildMyImageURLArray}) => {
    // Pass the Formik() hook initial form values and a submit function that will
    // be called when the form is submitted
    // returns to us a goodie bag of form state and helper methods in a variable we call formik

    // click handler to push into an array
    const [URLsArray, setURLsArray] = useState([])

    // console.log(socialArrayFromUser);
    return (
        <div className="space-y-4">
            <h2 className="text-xl TitleForUserClass text-center" id="SoMeEmbedSelect">Lastly, add an avatar image URL and a nameplate!</h2>
            <Formik
                initialValues={{
                    avatarURL: '',
                    nameplate: '',
                }}
                onSubmit={async (values, actions) => {
                    await new Promise((r) => setTimeout(r, 500));
                    // console.log(values)
                    
                    buildMyImageURLArray(URLsArray)
                }}
            >
                <Form className="space-x-4 space-y-4 text-center ">
                    <label htmlFor="avatarURLForm">URL for <span style={{ fontWeight: "900" }}>your avatar image</span></label>
                    <Field type="text" id="avatarURLForm" name="avatarURL" placeholder="Image URL" />
                    <label htmlFor="nameplateForm">Provide a <span style={{ fontWeight: "900" }}>nameplate</span> for your page</label>
                    <Field type="text" id="nameplateForm" name="nameplate" placeholder="Your nameplate here" />
                    
                    <div className="flex flex-col" id="myBottomContainer" >
                        
                        <button type="submit" aria-label="Proceed" disabled="" className="w-1/2 m-5 flex place-self-center items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">✓ Finished adding</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}
export default TextFieldFormImageNameplate;
// ReactDOM.render(<MyTextFieldForm />, document.getElementById('root'));
