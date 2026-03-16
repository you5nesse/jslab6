//// exrcicee1/////


const double = x => x * 2;          // retour implicite
const doubleBloc = (x) => { return x * 2; }; // retour explicite
console.log(double(5), doubleBloc(5)); // 10 10
const salut = () => "Hello";              // 0 paramètre
const some = (a, b) => a + b;             // 2 paramètres
console.log(salut(), somme(2, 3)); // Hello 5
const creerPoint = (x, y) => ({ x, y }); 
console.log(creerPoint(2, 3));
//// exrcicee2/////

const compteur = {
  valeur: 0,
  start() {
    // setInterval reçoit une fléchée: `this` reste celui de `compteur`
    this.timer = setInterval(() => {
      this.valeur++;
      if (this.valeur % 2 === 0) console.log("tick:", this.valeur);
      if (this.valeur >= 4) clearInterval(this.timer);
    }, 100);
  }
};
compteur.start();
function avecFunction() { return Array.from(arguments).reduce((a, n) => a + n, 0); }
const avecFlechee = (...nums) => nums.reduce((a, n) => a + n, 0);
console.log(avecFunction(1,2,3), avecFlechee(1,2,3)); // 6 6
//// exrcicee3/////
const nums = [1, 2, 3, 4, 5, 6];
const carres = nums.map(n => n * n);
const pairs = nums.filter(n => n % 2 === 0);
const somme = nums.reduce((acc, n) => acc + n, 0);
console.log({ carres, pairs, somme });

const premierPair = nums.find(n => n % 2 === 0);
const aGrand = nums.some(n => n > 5);
const tousPositifs = nums.every(n => n > 0);
console.log({ premierPair, aGrand, tousPositifs });
 
const mots = ["zèbre", "Arbre", "avion", "Banane"];
const triCI = [...mots].sort((a, b) => a.localeCompare(b, "fr", { sensitivity: "base" }));
console.log(triCI);
//// exrcicee4/////

const multiplierPar = facteur => x => x * facteur; 
const fois3 = multiplierPar(3);
console.log(fois3(10)); 
 
const inc = x => x + 1;
const doble = x => x * 2;
const compose = (f, g) => x => f(g(x));
const incPuisDouble = compose(double, inc);
console.log(incPuisDouble(5)); 

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const trim = s => s.trim();
const upper = s => s.toUpperCase();
const exclam = s => s + "!";
const nettoyer = pipe(trim, upper, exclam);
console.log(nettoyer("  hello  "));

//// exrcicee5/////
  const produits = [
  { id: 1, nom: "Stylo", cat: "Bureau", prix: 1.2, stock: 50 },
  { id: 2, nom: "Cahier", cat: "Bureau", prix: 2.5, stock: 0 },
  { id: 3, nom: "Clavier", cat: "Informatique", prix: 29.9, stock: 10 },
  { id: 4, nom: "Souris", cat: "Informatique", prix: 19.9, stock: 5 },
];

const dispoTries = produits
  .filter(p => p.stock > 0)
  .sort((a, b) => a.cat.localeCompare(b.cat) || a.nom.localeCompare(b.nom));
console.log(dispoTries);

const rechercher = (items, q) => {
  const s = q.trim().toLowerCase();
  if (!s) return [];
  return items.filter(p => p.nom.toLowerCase().includes(s) || p.cat.toLowerCase().includes(s));
};
console.log(rechercher(produits, "info"));

const valeurStock = produits.reduce((acc, p) => acc + p.prix * p.stock, 0);
const parCategorie = produits.reduce((acc, p) => {
  (acc[p.cat] ||= []).push(p);
  return acc;
}, {});
console.log({ valeurStock, parCategorie });

//// exrcicee6/////
const getJSON = async url => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("HTTP " + res.status);
  return res.json();
};

// Exemple d’usage (navigateur):
// getJSON("https://jsonplaceholder.typicode.com/users")
//   .then(data => console.log(data))
//   .catch(err => console.error(err));