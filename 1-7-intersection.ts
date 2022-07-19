{
  /**
   *  Intersection Types: & AND
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function interWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work());
  }

  interWork({
    name: "guntak",
    score: 25,
    employeeId: 522,
    work: () => {},
  });
}
