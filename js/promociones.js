import { productos } from "../data/productos.js";

const contenedor = document.getElementById("contenedor-promociones");

const promociones = productos.filter(p => p.promocion === true);

//calcular el descuento para cada producto promocionado


promociones.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("producto-promocion");
    card.innerHTML = `
        <a href="productos/producto.html?id=${p.id}">
            <img src="${p.imagenes[0]}" alt="${p.titulo}" onerror="this.src='img/Producto1.png'">
            <h3>${p.titulo}</h3>
            <p class="descripcion">${p.descripcion}</p>
            <h4 class="precio">$${p.precio.toLocaleString('es-CO')}</h4>
            
            <a href="${p.whatsapp}" target="_blank" class="btn-comprar">
                Comprar por WhatsApp
            </a>
        </a>
    `;
    contenedor.appendChild(card);
});