'use client';

import { Container, Grid } from "@mantine/core";
import ReusableCard from './components/Cards/ReusableCard'; // Import the ReusableCard component

// Define the array for card data
const cardData = [
  {
    title: "کاهش آلودگی هوا",
    imageSrc: "https://github.com/AINovelist/stories/raw/main/kids/assets/images/Air%D9%80Pollution%D9%80Reduction%D9%801.jpeg",
    buttonText: "قصه‌ها",
    linkTo: "/air-pollution"
  },
  {
    title: "حفاظت از حیوانات",
    imageSrc: "https://raw.githubusercontent.com/AINovelist/stories/refs/heads/main/kids/assets/images/Animal%D9%80Protection%D9%804.jpeg",
    buttonText: "قصه‌ها",
    linkTo: "/animal-protection"
  },
  {
    title: "حفاظت از درختان",
    imageSrc: "https://github.com/AINovelist/stories/raw/main/kids/assets/images/Tree%D9%80Preservation%D9%803.jpeg",
    buttonText: "قصه‌ها",
    linkTo: "/tree-preservation"
  },
  {
    title: "کاهش زباله",
    imageSrc: "https://raw.githubusercontent.com/AINovelist/stories/main/kids/assets/images/Waste%D9%80Reduction%D9%801.jpeg",
    buttonText: "قصه‌ها",
    linkTo: "/waste-reduction"
  },
  {
    title: "صرفه جویی در آب",
    imageSrc: "https://github.com/AINovelist/stories/raw/main/kids/assets/images/Water%D9%80Conservation%D9%804.jpeg",
    buttonText: "قصه‌ها",
    linkTo: "/waste-reduction"
  }
];

export default function HomePage() {
  return (
    <Container size="lg" dir="rtl">
      <Grid mt={50}>
        {/* Map through the cardData array and render a ReusableCard for each entry */}
        {cardData.map((card, index) => (
          <Grid.Col key={index} span={4}>
            <ReusableCard
              title={card.title}
              imageSrc={card.imageSrc}
              buttonText={card.buttonText}
              linkTo={card.linkTo}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
