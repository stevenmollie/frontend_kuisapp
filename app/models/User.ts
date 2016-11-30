import {BaseModelClass} from "./BaseModelClass";
/**
 * Created by steven on 30/11/2016.
 * Typescript class for users
 */

export class User extends BaseModelClass{
    private _lastName: string;

    get lastName(): string{
        return this._lastName;
    }

    set lastName(lastName: string){
        this._lastName = lastName;
    }


}
