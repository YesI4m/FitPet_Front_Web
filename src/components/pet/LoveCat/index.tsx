import Lottie from 'lottie-react';

import loveCatAnimation from '../../../assets/pet/love_cat.json'; // 경로는 실제 위치에 맞게 수정

const LoveCat = () => {
  return (
    <div style={{ width: 50, height: 50 }}>
      <Lottie animationData={loveCatAnimation} loop={true} />
    </div>
  );
};

export default LoveCat;