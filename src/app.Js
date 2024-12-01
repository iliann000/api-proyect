

// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function() {
    // Mi clave API para autenticar las solicitudes a The Cat API
    const apiKey = 'live_CKap4jgt048C2Q52FWwkMLJNBUZsLJLd01XmcsVwhB8RncftYuuV9nEk22FOssyR';
    
    // Aquí obtiene el contenedor donde se mostrarán las imágenes de las razas de gatos
    const breedGallery = document.getElementById('imagenes-gatos');

    // Aquí obtiene las razas de gatos al cargar la página
    fetch('https://api.thecatapi.com/v1/breeds', {
        headers: {
            'x-api-key': apiKey // Aquí se incluye la clave API en los encabezados de la solicitud
        }
    })
    // Aquí procesa la respuesta y la convierte a JSON
    .then(response => response.json())
    .then(data => {
        // Aquí itera sobre cada raza de gato en los datos recibidos
        data.forEach(breed => {
            // Aquí crea un contenedor para cada raza
            const breedItem = document.createElement('div');
            breedItem.className = 'raza-gato';

            // Aquí añade el nombre de la raza como un elemento <h2>
            const breedName = document.createElement('h2');
            breedName.textContent = breed.name;

            // Aquí verifica si la raza tiene una imagen
            if (breed.image && breed.image.url) {
                // Aquí crea un elemento <img> para la imagen de la raza
                const breedImage = document.createElement('img');
                breedImage.src = breed.image.url; // Aquí asigna la URL de la imagen
                breedImage.alt = `Imagen de ${breed.name}`; // Aquí asigna un texto alternativo descriptivo a la imagen

                // Aquí agrega la imagen al contenedor de la raza
                breedItem.appendChild(breedImage);
            }

            // Aquí agrega el nombre al contenedor de la raza
            breedItem.appendChild(breedName);

            //Aquí agrega el contenedor de la raza a la galería
            breedGallery.appendChild(breedItem);
        });
    })
    //Aquí captura y maneja cualquier error que ocurra durante la solicitud
    .catch(error => console.error('Error:', error));
});
