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
        indice: 0,
        obj: [
            { url: '/img/img-1.jpg', id: 1 },
            { url: '/img/img-2.jpg', id: 2 },
            { url: '/img/img-3.jpg', id: 3 },
            { url: '/img/img-4.jpg', id: 4 }
        ]
    },

    mounted() {
        // entra quando l'applicativo vue ha caricato el: '#root'
        this.attivaIntervallo();
    },

    methods: {
        cambioDestra(){
            // cambio immagine in avanti
            // controllo che l'indice sia minore della lunghezza
            if( this.indice < this.obj.length -1){
             this.indice++;
           } else {
            this.indice = 0; 
           }
        },
        cambioSinistra(){
            // cambio immagine indietro
            if( this.indice <= 0 ){
                this.indice = this.obj.length -1;
            } else {
                this.indice--;
            }
        }, 
        attivaIntervallo(){
            setInterval (() => { this.cambioDestra() }, 3000);
        },
        selezionaImmagine(index){
           this.indice = index 
        }
    }
})