function guessGame() {
  formElement = document.getElementById('text-id');
  spanElement = document.getElementsByClassName('error')[0];
  if (formElement.value == "") {
    formElement.classList.add("my-style");
    spanElement.style.display = 'inline'
  } else {
    formElement.classList.remove("my-style");
    spanElement.style.display = 'none';

    let randomNumber = Math.floor((Math.random() * 10) + 1);
    if (formElement.value == randomNumber) {
      document.getElementsByClassName('guess-class')[0].innerHTML = "Congratulations!!!! You guessed it right!!"
    } else {
      document.getElementsByClassName('guess-class')[0].innerHTML = "Your guess is wrong !! Try again "
    }

  }


}
