// bracket을 사용하는 이유 -> global scope로 정의되면, 다른 파일에 있는 변수명끼리 충돌이 일어날 수 있음
{
  // Javascript
  // old : var -> 문제가 많음, TS에서는 존재 자체를 잊어도 좋음
  var age = 5;
  age = 1;
  // let
  // ES6에서 등장한 친구
  let name = "Hello";
  name = "Hi";

  // const
  const age1 = 5;
  // age = 5; 값 변경 불가능

  /**
   * Javascript
   * Primitive : number, string, boolean, bigint, symbol, null, undefined
   * Object : function, array,,,,
   */
  // number
  // const num:number = 'd' -> Type Error
  const num: number = -6;

  // string
  const str: string = "hello";

  //boolean
  const bool: boolean = true;

  // undefined -> 값이 있는지, 없는지조차 결정되지 않은 상태를 의미
  let und: undefined; // 똥!
  let und_age: number | undefined; // number or undefined 가 들어갈 수 있는 변수
  und_age = undefined;
  und_age = 2;

  // null
  let person: null;
  person = null;
  // person = 1; -> Error

  let person2: string | null;
  person2 = null;
  person2 = "John";

  // unknown -> 뭐가 들어올지 몰라요!! -> 가능한 사용하지 않는 방향으로!
  let notSure: unknown;
  notSure = "he";
  notSure = true;

  // any
  // unknown은 '정말 알 수 없어ㅠㅠㅠ'같은 느낌! any는 '뭐든 들어올 수 있어~ 다 덤벼~'같은 느낌!
  let anything: any = 0;
  anything = "hello";

  // void -> 생략 가능
  function print(): void {
    console.log("hello");
    return;
  }
  let unusable: void = undefined; // void 타입의 변수에는 undefined만 할당 가능, 활용성 0

  // never -> 리턴하지 않음! 리턴할 생각이 없음(무조건 어플리케이션 종료)
  function throwError(message: string): never {
    // message -> server (log)
    // throw new Error(message);
    /**
     * while(true) {
     *
     * }
     */
  }

  // object -> Primitive Type을 제외한 모든걸 담을 수 있다! -> 💩
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "guntak" });
  acceptSomeObject({ animal: "dog" });

  // JS 💩
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TS
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JS 💩
  function jsFetchNum(id) {
    // code  ...
    // code  ...
    // code  ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TS
  function tsFetchNum(id: string): Promise<number> {
    return new Promise((resolve, rejct) => {
      resolve(100);
    });
  }
}
