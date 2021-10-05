import React from 'react';
import { Formik, Form, Field } from 'formik';
import { StyledButton, StyledJobFormWrapper } from '../../Form.elements'
import {animateScroll as scroll} from 'react-scroll';

const StepFive = ({ next, prev, data }) => {
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
                    <StyledJobFormWrapper>
                    <Form>
                        <div>
                        <div>
                            <h2>Employer/Contract #1 Information</h2>
                        </div>
                        <div>
                            <p>Company Name</p>
                        </div>
                        <div>
                            <Field name="job_app.employment.emp_exp_1.com_name"/>
                        </div>
                    <div>
                        <div>
                            <p>Start Date</p>
                        </div>
                        <div>
                            <Field name="job_app.employment.emp_exp_1.start_date"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>End Date</p>
                        </div>
                        <div>
                            <Field name="job_app.employment.emp_exp_1.end_date"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Street Address</p>
                        </div>
                        <div>
                            <Field name="job_app.employment.emp_exp_1.street_address_1"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Street Address</p>
                        </div>
                        <div>
                            <Field name="job_app.employment.emp_exp_1.street_address_2"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Country</p>
                        </div>
                        <div>
                        <Field name="job_app.employment.emp_exp_1.country" as="select">
                                <option value="United States" label="United States" />
                                <option value="Other" label="Other" />
                        </Field>
                        <Field name="job_app.employment.emp_exp_1.other_country" placeholder="Other Country Name"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>City</p>
                        </div>
                        <div>
                            <Field name="job_app.employment.emp_exp_1.city"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>State</p>
                        </div>
                        <div>
                            <Field name="job_app.employment.emp_exp_1.state"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Zip</p>
                        </div>
                        <div>
                            <Field name="job_app.employment.emp_exp_1.zip"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Phone</p>
                        </div>
                        <div>
                            <Field name="job_app.employment.emp_exp_1.phone"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Positon Held</p>
                        </div>
                        <div>
                            <Field name="job_app.employment.emp_exp_1.position"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Reason for leaving?</p>
                        </div>
                        <div>
                            <Field name="job_app.employment.emp_exp_1.leave_reason"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Were you terminated/discharged/laid off</p>
                        </div>
                        <div>
                            <label>
                            <Field type="radio" name="job_app.employment.emp_exp_1.terminated" value="Yes" />
                                Yes
                            </label>
                            <label>
                            <Field type="radio" name="job_app.employment.emp_exp_1.terminated" value="No" />
                                No
                            </label>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Is this your current employer?</p>
                        </div>
                        <div>
                            <label>
                            <Field type="radio" name="job_app.employment.emp_exp_1.current_emp" value="Yes" />
                                Yes
                            </label>
                            <label>
                            <Field type="radio" name="job_app.employment.emp_exp_1.current_emp" value="No" />
                                No
                            </label>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>May we contact this employer at this time?</p>
                        </div>
                        <div>
                            <label>
                            <Field type="radio" name="job_app.employment.emp_exp_1.emp_contact_per" value="Yes" />
                                Yes
                            </label>
                            <label>
                            <Field type="radio" name="job_app.employment.emp_exp_1.emp_contact_per" value="No" />
                                No
                            </label>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Did you operate a commercial motor vehicle?</p>
                        </div>
                        <div>
                            <label>
                            <Field type="radio" name="job_app.employment.emp_exp_1.comm_vehicle" value="Yes" />
                                Yes
                            </label>
                            <label>
                            <Field type="radio" name="job_app.employment.emp_exp_1.comm_vehicle" value="No" />
                                No
                            </label>
                        </div>
                    </div>
                        </div>
                        <StyledButton type='button' onClick={() => {
                            scroll.scrollToTop();
                            prev(values);
                        }}>Back</StyledButton>
                        <StyledButton type='submit' onClick={() =>scroll.scrollToTop()}>Next</StyledButton>
        </Form>
        </StyledJobFormWrapper>
        )}
        </Formik>
        </>
    )
}

export default StepFive;
