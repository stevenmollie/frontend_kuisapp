/**
 * Created by steve on 30/11/2016.
 */


export class FinishedTask{
    private _id: number;

    get id(): number{
        return this._id;
    }

    set id(id:number){
        this._id = id;
    }

    private _isDone: boolean;

    get isDone():boolean{
        return this._isDone;
    }

    set isDone(isDone:boolean){
        this._isDone = isDone;
    }

    private _finished_by: string;

    get finished_by():string{
        return this._finished_by;
    }

    set finished_by(finished_by:string){
        this._finished_by = finished_by;
    }

    private _finished_on: string;

    get finished_on():string{
        return this._finished_on;
    }

    set finished_on(finished_on:string){
        this._finished_on = finished_on;
    }
}