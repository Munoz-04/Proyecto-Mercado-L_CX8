      document.querySelector('.search-bar').addEventListener('submit', function(e) {
            e.preventDefault();
            const searchTerm = document.getElementById('search-input').value.toLowerCase().trim();
            
            if (searchTerm === '') {
                alert('Por favor ingresa un término de búsqueda');
                return;
            }
            
            const products = document.querySelectorAll('.product h2');
            let found = false;
            
            products.forEach(product => {
                const productTitle = product.textContent.toLowerCase();
                const productCard = product.closest('.product');
                
                if (productTitle.includes(searchTerm)) {
                    productCard.style.display = 'block';
                    found = true;
                    // Destacar el producto encontrado
                    productCard.style.boxShadow = '0 0 0 2px var(--accent-color)';
                    setTimeout(() => {
                        productCard.style.boxShadow = 'var(--shadow)';
                    }, 2000);
                } else {
                    productCard.style.display = 'none';
                }
            });
            
            // Mostrar mensaje si no hay resultados
            if (!found) {
                alert('No se encontraron productos con ese nombre. Intenta con otras palabras clave.');
                // Mostrar todos los productos nuevamente
                document.querySelectorAll('.product').forEach(p => p.style.display = 'block');
            } else {
                // Desplazarse a la primera coincidencia
                const firstMatch = document.querySelector('.product[style="display: block;"]');
                if (firstMatch) {
                    firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });
        
        // Simular añadir al carrito
        document.querySelectorAll('.product button:not(.wishlist-btn)').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const product = this.closest('.product');
                const productName = product.querySelector('h2').textContent;
                const productPrice = product.querySelector('.price').textContent;
                
                // Actualizar contador del carrito
                const cartCount = document.querySelector('.cart-count');
                let count = parseInt(cartCount.textContent);
                cartCount.textContent = count + 1;
                
                // Animación
                cartCount.style.transform = 'scale(1.5)';
                setTimeout(() => {
                    cartCount.style.transform = 'scale(1)';
                }, 300);
                
                // Mostrar notificación
                alert(`¡${productName} agregado al carrito!\nPrecio: ${productPrice}`);
            });
        });
        
        // Botón de lista de deseos
        document.querySelectorAll('.wishlist-btn').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const icon = this.querySelector('i');
                
                if (icon.classList.contains('far')) {
                    icon.classList.remove('far');
                    icon.classList.add('fas');
                    icon.style.color = '#ff4d4d';
                    this.style.color = '#ff4d4d';
                    
                    // Animación
                    this.style.transform = 'scale(1.2)';
                    setTimeout(() => {
                        this.style.transform = 'scale(1)';
                    }, 300);
                } else {
                    icon.classList.remove('fas');
                    icon.classList.add('far');
                    icon.style.color = '';
                    this.style.color = '';
                }
            });
        });
        
        // Selector de ubicación
        document.querySelector('.location-selector').addEventListener('click', function() {
            alert('Selecciona tu ubicación para ver los tiempos de entrega y costos de envío');
        });
        
        // Suscripción al newsletter
        document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            
            if (email.includes('@') && email.includes('.')) {
                alert(`¡Gracias por suscribirte con ${email}! Te enviaremos nuestras mejores ofertas.`);
                this.querySelector('input').value = '';
            } else {
                alert('Por favor ingresa un correo electrónico válido');
            }
        });
        
        // Animaciones al hacer scroll
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.animated');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };
        
        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);