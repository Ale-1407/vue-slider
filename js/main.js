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

var app = new Vue ({
    el: '#root',
    data: {
        titolo: 'Amsterdam',
        title: 'text-center',
        obj: [
            { img: '/img/img-1.jpg', id: 1 },
            { img: '/img/img-2.jpg', id: 2 },
            { img: '/img/img-3.jpg', id: 3 },
            { img: '/img/img-4.jpg', id: 4 }
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
            if( this.indice < this.obj.lenght){
                this.indice = 0;
              } else {
                this.indice--;
               }
        }

    }
})