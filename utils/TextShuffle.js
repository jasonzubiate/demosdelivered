function getRandomCharacter() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";
  return chars[Math.floor(Math.random() * chars.length)];
}

const shuffleText = () => {
  let shuffledText = "";
  for (let i = 0; i < originalText.length; i++) {
    shuffledText += getRandomCharacter();
  }
  h1Ref.current.textContent = shuffledText;
};

export { getRandomCharacter, shuffleText };
