{
  // Array
  const fruits: string[] = ["Tomato", "Banana"];
  const scores: Array<number> = [1, 3, 5];

  // string[] 과 Array<number>는 거의 비슷한 타입
  // 인자로 받은 배열을 편집할 수 없게 하는 키워드 readonly는 string[] 과 같은 배열 형태에만 사용 가능
  // Array<string>과 같은 타입에는 사용 불가능
  // string[] 타입을 더 선호
  function printArray(fruits: readonly string[]) {
    // fruits.push('hoit');
  }

  // Tuple -> interface, type alias, class 로 대체
  // 서로 다른 타입의 데이터를 담을 수 있는 배열
  // Tuple은 추천하지 않음. <- 인덱스로 접근하기 때문에.(가독성 떨어짐)
  // class, object를 사용해 student.name과 같이 접근하는 것이 더 좋음
  let student: [string, number];
  student = ["name", 123];
  student[0]; // 'name'
  student[1]; // 123
  const [name, age] = student;
}
