import React, { Component } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box>
          <Heading>Something went wrong</Heading>
          <Text>Please try again later.</Text>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
