# Coleções do Discord

- set: defini um valor 
- has: verifica se existe 
- get: verifica se contém 
- size: verifica o tamanho
- delete: remove um elemento 
- clear: deleta todos os elementos 
- at: obtem um valor em determinada posição 
- find: encontra um valor baseado em uma condição 
- findKey: encontra a chave do objeto 
- values: retorna todos os elementos 
- keys: retorna as chaves 
- first: retorna o primeiro elemento
- firstKey: retorna a chave do primeiro elemento
- last: retorna o último elemento
- lastKey: retorna a chave do último elemento
- random: retorna um elemento aleatório
- randomKey: retorna a chave de um elemento aleatório
- sweep: altera os elementos baseados na função passada
- filter: filtrar por alguma dado baseado na função passada
- map: mapear os objetos por alguma coisa (função) ou retorna string de cada objeto
- reverse: inverte a ordem dos elementos
- difference: 

## Exemplo de criação de uma Collection

```typescript

import { Collection } from 'discord.js';

const pessoas: Collection<string, { name: string, age: number }> = new Collection();

/* set */
console.log('set()');
pessoas.set('neonz', { name: 'Neonz', age: 10 });
pessoas.set('flush', { name: 'Flush', age: 12 });
pessoas.set('du', { name: 'Du', age: 21 });
pessoas.set('edu', { name: 'Edu', age: 22 });
pessoas.set('dudu', { name: 'Dudu', age: 32 });
pessoas.set('eduardo', { name: 'Eduardo', age: 42 });
console.log();


/* has */
console.log('has()');
const has = pessoas.has('neonz');
console.log(`has: ${has}`);
console.log();


/* get */
console.log('get()');
const get = pessoas.get('neonz');
console.log(`get: ${get}`);
console.log();

/* size */
console.log('size()');
const size = pessoas.size;
console.log(`size: ${size}`);
console.log();

/* delete */
console.log('delete()');
const del = pessoas.delete('flush');
console.log(`del: ${del}`);
console.log();

/* clear */
console.log('clear()');
// const clear = pessoas.clear();
// console.log(`clear: ${clear}\n`);
console.log();

/* at */
console.log('at()');
const at = pessoas.at(0);
console.log(`at: ${at}`);
console.log();

/* find */
console.log('find()');
const find = pessoas.find(p => p.name == 'Neonz');
console.log(`find: ${find}`);
console.log();

/* findKey */
console.log('findKey()');
const findKey = pessoas.findKey(p => p.name == 'Neonz');
console.log(`findKey: ${findKey}`);
console.log();

/* values */
console.log('values()');
for (const pessoa of pessoas.values()) {
	console.log(`values: ${pessoa.name}`);
}
console.log();

/* keys */
console.log('keys()');
for (const pessoa of pessoas.keys()) {
	console.log(`keys: ${pessoa}`);
}
console.log();

/* first */
console.log('first()');
const first = pessoas.first(); // @params Amount: Ex.: first(2)
console.log('first:', first);
console.log(`first: ${first}`);
console.log();

/* firstKey */
console.log('firstKey()');
const firstKey = pessoas.firstKey(); // @params Amount: Ex.: firstKey(2)
console.log('firstKey:', firstKey);
console.log(`firstKey: ${firstKey}`);
console.log();

/* last */
console.log('last()');
const last = pessoas.last(); // @params Amount: Ex.: last(2)
console.log('last:', last);
console.log(`last: ${last}`);
console.log();

/* lastKey */
console.log('lastKey()');
const lastKey = pessoas.lastKey(); // @params Amount: Ex.: lastKey(2)
console.log('lastKey:', lastKey);
console.log(`lastKey: ${lastKey}`);
console.log();

/* random */
console.log('random()');
const random = pessoas.random();
console.log('random:', random);
console.log(`random: ${random}`);
console.log();

/* randomKey */
console.log('randomKey()');
const randomKey = pessoas.randomKey();
console.log('randomKey:', randomKey);
console.log(`randomKey: ${randomKey}`);
console.log();

/* sweep */
console.log('sweep()');
console.log(pessoas);
pessoas.sweep(p => p.age < 22);
console.log(pessoas);
console.log();

/* filter */
console.log('filter()');
console.log(pessoas);
const filteredPessoas = pessoas.filter(p => p.name.startsWith('E'));
console.log(filteredPessoas);
console.log();

/* map */
console.log('map()');
console.log(pessoas);
const mapPessoas = pessoas.map(p => `Idade: ${p.age}`);
console.log(mapPessoas.join('\n'));

console.log(pessoas);
const mapPessoasObj = pessoas.map(p => ({ age: p.age }));
console.log(mapPessoasObj);
console.log();

/* reverse */
console.log('reverse()');
console.log(pessoas);
pessoas.reverse();
console.log(pessoas);
console.log();

/* difference */
const ePessoas = pessoas.filter(p => p.name.startsWith('E'));

console.log('difference()');
console.log(pessoas);
pessoas.difference(ePessoas);
console.log(ePessoas);
console.log();

```

