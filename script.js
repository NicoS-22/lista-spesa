const articoli =  {
    verdura: ["Zucchine", "Peperoni", "Pomodori", "Porri", "Catalonia", "Cipolle", "Spinaci", "Cappuccio", "Insalata", "Cipollotto", "Valeriana", "Cetrioli"],
    bancoFrigo: ["Pizza", "Salumi", "Tortellini", "Spetzle", "Formaggi", "Yogurt", "Burro"],
    bancoAperitivo: ["Amaro", "Patatine", "Vino"],
    bancoCarne: ["Hamburger", "Pollo", "Griglia", "Macinato"],
    bancoPasta: ["Pasta", "Scatolame", "Sottoaceti"],
    bancoCondimenti: ["Pomodoro"],
    bancoCereali: ["Biscotti", "Cereali", "Caffe"],
    bancoPane: ["Toast", "Pane", "Cracker", "Taralli", "Uova", "Latte", "Panna"],
    bancoDetersivi: ["Profuma Ambiente", "Carta Igienica", "Fazzoletti", "Scottex"],
    bancoSurgelati: ["Funghi", "Pesce", "Patatine Fritte", "Gelato"]
}


function generateArticlesRows() {
    const ul = document.getElementById("rows");

    /* READ FROM LOCALSTORAGE */
    const cachedItems = localStorage.getItem('checkedItems');

    for (const key in articoli){
            const currentArray = articoli[key];

            for(i=0; i<currentArray.length; i++){
                const liTag = document.createElement("li");
                const currentArticle = currentArray[i];
                liTag.textContent = currentArticle;
                ul.appendChild(liTag);
            
                const input = document.createElement("input");
                input.type = "checkbox";
                input.value = currentArticle;

                if(cachedItems && cachedItems.includes(currentArticle)){
                    input.checked = true;
                }
                
                ul.appendChild(input);
            }
        }
}

function handleFormRequest() {
    const form = document.getElementById("articles-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const checkedCheckbox = form.querySelectorAll("input[type=checkbox]:checked");
        let checkedItems = [];
        for(i=0; i<checkedCheckbox.length; i++){
            checkedItems.push(checkedCheckbox[i].value)
        }
        if(!checkedItems.length){
            localStorage.setItem('checkedItems', [] )
            return;
        }

        /* decidi come gestire l output */
        alert(checkedItems.toString())

        /* SAVE TO LOCALSTORAGE */
        localStorage.setItem('checkedItems', checkedItems )
    });
}

/* FUNCTION TRIGGER */
generateArticlesRows();
handleFormRequest();