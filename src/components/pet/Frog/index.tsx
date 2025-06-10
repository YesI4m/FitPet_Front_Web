import Lottie from 'lottie-react';

import frogAnimation from '../../../assets/pet/frog.json'; // 경로는 실제 위치에 맞게 수정

const Frog = () => {
  return (
    <div style={{ width: 50, height: 50 }}>
      <Lottie animationData={frogAnimation} loop={true} />
    </div>
  );
};

export default Frog;