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

// validateArea = (values) => {
//   const wallsWithDoorOrWindow = values.filter((wall) => wall.doors > 0 || );

// };

module.exports = {
  getInputValues,
  validateWidth,
  validateHeight,
  validateHeightWithDoor,
};
