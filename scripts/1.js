console.log('%c Welcome to Byshivam Github \n\n%c- Don\'t Try anything Suspicious \n- Don\'t Try to Copy Site Code without Permission I can take Legal Action if I Find out \n\nThanks For Visiting! \n\n', 'background-color: black; color: #00FF33; font-size: 24px; padding: 20px 0;', 'color: #00FF33; font-size: 16px;');

const desktopStylesheet = document.querySelector('link[href="css/style.css"]');
const mobileStylesheet = document.querySelector('link[href="css/mob.css"]');

window.addEventListener('load', ()=>{
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.opacity = 0;
    setTimeout(() => loadingScreen.style.display = "none", 1000);
    const notice = document.getElementById('news');
      // const message = document.getElementById("message");
    notice.innerText = "This is a test message!";

    if (/Mobi|Android/i.test(navigator.userAgent)) {
        desktopStylesheet.disabled = 'true';
        mobileStylesheet[0].disabled = 'false';
      }
      else{
        desktopStylesheet.disabled[0] = 'false'
        mobileStylesheet.disabled = 'true'
      }
    })

