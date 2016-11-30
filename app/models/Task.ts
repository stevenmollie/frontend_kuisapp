import {BaseModelClass} from "./BaseModelClass";
/**
 * Created by steven on 30/11/2016.
 */

export class Task extends BaseModelClass{
    private _dueDate: any;

    get dueDate(): any{
        return this._dueDate;
    }

    set dueDate(dueDate: any){
        this._dueDate = dueDate;
    }

    private _description: string;

    get description():string{
        return this._description;
    }

    set description(description:string){
        this._description = description;
    }

    private _period: number;

    get period(): number{
        return this._period;
    }

    set period(period:number){
        this._period = period;
    }

    getPeriodString(){
        return "Repeats every " + this._period + " days.";
    }

    private _assigned_to: number;

    get assigned_to(): number{
        return this._assigned_to;
    }

    set assigned_to(assigned_to:number){
        this._assigned_to = assigned_to;
    }

    private _username: string;

    get username():string{
        return this._username;
    }

    set username(username:string){
        this._username = username;
    }

    private _householdId : number;

    get householdId():number{
        return this._householdId;
    }

    set householdId(householdId:number){
        this._householdId = householdId;
    }

    private _points: number;

    get points():number{
        return this._points;
    }

    set points(points:number){
        this._points = points;
    }

}
