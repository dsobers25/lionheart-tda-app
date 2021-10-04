import React, { useState } from 'react'
import { StepOne } from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import FormSubmission from './FormSubmission';
import emailjs from 'emailjs-com';
import { StyledJobFormWrapper } from '../../Form.elements';

export const JobApplication = () => {
    // const [page, setPage] = useState(1);
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
        // setCurrentStep(prev => prev + 1);

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


            },
            license_information: {

            },
            last_questions: {

            }
        }        
    }
    );

    const steps = [
        <StepOne next={handleNextStep} data={data} />,
        <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
        <StepThree next={handleNextStep} prev={handlePrevStep} data={data}/>,
        <StepFour next={handleNextStep} prev={handlePrevStep} data={data}/>,
        <FormSubmission prev={handlePrevStep} data={data}/>
    ]

    console.log("data", data);

    return (
        <>
        <div><progress max={4} value={currentStep}/></div>
        <StyledJobFormWrapper>
        <div>
            {steps[currentStep]}
        </div>
        </StyledJobFormWrapper>
        <div><progress max={4} value={currentStep}/></div>
        </>
    )
}
