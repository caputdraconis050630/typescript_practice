{
  //   // JS 💩
  //   function jsAdd(num1, num2) {
  //     return num1 + num2;
  //   }

  //   // TS
  //   function add(num1: number, num2: number): number {
  //     return num1 + num2;
  //   }

  //   // JS 💩
  //   function jsFetchNum(id) {
  //     // code  ...
  //     // code  ...
  //     // code  ...
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  //   // TS
  //   function tsFetchNum(id: string): Promise<number> {
  //     return new Promise((resolve, rejct) => {
  //       resolve(100);
  //     });
  //   }

  // Javascript ✨ => Typescript
  // Optional Parameter => ?을 붙이면 해당 인자는 Optional
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("Steve", "Kim");
  printName("Steve", undefined);
  printName("Steve");

  // Default Parameter
  function printMessage(message: string = "Default Message") {
    console.log(message);
  }
  printMessage();
  printMessage("HOHOIT");

  // Rest Parameter
  function addNumbers(...nums: number[]) {
    let total: number = 0;
    nums.forEach((num) => (total += num));
    console.log(total);
  }
  addNumbers(1, 2, 3, 4, 5, 6, 7);

  // Array, Tuple 🙃
}
