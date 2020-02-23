export class Post {
    titulo: string;
    texto: string;
    autor: string;
    imagen: string;
    categoria: string;
    fecha: Date;
    id: number;

    constructor(pTitulo: string, pTexto: string, pAutor: string, pImagen: string, pCategoria: string, pId: number ) {
        this.titulo = pTitulo;
        this.texto = pTexto;
        this.autor = pAutor;
        this.imagen = pImagen;
        this.categoria = pCategoria;
        this.fecha = new Date();
        this.id = pId;

    }
}
