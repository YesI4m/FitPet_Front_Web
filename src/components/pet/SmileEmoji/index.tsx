import Lottie from 'lottie-react';

import smileEmojiAnimation from '../../../assets/pet/smile_emoji.json'; // 경로는 실제 위치에 맞게 수정

const SmileEmoji = () => {
  return (
    <div style={{ width: 50, height: 50 }}>
      <Lottie animationData={smileEmojiAnimation} loop={true} />
    </div>
  );
};

export default SmileEmoji;