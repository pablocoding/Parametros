

function greetSomeone(person,hora) {
        var current = new Date();
        hora = current.getHours(); // 
        if (person == "Anakin") {
            console.log("¡Buen día, Anakin!"+" "+hora); 
        }
        else {
            console.log("¡Voy por ti, Dooku!"+" "+hora);
        }
    return
    }
    greetSomeone("Anakin");
    greetSomeone("Count Dooku");
    
    