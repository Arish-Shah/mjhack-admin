export const objectToArray = object => {
  const keys = Object.keys(object);
  const array = [];

  keys.forEach(key => {
    object[key].id = key;
    array.push(object[key]);
  });

  return array;
};
