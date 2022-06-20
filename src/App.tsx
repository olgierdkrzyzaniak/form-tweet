import React, { useState, useEffect } from "react";
import TweetStep from "./component/TweetStep";
import CommentStep from "./component/CommentStep";
import FinalStep from "./component/FinalStep";
import InitialStep from "./component/InitialStep";
import { VStack } from "@chakra-ui/react";

export default function App() {
  const [currentStep, setCurrentStep] = useState(21);
  const [clicks, setClicks] = useState(1);
  const [start, setStart] = useState(Date.now);
  const [opinionRate, setOpinionRate] = useState([0, 0]);

  useEffect(() => {
    const increaseClicks = () => setClicks(clicks + 1);
    window.addEventListener("click", increaseClicks);
    return () => window.removeEventListener("click", increaseClicks);
  });

  const handleNextStep = (num: number) => {
    setCurrentStep(currentStep + num);
  };
  const steps = [
    <TweetStep
      handleNextStep={handleNextStep}
      tweetNumber={Math.floor(currentStep / 2) + 1}
      opinionRate={opinionRate}
      setOpinionRate={setOpinionRate}
    />,
    <CommentStep
      handleNextStep={handleNextStep}
      tweetNumber={Math.floor(currentStep / 2) + 1}
      opinionRate={opinionRate}
      setOpinionRate={setOpinionRate}
    />
  ];
  const background = [
    <FinalStep start={start} clicks={clicks} opinionRate={opinionRate} />,
    <InitialStep handleNextStep={handleNextStep} setStart={setStart} />
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
