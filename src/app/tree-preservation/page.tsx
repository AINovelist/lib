'use client';
import { Container, Text, Title, List } from '@mantine/core';
const TreePreservationPage = () => {
  return (<Container>
      <Title order={1}>Tree Preservation</Title>
      <Text mt="md">
        Trees play an essential role in our environment. Here is how you can help preserve them:
      </Text>
      <List>
        <List.Item>Plant trees in your local community</List.Item>
        <List.Item>Support reforestation initiatives</List.Item>
        <List.Item>Reduce paper consumption</List.Item>
        <List.Item>Prevent illegal logging</List.Item>
      </List>
    </Container>
  );
};

export default TreePreservationPage;
