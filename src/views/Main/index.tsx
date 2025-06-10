import { useEffect, useRef, useState } from 'react';
import FadeInSection from 'components/FadeInSection';
import './style.css';
import SmileEmoji from 'components/pet/SmileEmoji';

export default function Main() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aimealRef = useRef<HTMLDivElement>(null);
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // 배경 위치 조정
      if (heroRef.current) {
        const x3 = 800 - scrollY * 0.5;
        const x1 = 50 + scrollY * 0.7;
        const x2 = 280 + scrollY * 0.8;
        const x4 = 750 + scrollY * 0.4;
        heroRef.current.style.backgroundPosition = `left ${x3}px bottom 800px, left ${x1}px bottom 50px, left ${x2}px bottom 120px, left ${x4}px bottom 430px`;
      }

      if (aimealRef.current) {
        const y1 = 950 - scrollY * 0.4;
        const y2 = 1000 - scrollY * 0.35;
        const y3 = 50 + scrollY * 0.3;
        const y4 = 100 + scrollY * 0.25;
        aimealRef.current.style.backgroundPosition = `
          left 150px bottom ${y1}px,
          left 300px bottom ${y2}px,
          left 750px bottom ${y3}px,
          left 900px bottom ${y4}px
        `;
      }

      // 스크롤 하단 감지
      const isBottom = scrollY + windowHeight >= documentHeight - 400;
      setShowQR(isBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <FadeInSection>
        <section className="running" ref={heroRef}>
          
          다이어트를 <br />자신만의 펫과 쉽고 재밌게
        </section>
      </FadeInSection>
      <FadeInSection>
        <section className="aimeal" ref={aimealRef}>
        AI가 추천하는 식단으로 걱정없이
        </section>
      </FadeInSection>
      <FadeInSection>
        <section className="app-preview">앱 미리보기</section>
      </FadeInSection>
      <FadeInSection>
        <section className="download">
          지금 다운로드하세요
          <div className={`qr-slide ${showQR ? 'show' : ''}`}>
            <div className='QR-icon icon'/>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}
