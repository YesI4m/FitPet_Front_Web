import Lottie from 'lottie-react';

import happyDogAnimation from '../../../assets/pet/happy_dog.json'; // 경로는 실제 위치에 맞게 수정

const HappyDog = () => {
  return (
    <div style={{ width: 50, height: 50 }}>
      <Lottie animationData={happyDogAnimation} loop={true} />
    </div>
  );
};

export default HappyDog;