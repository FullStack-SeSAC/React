import PropTypes from 'prop-types';
import './App.css';

const FoodComponent = ({ food }) => {
  return (
    <div className="App">
      <h2>제가 좋아하는 음식은 <span className="food">{food}</span>입니다.</h2>
    </div>
  );
};

// 기본값 설정
FoodComponent.defaultProps = {
  food: '김치',
};

// PropTypes 설정
FoodComponent.propTypes = {
  food: PropTypes.number,
};

export default FoodComponent;
