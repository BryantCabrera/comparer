interface LooseObject {
  [key: string]: any
}
class DatabaseClient {
  database: LooseObject
  constructor(){
      this.database = {'sample':{'dimension': 0}} 
  }

  getColumns():Array<string>{
    return Object.keys(Object.entries(this.database)[0][1]);
  }

  _randId():string{
    return Math.random().toString(36).substring(2,8) 
  }

  addRow():void{
    this.database[this._randId()]=Object.fromEntries(
      this.getColumns().map(c => [c, 0]) 
    )
  }

  addCol():void{
      const samples: Array<string> = Object.keys(this.database)  
      const newCol: string = this._randId()
      samples.forEach(s=>this.database[s][newCol]=0)
      console.log(this.database)
  }

  // only the sample name
  updateRow():void{}
  
  updateCol():void{}
}
export default DatabaseClient;
