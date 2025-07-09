function toggleSidebar() {
            document.getElementById('sidebar').style.display = 'flex';
        }
        document.getElementById('cerrar').onclick = function() {
            document.getElementById('sidebar').style.display = 'none';
        };

        document.getElementById('formAgregarProducto').onsubmit = function(e) {
            e.preventDefault();
            const nombre = document.getElementById('nombre').value;
            const precio = document.getElementById('precio').value;
            const descripcion = document.getElementById('descripcion').value;
            const imagen = document.getElementById('imagen').value;

            const div = document.createElement('div');
            div.className = 'producto';
            div.innerHTML = `
                <img src="${imagen}" alt="${nombre}" class="producto-img">
                <div class="nombre">${nombre}</div>
                <div class="precio">${precio}</div>
                <div class="descripcion">${descripcion}</div>
                <button>Comprar</button>
            `;
            document.getElementById('catalogos').appendChild(div);
            document.getElementById('sidebar').style.display = 'none';
            this.reset();
        };

        // Slider
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide-img');

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                if (i === index) {
                    slide.classList.add('active');
                }
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

        setInterval(nextSlide, 5000); 