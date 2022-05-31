import AsyncStorageMock from "@react-native-async-storage/async-storage/jest/async-storage-mock";

let storage = {};

AsyncStorageMock.getItem = jest.fn((key) => {
  return Promise.resolve(storage[key]);
});

AsyncStorageMock.setItem = jest.fn((key, value) => {
  storage[key] = value;

  return Promise.resolve();
});

AsyncStorageMock.removeItem = jest.fn((key) => {
  delete storage[key];

  return Promise.resolve();
});

AsyncStorageMock.clear = jest.fn(() => {
  storage = {};

  return Promise.resolve();
})

export default AsyncStorageMock;
