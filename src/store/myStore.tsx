import { makeAutoObservable } from "mobx"

class MyStore {
    selected = 0
    testNumber: number = 0

    changeSelectedTab = (index: number) => {
        this.selected = index;
    };

    changeTestNumber=(index:number)=>{
        this.testNumber = index
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export default new MyStore();