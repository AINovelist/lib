import { Container, Grid } from '@mantine/core';
import StoryCard from '../Cards/StoryCard';
import { stories } from '../../data/stories';

type StoryListProps = {
  category: string;
  title: string; // To set the page title dynamically
};

const StoryList = ({ category, title }: StoryListProps) => {
  // Filter the stories based on the category passed in
  const filteredStories = stories.filter(story => story.category === category);

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>{title}</h2>
      <Container>
      <Grid gutter="md" mt="xl">
        {filteredStories.map((story, index) => (
          <Grid.Col key={index} span={4}>
            <StoryCard
              title={story.title}
              imageSrc={story.imageSrc}
              description={story.description}
              link={story.link}
            />
          </Grid.Col>
        ))}
      </Grid>
      </Container>
    </div>
  );
};

export default StoryList;
