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

    private _score: number;

    get score(): number{
        return this._score;
    }

    set score(score:number){
        this._score = score;
    }

    private _phoneNumber: string;

    get phoneNumber(): string{
        return this._phoneNumber;
    }

    set phoneNumber(phoneNumber: string){
        this._phoneNumber = phoneNumber;
    }

    private _uid: string;

    get uid(): string{
        return this._uid;
    }

    set uid(uid: string){
        this._uid = uid;
    }

    private _email: string;

    get email(): string{
        return this._email;
    }

    set email(email:string){
        this._email = email;
    }

    private _imgSrc;

    get imgSrc(): string{
        return this._imgSrc;
    }

    set imgSrc(imgSrc: string){
        this._imgSrc = imgSrc;
    }

    private _householdId: number;

    get householdId(): number{
        return this._householdId;
    }

    set householdId(householdId: number){
        this._householdId = householdId;
    }

    constructor(user:any){
        super.name = user.displayName;
        this._email = user.email;
        this._imgSrc = user.photoURL;
        this._uid = user.uid;
    }

}
