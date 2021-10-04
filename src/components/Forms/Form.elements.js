import styled, { css } from 'styled-components';

export const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #777;
  font-family: "Raleway", sans-serif;
  font-size: 0.8em;
  margin: 0.5em 0;
  position: relative;
`;

// export const Text = styled.p`
//   font-family: 'Raleway', sans-serif;
//   color: ${props => props.color || '#4d4d4d'}
// `;

export const FormRightItemHeader = styled.p`
  font-family: 'Raleway', sans-serif;
  color: #fff;
  font-size: 1.5rem;
  text-align:left;
`;

export const FormRightText = styled.p`
  font-family: 'Raleway', sans-serif;
  color: #ccc;
  text-align: left;
`;

export const Text = styled.p`
  font-family: 'Raleway', sans-serif;
  color: ${props => props.color || '#4d4d4d'}
`;

export const StyledJobFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
  padding: 0 20px;
  background-color: #cccccc;

  @media screen and (max-width: 800) {
    display: column;
    flex-direction: wrap;
  }
`;

export const StyledFormWrapper = styled.div`
  display: column;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
  padding: 0 20px;
  /* flex-direction: wrap; */
  
  
`;

export const FormArranger = styled.div`
  /* flex-direction: wrap; */
  /* display: flex; */
  /* flex-direction: column; */
  
  /* @media screen and (min-width: 800) { */
      display: column;
      flex-direction: wrap;
    /* } */

`;

export const StyledForm = styled.form`
  flex-basis: 50%;
  padding: 40px;
  height: 50rem;
  background-color: #c6c6c6;
  border-radius: 0px 0px 10px 10px ;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);

  

  label {
      color: #000;
  }
`;

export const FormRight = styled.div`
  display: flex;
  flex-basis: 100%;
  height: 35rem;
  background-color: #000;
  border-radius: 10px 10px 0px 0px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  align-items: center;
  label {
      /* display: block; */
      color: #000;
  }
`;

export const FormRightHeader = styled.h1`
  color: #A02D2B;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 3rem;
  
`; 

export const FormRightCol = styled.section`
  display: column;
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
`;

export const StyledInput = styled.input`
  display: block;
  border: 1px transparent;
  width: 100%;
  ${sharedStyles}
`;

export const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`;

export const StyledButton = styled.button`
  display: block;
  background-color: #f7797d;
  color: #fff;
  font-size: 1.5rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 5px 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

export const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;

  legend {
    padding: 0 10px;
  }

  label {
    padding-right: 20px;
  }

  input {
    margin-right: 10px;
  }
`;

export const StyledError = styled.div`
  font-weight: 800;
  margin: 0 0 40px 0;
  background-color: #fff;
  padding: .0002rem;

  p {
    color: red;
  }
`;

export const StyledSuccess = styled.div`
  font-weight: 800;
  margin: 10px 0 40px 0;
  background-color: #fff;
  padding: .0002rem;
  p {
    color: #72DD8D;
  }
`;