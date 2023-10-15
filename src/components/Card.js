import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <VStack align="start" bg="white" borderRadius="10px">
      <Image src={imageSrc} alt={title} borderRadius="10px" />
      <Box px="10px" color="black">
        <Heading
          as="h3"
          fontSize="14px"
          alignItems="start"
          my="10px"
          textAlign="left"
        >
          {title}
        </Heading>
        <Text py="10px" fontSize="12px" letterSpacing="0.5px" color="gray.600">
          {description}
        </Text>
        <HStack
          py="10px"
          fontSize="12px"
          letterSpacing="0.5px"
          fontWeight="bolder"
        >
          <Text>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} />
        </HStack>
      </Box>
    </VStack>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired
};

export default Card;
