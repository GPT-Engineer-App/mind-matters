import React from "react";
import { Box, Heading, Text, VStack, HStack, Image, Divider, Button, Link } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Box bg="teal.500" py={8}>
        <Heading as="h1" size="2xl" textAlign="center" color="white">
          Mental Health Matters
        </Heading>
      </Box>

      {/* Hero Section */}
      <Box py={12} px={6}>
        <HStack spacing={8} alignItems="flex-start">
          <Image src="https://images.unsplash.com/photo-1604881991720-f91add269bed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjBzdXBwb3J0fGVufDB8fHx8MTcxMTQ2MDQxM3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Mental Health" boxSize="400px" objectFit="cover" />
          <VStack spacing={4} alignItems="flex-start">
            <Heading as="h2" size="xl">
              You Are Not Alone
            </Heading>
            <Text fontSize="lg">Mental health is just as important as physical health. If you're struggling, know that help is available. You don't have to face your challenges alone. Reach out and take the first step towards better mental well-being.</Text>
            <Button colorScheme="teal" size="lg">
              Get Help Now
            </Button>
          </VStack>
        </HStack>
      </Box>

      <Divider />

      {/* Resources Section */}
      <Box py={12} px={6}>
        <Heading as="h2" size="xl" mb={8}>
          Resources
        </Heading>
        <HStack spacing={8}>
          <Box>
            <Heading as="h3" size="lg" mb={4}>
              Helplines
            </Heading>
            <VStack spacing={2} alignItems="flex-start">
              <Link href="tel:1234567890">
                <HStack>
                  <FaPhone />
                  <Text>123-456-7890</Text>
                </HStack>
              </Link>
              <Link href="mailto:help@example.com">
                <HStack>
                  <FaEnvelope />
                  <Text>help@example.com</Text>
                </HStack>
              </Link>
            </VStack>
          </Box>
          <Box>
            <Heading as="h3" size="lg" mb={4}>
              Support Groups
            </Heading>
            <Text>Find local support groups and connect with others who understand what you're going through.</Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg" mb={4}>
              Self-Care Tips
            </Heading>
            <Text>Discover self-care techniques and strategies to improve your mental well-being.</Text>
          </Box>
        </HStack>
      </Box>

      {/* Footer */}
      <Box bg="gray.100" py={8} px={6}>
        <HStack spacing={8} justifyContent="center">
          <Link href="https://facebook.com" isExternal>
            <FaFacebook size={24} />
          </Link>
          <Link href="https://twitter.com" isExternal>
            <FaTwitter size={24} />
          </Link>
          <Link href="https://instagram.com" isExternal>
            <FaInstagram size={24} />
          </Link>
        </HStack>
        <Text mt={4} textAlign="center">
          &copy; 2023 Mental Health Matters. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Index;
