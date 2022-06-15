import React from "react";
import { Box, VStack, Textarea, Text, Button, Heading } from "@chakra-ui/react";

type TweetStepProps = {
  handleNextStep: (num: number) => void;
  tweetNumber: number;
};

const CommentStep = ({ handleNextStep, tweetNumber }: TweetStepProps) => {
  return (
    <Box
      borderWidth="2px"
      w={{ base: "80vw", sm: "70vw", md: "50vw", lg: "40vw", xl: "30vw" }}
      borderRadius="lg"
      bg="white"
      color="black"
      p="5"
    >
      <VStack align="center">
        <Heading>Tweet number: {tweetNumber}/10</Heading>

        <Text pb="5">Tell me why?</Text>
        <Textarea placeholder="Here is a sample placeholder" />
        <Button
          onClick={() => handleNextStep(1)}
          colorScheme="blue"
          variant="solid"
          w="20"
        >
          Submit
        </Button>
      </VStack>
    </Box>
  );
};

export default CommentStep;
