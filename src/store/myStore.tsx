import { makeAutoObservable } from "mobx"

class MyStore {
    mobxStr:string=""

    changeMobxStr =(str:string)=>{
      this.mobxStr = str;
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export default new MyStore();