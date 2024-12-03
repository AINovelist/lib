// components/StoryCard.tsx
import { Card, Image, Text, Button, Group } from '@mantine/core';
import Link from 'next/link';

type StoryCardProps = {
  title: string;
  imageSrc: string;
  description: string;
  link: string;
};

const StoryCard = ({ title, imageSrc, description, link }: StoryCardProps) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={imageSrc} alt={title} height={160} />
      </Card.Section>

      <Text size="lg" mt="md" >
        {title}
      </Text>

      <Text size="sm" color="dimmed" mt="sm" >
        {description}
      </Text>

      <Group mt="md">
        <Link href={link} passHref>
          <Button component="a" color="blue">
            خواندن بیشتر
          </Button>
        </Link>
      </Group>
    </Card>
  );
};

export default StoryCard;
