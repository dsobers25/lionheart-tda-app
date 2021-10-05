import React from 'react';
import { StyledButton, StyledJobFormWrapper } from '../../Form.elements'
import * as yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {animateScroll as scroll} from 'react-scroll';

const validationSchema = yup.object().shape({
    job_app: yup.object().shape({
        personal: yup.object().shape({
            first_name: yup.string().min(2).required().label('Must have at least 2 characters'),
            // date_of_birth: yup.date().required('Required').nullable()
 })
})
})

const StepThree = ({ next, prev, data }) => {

    const handleSubmit = (values) => {
        next(values);
        console.log(values);
            
        // if(validationSchema.isValid) {
        //     alert(JSON.stringify('first Name is good!'));
        //     }
        }

    return (
        <>
        <Formik 
            initialValues={data}
            validationSchema={validationSchema} 
            onSubmit={handleSubmit}>
                {({ values }) => (
                    <StyledJobFormWrapper>
                    <Form>
                        <div>
                        <h2>Personal Information</h2>
                        <div>
                        <p>First Name</p>
                        <ErrorMessage name="job_app.personal.first_name">
                        { msg => <div style={{ color: 'red' }}>{msg}</div>} 
                        </ErrorMessage>
                        </div>
                        <div>
                        <Field name="job_app.personal.first_name"/>
                        <div>
                        </div>
                        </div>
                        <div>
                        <p>Middle Name</p>
                        </div>
                        <div>
                        <Field name="job_app.personal.middle_name" />
                        </div>
                        <div>
                        <p>Last Name</p>
                        </div>
                        <div>
                        <Field name="job_app.personal.last_name" />
                        </div>
                        <div>
                        <p>SSN/SIN</p>
                        </div>
                        <div>
                        <Field name="job_app.personal.ssn_sin" />
                        </div>
                        <div>
                        <p>Date of Birth (mm/dd/yyyy)</p>
                        </div>
                        <div>
                        {/* <Field name='job_app.personal.date_of_birth' values='personal_info.personal.date_of_birth' component={DatePickerField} /> */}
                        <Field name="job_app.personal.date_of_birth" placeholder="enter full date of birth"/>
                        </div>
                        </div>
                        <div>
                            <h2>Address</h2>
                            <div>
                            <p>Current Street Address (line 1)</p>
                            </div>
                            <div>
                            <Field name="job_app.address.current_street_line1"/>
                            </div>
                            <div>
                            <p>Current Street Address (line 2)</p>
                            </div>
                            <div>
                            <Field name="job_app.address.current_street_line2"/>
                            </div>
                            <div>
                            <p>Country</p>
                            </div>
                            <div>
                            <Field name="job_app.address.country"/>
                            </div>
                            <div>
                            <p>City</p>
                            </div>
                            <div>
                            <Field name="job_app.address.city"/>
                            </div>
                            <div>
                            <p>State/Province</p>
                            </div>
                            <div>
                            <Field name="job_app.address.state"/>
                            </div>                            
                            <div>
                            <p>Zip/Postal Code</p>
                            </div>
                            <div>
                            <Field name="job_app.address.zip"/>
                            </div>
                            <p>Residence address for 3 or more years?</p>
                            <div>
                            <label>
                                <Field type="radio" name="job_app.address.residence" value="Yes" />
                                Yes
                                </label>
                                <label>
                                <Field type="radio" name="job_app.address.residence" value="No" />
                                No
                                </label>
                            </div>
                        </div>
                        <div>
                            <h2>Contact</h2>
                            <div>
                            <p>Primary Phone</p>
                            </div>
                            <div>
                            <Field name="job_app.contact.primary_phone"/>
                            </div>
                            <div>
                            <p>Cell Phone</p>
                            </div>
                            <div>
                            <Field name="job_app.contact.cell_phone"/>
                            </div>
                            <div>
                            <p>Email Address</p>
                            </div>
                            <div>
                            <Field name="job_app.contact.email_address"/>
                            </div>
                            <div>
                            <p>Confirm Email Address</p>
                            </div>
                            <div>
                            <Field name="job_app.contact.confirm_email_address"/>
                            </div>
                            <div>
                            <p>Preferred method of contact</p>
                            </div>
                            <div>
                            <Field name="job_app.contact.prefered_method" as="select">
                                <option value="Primary Phone" label="Primary Phone" />
                                <option value="Cell Phone" label="Cell Phone" />
                                <option value="Email" label="Email" />
                            </Field>
                            </div>
                            <div>
                            <p>Best time to contact you</p>
                            </div>
                            <div>
                            <Field name="job_app.contact.best_contact_time" as="select">
                                <option value="Day Time" label="Day Time" />
                                <option value="Mid Day/ Afternoon" label="Mid Day/ Afternoon" />
                                <option value="Evening" label="Evening" />
                            </Field>
                            </div>
                        </div>                        
                        <StyledButton type='button' onClick={() =>{
                            scroll.scrollToTop();
                            prev(values);
                            
                        }}
                        >Back</StyledButton>
                        <StyledButton type='submit'>Next</StyledButton>
                    </Form>
                    </StyledJobFormWrapper>
                    )}
                    </Formik>
        
            {/* END OF FORMIK */}
        </>
    )
}

export default StepThree;
