//'use strict'

console.log('Первая задача:');

let a = [12,4,3,10,1,20],
    b = [-3,-7,-100,-33],
    c = a.concat(b),
    c_two = b.concat(a);
    
console.log(`c = [${c}]`);
console.log(`c = [${c_two}]`);    

//--------------------------------------------

console.log('Третья задача:');

let arr = [12,4,3,10,1,20];
console.log(`Массив до сортировки = [${arr}]`);
arr = arr.sort(function dell(a,b)
{
    return a-b
});
console.log(`Массив после сортировки = [${arr}]`);

let min = arr.shift();
console.log(`Массив с удаленным минимальным элементом= [${arr}]`);
console.log(`МинимальныЙ элемент = [${min}]`);
let max = arr.pop();
console.log(`Массив с удаленным максимальным и минимальным элементом= [${arr}]`);
console.log(`Максимальный элемент = [${max}]`);

//--------------------------------------------

console.log('Четвертая задача:');

let numberTicket = [0,0,0,0,0,0],
    godTicket = 0;

for (numberTicket[5]; numberTicket[0] < 10; numberTicket[5]++) {
    if (numberTicket[5] === 10) {
        numberTicket[5] = 0;
        numberTicket[4]++
    }
    
    if (numberTicket[4] === 10) {
        numberTicket[5] = 0;
        numberTicket[4] = 0;
        numberTicket[3]++
    }
    
    if (numberTicket[3] === 10) {
        numberTicket[5] = 0;
        numberTicket[4] = 0;
        numberTicket[3] = 0;
        numberTicket[2]++;
    }
    
    if (numberTicket[2] === 10) {
        numberTicket[5] = 0;
        numberTicket[4] = 0;
        numberTicket[3] = 0;
        numberTicket[2] = 0;
        numberTicket[1]++
    }
    
    if (numberTicket[1] === 10) {
        numberTicket[5] = 0;
        numberTicket[4] = 0;
        numberTicket[3] = 0;
        numberTicket[2] = 0;
        numberTicket[1] = 0;
        numberTicket[0]++
    }     
      //console.log(numberTicket)    лучше не смотреть хД повиснет если проц слабый :D 
      // поверьте на слово работает хД
      
    if (numberTicket[0] + numberTicket[1] + numberTicket[2] === numberTicket[3] + numberTicket[4] + numberTicket[5]) {
    godTicket++
    }
      
}

console.log(`Счастливых билетов в наборе = ${godTicket}`);

//--------------------------------------------

