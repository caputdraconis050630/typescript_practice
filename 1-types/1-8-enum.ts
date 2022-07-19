{
  /**
   * Enum
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;

  const DAYS_ENUM = Object.freeze({
    MONDAY: 0,
    TUESDAY: 1,
    WEDNESDAY: 2,
  });
  const dayOfToday = DAYS_ENUM.MONDAY; // 0

  // TypeScript
  // enum 명은 첫 글자만 대문자
  // 따로 값을 정하지 않으면 맨 위부터 0부터 할당

  enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Sunday);
  let day: Days = Days.Thursday;
  console.log(Days);

  // enum은 별로 추천하지 않음 -> Union Type 추천
  day = 10; // Days는 1부터 7까지 있는데, 10을 넣어도 컴파일 에러가 뜨지 않음
}
