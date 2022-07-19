{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = "Guntak";
  const address: Text = "Seoul";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "Guntak",
    age: 22,
  };

  /**
   * String Literal Types
   */
  type Name = "name";
  let guntakName: Name;
  guntakName = "name";

  type JSON = "json";
  const json: JSON = "json";

  type Boal = true;
  //const isCat: Boal = false;
  const isCat: Boal = true;
}
