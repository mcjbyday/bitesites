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
        <div className="space-y-12">
            <h2 className="text-xl TitleForUserClass text-center" id="SoMeEmbedSelect">Lastly, add a nameplate, avatar image URL, the URL for your embedded social platform, and some footer text!</h2>
            <Formik
                initialValues={{
                    nameplate: '',
                    avatarURL: '',
                    embedURL: '',
                    footerText: '',
                    colorCode: '',
                }}
                onSubmit={async (values, actions) => {
                    await new Promise((r) => setTimeout(r, 500));
                    // console.log(values)
                    
                    buildMyImageURLArray([values.nameplate, values.avatarURL, values.embedURL, values.footerText, values.colorCode])
                }}
            >
                <Form className="space-x-4 space-y-4 text-center ">
                    <div className="space-x-4 space-y-2">
                        <label htmlFor="nameplateForm">Provide a <span style={{ fontWeight: "900" }}>nameplate</span> for your page</label>
                        <Field type="text" id="nameplateForm" name="nameplate" placeholder="Your nameplate here" />
                    </div>
                    <div className="space-x-4 space-y-2">
                        <label htmlFor="avatarURLForm">URL for <span style={{ fontWeight: "900" }}>your avatar image</span></label>
                        <Field type="text" id="avatarURLForm" name="avatarURL" placeholder="Image URL" />
                    </div>

                    <div className="space-x-4 space-y-2">
                        <label htmlFor="embedURLForm">Provide your <span style={{ fontWeight: "900" }}>social embed URL</span> for your page's embedded content</label>
                        <Field type="text" id="embedURLForm" name="embedURL" placeholder="Social Embed URL" />
                    </div>
                    <div className="space-x-4 space-y-2">
                        <label htmlFor="footerTextForm">Provide <span style={{ fontWeight: "900" }}>footer text</span> for your page</label>
                        <Field type="text" id="footerTextForm" name="footerText" placeholder="'Established 2022'" />
                    </div>
                    <div className="space-x-4 space-y-2">
                        <label htmlFor="colorGradient"> Provide a  <span style={{ fontWeight: "900" }}>color theme</span> for your page </label>
                        <Field type="color" id="colorGradient" name="colorCode" />
                    </div>
                    <div className="flex flex-col" id="myBottomContainer" >
                        <button type="submit" aria-label="Proceed" disabled="" className="w-1/2 h-1/2 m-5 flex place-self-center items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"> Show me my site!</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}
export default TextFieldFormImageNameplate;
// ReactDOM.render(<MyTextFieldForm />, document.getElementById('root'));
