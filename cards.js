const cargarStockTrampa = () => {
    let cards = [
        {idProduct: 1, handmakerName: "Emiliano Lopez", nameProduct: "pulsera de cuero", URLimg: "img/pulseraDeCuero.jpg", URLDescription: "pulsera de cuero perfecta para combinar con campera de cuero", priceProduct: 1000,},
        {idProduct: 2, handmakerName: "Susana Gottau", nameProduct: "collar de plata", URLimg: "img/collarDePlata.png", URLDescription: "collar de plata con gema verde", priceProduct: 2000,},
        {idProduct: 3, handmakerName: "Mariano Ruiz", nameProduct: "juego de cucharas", URLimg: "img/juegoDeCucharasDeMadera.jpg", URLDescription: "juego de cucharas diseñado para tu cocina", priceProduct: 750,},
        {idProduct: 4, handmakerName: "Joel Guzman", nameProduct: "Collar", URLimg: "https://images.pexels.com/photos/906056/pexels-photo-906056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", URLDescription: "collar a precio barato", priceProduct: 1250,},
        {idProduct: 5, handmakerName: "Sofia Martinez", nameProduct: "collar", URLimg: "img/collar2.jpg", URLDescription: "el mejor collar de la vida", priceProduct: 1300,},
        {idProduct: 6, handmakerName: "Carmen Rivera", nameProduct: "pulsera de pareja", URLimg: "img/pulseraDePareja.jpg", URLDescription: "pulsera para regalarle a tu pareja, te aseguramos que le va a encantar", priceProduct: 800,},
        {idProduct: 7, handmakerName: "Lucas Sanchez", nameProduct: "sueter", URLimg: "img/sueter.jpg", URLDescription: "sueter muy calentito, te lo recomendamos", priceProduct: 3500,},
        {idProduct: 8, handmakerName: "Juan Torres", nameProduct: "vasijas de arcilla", URLimg: "img/vasijaDeArcilla.webp", URLDescription: "vasijas de decoracion", priceProduct: 2250,},
        {idProduct: 9, handmakerName: "Martina Gomez", nameProduct: "Llaveros", URLimg: "img/llaveroArtesanal.jpg", URLDescription: "llavero artesanal para no perder tus llaves nunca", priceProduct: 650,},
        {idProduct: 10, handmakerName: "Ana Jimenez", nameProduct: "Bolsa de mano", URLimg: "img/bolsaDeMano.jpg", URLDescription: "bolsa de mano a tan solo $5000", priceProduct: 5000,},
        {idProduct: 11, handmakerName: "Victoria Rojas", nameProduct: "porta retratos", URLimg: "img/portaRetratos.jpg", URLDescription: "porta retratos para tener a tus seres queridos siempre cerca", priceProduct: 4500,},
        {idProduct: 12, handmakerName: "Manuel Díaz", nameProduct: "cuadro", URLimg: "img/cuadro.jpg", URLDescription: "cuadro para colgar en el comedor, que mejor lugar?", priceProduct: 10000,},
        {idProduct: 13, handmakerName: "Fernanda Castro", nameProduct: "atrapasueños", URLimg: "img/atrapaSueños.jpg", URLDescription: "no te volveras a despertar con este atrapa sueños", priceProduct: 1500,},
        {idProduct: 14, handmakerName: "Jose Ramirez", nameProduct: "anillos de oro", URLimg: "img/anilloDeOro.jpeg", URLDescription: "anillo de oro puro", priceProduct: 30000,},
        {idProduct: 15, handmakerName: "Carlos Perez", nameProduct: "anillos de plata", URLimg: "img/anilloDePlata.jpg", URLDescription: "anillo de plata baratito para que te lo lleves hoy a tu casa", priceProduct: 1100,},
        {idProduct: 16, handmakerName: "Santiago Vega", nameProduct: "pulover", URLimg: "img/pulover.webp", URLDescription: "no volveras a pasar frio con este pulover tejido a mano", priceProduct: 6500,},
        ];
        
        cards.forEach(item => {
            stockStorage.push(item);
        })
        localStorage.setItem("stockStorage", JSON.stringify(stockStorage));
}