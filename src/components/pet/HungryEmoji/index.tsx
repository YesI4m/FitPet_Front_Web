import Lottie from 'lottie-react';

import hungryEmojiAnimation from '../../../assets/pet/hungry_emoji.json'; // 경로는 실제 위치에 맞게 수정

const HungryEmoji = () => {
  return (
    <div style={{ width: 50, height: 50 }}>
      <Lottie animationData={hungryEmojiAnimation} loop={true} />
    </div>
  );
};

export default HungryEmoji;