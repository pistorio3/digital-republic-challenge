function widthErrorMessage(widthsValid) {
  if (!widthsValid) {
    const paragraph = document.getElementById('errorwidth');
    paragraph.innerHTML = 'Paredes sem porta devem ter largura entre 1m - 15m';
  } else {
    const paragraph = document.getElementById('errorwidth');
    paragraph.innerHTML = '';
  }
}

function heightErrorMessage(heightsValid) {
  if (!heightsValid) {
    const paragraph = document.getElementById('errorheight');
    const message = 'Paredes sem porta devem ter altura mínima entre 1m - 15m';
    paragraph.innerHTML = message;
  } else {
    const paragraph = document.getElementById('errorheight');
    paragraph.innerHTML = '';
  }
}

function heightDoorErrorMessage(heightsWithDoorValid) {
  if (!heightsWithDoorValid) {
    const paragraph = document.getElementById('errorheightdoor');
    const message = 'Paredes com porta devem ter altura mínima de 2.20m';
    paragraph.innerHTML = message;
  } else {
    const paragraph = document.getElementById('errorheightdoor');
    paragraph.innerHTML = '';
  }
}

function emptyInputsErroMessage(check, defaultValues) {
  if (check && defaultValues) {
    const paragraph = document.getElementById('erroremptyinput');
    const message = 'Insira a quantidade de portas ou janelas';
    paragraph.innerHTML = message;
  } else {
    const paragraph = document.getElementById('erroremptyinput');
    paragraph.innerHTML = '';
  }
}

function areaErrorMessage(areasValid) {
  if (!areasValid) {
    const paragraph = document.getElementById('errorinvalidarea');
    const message1 = 'A área total das portas e janelas';
    const message2 = ' deve ser no máximo 50% da área da parede';
    paragraph.innerHTML = message1 + message2;
  } else {
    const paragraph = document.getElementById('errorinvalidarea');
    paragraph.innerHTML = '';
  }
}

function noDoorErrorMessage(noDoors) {
  if (noDoors) {
    const paragraph = document.getElementById('errornodoors');
    const message = 'Pelo menos uma parede precisa ter porta';
    paragraph.innerHTML = message;
  } else {
    const paragraph = document.getElementById('errornodoors');
    paragraph.innerHTML = '';
  }
}

module.exports = {
  widthErrorMessage,
  heightErrorMessage,
  heightDoorErrorMessage,
  emptyInputsErroMessage,
  noDoorErrorMessage,
  areaErrorMessage,
};
