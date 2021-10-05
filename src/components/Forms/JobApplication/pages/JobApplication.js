import React, { useState } from 'react'
import { StepOne } from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive from './StepFive';
import FormSubmission from './FormSubmission';
import emailjs from 'emailjs-com';
import { StyledJobFormWrapper } from '../../Form.elements';
import { Container, JobApplicationSecWrapper }  from '../JobApplication.elements';
import StepSix from './StepSix';
import StepSeven from './StepSeven';
import StepEight from './StepEight';

export const JobApplication = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const makeRequest = (formData) => {
        console.log("Form Submitted", formData);
        console.log("Form Submitted", formData);
        emailjs.send(
        "service_6a04n5l",
        "template_y73h1ks",
        formData,
        "user_eZrJbs2D4oTkt3as0amcR")
        .then(res => {
            console.log(res);
            console.log('We made it!')
        }).catch(err => console.log(err));
    }

    const handleNextStep = (newData, final = false) => {
        setData(prev => ({...prev, ...newData}));

        if(final) {
            setCurrentStep((prev) => prev + 1);
            makeRequest(newData);
            return;
        }
        setCurrentStep((prev) => prev + 1);
    }

    const handlePrevStep = (newData) => {
        setData(prev => ({...prev, ...newData}));
        setCurrentStep(prev => prev - 1);
    }

    const [data, setData] = useState({
        // giant object with all form fields
            job_app: {
            personal: {
                first_name: "",
                middle_name: "",
                last_name: "",
                ssn_sin: "",
                date_of_birth: ""
            },
            address: {
                current_street_line1: "",
                current_street_line2: "",
                country: "",
                city: "",
                state: "",
                zip: "",
                residence: ""
            },
            contact: {
                primary_phone: "",
                cell_phone: "",
                email_address: "",
                confirm_email_address: "",
                prefered_method: "",
                best_contact_time: ""
            },
            general_information : {
                usa_emp_eligilble: "",
                currently_employed: "",
                english: "",
                alias_name: "",
                how_did_you_find_us: "",
                emergency_contact: ""
            },
            education: {
                highest_grade_completed: "",
                last_school_attended: ""
            },
            personal_references: {
                first_ref: "",
                sec_ref: ""
            },
            employment: {
                emp_exp_1: {
                    com_name: "",
                    start_date: "",
                    end_date: "",
                    street_address_1: "",
                    street_address_2: "",
                    country: "",
                    other_country: "",
                    city: "",
                    state: "",
                    zip: "",
                    phone: "",
                    postion: "",
                    leave_reason: "",
                    terminated: "",
                    emp_contact: "",
                    emp_contact_per: "",
                    current_emp: "",
                    comm_vehicle: "",
                },
                emp_exp_2: {
                    com_name: "",
                    start_date: "",
                    end_date: "",
                    street_address_1: "",
                    street_address_2: "",
                    country: "",
                    city: "",
                    state: "",
                    zip: "",
                    phone: "",
                    postion: "",
                    leave_reason: "",
                    terminated: "",
                    emp_contact: "",
                    comm_vehicle: ""
                },
                emp_exp_3: {
                    com_name: "",
                    start_date: "",
                    end_date: "",
                    street_address_1: "",
                    street_address_2: "",
                    country: "",
                    city: "",
                    state: "",
                    zip: "",
                    phone: "",
                    postion: "",
                    leave_reason: "",
                    terminated: "",
                    emp_contact: "",
                    comm_vehicle: ""
                }
            },
            license_information: {
                license_num: "",
                contry: "",
                license_state: "",
                other_license_state: "",
                license_exp: "",
                current_drivers_license: "",
                commercial_drivers_license: ""
            },
            app_questions: {
                military: "",
                driver_school_name: "",
                driver_school_number: "",
                driver_school_address: "",
                driver_school_start: "",
                driver_scholl_end: ""
            }
        }        
    }
    );

    const steps = [
        <StepOne next={handleNextStep} data={data} />,
        <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
        <StepThree next={handleNextStep} prev={handlePrevStep} data={data}/>,
        <StepFour next={handleNextStep} prev={handlePrevStep} data={data}/>,
        <StepFive next={handleNextStep} prev={handlePrevStep} data={data}/>,
        <StepSix next={handleNextStep} prev={handlePrevStep} data={data}/>,
        <StepSeven next={handleNextStep} prev={handlePrevStep} data={data}/>,
        <StepEight next={handleNextStep} prev={handlePrevStep} data={data}/>,
        <FormSubmission prev={handlePrevStep} data={data}/>
    ]

    console.log("data", data);

    return (
        <>
        <Container><progress max={5} value={currentStep}/></Container>
        
        <StyledJobFormWrapper>
        <JobApplicationSecWrapper>    
            {steps[currentStep]}
            </JobApplicationSecWrapper>
            
        
        </StyledJobFormWrapper>
        </>
    )
} 