import React from 'react';
import { Formik, Form, Field } from 'formik';
import { StyledButton, StyledJobFormWrapper } from '../../Form.elements'
import {animateScroll as scroll} from 'react-scroll';

const StepEight = ({ next, prev, data }) => {
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
                            <h2>License Information</h2>
                        </div>
                        <div>
                            <p>License Number</p>
                        </div>
                        <div>
                            <Field name="job_app.license_information.license_num"/>
                        </div>
                    <div>
                        <div>
                            <p>Country</p>
                        </div>
                        <div>
                        <Field name="job_app.license_information.country" as="select">
                                <option value="United States" label="United States" />
                                <option value="Other" label="Other" />
                        </Field>
                        <Field name="job_app.license_information.other_country" placeholder="Other Country Name"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>License State</p>
                        </div>
                        <div>
                        <Field name="job_app.license_information.license_state" as="select">
                                <option value="Oklahoma" label="Oklahoma" />
                                <option value="Other" label="Other" />
                        </Field>
                        <Field name="job_app.license_information.other_license_state" placeholder="Other State Name"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>License Expiration Date</p>
                        </div>
                        <div>
                            <Field name="job_app.license_information.license_exp"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Is this your current Drivers License?</p>
                        </div>
                        <div>
                            <label>
                            <Field type="radio" name="job_app.license_information.current_drivers_license" value="Yes" />
                                Yes
                            </label>
                            <label>
                            <Field type="radio" name="job_app.license_information.current_drivers_license" value="No" />
                                No
                            </label>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Is this a Commercial Drivers License?</p>
                        </div>
                        <div>
                            <label>
                            <Field type="radio" name="job_app.license_information.commercial_drivers_license" value="Yes" />
                                Yes
                            </label>
                            <label>
                            <Field type="radio" name="job_app.license_information.commercial_drivers_license" value="No" />
                                No
                            </label>
                        </div>
                    </div>
                        </div>
                        <StyledButton type='button' onClick={() => {
                            scroll.scrollToTop();
                            prev(values);
                        }}>Back</StyledButton>
                        <StyledButton type='submit' onClick={() =>scroll.scrollToTop()}>Submit</StyledButton>
        </Form>
        </StyledJobFormWrapper>
        )}
        </Formik>
        </>
    )
}

export default StepEight;
