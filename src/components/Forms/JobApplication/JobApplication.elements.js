import styled from 'styled-components';


export const JobApplicationSecWrapper = styled.div`
    /* display: flex; */
    align-content: center;
    margin: 5px auto 0 auto;
`;

export const JobApplicationSecRow = styled.div``;


export const JobApplicationCol = styled.div``;

export const Container = styled.div`
    progress[value] {
        width: 100%;
        appearance: none;
        position: fixed;
        top: 0;
        z-index: 999;
        margin-top: 130px;
        color: #fff;
    }
    ::-webkit-progress-value {
        color: red;
        width: 100%;
        height: 50px;

    }
    ::-webkit-progress-bar {
        color: red;
        width: 100%;
        height: 50px;
    }


`;