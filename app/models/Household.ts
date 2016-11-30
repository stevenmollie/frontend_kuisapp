import {User} from "./User";
import {Task} from "./Task";
import {BaseModelClass} from "./BaseModelClass";
/**
 * Created by steve on 30/11/2016.
 */


export class Household extends BaseModelClass{
    private _address: string;

    get address():string{
        return this._address;
    }

    set address(address:string){
        this._address = address;
    }

    private _phoneNumber: string;

    get phoneNumber():string{
        return this._phoneNumber;
    }

    set phoneNumber(phoneNumber:string){
        this._phoneNumber = phoneNumber;
    }

    private _users: User[];

    get users(): User[]{
        return this._users;
    }

    set users(users: User[]){
        this._users = users;
    }

    private _tasks: Task[];

    get tasks():Task[]{
        return this._tasks;
    }

    set tasks(tasks: Task[]){
        this._tasks = tasks;
    }

    private _tasksTodo: Task[];

    get tasksTodo():Task[]{
        return this._tasksTodo;
    }

    set tasksTodo(tasksTodo: Task[]){
        this._tasksTodo = tasksTodo;
    }
}