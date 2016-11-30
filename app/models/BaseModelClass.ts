/**
 * Created by steven on 30/11/2016.
 */

export class BaseModelClass{
    private _id: number;

    get id(): number{
        return this._id;
    }

    set id(id:number){
        this._id = id;
    }

    private _name: string;

    get name(): string{
        return this._name;
    }

    set name(name:string){
        this._name = name;
    }
}
