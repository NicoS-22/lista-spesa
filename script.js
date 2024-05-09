let articoli = {
    Verdura: ["Zucchine", "Peperoni", "Pomodori", "Porri", "Catalonia", "Cipolle", "Spinaci", "Cappuccio", "Insalata", "Cipollotto", "Valeriana", "Cetrioli"],
    BancoFrigo: ["Pizza", "Salumi", "Tortellini", "Spetzle", "Formaggi", "Yogurt", "Burro"],
    BancoAperitivo: ["Amaro", "Patatine", "Vino"],
    BancoCarne: ["Hamburger", "Pollo", "Griglia", "Macinato"],
    BancoPasta: ["Pasta", "Scatolame", "Sottoaceti"],
    BancoCondimenti: ["Pomodoro"],
    BancoCereali: ["Biscotti", "Cereali", "Caffe"],
    BancoPane: ["Toast", "Pane", "Cracker", "Taralli", "Uova", "Latte", "Panna"],
    BancoDetersivi: ["ProfumaAmbiente", "CartaIgienica", "Fazzoi", "Scottex"],
    BancoSurgelati: ["Funghi", "Pesce", "Patatine", "Gelato"],
};

let checkbox = document.querySelector(".check");

function loopArticoli() {
    let allProducts = ""; // Initialize an empty string to store all products
    for (const [key, value] of Object.entries(articoli)) {
        allProducts += `${key}, ${value.join(', ')}`; // Append category name and products
    }
    return allProducts; // Return the complete product list
    console.log(allProducts);
}

let prodotti = loopArticoli(); // Get the complete product list
