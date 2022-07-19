{
  /**
   * Type Assertions 💩 => any 타입인 변수를 '와 이거 무조건 string인데?' 할 때 사용하는 것
   */

  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length); // 문자열이라고 장담하고 타입 캐스팅 진행
  console.log((<string>result).length);

  const wrong: any = 5;
  // console.log((wrong as Array<number>).push(1)); 요거는 터짐
  // 정말 장담할 수 있는 상황이 아닐 때는 사용 X

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); // 이건 장담해!! 무조건 값이 있어!

  // 100%인 상황에서만 사용ㅠㅠ
  const button = document.querySelector("class")!;
  button.nodeName;
}
