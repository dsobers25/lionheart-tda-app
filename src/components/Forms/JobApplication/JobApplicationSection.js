import React from 'react'

import { JobApplicationSecWrapper, JobApplicationSecRow, JobApplicationCol } from './JobApplication.elements';
import { JobApplication } from './pages/JobApplication';

export const JobApplicationSection = () => {
    return (
        <JobApplicationSecWrapper>
            <JobApplicationSecRow>
                <JobApplicationCol>
                    <JobApplication/>
                </JobApplicationCol>
            </JobApplicationSecRow>
        </JobApplicationSecWrapper>
    )
};

export default JobApplicationSection;
