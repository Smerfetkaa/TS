// Попрацюємо з числовим паліндромом.

const reversed = (num: number): number => {
  const reversedStr = String(num).split('').reverse().join('');
  const reversedNum = parseInt(reversedStr);
  return reversedNum;
};

const findPalindrome = (x: number, steps: number = 1): { result: number; steps: number } | undefined => {
  // 6971 its maximum call stack size
  if (steps > 6971) {
    console.log(`Number ${x} didn't form a palindrome within 6971 steps.`);
    return;
  }

  let currentNum = x;
  let sum = currentNum + reversed(currentNum);
  if (sum === reversed(sum)) {
    return { result: sum, steps: steps };
  }

  return findPalindrome(sum, steps + 1);
};

console.log(findPalindrome(1946));

//Напишіть функцію, яка приймає масив унікальних елементів і генерує всі можливі перестановки цього масиву

const transposition = (array: any[]): any[] => {
  const result: any[] = [];

  const swap = (i: number, j: number) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };

  const generateTransposition = (n: number) => {
    if (n === 1) {
      result.push([...array]);
      return;
    }

    for (let i = 0; i < n - 1; i++) {
      generateTransposition(n - 1);

      if (n % 2 === 0) {
        swap(i, n - 1);
      } else {
        swap(0, n - 1);
      }
    }

    generateTransposition(n - 1);
  };

  generateTransposition(array.length);
  return result;
};
console.log(transposition([1, 2, 3]));
