import React from 'react';
import { verticalScale } from 'react-native-size-matters';

import Logo from '@assets/codeminer-logo.png';
import SigInForm from './signin-form/signin-form';
import OtpForm from './otp-form/otp-form';

import { useSteps } from 'src/hooks/use-steps/use-steps';

import {
  Container,
  Header,
  AppName,
  CodeminerLogo,
} from './signin-screen.styles';

const SigInScreen = () => {
  const { currentStep, goToNextStep, goToPreviousStep } = useSteps(2);

  return (
    <Container
      behavior='position'
      contentContainerStyle={{ flex: 1, alignItems: 'center', width: '100%' }}
      keyboardVerticalOffset={verticalScale(-85)}  
    >
      <Header />
      <CodeminerLogo source={Logo} />
      <AppName>PunchClock</AppName>

      {currentStep === 1 && <SigInForm onSubmit={goToNextStep} />}
      {currentStep === 2 && <OtpForm onCancel={goToPreviousStep} />}
    </Container>
  );
};

export default SigInScreen;
