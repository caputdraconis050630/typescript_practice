{
  /**
   * Type Inference(타입 추론))
   */

  let text = "hello";
  text = "hi";
  function print(message: string) {
    console.log(message);
  }
  print("hello");

  // number를 리턴하는 함수로 댐!
  function add(x: number, y: number) {
    return x + y;
  }
  const result = add(1, 2);
}
