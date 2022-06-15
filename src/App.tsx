import React, { useState } from "react";
import TweetStep from "./component/TweetStep";
import CommentStep from "./component/CommentStep";
import FinalStep from "./component/FinalStep";
import InitialStep from "./component/InitialStep";
import { VStack } from "@chakra-ui/react";

export default function Example() {
  const [currentStep, setCurrentStep] = useState(21);
  console.log(currentStep);

  const handleNextStep = (num: number) => {
    setCurrentStep(currentStep + num);
    console.log(currentStep);
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
  const background = [
    <FinalStep handleNextStep={handleNextStep} />,
    <InitialStep handleNextStep={handleNextStep} />
  ];
  return (
    <>
      <VStack mt="10">
        {currentStep / 2 < 10
          ? steps[currentStep % 2]
          : background[currentStep - 20]}
      </VStack>
    </>
  );
}
