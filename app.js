import {Producto} from './producto.js';
import {Inventario} from './inventario.js';

let invt = new Inventario();

document.getElementById('producto-form').addEventListener('submit', function(e){
        let cod = document.getElementById('codigo').value;
        let nom = document.getElementById('nombre').value;
        let cant = document.getElementById('cantidad').value;
        let pre = document.getElementById('precio').value;

        let nuevo = new Producto (cod,nom,cant,pre);

        if(nom === "" || cod === "" || cant === "" || pre === ""){
            return alert("Por favor rellene todos los campos");
        }

        invt.agregar(nuevo);
        let element = invt.verInvt();

        let listaProducto = document.getElementById('product-list');
        listaProducto.innerHTML = element;
        e.preventDefault();
        
});

document.getElementById('producto-e').addEventListener('submit', function(e){
        const codigoEliminar = document.getElementById('codigoEliminar').value;
        
        let element = invt.eliminar(codigoEliminar);
        if(element === true){
                let listarProductos = document.getElementById('product-list');
                listarProductos.innerHTML = `<h4>Producto eliminado con codigo:</h4>${codigoEliminar}`;
        }else{
                let listarProductos = document.getElementById('product-list');
                listarProductos.innerHTML = `<h4>Producto no encontrado</h4>`;
        }
        
        e.preventDefault();
});

document.getElementById('producto-b').addEventListener('submit', function(e){
        const codigoBuscar = document.getElementById('codigoBuscar').value;
        
        let element = invt.buscar(codigoBuscar);

        if(element === false){
                let listarProductos = document.getElementById('product-list');
                listarProductos.innerHTML = `<h4>Producto no encontrado</h4>`;
        } else {
                let listarProductos = document.getElementById('product-list');
                listarProductos.innerHTML = `<h4>Producto encontrado</h4>
                <div class="card text-center mb-4">
                    <div class="card-body">
                        <strong>codigo</strong> ${element.codigo}
                        <strong>nombre</strong> ${element.nombre}
                        <strong>precio</strong> ${element.precio}
                        <strong>cantidad</strong> ${element.cantidad}
                    </div>
                </div>
                `;
        }

        e.preventDefault();
});

document.getElementById('producto-m').addEventListener('submit', function(e){    
        let element = invt.verInvt();
        let listaProducto = document.getElementById('product-list');
        listaProducto.innerHTML = element;
        
        e.preventDefault();
});

document.getElementById('producto-insert').addEventListener('submit', function(e){
        const codigo = document.getElementById('codigoI').value;
        const nombre = document.getElementById('nombreI').value;
        const precio = document.getElementById('precioI').value;
        const cantidad = document.getElementById('cantidadI').value;
        const posicion = document.getElementById('posicionI').value;
        
        const nuevo = new Producto(codigo, nombre, precio, cantidad);

        invt.insertar(nuevo,posicion);
        let element = invt.verInvt();
        let listaProducto = document.getElementById('product-list');
        listaProducto.innerHTML = element;
       
        e.preventDefault();
});

document.getElementById('producto-in').addEventListener('submit', function(e){  
        let element = invt.invertir();
        let listaProducto = document.getElementById('product-list');
        listaProducto.innerHTML = element;
        e.preventDefault();
        
});