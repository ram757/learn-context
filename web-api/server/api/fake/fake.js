const faker = require('faker');

module.exports.getFake = (input) => {
  const returnObj = {
    message: input || 'You sent nothing!',
  };
  return Promise.resolve(returnObj);
};

module.exports.postFake = (inputObj) => {
  return new Promise((resolve, reject) => {
    if (!inputObj.zip) {
      reject('FAIL!');
    }
    resolve(randomFunction(inputObj.zip));
  });
};

const randomFunction = (zip) => {
  return {
    zip: zip || faker.zip,
    contact: faker.helpers.createCard(),
  };
};
