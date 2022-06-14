import * as React from "react";
import TweetStep from "./component/TweetStep";
import { VStack } from "@chakra-ui/react";

export default function Example() {
  const [currentStep, setCurrentStep] = React.useState(0);

  const handleNextStep = () => {
    console.log(currentStep);
    setCurrentStep(currentStep + 1);
  };
  return (
    <VStack>
      <TweetStep handleNextStep={handleNextStep} tweetNumber={currentStep} />
    </VStack>
  );
}
