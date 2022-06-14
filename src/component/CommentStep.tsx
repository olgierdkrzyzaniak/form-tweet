import React from "react";
import { Box, VStack, Textarea, Text, Button } from "@chakra-ui/react";

type TweetStepProps = {
  handleNextStep: () => void;
  tweetNumber: number;
};

export const CommentStep = ({
  handleNextStep,
  tweetNumber
}: TweetStepProps) => {
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
        <Text pb="5">Tell me why?</Text>
        <Textarea placeholder="Here is a sample placeholder" />
        <Button
          onClick={() => handleNextStep()}
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
