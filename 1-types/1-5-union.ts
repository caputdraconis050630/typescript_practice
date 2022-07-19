{
  /**
   *  Union Types: OR
   */
  type Direction = "left" | "right" | "up" | "down";
  function move1(direction: Direction) {
    console.log(direction);
  }
  move1("left");
  move1("right");
  move1("up");
  move1("down");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login1(id: string, password: string): LoginState {
    return {
      response: {
        body: "Logged In!",
      },
    };

    /**
     * return {
     * 	reason: "Shit!",
     * };
     */
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason

  function printLoginState1(state: LoginState) {
    if ("response" in state) {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
