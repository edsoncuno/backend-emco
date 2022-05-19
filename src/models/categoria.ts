export class Categoria {
    private __id: string = '';
    private _nombre: string = '';

    constructor({ _id, nombre }: { _id?: string, nombre?: string }) {
        if (_id) {
            this.__id = _id;
        }
        if (nombre) {
            this._nombre = nombre;
        }
    }

    get _id(): string {
        return this.__id;
    }
    set _id(value) {
        this.__id = value;
    }
    get nombre(): string {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    public toJSON(): Object {
        return { _id: this.__id, nombre: this._nombre }
    }
    public isEmpty(): boolean {
        return (this.__id == '' && this._nombre == '') ? true : false;
    }
}