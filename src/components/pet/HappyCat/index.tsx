import Lottie from 'lottie-react';

import happyCatAnimation from '../../../assets/pet/happy_cat.json'; // 경로는 실제 위치에 맞게 수정

const HappyCat = () => {
  return (
    <div style={{ width: 50, height: 50 }}>
      <Lottie animationData={happyCatAnimation} loop={true} />
    </div>
  );
};

export default HappyCat;