const faker = require('faker');

module.exports.getFaker = () => {
  return Promise.resolve([
    faker.name.findName(),
    faker.name.findName(),
    faker.name.findName(),
    faker.name.findName(),
    faker.name.findName(),
    faker.name.findName(),
    faker.name.findName(),
    faker.name.findName(),
  ]);
};
