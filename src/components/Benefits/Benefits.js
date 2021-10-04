import React from 'react';
import { GiTruck } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';

import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan
} from './Benefits.elements';

export const Benefits = () => {
  return (
    <IconContext.Provider value={{ color: '#A02D2B', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Why Lion Heart?</PricingHeading>
          <PricingContainer>
            <PricingCard >
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiTruck />
                </PricingCardIcon>
                  <PricingCardPlan>Top Quality CDL Training Courses that set you up for lasting success!</PricingCardPlan>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiTruck />
                </PricingCardIcon>
                  <PricingCardPlan>Our Job Placement Assistance Program helps you get Pre-qualified for jobs before you graduate!</PricingCardPlan>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard >
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiTruck />
                </PricingCardIcon>
                  <PricingCardPlan>In 4 short weeks become eligible for entry-level commercial driver positions</PricingCardPlan>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Benefits;
