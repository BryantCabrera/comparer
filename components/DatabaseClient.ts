interface LooseObject {
  [key: string]: any;
}
class DatabaseClient {
  database: LooseObject;
  constructor() {
    this.database = { sample: { dimension: 0 } };
  }

  getColumns(): Array<string> {
    return Object.keys(Object.entries(this.database)[0][1]);
  }

  getRows(): Array<Array<string>> {
    return Object.entries(this.database).map(array => [
      array[0],
      ...this._values(array[1])
    ]);
  }

  _values(obj: LooseObject): Array<string> {
    const keys: Array<string> = Object.keys(obj);
    return keys.map(k => obj[k]);
  }
  _randId(): string {
    return Math.random()
      .toString(36)
      .substring(2, 8);
  }

  addRow(): void {
    this.database[this._randId()] = Object.fromEntries(
      this.getColumns().map(c => [c, 0])
    );
  }

  addCol(): void {
    const samples: Array<string> = Object.keys(this.database);
    const newCol: string = this._randId();
    samples.forEach(s => (this.database[s][newCol] = 0));
  }

  // only the sample name
  updateRow(): void {}

  updateCol(): void {}
}
export default DatabaseClient;
