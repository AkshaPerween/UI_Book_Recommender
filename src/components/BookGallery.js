import styled from 'styled-components';
import BookCard from './BookCard';

const GalleryContainer = styled.div`
  background: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #2C7A7B;
  margin-top: 0;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 24px;
`;

const BookGallery = ({ recommendations }) => {
  return (
    <GalleryContainer>

      {recommendations.length > 0 ? (
        <Grid>
          {recommendations.map((book, index) => (
            <BookCard
              key={index}
              thumbnail={book.thumbnail}
              caption={book.caption}
            />
          ))}
        </Grid>
      ) : (
        <p>No recommendations yet. Submit a search to find books!</p>
      )}
    </GalleryContainer>
  );
};

export default BookGallery;