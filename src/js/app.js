import GameSavingLoader from './GameSavingLoader.js';

GameSavingLoader.load().then(
  (saving) => {
    // saving объект класса GameSaving
    console.log('Game saving loaded:', saving);
  },
  (error) => {
    // ...
    console.log('Failed to load game saving:', error);
  },
);
