let utenti = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: "Romaguera-Crona",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: "Deckow-Crist",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: "Romaguera-Jacobson",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: "Robel-Corkery",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    phone: "(254)954-1289",
    website: "demarco.info",
    company: "Keebler LLC",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: "Considine-Lockman",
  },
];

let utentiJason = JSON.stringify(utenti);
console.log(utentiJason);

let utentiJason2 = JSON.parse(utentiJason);
console.log(utentiJason2);

for (i = 0; i < utentiJason2.length; i++) {
  let utenteSingolo = utentiJason2[i];
  console.log(utenteSingolo);
  console.log(utenteSingolo.name);
}
localStorage.setItem("utenti", utentiJason);
let salvataggio = localStorage.getItem("utenti");
console.log(salvataggio);
