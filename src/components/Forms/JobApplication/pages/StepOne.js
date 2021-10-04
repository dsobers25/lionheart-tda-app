import React from 'react'
import { Formik, Form } from 'formik';

export const StepOne = ({ next, data }) => {
    const handleSubmit = (values) => {
        console.log(values);
        next(values);
    }

    return (
        <>
        <Formik 
            initialValues={data} 
            onSubmit={handleSubmit}>
                {() => (
                    <Form>
        <div>Thank you for your interest in Lion Heart Truck Driving Academy. To apply for a driving position, please complete our online application for employment. Incomplete information will delay the processing of your application or prevent it from being submitted.
        </div>
        <div>In compliance with Federal and State equal employment opportunity laws, qualified applicants are considered for all positions without regard to race, color, religion, sex, national origin, age, marital status, veteran status, non-job related disability, or any other protected group status.
        </div>
        <div>To fill out this form, you will need to know the following:</div>
        <ul>
        <li>Social Security Number</li>
            <li>Home address history for the past 3 years</li>
            <li>Current driver license number and driver license history for the past 3 years</li>
            <li>Employment history up to 10 years</li>
            <li>History of traffic accidents, violations and/or convictions from the last 3 years (including DUI or reckless driving conviction and license suspension)</li>

            <li>Military history (if applicable)</li>

        </ul>
        <div>Required entry fields are followed by *, meaning you must provide the requested information to continue. If you encounter any errors during this process and cannot continue, please contact us at 405-254-5556.
        </div>
        <button type='submit'>Next</button>
        </Form>
        )}
        </Formik>
        </>
    )
};
