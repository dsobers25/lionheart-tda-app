import styled from 'styled-components';
import servImg from '../../images/one-hand-one-wheel.jpg';
// import servImg from '../../images/open-road1.jpg';

export const PricingSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${servImg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: auto;
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PricingHeading = styled.h1`
  color: #fff;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const PricingCard = styled.div`
  background: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 40%;
  height: auto;
  text-decoration: none;
  border-radius: 4px;
  text-align: center;

  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  padding: 24px;
  /* align-items: center; */
  text-align: center;
  color: #fff;
`;

export const PricingCardIcon = styled.div`
  margin: 24px 0;
`;

export const PricingCardPlan = styled.h3`
  margin-bottom: 25px;
  font-size: 32px;
  border-bottom: 2px solid transparent;

    &:hover {
        border-bottom: 2px solid #a02d2b;
    }
`;

export const PricingCardCost = styled.h4`
  font-size: 40px;
`;

export const PricingCardLength = styled.p`
  font-size: 28px;
  margin: 24px;
`;

export const PricingCardFeatures = styled.div`
  /* margin: 16px 0 32px; */
  margin: 0 auto;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
`;

export const PricingCardFeature = styled.p`
  margin-bottom: 25px;
  color: #a9b3c1;
  align-self: center;
`;
