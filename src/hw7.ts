const filterArray = <T>(array: T[], condition: (item: T) => boolean) => {
  return array.filter(condition);
};

// console.log(filterArray([1, 3, 5, 7, 0], arg => arg > 3));

class Stack<T> {
  constructor(public elements: T[]) {}
  push(item: T) {
    this.elements.push(item);
  }
  pop() {
    this.elements.pop();
  }
  peek(): T {
    return this.elements[this.elements.length - 1];
  }
}

// const stack1: Stack<string> = new Stack(['1', '4', '67']);
// stack1.push("2")
// console.log(stack1);

type A = string | number | symbol;

class Dictionary<K extends A, V> {
  constructor(private dictionary: Record<K,V>) {}
  set(key: K, value: V) {
    this.dictionary[key] = value;
  }
  get(key: K): V | undefined {
    return this.dictionary[key];
  }
  has(key: K): boolean {
    return key in this.dictionary;
  }
}

// const dictionary: Dictionary<string, string> = new Dictionary({ word: 'description', word2: 'description2' });
// console.log(dictionary.has('word'));
// dictionary.set('word3', 'desc3');
// console.log(dictionary.get('word4'));
