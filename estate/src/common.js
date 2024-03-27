// kakao https://developers.kakao.com/
function onKakaoButtonOnClickHandler(event){
    window.location.href = 'https://developers.kakao.com/';
}

// naver https://developers.naver.com/

function onNaverButtonOnClickHandler(event){
    window.location.href = 'https://developers.naver.com/';
}

const kakaoButtonElement = document.getElementById('kakao-button');
kakaoButtonElement.addEventListener('click', onKakaoButtonOnClickHandler);
const naverButtonElement = document.getElementById('naver-button');
naverButtonElement.addEventListener('click', onNaverButtonOnClickHandler);