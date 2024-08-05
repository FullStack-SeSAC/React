import PropTypes from 'prop-types';
import './App.css';

const BookComponent = ({ title, author, price, type }) => {
  return (
    <div className="book">

      <h2 className="title">{title}</h2>
      <p className="author">저자: {author}</p>
      <p className="price">가격: {price}원</p>
      <p className="type">유형: {type}</p>
    </div>
  );
};

// 기본값 설정
BookComponent.defaultProps = {
  title: '제목 없음',
  author: '작가 미상',
  price: '가격 미상',
  type: '유형 미상',
};

// PropTypes 설정
BookComponent.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
};

export default BookComponent;