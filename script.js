const allInputs = document.querySelectorAll(".input__design");
const submitBtn = document.querySelector("#submit__btn");

const successMessage = () => {
  document.getElementById("name__box").style.display = 'none';
  document.getElementById("number__box").style.display = 'none';
  document.getElementById("card__box").style.display = 'none';
  document.getElementById("success__message").style.display = 'flex';
}

const checkCard = () => {
  removeActiveClasses();
  checkEmpty();
  checkCardHolderName();
  checkCardHolderNumber();

  if (checkEmpty() && checkCardHolderName() && checkCardHolderNumber()){
    return successMessage();
  }
  
  return false;
}

const removeActiveClasses = () => {
  document.querySelector("#date").classList.remove("active");

  allInputs.forEach((input) => {
    input.parentElement.classList.remove("active");
  })
}

const checkEmpty = () => {
  let checker = true;
  allInputs.forEach((input) => {
    if (input.value === ""){
      checker = false;
      input.parentElement.classList.add("active");

      if (input.id == 'month' || input.id == 'year'){
        document.querySelector("#date").classList.add("active");
      }
    }
  });
  
  return checker;
}

const checkCardHolderName = () => {
  const nameInput = document.getElementById("name");
  if (nameInput.value && (/\d/g).test(nameInput.value)){
    nameInput.parentElement.classList.add("active");
    document.getElementById("name__error").innerHTML = "Wrong format, text only";

    return false;
  } else if (nameInput.value == ''){
    
    return false;
  }
  return true;
}

const checkCardHolderNumber = () => {
  const numberInput = document.getElementById("number");
  if (numberInput.value && (/[A-Za-z]+/g).test(numberInput.value)){
    numberInput.parentElement.classList.add("active");
    document.getElementById("number__error").innerHTML = "Wrong format, numbers only";

    return false;
  } else if (numberInput.value == ''){

    return false;
  }
  return true;
}

submitBtn.onclick = () => checkCard();