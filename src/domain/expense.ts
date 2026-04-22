import { randomUUIDv5 } from "bun";

export class Expense {
  id: string;

  constructor(
    private date: Date,
    private amount: number,
    private name: string,
    id?: string,
  ) {
    if (!id) {
      id = randomUUIDv5("id", "oid");
    }

    this.id = id;
  }

  getFormattedDate() {
    const month = String(this.date.getMonth() + 1).padStart(2, "0");
    const year = String(this.date.getFullYear());
    return `${month}/${year}`;
  }

  getAmount() {
    return this.amount;
  }

  getName() {
    return this.name;
  }
}
