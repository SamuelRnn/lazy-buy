const simulateDelay = async (sec) => {
  await new Promise((resolve, _) => {
    setTimeout(() => resolve(), sec * 1000);
  });
};

export default simulateDelay;
