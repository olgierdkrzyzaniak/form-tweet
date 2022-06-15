import React from "react";
import TweetEmbed from "react-tweet-embed";

import { Box, VStack, Stack, Text, Button, Heading } from "@chakra-ui/react";

type TweetStepProps = {
  handleNextStep: (num: number) => void;
  tweetNumber: number;
};

const TweetStep = ({ handleNextStep, tweetNumber }: TweetStepProps) => {
  return (
    <Box
      borderWidth="2px"
      w={{ base: "80vw", sm: "70vw", md: "50vw", lg: "40vw", xl: "30vw" }}
      borderRadius="lg"
      bg="white"
      color="black"
    >
      <VStack>
        <Heading mt="5">Tweet number: {tweetNumber}/10</Heading>
        <TweetEmbed tweetId="692527862369357824" placeholder="processing" />
        <Text pt="5">How was your experience?</Text>
        <Stack direction="row" spacing={4} align="center" p="5">
          <Button
            onClick={() => handleNextStep(2)}
            colorScheme="green"
            variant="solid"
            w="20"
          >
            Good
          </Button>
          <Button
            onClick={() => handleNextStep(1)}
            colorScheme="red"
            variant="solid"
            w="20"
          >
            Bad
          </Button>
        </Stack>
      </VStack>
    </Box>
  );
};

export default TweetStep;
