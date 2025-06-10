import HappyDog from 'components/pet/HappyDog';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { MAIN_PATH } from 'constant';
import { useState } from 'react';

// component : Header Layout //
export default function Header() {

  // function : navigate function //
  const navigate = useNavigate();

  // event handler: 로고 클릭 이벤트 처리 //
  const onLogoClickHandler = () => {
    navigate(MAIN_PATH());
  }

  // state: 다운로드 버튼 상태 //
  const [showDownloadButton, setShowDownloadButton] = useState<boolean>(false);

  // event handler: 다운로드 버튼 클릭 이벤트 처리 //
  const onDownloadButtonClickHandler = () => {
    setShowDownloadButton(!showDownloadButton);
  }

  // render : Header Layout Rendering //
  return (
    <div id='header'>
      <div className='header-container'>
        <div className='header-left-box'>
          <div className = 'header-logo-box' onClick={onLogoClickHandler}>
            <div className='logo-icon-box'><HappyDog /></div>
            <div className = 'header-logo'>{'FITPET'}</div>
          </div>
        </div>
        <div className='header-right-box'>
          <div className='download-button' onClick={onDownloadButtonClickHandler}>
            <div className='icon download-icon'></div>
          </div>
          {showDownloadButton && 
          <div className='QR-code-button'>
            <div className='QR-icon icon'></div>
            <div className = 'QR-description'>{'앱을 다운로드해서 나만의 펫을 키워보세요'}</div>
          </div>
          }
        </div>
      </div>
    </div>
  )
}
