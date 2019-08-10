 let monye,
 		 name,
 		 time,
 		 price

 function start(){

 	monye = prompt("Ваш бюджет?");
// проверка на число, пусые строки и кэнсел
 	while(isNaN(monye) || monye == " " || monye == "" || monye == null)
 		monye = prompt("Ваш бюджет?");

 	name = prompt("Название магазина").toUpperCase();
 	time = 21;
 }

 start();

 let mainList = {
 	budjet: monye,
 	shopName: name,
 	shopGoods: [],
 	employers: {},
 	open: false,
 	discount: false
 }

 function chooseGoods(){

 		for(let i=0; i<5; i++){

 			let good = prompt("Выберите товар");
 			if(typeof(good) === "string" && typeof(good) != null && good!="" && good!=" "){
 				console.log("Все верно ", i);
 				mainList.shopGoods[i] = good;
 			}
 				
 		else {i = i-1;
 					console.log("else " + i);
 				 }
 		}
 }

 chooseGoods();

 function workTime(time){

 		if(time < 8)console.log("Еще слишком рано");
 		else if(time >=8 && time <20)console.log("Время работать");
 		else if(time < 24)console.log("Уже слишком поздно");
 		else console.log("В сутках 24 часа!")	;
 }

workTime(0);