function DeprecatedMethod<T, A extends any[], R>(
  originalMethod: (...args: A) => R,
  context: ClassMethodDecoratorContext<T, (...args: A) => R>
) {
  if (context.kind !== 'method') throw new Error('Only Method decorator');

  function newMethod(this: T, ...args: A): R {
    console.warn(`Method ${String(context.name)} is deprecated.`);

    console.warn(`Please use method 'newMethod'`);

    return originalMethod.call(this, ...args);
  }

  return newMethod;
}

class MyClass {
  @DeprecatedMethod
  public oldMethod() {
    console.log('Old method used');
  }

  newMethod() {
    console.log('New method');
  }
}

const instance = new MyClass();
instance.oldMethod();

function MinMaxLength(minLength: number, maxLength: number) {
  return function <T>(target: (value: string) => void, context: ClassSetterDecoratorContext<T, string>) {
    return function (value: string): void {
      if (value.length < minLength) throw new Error(`Value less then ${minLength}`);
      if (value.length > maxLength) throw new Error(`Value more then ${maxLength}`);
      console.log(value);
      return target.apply(this, [value]);
    };
  };
}

function CheckEmail<T>(target: (value: string) => void, context: ClassSetterDecoratorContext<T, string>) {
  return function (value: string): void {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      throw new Error('Invalid email format');
    }
    console.log(value);
    return target.apply(this, [value]);
  };
}

class User {
  _name: string = '';
  _email: string = '';

  @MinMaxLength(2, 10)
  public set name(value: string) {
    this._name = value;
  }
  @CheckEmail
  set email(value: string) {
    this._email = value;
  }
}

const user1 = new User();
user1.name = 'T213';
user1.email = 'asdas@sasda.ewr';
