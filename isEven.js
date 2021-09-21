const isEven = (num) => {
  if (num === String) {
    return false;
  }
  return num % 2 === 0;
};

module.exports = isEven;
