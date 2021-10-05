import React from 'react';
import { StyledJobFormWrapper} from '../../Form.elements'
import styled from 'styled-components';

export const FormSubmissionContainer = styled.div`
    display: column;
    `;
    export const FormSubmissionDiv = styled.div`
        margin: 0 auto;
        width: auto;
        height: auto;
    `;

const FormSubmission = () => {
    

    return (
        <>
        <StyledJobFormWrapper>
            <FormSubmissionContainer>
                <FormSubmissionDiv>
                <h1>Thank You For Considering Lion Heart Driving Academy for your next major step in the American Trucking Industry!!!</h1>
                </FormSubmissionDiv>
                <FormSubmissionDiv>
                <img src={require("../../../../images/backflip_happy.gif").default} height="200" magin="0 auto" width="200" alt="happy-backflip-time"/>
                </FormSubmissionDiv>
                <FormSubmissionDiv>
                <h3>Keep and eye on your email, We will be in touch to follow up on your application.</h3>
                </FormSubmissionDiv>
            </FormSubmissionContainer>
        </StyledJobFormWrapper>
        </>
        )
}

export default FormSubmission;
