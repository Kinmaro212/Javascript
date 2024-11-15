//lof de hello JS
console.log("Hello JS!");
let age = 37;



// // Une instruction est un ordre direct. Le programme doit effectuer une action.
// // instruction1;
// // instruction2;

// //Un bloc est une structure. Il permet de faire appliquer une logique au programme.
// // nomBloc(parametrage)

// // if(age>=ageMin){

// // }
// // while(k < 10){

// // }

// /*Une variable porte un nom écrit en « camelCase » : les lettres sont en minuscule, sauf la
// 1ère lettre de chaque mot à partir du 2ème mot qui est en majuscule.*/

// // nomBlocdeuxMots
// // unPeuPlusDeMots
// // longNomDeVariableEnCamelCase
// // eteEnsoleille
// // segmentPoint1

// /*Une variable classique est déclarée grâce au mot-clef « let ».
// Sa valeur peut ensuite être modifiée autant de fois qu’on le souhaite.*/

// let animal = "dog"; //déclaration et initialisation de la variable animal
// animal = "cat"; //modification de sa valeur
// animal = "bird"; //modification de sa valeur

// /*Une constante est une variable dont la valeur ne peut pas être modifiée.
// Tenter de modifier la valeur d’une constante provoque une erreur*/

// const deux = 2;
// let quantite=3;
// const prix = 1.15;// la valeur ne peut pas etre modifiée

// //la ligne suivante est mise en commentaire car elle provoque une erreur 
// //deux = 3;//-> Uncaught TypeError: Assignement to constant variable.
// //Un « number » est un nombre, entier ou décimal

// const prenom = "John";
// let repas = "pizza";
// //Un « string » est une chaîne de caractères.
// //Lorsqu’on veut écrire sa valeur, on le fait entre guillemets / quottes.
// const criDuChien = "aboiement";

// /*Un « boolean » est un booléen, qui peut avoir comme valeur « true » (vrai) ou « false »
// (faux).
// Par convention, le nom d’une variable de type « boolean » commence par « is » (est) ou
// « has » (a), afin d’être identifiée facilement.*/
// //L’opérateur d’affectation « = » permet d’attribuer une valeur à une variable

// let isAdult = true;
// let isTaskDone = false;
// const hasBeenToTokyo = true;

// /*Une variable a une certaine « portée ». Il s’agit de la zone de code dans laquelle elle peut
// être utilisée, dans laquelle elle est définie.
// Cette portée s’étend :
// depuis la ligne à laquelle la variable a été déclarée (grâce à « let » ou « const »)
// jusqu’à la fin du bloc (« } ») dans lequel la variable a été déclarée*/


// /*Ces opérateurs demandent d’être entourés de valeurs de type « number », puisqu’ils
// entrainent un calcul mathématique. Ils renvoient un « number ».
// Nous avons accès aux opérateurs arithmétiques basiques :
// « + » : addition
// « - » : soustraction
// « * » : multiplication
// « / » : division*/

// /*Nous y ajouterons l’opérateur « modulo », qui s’utilise avec le symbole « % ».
// Le modulo, pour l’expression « a % b » (qui se prononce « a modulo b »), est le reste de
// la division entière de a par b*/

// /*par exemple:
// « 7 % 3 » vaut 1, car 7/3 vaut 2 en division entière, il reste donc 1 [7-(2*3)]
//  7 = 2 * 3 + 1
// « 6 % 2 » vaut 0, car 6/2 vaut 3 en division entière, il reste donc 0 [6-(3*2)]
//  6 = 3 * 2 + 0
// « 2 % 9 » vaut 2, car 2/9 vaut 0 en division entière, il reste donc 2 [2-(0*9)]
//  2 = 0 * 9 + 2*/


// /*« += » : addition puis affectation
// (« a += b; » équivaut à « a = a + b; »)
// « ++ » : incrémentation de 1 puis affectation
// (« a++; » équivaut à « a += 1; », qui équivaut à « a = a + 1; »)
// « -= » : soustraction puis affectation
// (« a -= b; » équivaut à « a = a - b; »)
// « -- » : décrémentation de 1 puis affectation
// (« a--; » équivaut à « a -= 1; », qui équivaut à « a = a - 1; »)
// « *= » : multiplication puis affectation
// (« a *= b; » équivaut à « a = a * b; »)
// « /= » : division puis affectation
// (« a /= b; » équivaut à « a = a / b; »)
// « %= » : modulo puis affectation
// (« a %= b; » équivaut à « a = a % b; »)*/


let numberToGuess = 2; //2

numberToGuess+=3;   //numberToGuess= numberTguess + 3 // 5
numberToGuess-=2;   //numberToGuess= numberTguess - 2 // 3
numberToGuess++;    //numberToGuess= numberTguess + 1 // 4
numberToGuess*=10;  //numberToGuess= numberTguess *10 // 40
numberToGuess/=2;   //numberToGuess= numberTguess / 2 // 20
numberToGuess%=7;   //numberToGuess= numberTguess % 7 // 6
numberToGuess--;    //numberToGuess= numberTguess - 1 // 5

console.log("numberToGuess [2 +3 -2 +1 *10 /2 %7 -1", numberToGuess);

/*Concaténer, c’est le fait de fusionner plusieurs chaînes de caractères (« string »)
ensemble, afin d’en obtenir une seule.
Cet opérateur renvoie un « string ».
Son symbole est « + » en JS, comme pour l’addition. Si ce symbole n’est pas entouré de
deux valeurs de type « number », alors le programme le verra comme une concaténation
et non pas une addition.*/

const prenom = "John";
const nom = "Smith";
const nomComplet = prenom + " " +nom;

console.log("je m'apelle" + " " + nomComplet);

/*Interpolation : proche de la concaténation qui sert à fusionner, il s’agit de créer un
« string » en y « incrustant » des valeurs. En JS le string sera entre « backticks »
(apostrophes descendantes => AltGR+7) et les valeurs entre les symboles « ${ » et « } ».
Le principal avantage de l’interpolation, par rapport à la concaténation, est qu’elle
permet de taper des phrases proches du rendu final. Les chaînes de caractères sont plus
compréhensibles à la lecture car elles ne sont pas faites de petits morceaux.
Les valeurs qui se trouvent dans les « ${} » sont calculées en premier (en JS, avec accès
aux variables locales), puis incrustées dans le « string » global.*/

console.log(`Je m'appelle ${prenom} ${nom}, soyez le bienvenue!`);

/*Voici les opérateurs qui testent une égalité ou une inégalité entre les valeurs qui les
entourent :
« == » : même valeur
« === » : même valeur et même type
« != » : valeur différente
« !== » : valeur différente ou type différent*/

for(let i=1; i<=10;i++){
    console.log(`3 x ${i} = ${3*1}`);
}

for (let i = 0; i<3; i++){
    console.log("je serai un bon développeur");
}