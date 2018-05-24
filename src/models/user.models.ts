import { Md5 } from "ts-md5";
export class User {
    public codigo: string;
    public name: string;
    public username: string;
    public email: string;
    public photo: string;
    public tipo: string;
    public codigo_clinica: string;
    constructor(){ }
    static GenerateKey(email: string): string{
        let referencia: string;
        referencia = Md5.hashStr(email).toString();
        referencia = referencia.substring(0, 19);
        return referencia;
    }
    static currentUser: User;
}
export class Users {
    public key: string;
    public user: User;
    constructor(){ }
}