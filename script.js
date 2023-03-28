/*
Prvi primer koda će imati bolje performanse u NodeJS-u, jer ne sadrži poziv funkcije koji bi imao nevažeći tip parametara 
(u drugom primeru se funkciji add prosleđuju stringovi umesto brojeva).Takođe, u prvom primeru se petlja izvršava samo 
jednom, dok se u drugom primeru petlja izvršava tri puta, što takođe može usporiti izvršavanje.
Merenje performanse, odnosno vremena izvšavanja petlji, možemo izmeriti pomoću modula pref_hooks.
U prvom primeru bi merili vreme samo za jednu postojeću petlju, dok bi u drugom primeru trebali meriti vreme za svaku 
od tri petlje zasebno i onda sumirati ta tri vremena da bismo dobili ukupno vreme izvršavanja.
Nakon testiranja možemo videti da se prvi primer tri puta brže izvršava.
*/
const { performance } = require('perf_hooks');

const a = 1;
const b = 2;

const add = (x, y) => x + y;

const startTime = performance.now();

for(let i = 0; i < 100_000_001; i++){
	add(a,b);
}

const endTime = performance.now();

console.log(`Vreme prvog primera: ${endTime - startTime} millisekundi`);

const startTime1 = performance.now();

for(let i = 0; i < 50_000_000; i++){
	add(a,b);
}

const endTime1 = performance.now();

const startTime2 = performance.now();

add('vega', 'play');

const endTime2 = performance.now();

const startTime3 = performance.now();

for(let i = 0; i < 50_000_000; i++){
	add(a,b);
}

const endTime3 = performance.now();

console.log(`Vreme drugog primera: ${(endTime1 - startTime1) + (endTime2 - startTime2) + (endTime3 - startTime3)} millisekundi`);
