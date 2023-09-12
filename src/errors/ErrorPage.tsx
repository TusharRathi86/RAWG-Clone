import { Box, Heading, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Navbar />
      <Box padding={5}>
        <Heading> Oops!! ☹️ </Heading>
        <Text>
          {" "}
          {isRouteErrorResponse(error)
            ? "This Page does not exist!!!"
            : "Invalid Request! Server timeout!"}{" "}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
