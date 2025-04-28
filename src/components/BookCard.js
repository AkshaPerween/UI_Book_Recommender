import styled from 'styled-components';

const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Caption = styled.div`
  padding: 12px;
  color: #1A202C;
  font-size: 14px;
  line-height: 1.4;
`;

const BookCard = ({ thumbnail, caption }) => {
  return (
    <Card>
      <Image src={thumbnail} alt="Book cover" />
      <Caption>{caption}</Caption>
    </Card>
  );
};

export default BookCard;