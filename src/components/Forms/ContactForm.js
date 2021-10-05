import React from 'react'
import { StyledFormWrapper, StyledForm, FormArranger, FormRightItemHeader, FormRightText, FormRightCol, FormRightHeader, StyledInput, StyledTextArea, FormRight, StyledButton, Text, Label } from './Form.elements';
import * as yup from 'yup';
import { Formik } from 'formik';
import { MdLocationOn } from 'react-icons/md';
import { IconContext } from 'react-icons/lib';
import emailjs from 'emailjs-com';

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(2)
      .required(),
    phonenumber: yup
        .string()
        .required()
        .matches(RegExp(
            /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
          ), 'Phone number is not valid')
        .min(10, "to short")
        .max(10, "to long"),
    email: yup
      .string()
      .email()
      .required(),
    message: yup
     .string()
     .max(200)
     .required()
 })

const ContactForm = () => {

  const sendEmail = (formData) => {
    console.log("Form Submitted", formData);
    emailjs.send(
      "service_6a04n5l",
      "template_9iidcg7",
      formData,
       "user_eZrJbs2D4oTkt3as0amcR")
       .then(res => {
         console.log(res);
         console.log('We made it!')
       }).catch(err => console.log(err));
}

    return (
        <>
        {/* FORMIK */}
        <Formik
          initialValues={{ name: "", phonenumber:"", email: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={values => {
            if(validationSchema.isValid) {
                alert(JSON.stringify('Message Sent'));

                sendEmail(values);
            }
          }}
          render={({
            errors,
            values,
            handleChange,
            handleBlur,
            handleSubmit
          }) => (
            <StyledFormWrapper>
                
                <FormArranger>
                <FormRight>
                  <FormRightCol>
                  <IconContext.Provider value={{ color: '#a9b3c1', size: 94 }}>
                  <MdLocationOn />
                  </IconContext.Provider>
                  <FormRightHeader>GET IN TOUCH</FormRightHeader>
                  <FormRightItemHeader>Address: </FormRightItemHeader><FormRightText>3200 Aluma Valley Dr, Oklahoma City, OK 73121</FormRightText>
                  <FormRightItemHeader>Phone: </FormRightItemHeader><FormRightText>(405) 254-5556</FormRightText>
                  <FormRightItemHeader>Email: </FormRightItemHeader><FormRightText>support@lionhearttda.com</FormRightText>
                  </FormRightCol>
                </FormRight>
                </FormArranger>
                <FormArranger>
                <StyledForm onSubmit={handleSubmit}>
                <h1>SEND US A MESSAGE</h1>
                <Label>
                {errors.name && <Text color="red">{errors.name}</Text>}
                <StyledInput
                    type="text"
                    name="name"
                    placeholder="Name*..."
                    value={values.name}
                    border={errors.name && "1px solid red"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                </Label>
                <Label>
                {errors.phonenumber && <Text color="red">{errors.phonenumber}</Text>}
                <StyledInput
                    type="text"
                    name="phonenumber"
                    placeholder="Phone Number..."
                    value={values.phonenumber}
                    border={errors.phonenumber && "1px solid red"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                </Label>
                <Label>
                {errors.email &&<Text color="red">{errors.email}</Text>}
                <StyledInput
                    type="text"
                    name="email"
                    placeholder="Email*..."
                    value={values.email}
                    border={errors.email && "1px solid red"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                </Label>
                <Label>
                {errors.message && <Text color="red">{errors.message}</Text>}
                <StyledTextArea
                    type="text"
                    name="message"
                    placeholder="Message*..."
                    value={values.message}
                    border={errors.message && "1px solid red"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                </Label>
                <StyledButton type="submit">Send Message</StyledButton>
                </StyledForm>
                </FormArranger>
            </StyledFormWrapper>
            )}
            />
            {/* END OF FORMIK */}
            </>
            
    )
}

export default ContactForm;
