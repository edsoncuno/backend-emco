export class CategoriaDto {
    private _nombre: string = '';

    constructor(nombre: string) {
        this._nombre = nombre;
    }
    get nombre(): string {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
}