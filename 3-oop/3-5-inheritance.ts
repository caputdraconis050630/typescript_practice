{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      console.log("Filling Coffee Beans...🙉");
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("Cleaning The Machine...🧼");
    }
    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not Enough Coffee Beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up...🔥");
    }
    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots.. ☕️`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
      //   if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT)
      //     throw new Error("Not Enough Coffee Beans!");
      //   this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      //   return {
      //     shots: shots,
      //     hasMilk: false,
      //   };
    }
  }

  class Amateur {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  /**
   * 아마추어, 프로 모두 동일한 메이커를 인자로 받음
   * 하지만, 각기 다른 인터페이스에 규약된 행동까지만 가능
   * 인터페이스의 장점
   */
  const amateur = new Amateur(maker);
  const pro = new ProBarista(maker);
  console.log("############# Amateur is making a coffee #############\n");
  amateur.makeCoffee();
  console.log("############### Pro is making a coffee ###############\n");
  pro.makeCoffee();
}
