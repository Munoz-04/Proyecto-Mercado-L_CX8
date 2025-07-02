function mostrarProductos() {
    const catalogo = document.getElementById('catalogos');
    catalogo.innerHTML = '';
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.className = 'producto';
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-img">
            <div class="nombre">${producto.nombre}</div>
            <div class="precio">${producto.precio}</div>
            <div class="descripcion">${producto.descripcion}</div>
            <button>Comprar</button>
        `;
        catalogo.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', mostrarProductos);

// Funcionalidad del botón Agregar menú
document.getElementById('agregarProducto').addEventListener('click', function() {
    document.getElementById('sidebar').style.display = 'flex';
});

// Cerrar el formulario
document.getElementById('cerrar').addEventListener('click', function() {
    document.getElementById('sidebar').style.display = 'none';
});

// Agregar producto al catálogo
document.getElementById('formAgregarProducto').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const descripcion = document.getElementById('descripcion').value;
    const imagen = document.getElementById('imagen').value;

    productos.push({ nombre, precio, descripcion, imagen });
    mostrarProductos();
    document.getElementById('sidebar').style.display = 'none';
    this.reset();
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide-img');

function showSlide(index) {
    slides.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}
setInterval(nextSlide, 4000);
