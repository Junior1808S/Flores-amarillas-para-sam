document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("flower-container");
    
    // Array de emojis para darle variedad visual
    const flowers = ['🌻', '🌻', '✨'];

    function createFlower() {
        const flower = document.createElement("div");
        flower.classList.add("flower");
        
        // Seleccionar una flor aleatoria
        flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];
        
        // Posición horizontal aleatoria (0% a 100% del ancho)
        flower.style.left = Math.random() * 100 + "vw";
        
        // Duración de la caída aleatoria (entre 4 y 9 segundos)
        const animationDuration = Math.random() * 5 + 4;
        flower.style.animationDuration = animationDuration + "s";
        
        // Tamaño aleatorio para dar profundidad (efecto parallax ligero)
        const size = Math.random() * 1.5 + 1; // Entre 1rem y 2.5rem
        flower.style.fontSize = size + "rem";

        container.appendChild(flower);

        // Buena práctica de ingeniería: limpiar el DOM 
        // Elimina el elemento exacto después de que termine su animación
        setTimeout(() => {
            flower.remove();
        }, animationDuration * 1000);
    }

    // Generar una nueva flor cada 300 milisegundos
    setInterval(createFlower, 300);
});