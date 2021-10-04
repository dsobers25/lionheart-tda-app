import React from 'react';
import ContactForm from '../Forms/ContactForm';
import { ContactSecWrapper, ContactSecRow, ContactCol } from './ContactSection.elements';

export const ContactSection = () => {
    return (
        <ContactSecWrapper>
            <ContactSecRow>
                <ContactCol>
                    <ContactForm/>
                </ContactCol>
            </ContactSecRow>
        </ContactSecWrapper>
    )
}
