// Визначте інтерфейс, який використовує сигнатуру індексу з типами об'єднання.
// Наприклад, тип значення для кожного ключа може бути число | рядок.

interface IUnion {
  [key: string]: string | number;
}

// Створіть інтерфейс, у якому типи значень у сигнатурі індексу
// є функціями.Ключами можуть бути рядки, а значеннями —
// функції, які приймають будь - які аргументи.

interface IFn {
  [key: string]: (arg: any) => void;
}
const fn: IFn = {
  message: (message: string) => console.log(message),
};

//  Опишіть інтерфейс, який використовує сигнатуру індексу
//  для опису об'єкта, подібного до масиву.
//  Ключі повинні бути числами, а значення - певного типу.

interface IArray {
  [index: number]: string;
}

// Створіть інтерфейс з певними властивостями та індексною сигнатурою.
// Наприклад, ви можете мати властивості типу
// name: string та індексну сигнатуру для додаткових динамічних властивостей.

interface IUser {
  firstName: string;
  lastName: string;
  [key: string]: string | number;
}
const user: IUser = {
  firstName: '',
  lastName: '',
  age: 12,
};

// Створіть два інтерфейси, один з індексною сигнатурою,
// а інший розширює перший, додаючи специфічні властивості.

interface IFirst {
  [key: string]: string | number;
}

interface ISecond extends IFirst {
  name: string;
}

const a: ISecond = {
  name: 'Lana',
  age: 23,
};
// Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє,
// чи відповідають значення певних ключів певним критеріям(наприклад, чи всі значення є числами).

interface IObject {
  [key: string]: number | string;
}
type IFn2 = (arg: IObject) => boolean;

const obj: IObject = {
  key1: 22,
  key2: '32',
};
const fn2: IFn2 = (obj: IObject): boolean => {
  for (let key in obj) {
    if (typeof obj[key] !== 'number') {
      return false;
    }
  }
  return true;
};
console.log(fn2(obj));
