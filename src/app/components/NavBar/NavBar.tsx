// components/NavBar.tsx
import { Container, Group, Button } from '@mantine/core';
import Link from 'next/link';

const NavBar = () => {
  return (
    <Container>
      <Group>
        <Link href="/" passHref>
          <Button variant="light">Home</Button>
        </Link>
        <Link href="/air-pollution" passHref>
          <Button variant="light">Air Pollution</Button>
        </Link>
        <Link href="/animal-protection" passHref>
          <Button variant="light">Animal Protection</Button>
        </Link>
        <Link href="/tree-preservation" passHref>
          <Button variant="light">Tree Preservation</Button>
        </Link>
        <Link href="/waste-reduction" passHref>
          <Button variant="light">Waste Reduction</Button>
        </Link>
        <Link href="/water-conservation" passHref>
          <Button variant="light">Water Conservation</Button>
        </Link>
      </Group>
    </Container>
  );
};

export default NavBar;
