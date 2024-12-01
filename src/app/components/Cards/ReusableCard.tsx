'use client';

import { Image, Text, Badge, Button, Card, Group } from "@mantine/core";
import Link from 'next/link';

interface CardProps {
  title: string;
  imageSrc: string;
  buttonText: string;
  linkTo: string;
}

const ReusableCard = ({ title, imageSrc, buttonText, linkTo }: CardProps) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      {/* Image Section */}
      <Card.Section>
        <Image
          src={imageSrc}
          alt={title}
          height={180}
          fit="cover"
        />
      </Card.Section>

      {/* Title Section */}
      <Group mt="md" mb="xs">
        <Text fw={500} size="lg">
          {title}
        </Text>
      </Group>

      {/* Button Section */}
      <Link href={linkTo}>
        <Button color="blue" fullWidth mt="md" radius="md">
          {buttonText}
        </Button>
      </Link>
    </Card>
  );
}

export default ReusableCard;
