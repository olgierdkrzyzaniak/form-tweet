import React, { useState } from "react";
import TweetStep from "./component/TweetStep";
import CommentStep from "./component/CommentStep";
import { VStack } from "@chakra-ui/react";

export default function Example() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    console.log(currentStep);
    setCurrentStep(currentStep + 1);
  };
  const steps = [
    <TweetStep
      handleNextStep={handleNextStep}
      tweetNumber={Math.floor(currentStep / 2) + 1}
    />,
    <CommentStep
      handleNextStep={handleNextStep}
      tweetNumber={Math.floor(currentStep / 2) + 1}
    />
  ];
  return (
    <>
      <VStack>{steps[currentStep % 2]}</VStack>
    </>
  );
}
