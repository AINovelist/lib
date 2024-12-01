'use client';
import { Container, Text, Title, List } from '@mantine/core';
const AnimalProtectionPage = () => {
  return (<Container>
      <Title order={1}>Animal Protection</Title>
      <Text mt="md">
        Protecting animals is crucial for biodiversity and ecosystem health. Here are ways to help:
      </Text>
      <List>
        <List.Item>Support wildlife conservation efforts</List.Item>
        <List.Item>Adopt pets from shelters</List.Item>
        <List.Item>Reduce use of animal products</List.Item>
        <List.Item>Educate others about animal rights</List.Item>
      </List>
    </Container>
  );
};

export default AnimalProtectionPage;
