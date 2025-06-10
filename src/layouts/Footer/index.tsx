import './style.css';
import HappyDog from '../../components/pet/HappyDog';
import HappyCat from 'components/pet/HappyCat';
import SmileEmoji from 'components/pet/SmileEmoji';
import LoveCat from 'components/pet/LoveCat';
import Frog from 'components/pet/Frog';
import HungryEmoji from 'components/pet/HungryEmoji';

// component : Footer Layout //
export default function Footer() {

  // event handler : 인스타 아이콘 버튼 클릭 이벤트 처리 //
  const onInstarIconButtonClickHandeler = () => {
    window.open('https://www.instagram.com');
  }
  // event handler : 네이버 블로그 아이콘 버튼 클릭 이벤트 처리 //
  const onNaverBlogIconButtonClickHandeler = () => {
    window.open('https://blog.naver.com');
  }
  // event handler : 네이버 카페 아이콘 버튼 클릭 이벤트 처리 //
  const onNaverCafeIconButtonClickHandeler = () => {
    window.open('https://cafe.naver.com/ict2025');
  }

  // render : Footer Layout Rendering //
  return (
    <div id='footer'>
        <div className = 'footer-container'>
            <div className = 'footer-logo-box'>
              <div className = 'footer-logo'>
                <HappyDog />
                <HappyCat />
                <SmileEmoji />
                <LoveCat />
                <Frog />
                <HungryEmoji />
              </div>
            </div>
          <div className='footer-top'>
            <div className='footer-copyright'>
              <span>© 2025 FitPet. All rights reserved.</span>
            </div>
          </div>
          <div className='footer-bottom'>
            <div className='footer-link-box'>
              <div className='icon-button' onClick={onInstarIconButtonClickHandeler}>
                <div className='icon insta-icon'></div>
              </div>
              <div className='icon-button' onClick={onNaverCafeIconButtonClickHandeler}>
                <div className='icon naver-cafe-icon'></div>
              </div>
              <div className='icon-button' onClick={onNaverBlogIconButtonClickHandeler}>
                <div className='icon naver-blog-icon'></div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
