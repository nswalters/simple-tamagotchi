const createHeader = (id, text) => `<h1 id='${id}'>${text}</h2>`;

const createScore = (id, score) => `<h3 id='${id}' class='score'>${score}</h3>`;

const createButton = (buttonId, buttonText) => {
  const domString = `
  <button id='${buttonId}'>${buttonText}</button>
  `;

  return domString;
};

export default {
  createButton,
  createHeader,
  createScore,
};
