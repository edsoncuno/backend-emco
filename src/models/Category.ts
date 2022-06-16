export class Category {
    private __id: string = '';
    private _name: string = '';

    constructor({ _id, name }: { _id?: string, name?: string }) {
        if (_id) {
            this.__id = _id;
        }
        if (name) {
            this._name = name;
        }
    }

    get _id(): string {
        return this.__id;
    }

    set _id(value) {
        this.__id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}