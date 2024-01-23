type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

// interface IA {
//   name: string;
//   skills: {
//     ts: string;
//     js: string;
//   };
// }

// let m: DeepReadonly<IA> = {
//   name: '',
//   skills: {
//     ts: '2',
//     js: '3',
//   },
// };
// m.skills.js = "1"

type DeepRequireReadonly<T> = {
  readonly [K in keyof T]-?: T[K] extends object ? DeepRequireReadonly<T[K]> : T[K];
};

// interface IA {
//   name?: string;
//   skills: {
//     ts?: string;
//     js?: string;
//   };
// }
// let m: DeepRequireReadonly<IA> = {
//   name: '',
//   skills: {
//     ts: '2',

//   },
// };
// m.skills.js = "1"

type UpperCaseKeys<T> = {
  [K in keyof T as Uppercase<K & string>]: T[K];
};

// interface IA {
//   name: string;
//   skills: string;
// }
// let u: UpperCaseKeys<IA> = {
//     NAME: "",
//     SKILLS: ""
// };

type ObjectToPropertyDescriptor<T> = {
  [K in keyof T]: { value: T[K]; writable: boolean; enumerable: boolean; configurable: boolean };
};

// interface IA {
//   name: string;
//   skills: string;
// }

// let desc: ObjectToPropertyDescriptor<IA> = {
//   name: {
//     value: '',
//     writable: false,
//     enumerable: false,
//     configurable: false,
//   },
//   skills: {
//     value: '',
//     writable: false,
//     enumerable: false,
//     configurable: false,
//   },
// };
