getInputValues = (elements) => {
  const values = [];

  for (let index = 0; index < elements; index += 1) {
    const widthwall = document.getElementById(`wall-width${index + 1}`).value;
    const heightwall = document.getElementById(`wall-height${index + 1}`).value;
    const doorswall = document.getElementById(`doors${index + 1}`).value;
    const windowswall = document.getElementById(`windows${index + 1}`).value;

    const width = parseFloat(Number(widthwall).toFixed(2));
    const height = parseFloat(Number(heightwall).toFixed(2));
    const doors = Number(doorswall);
    const windows = Number(windowswall);

    const wall = { width, height, doors, windows };
    values.push(wall);
  }

  return values;
};

validateWidth = (values) => {
  const MIN_WIDTH_WALL = 1;
  const MAX_WIDTH_WALL = 15;

  const isValidWidth = (wall) => wall.width >= MIN_WIDTH_WALL
   && wall.width <= MAX_WIDTH_WALL;

  const widthValid = values.every(isValidWidth);

  return widthValid;
};

validateHeight = (values) => {
  const MIN_HEIGHT_WITHOUT_DOOR = 1;
  const MAX_HEIGHT_WITHOUT_DOOR = 15;

  const wallsWithoutDoor = values.filter((wall) => wall.doors === 0);

  const validHeightWithoutDoor = wallsWithoutDoor.every(
    (wall) => wall.height >= MIN_HEIGHT_WITHOUT_DOOR
      && wall.width <= MAX_HEIGHT_WITHOUT_DOOR,
  );

  if (!validHeightWithoutDoor) { return false; }

  return true;
};

validateHeightWithDoor = (values) => {
  const MIN_HEIGHT_WITH_DOOR = 2.20;
  const MAX_HEIGHT_WITHOUT_DOOR = 15;

  const wallsWithDoor = values.filter((wall) => wall.doors > 0);

  const validHeightWithDoor = wallsWithDoor.every(
    (wall) => wall.height >= MIN_HEIGHT_WITH_DOOR
      && wall.height <= MAX_HEIGHT_WITHOUT_DOOR,
  );

  if (!validHeightWithDoor) { return false; }

  return true;
};

widthErrorMessage = (widthsValid) => {
  if (!widthsValid) {
    const paragraph = document.getElementById('errorwidth');
    paragraph.innerHTML = 'A largura da parede deve ter entre 1m - 15m';
  } else {
    const paragraph = document.getElementById('errorwidth');
    paragraph.innerHTML = '';
  }
};

heightErrorMessage = (heightsValid) => {
  if (!heightsValid) {
    const paragraph = document.getElementById('errorheight');
    const message = 'Altura da parede sem porta deve ter entre 1m - 15m';
    paragraph.innerHTML = message;
  } else {
    const paragraph = document.getElementById('errorheight');
    paragraph.innerHTML = '';
  }
};

heightDoorErrorMessage = (heightsWithDoorValid) => {
  if (!heightsWithDoorValid) {
    const paragraph = document.getElementById('errorheightdoor');
    const message = 'Paredes com porta devem ter altura mínima de 2.20m ';
    paragraph.innerHTML = message;
  } else {
    const paragraph = document.getElementById('errorheightdoor');
    paragraph.innerHTML = '';
  }
};

// validateArea = (values) => {
//   const wallsWithDoorOrWindow = values.filter((wall) => wall.doors > 0 || );

// };

module.exports = {
  getInputValues,
  validateWidth,
  validateHeight,
  validateHeightWithDoor,
  widthErrorMessage,
  heightErrorMessage,
  heightDoorErrorMessage,
};
