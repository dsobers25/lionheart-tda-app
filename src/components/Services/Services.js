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
  PricingCardPlan,
  PricingCardFeatures,
  PricingCardFeature
} from './Services.elements';

export const Services = () => {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>CDL Training Courses</PricingHeading>
          <PricingContainer>
            <PricingCard >
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiTruck />
                </PricingCardIcon>
                <PricingCardPlan>Class A CDL</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>We provide students with the skills to get a Class A CDL and become eligible for entry-level commercial driver positions.</PricingCardFeature>
                  <PricingCardFeature>Our Job Placement Assistance program helps students get pre-qualified for jobs before they even graduate school</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard >
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiTruck />
                </PricingCardIcon>
                <PricingCardPlan>Class B CDL</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>Earning a Class B CDL opens up a vast array of opportunities in the transportation and trucking industry.</PricingCardFeature>
                  <PricingCardFeature>You’ll train in all aspects related to your Class B CDL including hands on Vehicle Inspection, safe operation of a Commercial Motor Vehicle and Proper Backing Techniques.</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiTruck />
                </PricingCardIcon>
                <PricingCardPlan>Class A Refresher</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>Are you an experienced truck driver?</PricingCardFeature>
                  <PricingCardFeature>Lion Heart Driving Academy helps you sharpen your on-road skills and eliminate those bad driving habits you have formed over the years.</PricingCardFeature>
                  <PricingCardFeature>Our courses are best for your truck driving job’s needs.</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Services;
