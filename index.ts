//1) Quali sono i tipi primitivi principali in TypeScript?//
// i tipi primitivi in typescript sono : null,undefined,number,string,any,boolean e bigint*/
// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
/*
let nome: string = "Roberto";
let eta: number = 49;
let stoStudiandoTypeScript: boolean = true;
*/
//3) Tipizza il parametro della seguente funzione:const greet = (name) => { return "Ciao " + name }//
/*
const greet = (name: string): string => {
    return "Ciao " + name;  };*/
  
//4) Specifica il tipo di ritorno della seguente funzione: const sum = (a: number, b: number) => { return a + b }
/*
const sum = (a: number, b: number) : number => { return a + b; };

//5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
const calcolaPrezzoConIVA =  (prezzo:number): number => {
    const iva=0.22;
    return prezzo + (prezzo * iva);
};
/*
//6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
*/
const Lunghezza = (str1: string, str2: string): number => {
    const concatenata = str1 + str2;
    return concatenata.length;
  }; /*
  //7) Cos'è un Type Union e come si scrive?
/*UN  un type union consente di definire un tipo che può essere uno tra più tipi specificati: let value: string | number;
//8) Crea una variabile che possa contenere un numero, null o undefined.
*/let valore: number | null | undefined = 52; // valido
/*
//9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
*/
type GiornoSettimana = 
  | "Lunedì"
  | "Martedì"
  | "Mercoledì"
  | "Giovedì"
  | "Venerdì"
  | "Sabato"
  | "Domenica";
  let oggi: GiornoSettimana = "Lunedì"; /*

//10) Tipizza il seguente array di numeri:const numbers = [1, 2, 3]  ;
 const numbers: Array<number> = [1, 2, 3];
//11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.

//12) Qual è la differenza tra type e interface?
// la differenza tra type e interface che type puo rappresntare anche string mentre interface no.
//13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".
//14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
//15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
//16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
//17) Crea un oggetto che implementi l'interfaccia Auto.
//18) Cosa sono i Generics in TypeScript?
//argomenti per un tipo e servono per rendere più generiche le interfacce
//19) È possibile avere più tipi generici in un'interfaccia? si
//20) Crea un'interfaccia generica per una risposta API.  
/* interface APIResponse<T, E = string> {
    data: T | null;
    error: E | null;
    status: number;
    success: boolean;
  }
    */