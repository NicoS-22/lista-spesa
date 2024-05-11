
let verdura = ["Zucchine", "Peperoni", "Pomodori", "Porri", "Catalonia", "Cipolle", "Spinaci", "Cappuccio", "Insalata", "Cipollotto", "Valeriana", "Cetrioli"];
let bancoFrigo = ["Pizza", "Salumi", "Tortellini", "Spetzle", "Formaggi", "Yogurt", "Burro"];
let bancoAperitivo = ["Amaro", "Patatine", "Vino"];
let bancoCarne = ["Hamburger", "Pollo", "Griglia", "Macinato"];
let bancoPasta = ["Pasta", "Scatolame", "Sottoaceti"];
let bancoCondimenti = ["Pomodoro"];
let bancoCereali = ["Biscotti", "Cereali", "Caffe"];
let bancoPane = ["Toast", "Pane", "Cracker", "Taralli", "Uova", "Latte", "Panna"];
let bancoDetersivi = ["Profuma Ambiente", "Carta Igienica", "Fazzoletti", "Scottex"];
let bancoSurgelati = ["Funghi", "Pesce", "Patatine", "Gelato"];



const ul = document.getElementById("rows");

for(i=0; i<verdura.length; i++){

    const liTag = document.createElement("li");
    liTag.textContent = verdura[i];
    ul.appendChild(liTag);

    const check = document.createElement("input");
    check.type = "checkbox";
    ul.appendChild(check);
}
/*
    PROVARE A INSERIRE TITOLO ESPLICATIVO TIPO DI ARTICOLO

    const l1 = document.querySelector(".l1");

    const frigo = document.createElement("h3");
    frigo.textContent = "Banco Frigo";
    l1.appendChild(frigo)
 */

for(i=0; i<bancoFrigo.length; i++){

    const liTag = document.createElement("li");
    liTag.textContent = bancoFrigo[i];
    ul.appendChild(liTag);

    const check = document.createElement("input");
    check.type = "checkbox";
    ul.appendChild(check);
}

for(i=0; i<bancoAperitivo.length; i++){

    const liTag = document.createElement("li");
    liTag.textContent = bancoAperitivo[i];
    ul.appendChild(liTag);

    const check = document.createElement("input");
    check.type = "checkbox";
    ul.appendChild(check);
}

for(i=0; i<bancoCarne.length; i++){

    const liTag = document.createElement("li");
    liTag.textContent = bancoCarne[i];
    ul.appendChild(liTag);

    const check = document.createElement("input");
    check.type = "checkbox";
    ul.appendChild(check);
}

for(i=0; i<bancoPasta.length; i++){

    const liTag = document.createElement("li");
    liTag.textContent = bancoPasta[i];
    ul.appendChild(liTag);

    const check = document.createElement("input");
    check.type = "checkbox";
    ul.appendChild(check);
}

for(i=0; i<bancoCondimenti.length; i++){

    const liTag = document.createElement("li");
    liTag.textContent = bancoCondimenti[i];
    ul.appendChild(liTag);

    const check = document.createElement("input");
    check.type = "checkbox";
    ul.appendChild(check);
}

for(i=0; i<bancoCereali.length; i++){

    const liTag = document.createElement("li");
    liTag.textContent = bancoCereali[i];
    ul.appendChild(liTag);

    const check = document.createElement("input");
    check.type = "checkbox";
    ul.appendChild(check);
}

for(i=0; i<bancoPane.length; i++){

    const liTag = document.createElement("li");
    liTag.textContent = bancoPane[i];
    ul.appendChild(liTag);

    const check = document.createElement("input");
    check.type = "checkbox";
    ul.appendChild(check);
}

for(i=0; i<bancoDetersivi.length; i++){

    const liTag = document.createElement("li");
    liTag.textContent = bancoDetersivi[i];
    ul.appendChild(liTag);

    const check = document.createElement("input");
    check.type = "checkbox";
    ul.appendChild(check);
}

for(i=0; i<bancoSurgelati.length; i++){

    const liTag = document.createElement("li");
    liTag.textContent = bancoSurgelati[i];
    ul.appendChild(liTag);

    const check = document.createElement("input");
    check.type = "checkbox";
    ul.appendChild(check);
}