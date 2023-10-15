import { VStack } from "@chakra-ui/react";
import PropTypes from "prop-types";

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
    >
      <VStack maxWidth="1280px" minHeight="100vh" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

FullScreenSection.propTypes = {
  backgroundColor: PropTypes.string,
  isDarkBackground: PropTypes.bool,
  children: PropTypes.node
};

export default FullScreenSection;
