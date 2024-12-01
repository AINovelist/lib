'use client';
import { Container, Text, Title, List } from '@mantine/core';
const WasteReductionPage = () => {
  return (<Container>
      <Title order={1}>Waste Reduction</Title>
      <Text mt="md">
        Reducing waste is key to a sustainable future. Here are some tips to reduce waste:
      </Text>
      <List>
        <List.Item>Recycle and compost</List.Item>
        <List.Item>Buy in bulk to reduce packaging waste</List.Item>
        <List.Item>Use reusable bags and containers</List.Item>
        <List.Item>Repair instead of discarding items</List.Item>
      </List>
    </Container>
  );
};

export default WasteReductionPage;
