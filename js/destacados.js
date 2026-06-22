import { productos } from "../data/productos.js";

const contenedor = document.getElementById("contenedor-destacados");

// Filtrar solo los productos destacados
let destacados = productos.filter(p => p.destacado === true);

// Si no hay ninguno marcado, mostrar algunos aleatorios
if (destacados.length === 0) {
    destacados = productos.slice().sort(() => Math.random() - 0.5).slice(0, 8);
}

destacados.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("categoria"); // Usamos la misma clase que ya tienes en categorías
    card.innerHTML = `
        <a href="productos/producto.html?id=${p.id}">
            <img src="${p.imagenes[0]}" alt="${p.titulo}" onerror="this.src='img/Producto1.png'">
            <div class="overlay">
                <h2>${p.titulo}</h2>

                <p><strong>$${p.precio.toLocaleString('es-CO')}</strong></p>
            </div>
        </a>
    `;
    contenedor.appendChild(card);
});