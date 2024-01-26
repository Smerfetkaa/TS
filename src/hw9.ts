type TypeFromFunction<T> = T extends (param: any) => infer V ? V : never;

type TypeFromFunction2<T> = T extends (param: (infer U)[]) => infer V
  ? [V, U]
  : T extends (param: infer U) => infer V
  ? [V, U]
  : never;

// const foo = (param: string[]): number => {
//   return param.length;
// };

// type ReturnType3 = TypeFromFunction<typeof foo>;
// type ReturnType2 = TypeFromFunction2<typeof foo>;
