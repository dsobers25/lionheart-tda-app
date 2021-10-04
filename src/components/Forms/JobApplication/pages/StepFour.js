import React from 'react';
import { Formik, Form, Field } from 'formik';
import { StyledButton, StyledJobFormWrapper } from '../../Form.elements'

const StepFour = ({ next, prev, data }) => {
    const handleSubmit = (values) => {
        console.log(values);
        next(values, true);
    }
    return (
        <>
        
        <Formik 
            initialValues={data} 
            onSubmit={handleSubmit}>
                {({ values }) => (
                    <StyledJobFormWrapper>
                    <Form>
                        <div>
                        <div>
                            <h2>General Information</h2>
                        </div>
                        <div>
                            <p>Are you legally eligible for employment in the United States?</p>
                        <div>
                            <label>
                            <Field type="radio" name="job_app.general_information.usa_emp_eligilble" value="Yes" />
                                Yes
                            </label>
                            <label>
                            <Field type="radio" name="job_app.general_information.usa_emp_eligilble" value="No" />
                                No
                            </label>
                        </div>
                        </div>
                        <div>
                            <p>Are you currently employed?</p>
                        <div>
                            <label>
                            <Field type="radio" name="job_app.general_information.currently_employed" value="Yes" />
                                Yes
                            </label>
                            <label>
                            <Field type="radio" name="job_app.general_information.currently_employed" value="No" />
                                No
                            </label>
                        </div>
                        </div>
                        <div>
                            <p>Do you read, write, and speak English?</p>
                        <div>
                            <label>
                            <Field type="radio" name="job_app.general_information.english" value="Yes" />
                                Yes
                            </label>
                            <label>
                            <Field type="radio" name="job_app.general_information.english" value="No" />
                                No
                            </label>
                        </div>
                        </div>
                        <div>
                            <p>Have you ever been known by any other name?</p>
                        <div>
                            <label>
                            <Field type="radio" name="job_app.general_information.alias_name" value="Yes" />
                                Yes
                            </label>
                            <label>
                            <Field type="radio" name="job_app.general_information.alias_name" value="No" />
                                No
                            </label>
                        </div>
                        </div>
                        <div>
                            <p>How did you hear about us?</p>
                        </div>
                        <div>
                            <Field name="job_app.general_information.how_did_you_find_us"/>
                        </div>
                        <div>
                            <p>In case of Emergency, notify (list name, address, and phone):</p>
                        </div>
                        <div>
                            <Field name="job_app.general_information.emergency_contact"/>
                        </div>
                        </div>
                        <div>
                            <div><h2>Education</h2></div>
                            <div>
                                <p>List highest grade completed:</p>
                            </div>
                            <div>
                            <Field name="job_app.education.highest_grade_completed"/>
                        </div>
                            <div>
                                <p>List last school attended (name, city, and state):</p>
                            </div>
                            <div>
                            <Field name="job_app.education.last_school_attended"/>
                        </div>
                        </div>
                        <div>
                            <div><h2>Personal References</h2></div>
                            <div>
                                <p>First Reference:</p>
                            </div>
                            <div>
                            <Field name="job_app.personal_references.first_ref"/>
                        </div>
                            <div>
                                <p>Second Reference:</p>
                            </div>
                            <div>
                            <Field name="job_app.personal_references.sec_ref"/>
                        </div>
                        </div>
                        <StyledButton type='button' onClick={() => prev(values)}>Back</StyledButton>
                        <StyledButton type='submit'>Submit</StyledButton>
        </Form>
        </StyledJobFormWrapper>
        )}
        </Formik>
        </>
    )
}

export default StepFour;
