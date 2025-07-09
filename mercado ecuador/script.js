// Función de búsqueda básica
        document.querySelector('.search-bar').addEventListener('submit', function(e) {
            e.preventDefault();
            const searchTerm = document.getElementById('search-input').value.toLowerCase();
            const products = document.querySelectorAll('.product h2');
            
            products.forEach(product => {
                const productTitle = product.textContent.toLowerCase();
                const productCard = product.closest('.product');
                
                if (productTitle.includes(searchTerm)) {
                    productCard.style.display = 'block';
                } else {
                    productCard.style.display = 'none';
                }
            });
            
            // Mostrar mensaje si no hay resultados
            const visibleProducts = document.querySelectorAll('.product[style="display: block;"]');
            if (visibleProducts.length === 0 && searchTerm !== '') {
                alert('No se encontraron productos con ese nombre.');
                // Mostrar todos los productos nuevamente
                document.querySelectorAll('.product').forEach(p => p.style.display = 'block');
            }
        });
        
        // Simular añadir al carrito
        document.querySelectorAll
('.product button').forEach(button => {
            button.addEventListener('click', function() {
                const productTitle = this.previousElementSibling.textContent;
                alert(`Añadido al carrito: ${productTitle}`);
                
                // Actualizar contador del carrito
                const cartCount = document.querySelector('.cart-count');
                cartCount.textContent = parseInt(cartCount.textContent) + 1;
            });
        });