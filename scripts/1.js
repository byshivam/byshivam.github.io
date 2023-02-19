console.log('%c Welcome to Byshivam Github \n\n%c- Don\'t Try anything Suspicious \n- Don\'t Try to Copy Site Code without Permission I can take Legal Action if I Find out \n\nThanks For Visiting! \n\n', 'background-color: black; color: #00FF33; font-size: 24px; padding: 20px 0;', 'color: #00FF33; font-size: 16px;');



window.addEventListener('load', ()=>{
    const notice = document.getElementById('news');
    const content = document.getElementsByClassName('content');
    const message = document.getElementById("message");
    notice.innerText = "This is a test message!";

    if (/Mobi|Android/i.test(navigator.userAgent)) {
        // If so, display the message in the center of the page
        // document.body.classList.add("hidden");
        // alert("This Site Only Support Desktop")
        document.body.style.backgroundColor = 'black'
        document.body.innerHTML = `<h3 style="text-align: center; padding: 25px; display: flex; justify-content: center; align-items: center; height: 100%;"> SORRY 🥲, THIS SITE IS DOESN'T NOT SUPPORT MOBILE DEVICES</h3>`
        flash()
    }
    else{
        message.style.display = 'none'
    }
})


function flash() {
    var element = document.body;
    var originalColor = element.style.backgroundColor;
    var isRed = false;

    var interval = setInterval(function() {
      if (isRed) {
        element.style.backgroundColor = originalColor;
        element.style.color = 'red'
        isRed = false;
      } else {
        element.style.textShadow = "0px 1px 12px red";
        element.style.color = 'white'
        isRed = true;
      }
    }, 200); // Flash every 200 milliseconds

    setTimeout(function() {
      clearInterval(interval); // Stop flashing after 5 seconds
      element.style.backgroundColor = originalColor;
      element.style.color = 'white';
    }, 3000);
  }

//   flash();

