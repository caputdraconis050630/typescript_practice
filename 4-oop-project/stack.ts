{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  // 링크드 리스트의 노드 하나를 담당할 타입
  type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
  };

  class StackImpl implements Stack {
    private head?: StackNode;
    private _size: number = 0;

    constructor(private capacity: number) {}
    get size(): number {
      return this._size;
    }

    push(value: string): void {
      if (this._size === this.capacity) {
        throw new Error("꽉 찼어 시키야!!! 😡");
      }
      const node: StackNode = { value, next: this.head };
      this.head = node;
      this._size++;
    }

    pop(): string {
      if (this.head == null) {
        throw new Error("값이 없어 시키야!!! 😡");
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl(10);
  stack.push("Guntak");
  stack.push("qoqo");
  console.log(stack.pop());
  console.log(stack.pop());
}
