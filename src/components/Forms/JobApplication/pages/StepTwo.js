import React from 'react';
import { Formik, Form } from 'formik';

const StepTwo = ({ next, prev, data }) => {
    const handleSubmit = (values) => {
        console.log(values);
        next(values);
    }
    return (
        <>
        
        <Formik 
            initialValues={data} 
            onSubmit={handleSubmit}>
                {({ values }) => (
                    <Form>
        <div>
            <h2>Requirements</h2>
            <p>To qualify with American Truck Training, you must meet the following criteria:</p>
            <ul>
                <li>Must be at least 18 years of age</li>
            </ul>
        </div>
        <button type='button' onClick={() => prev(values)}>Back</button>
        <button type='submit'>Next</button>
        </Form>
        )}
        </Formik>
        </>
    )
}

export default StepTwo
