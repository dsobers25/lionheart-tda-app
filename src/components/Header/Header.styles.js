import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #fff;
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 25px 0;
  margin: 0 auto;

  li {
    list-style-type: none;
    margin: 0 35px;
    cursor: pointer;
    color: grey;
    
  }

  .header-links {
    text-decoration: none;
  }

  ul li:hover {
        color: red;
        transition: .4s ease-in;
    }

  ul {
      display: inline-flex;
      margin-right: 15%;
  }
`;

export const LogoImg = styled.img`
  width: 220px;

  @media screen and (max-width: 670px) {
    width: 150px;
  }
`;