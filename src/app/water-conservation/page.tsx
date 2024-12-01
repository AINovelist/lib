'use client';
import { Container, Text, Title, List } from '@mantine/core';
const WaterConservationPage = () => {
  return (
      <Container>
      <Title order={1}>Water Conservation</Title>
      <Text mt="md">
        Conserving water is vital for the planet health. Here are some ways to conserve water:
      </Text>
      <List>
        <List.Item>Fix leaky faucets</List.Item>
        <List.Item>Use water-efficient appliances</List.Item>
        <List.Item>Collect rainwater</List.Item>
        <List.Item>Avoid excessive water usage during peak times</List.Item>
      </List>
    </Container>
  );
};

export default WaterConservationPage;
