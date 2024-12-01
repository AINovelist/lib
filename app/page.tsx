"use client";

import { Image, Text, Badge, Button, Card, Grid, Group, Container } from "@mantine/core";
interface CardProps {
  title: string;
  imageSrc: string;
  buttonText: string;
}
function ReusableCard({ title, imageSrc, buttonText }: CardProps) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={imageSrc} height={160} alt={title} />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>
        <Badge color="pink">AI</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        .
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        {buttonText}
      </Button>
    </Card>
  );
}
export default function HomePage() {
  return (
    <Container size="lg" dir="rtl">
      <Grid mt={50}>
      <Grid.Col span={3}>
        <ReusableCard
          title="کاهش آلودگی هوا"
          imageSrc="https://github.com/AINovelist/stories/raw/main/kids/assets/images/Air%D9%80Pollution%D9%80Reduction%D9%801.jpeg"
          buttonText="قصه‌های تولید شده"
        />
      </Grid.Col>
      <Grid.Col span={3}>
        <ReusableCard
          title="حفاظت از حیوانات"
          imageSrc="https://raw.githubusercontent.com/AINovelist/stories/refs/heads/main/kids/assets/images/Animal%D9%80Protection%D9%804.jpeg"
          buttonText="قصه‌های تولید شده"
        />
      </Grid.Col>
      <Grid.Col span={3}>
        <ReusableCard
          title="حفاظت از درختان"
          imageSrc="https://github.com/AINovelist/stories/raw/main/kids/assets/images/Tree%D9%80Preservation%D9%803.jpeg"
          buttonText="قصه‌های تولید شده"
        />
      </Grid.Col>
      <Grid.Col span={3}>
        <ReusableCard
          title="کاهش زباله"
          imageSrc="https://raw.githubusercontent.com/AINovelist/stories/main/kids/assets/images/Waste%D9%80Reduction%D9%801.jpeg"
          buttonText="قصه‌های تولید شده"
        />
      </Grid.Col>
    </Grid>
    </Container>
  );
}
