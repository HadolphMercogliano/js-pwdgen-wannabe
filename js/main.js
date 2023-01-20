// VAR DECLARATIION
let user_name;
let surname;
let fav_color;
let result_psw;

// VAR VALUE 

user_name = prompt("Come ti chiami?");
surname = prompt("Qual è il tuo cognome?");
fav_color = prompt("Qual è il tuo colore preferito");
result_psw = user_name + surname + fav_color + "23";


// RESULT WRITING
document.getElementById('my_password').innerHTML = "La tua password è " + result_psw;