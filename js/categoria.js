import { productos } from "../data/productos.js";

const params = new URLSearchParams(window.location.search);
const categoriaKey = params.get("cat");

const contenedor = document.getElementById("contenedor-productos");
const titulo = document.getElementById("titulo-categoria");

if (!categoriaKey) {
    titulo.textContent = "Categoría no encontrada";
    contenedor.innerHTML = "<p style='text-align:center; padding:50px;'>Error: Categoría no especificada.</p>";
} else {
    // Filtrar productos de esa categoría
    const productosFiltrados = productos.filter(p => p.categoria === categoriaKey);

    if (productosFiltrados.length === 0) {
        titulo.textContent = categoriaKey.replace('-', ' ').toUpperCase();
        contenedor.innerHTML = `<p style='text-align:center; padding:50px;'>No hay productos disponibles en esta categoría por el momento.</p>`;
    } else {
        titulo.textContent = categoriaKey.replace('-', ' ').toUpperCase();

        productosFiltrados.forEach(p => {
            const card = document.createElement("div");
            card.classList.add("categoria"); // Usamos la misma clase para mantener el diseño
            card.innerHTML = `
                <a href="productos/producto.html?id=${p.id}">
                    <img src="${p.imagenes[0]}" alt="${p.titulo}" onerror="this.src='img/Producto1.png'">
                    <div class="overlay">
                        <h2>${p.titulo}</h2>
                        <p>${p.descripcion}</p>
                        <p><strong>$${p.precio.toLocaleString('es-CO')}</strong></p>
                    </div>
                </a>
            `;
            contenedor.appendChild(card);
        });
    }
}