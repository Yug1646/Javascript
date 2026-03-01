// ---------- Strings ----------

const fullName = "Yug Jain";
let color = "red";

// ---------- Numbers ----------

let age = 19;

// ---------- BigInt ----------

const contactNumber = BigInt(7718931604);

// ---------- Boolean ----------

const result = true;

// ---------- Object ----------

let details = {
  degree: "Computer Science",
  skills: "Coding",
};

// ---------- Array Object ----------

let fav_game = [
  "GTA V",
  "Spiderman Remastered",
  "Forza Horizon",
  "Marvel's Avengers",
  "Valorant",
];

// ---------- Date Object ----------

const birthDate = new Date("2006-04-16");

// ---------- Undefined ----------

let music;

// ---------- Null ----------

music = null;

// ---------- Symbol ----------

const x = Symbol("Perfect");

console.log(
  `Hello, My name is ${fullName}, I am ${age}. My birthdate is ${birthDate.toDateString()}.I have a degree in ${details.degree}I love doing ${details.skills} and make real life projects. Apart from ${details.skills} I love playing games my favourite game is ${fav_game[0]} but I have also played games like ${fav_game}. My love for music is ${music} but it's true that my result of diploma was ${result}, that I passed all my exams. You can contact me ${contactNumber}`
);

