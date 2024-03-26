const ID = 'userIdentity';
const PASSWORD = 'P!ss0wrd';

function onSignInButtonClickHandler (event) {
    const id = document.getElementById('id').value;
    const password = document.getElementById('password').value;

    if (id === ID && password === PASSWORD){
        alert('로그인 성공!');
        signInMessageElement.textContent = '';
    }else {
        signInMessageElement.textContent = '로그인 정보가 일치하지 않습니다.';
    }
}

function onSignUpLinkClickHandler(event){
    window.location.href = 'https://google.com';
}

const signUpLinkElement = document.getElementById('sign-up-link');
signUpLinkElement.addEventListener('click', onSignUpLinkClickHandler);

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