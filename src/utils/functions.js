/* eslint-disable max-lines */

let walls = [];

filterWallsWithDoorOrWindow = (values) => { // Função auxiliar (Validate Area)
  const wallsWithDoorOrWindow = values.filter(
    (wall) => wall.doors > 0 || wall.windows > 0,
  );

  return wallsWithDoorOrWindow;
};

filterHaveDoor = (wallsWithDoorOrWindow) => { // Função auxiliar (Validate Area)
  const haveDoor = wallsWithDoorOrWindow.filter(
    (wall) => wall.doors > 0 && wall.windows === 0,
  );

  return haveDoor;
};

filterHaveWindow = (wallsWithDoorOrWindow) => { // Função auxiliar (Validate Area)
  const haveWindow = wallsWithDoorOrWindow.filter(
    (wall) => wall.windows > 0 && wall.doors === 0,
  );

  return haveWindow;
};

filterHaveDoorAndWindow = (wallsWithDoorOrWindow) => { // Função auxiliar (Validate Area)
  const haveDorrAndWindow = wallsWithDoorOrWindow.filter(
    (wall) => wall.doors > 0 && wall.windows > 0,
  );

  return haveDorrAndWindow;
};

filterNoHaveDoorAndWindow = (values) => { // Função auxiliar (Validate Area)
  const noHaveDoorAndWindow = values.filter(
    (wall) => wall.doors === 0 && wall.windows === 0,
  );

  return noHaveDoorAndWindow;
};

calculatePercentage = (area) => {
  const fiftyPercent = parseFloat((area.wall / 2).toFixed(2));

  if (area.others && area.others > fiftyPercent) { return false; }

  return true;
};

calculateWallArea = (wall) => {
  const wallBase = wall.width; const wallHeight = wall.height;
  const wallArea = parseFloat((wallBase * wallHeight).toFixed(2));

  return wallArea;
};

calculateDoorOrWindowArea = (number, wall, base, height) => {
  const area = parseFloat((number * (base * height)).toFixed(2));
  const wallArea = calculateWallArea(wall);

  const areas = {
    wall: wallArea,
    othersArea: area,
    valid: '',
    paintArea: wallArea - area,
  };

  const percentageValid = calculatePercentage(areas);
  walls.push(areas);
  areas.valid = percentageValid;

  return percentageValid;
};

calculateDoorAndWindowArea = (wall, measures) => {
  const { doorBase, doorHeight, windowBase, windowHeight } = measures;

  const doorsNumber = wall.doors;
  const windowsNumber = wall.windows;

  const wallArea = calculateWallArea(wall);

  const doorsArea = parseFloat((doorsNumber * (doorBase * doorHeight)).toFixed(2));
  const windowsArea = parseFloat(
    (windowsNumber * (windowBase * windowHeight)).toFixed(2),
  );

  const totalArea = doorsArea + windowsArea;

  const areas = {
    wall: wallArea,
    othersArea: totalArea,
    valid: '',
    paintArea: wallArea - totalArea,
  };

  const percentageValid = calculatePercentage(areas);
  walls.push(areas);
  areas.valid = percentageValid;

  return percentageValid;
};

calculateNoDoorOrWindowArea = (wall) => {
  const wallArea = calculateWallArea(wall);
  const areas = { wall: wallArea, others: 0, valid: true, paintArea: wallArea };
  walls.push(areas);
};

// -----------------------------------------------------------------------------
// Funções exportadas
// -----------------------------------------------------------------------------

validateArea = (values) => {
  const areaValid = []; walls = [];
  const measures = {
    doorBase: 0.80, doorHeight: 1.90, windowBase: 2.00, windowHeight: 1.20,
  };

  const wallsWithDoorOrWindow = filterWallsWithDoorOrWindow(values);
  const noHaveDoorAndWindow = filterNoHaveDoorAndWindow(values);
  const haveDoor = filterHaveDoor(wallsWithDoorOrWindow);
  const haveWindow = filterHaveWindow(wallsWithDoorOrWindow);
  const haveDoorAndWindow = filterHaveDoorAndWindow(wallsWithDoorOrWindow);

  if (haveDoor.length >= 1) { // Paredes somente com portas
    for (let index = 0; index < haveDoor.length; index += 1) {
      areaValid.push(calculateDoorOrWindowArea(
        haveDoor[index].doors, haveDoor[index], measures.doorBase, measures.doorHeight,
      ));
    }
  }

  if (haveWindow.length >= 1) { // Paredes somente com janelas
    for (let index = 0; index < haveWindow.length; index += 1) {
      areaValid.push(calculateDoorOrWindowArea(
        haveWindow[index].windows, haveWindow[index],
        measures.windowBase, measures.windowHeight,
      ));
    }
  }

  if (haveDoorAndWindow.length >= 1) { // Paredes com portas e janelas
    for (let index = 0; index < haveDoorAndWindow.length; index += 1) {
      areaValid.push(
        calculateDoorAndWindowArea(haveDoorAndWindow[index], measures),
      );
    }
  }

  if (noHaveDoorAndWindow.length >= 1) { // Paredes sem portas e janelas
    for (let index = 0; index < noHaveDoorAndWindow.length; index += 1) {
      calculateNoDoorOrWindowArea(noHaveDoorAndWindow[index]);
    }
  }

  const validAreas = areaValid.every((result) => result === true);

  return validAreas;
};

wallsArea = () => {
  let totalArea = 0;

  for (let index = 0; index < walls.length; index += 1) {
    totalArea += walls[index].paintArea;
  }

  return parseFloat((totalArea).toFixed(2));
};

calculateLitersOfInk = (totalPaintArea) => {
  const metersPerLiter = 5;
  const liters = parseFloat((totalPaintArea / metersPerLiter).toFixed(2));

  return liters;
};

calculateCans = (litersOfInk) => {
  const can05 = 0.5; const can25 = 2.5; const can36 = 3.6; const can180 = 18;
  const cans = { can180: 0, can36: 0, can25: 0, can05: 0 };
  let liters = litersOfInk; const multiple = 5;

  while (liters > 0) {
    if (liters >= can180) {
      cans.can180 += 1;
      liters -= can180;
    } else if (liters >= can36) {
      cans.can36 += 1;
      liters -= can36;
    } else if (liters >= can25) {
      cans.can25 += 1;
      liters -= can25;
    } else if (liters >= can05 || (liters < can05 && liters > 0)) {
      cans.can05 += 1;
      liters -= can05;
    }
  }

  if (cans.can05 === multiple) {
    cans.can25 += 1;
    cans.can05 -= 5;
  }

  return cans;
};

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

  return validHeightWithoutDoor;
};

validateHeightWithDoor = (values) => {
  const MIN_HEIGHT_WITH_DOOR = 2.20;
  const MAX_HEIGHT_WITHOUT_DOOR = 15;

  const wallsWithDoor = values.filter((wall) => wall.doors > 0);

  const validHeightWithDoor = wallsWithDoor.every(
    (wall) => wall.height >= MIN_HEIGHT_WITH_DOOR
      && wall.height <= MAX_HEIGHT_WITHOUT_DOOR,
  );

  return validHeightWithDoor;
};

module.exports = {
  getInputValues,
  validateWidth,
  validateHeight,
  validateHeightWithDoor,
  validateArea,
  wallsArea,
  calculateLitersOfInk,
  calculateCans,
};
