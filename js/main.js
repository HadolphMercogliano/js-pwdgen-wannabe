// VAR DECLARATIION
let user_name;
let surname;
let fav_color;
let result_psw;

// VAR VALUE 

user_name = prompt("Come ti chiami?");
// .console.log('come ti chiami?' + username);

surname = prompt("Qual è il tuo cognome?");
fav_color = prompt("Qual è il tuo colore preferito");
result_psw = user_name + surname + fav_color + "23";


// RESULT WRITING
// document.getElementById('my_password').innerHTML = "La tua password è " + result_psw;

// TEMPLATE LITERALS 
// (backtick ALT96)
document.getElementById('my_password').innerHTML = `Grazie,
la tua password è : ${result_psw}`