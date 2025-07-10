function isLetter(char) {
    return char.toLowerCase() !== char.toUpperCase();
  }
  
  function isDigit(char) {
    return char >= '0' && char <= '9';
  }
  
  function isValidCode(code) {
    if (code.length !== 7) return false;
  
    for (let i = 0; i < 3; i++) {
      if (!isLetter(code[i])) return false;
    }
  
    for (let i = 3; i < 7; i++) {
      if (!isDigit(code[i])) return false;
    }
  
    return true;
  }
  
  function normalizeCode(code) {
    return code.slice(0, 3).toUpperCase() + code.slice(3);
  }
  
  function processData(data) {
    let totalCodes = data.length;
    let validCodes = [];
    let invalidCodesCount = 0;
  
    for (let code of data) {
      if (isValidCode(code)) {
        validCodes.push(normalizeCode(code));
      } else {
        invalidCodesCount++;
      }
    }
  
    validCodes.sort();
  
    return {
      totalCodes,
      validCodes: validCodes.length,
      invalidCodes: invalidCodesCount,
      normalizedValidCodes: validCodes,
    };
  }
  
  module.exports = { processData };
  