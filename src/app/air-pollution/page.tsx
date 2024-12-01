'use client';
import { Container, Text, Title, List } from '@mantine/core';

const AirPollutionPage = () => {
  return (
      <Container>
        <Title order={1}>Air Pollution Reduction</Title>
        <Text mt="md">
          Air pollution is a major environmental issue. Here are some ways to reduce it:
        </Text>
        <List>
          <List.Item>Use public transport or carpool</List.Item>
          <List.Item>Switch to electric vehicles</List.Item>
          <List.Item>Reduce industrial emissions</List.Item>
          <List.Item>Promote clean energy sources</List.Item>
        </List>
      </Container>
  );
};

export default AirPollutionPage;
