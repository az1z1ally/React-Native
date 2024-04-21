import { useState } from 'react';

export const usePasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePassword = (passwordLength: number) => {
    let characters = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    if (upperCase) {
      characters += upperCaseChars;
    }
    if (lowerCase) {
      characters += lowerCaseChars;
    }
    if (numbers) {
      characters += digitChars;
    }
    if (symbols) {
      characters += specialChars;
    }

    const passwordResult = createPassword(characters, passwordLength);
    if (passwordResult) {
      setPassword(passwordResult);
      setIsPassGenerated(true);
    }
  };

  const createPassword = (characters: string, passwdLength: number) => {
    let result = '';
    for (let i = 0; i < passwdLength; i++) {
      const charIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(charIndex);
    }
    return result;
  };

  const resetPasswordState = () => {
    setPassword('');
    setIsPassGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  };

  return {
    password,
    isPassGenerated,
    lowerCase,
    upperCase,
    numbers,
    symbols,
    setPassword,
    setIsPassGenerated,
    setLowerCase,
    setUpperCase,setNumbers,
    setSymbols,
    generatePassword,
    resetPasswordState,
  };
};



/*
  Math.round():
  - The Math.round() function rounds a number to the nearest integer. If the decimal part is greater than or equal to 0.5, it rounds up; otherwise, it rounds down.
  In the original code, using Math.round() could lead to an index that exceeds the valid range of characters (since it rounds to the nearest integer).

  Math.floor():
  - The Math.floor() function always rounds down to the nearest integer.
  By using Math.floor(), we ensure that the index remains within the valid range of characters (from 0 to characters.length - 1).

  In the context of generating a password, we want to select a random character index from the available characters. 
  Using Math.floor() ensures that we stay within the valid bounds and avoid any out-of-range errors.
*/