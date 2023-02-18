console.log('%c Welcome to Byshivam Github \n\n%c- Don\'t Try anything Suspicious \n- Don\'t Try to Copy Site Code without Permission I can take Legal Action if I Find out \n\nThanks For Visiting! \n\n', 'background-color: black; color: #00FF33; font-size: 24px; padding: 20px 0;', 'color: #00FF33; font-size: 16px;');



window.addEventListener('load', ()=>{
    const notice = document.getElementById('news');
    const card = document.getElementsByClassName('card')
    const message = document.getElementById("message")
    notice.innerText = "This is a test message!";

    if (/Mobi|Android/i.test(navigator.userAgent)) {
        // If so, display the message in the center of the page
        document.body.classList.add("hidden");
        alert("This Site Only Support Desktop")
      }
    else{
        message.style.display = 'none'
    }
})

