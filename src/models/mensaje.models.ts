export class Mensaje {
    public $key: string;
    constructor( 
        public nombre_paciente: string,
        public medico: string,
        public paciente: string,
        public fecha: string,
        public mensaje: string,
        public hora: string,
        public timestamp: Object,
        public estado: number
    ){}
}