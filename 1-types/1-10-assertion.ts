{
  /**
   * Type Assertions π© => any νμμΈ λ³μλ₯Ό 'μ μ΄κ±° λ¬΄μ‘°κ±΄ stringμΈλ°?' ν  λ μ¬μ©νλ κ²
   */

  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length); // λ¬Έμμ΄μ΄λΌκ³  μ₯λ΄νκ³  νμ μΊμ€ν μ§ν
  console.log((<string>result).length);

  const wrong: any = 5;
  // console.log((wrong as Array<number>).push(1)); μκ±°λ ν°μ§
  // μ λ§ μ₯λ΄ν  μ μλ μν©μ΄ μλ λλ μ¬μ© X

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); // μ΄κ±΄ μ₯λ΄ν΄!! λ¬΄μ‘°κ±΄ κ°μ΄ μμ΄!

  // 100%μΈ μν©μμλ§ μ¬μ©γ γ 
  const button = document.querySelector("class")!;
  button.nodeName;
}
