/* 
Realizzare uno slider

- Inserire 2 frecce a sinistra e a destra dell'immagine momentanea
 dello slider che permettono di andare avanti e indietro tra le
 immagini

BONUS:
nello slider ci sono dei pallini in basso, al click dei pallini
cambia l'immagine nello slider
a ogni 3 sec l'immagine cambia automaticamente senza nessun click 
da parte nostra

*/

const app = new Vue ({
    el: '#root',
    data: {
        titolo: 'Amsterdam',
        title: 'text-center',
        obj: [
            { img: 'https://unsplash.com/photos/QRtym77B6xk/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8YW1zdGVyZGFtfGVufDB8fHx8MTY2ODE4MDMwNA&force=true&w=640', id: 1 },
            { img: 'https://unsplash.com/photos/2Hs8zbwOLDA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8YW1zdGVyZGFtfGVufDB8fHx8MTY2ODE4MDMwNA&force=true&w=640', id: 2 },
            { img: 'https://unsplash.com/photos/t2hgHV1R7_g/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Nnx8YW1zdGVyZGFtfGVufDB8fHx8MTY2ODE4MDMwNA&force=true&w=640', id: 3 },
            { img: 'https://unsplash.com/photos/-e4vLFZV9QM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OHx8YW1zdGVyZGFtfGVufDB8fHx8MTY2ODE4MDMwNA&force=true&w=640', id: 4 }
        ],
        indice: 0,
    },
    methods: {
        cambioDestra: function(){
            if( this.indice > this.obj.lenght){
             this.indice = 0;
           } else {
            this.indice++;
           }
        },
        cambioSinistra: function(){
            if( this.indice > this.obj.lenght){
                this.indice = 0;
              } else {
                this.indice--;
               }
        }

    }
})