export class Inventario {
    constructor() {
        this.primero = null;
    }

    verInvt(){
        let cadena = '';
        let aux = this.primero;
        while(aux != null){
        cadena = cadena + `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>codigo</strong> ${aux.codigo}
                <strong>nombre</strong> ${aux.nombre}
                <strong>precio</strong> ${aux.precio}
                <strong>cantidad</strong> ${aux.cantidad}
            </div>
        </div>
        ` ;
        aux = aux.next;
        }
    return cadena;    
    }

    agregar(nuevo){
        let aux = this.primero;

        if(this.primero == null){
            this.primero = nuevo;
        }else if(nuevo.codigo < this.primero.codigo){
            nuevo.next = aux;
            aux.previous = nuevo;
            this.primero = nuevo;
        }else{
            while(aux.next != null && aux.next.codigo < nuevo.codigo){
                aux = aux.next;
            }
            nuevo.next = aux.next;
            aux.next = nuevo;
        } 
        
    }
    
    buscar(codigo) {
        if (this.primero == null) {
            return false;
        } else {
            let aux = this.primero;
            while (aux != null) {
                if (aux.codigo == codigo) {
                    return aux;
                }
                aux = aux.next;
            }
            return false;
        }
    }

    eliminar(codigo){
        if(this.primero.codigo == codigo){
            this.primero = this.primero.next;
            return true;
        }else{
            let aux = this.primero;
            while(aux.next.codigo != codigo){
                aux = aux.next;
            }
            aux.next = aux.next.next;
            return true;
        }
        return false;
    }

    insertar(nuevo, posicion){
        if(posicion == 1){
            this.agregarInicio(nuevo);
        }else{
            let aux = this.primero;
            for(let i = 0; i < posicion - 2; i++){
                aux = aux.next;
            }
            nuevo.next = aux.next;
            aux.next = nuevo;
        }
    }
    
    agregarInicio(nuevo){
        if(this.primero == null){
            this.primero = nuevo;
        }else{
            nuevo.next = this.primero;
            this.primero = nuevo;
        }
    }

    invertir(){
        let cadena = '';
        let aux = this.primero;
        while(aux != null){
        cadena =`
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>codigo</strong> ${aux.codigo}
                <strong>nombre</strong> ${aux.nombre}
                <strong>precio</strong> ${aux.precio}
                <strong>cantidad</strong> ${aux.cantidad}
            </div>
        </div>
        ` + cadena;
        aux = aux.next;
    }
    return cadena;    
    }
}