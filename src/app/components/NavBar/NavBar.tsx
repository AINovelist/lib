// components/NavBar.tsx
import { Container, Group, Button } from '@mantine/core';
import Link from 'next/link';

const NavBar = () => {
  return (
    <Container>
      <Group>
        <Link href="/" passHref>
          <Button variant="light">شروع</Button>
        </Link>
        <Link href="/air-pollution" passHref>
          <Button variant="light">کاهش آلودگی هوا</Button>
        </Link>
        <Link href="/animal-protection" passHref>
          <Button variant="light">حفاظت از حیوانات</Button>
        </Link>
        <Link href="/tree-preservation" passHref>
          <Button variant="light">حفاظت از درختان</Button>
        </Link>
        <Link href="/waste-reduction" passHref>
          <Button variant="light">کاهش زباله</Button>
        </Link>
        <Link href="/water-conservation" passHref>
          <Button variant="light">صرفه جویی در آب</Button>
        </Link>
      </Group>
    </Container>
  );
};

export default NavBar;
