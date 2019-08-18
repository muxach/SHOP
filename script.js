 let monye,
 		 name,
 		 time,
 		 price

 function start(){

 	monye = prompt("Ваш бюджет?","");
// проверка на число, пусые строки и кэнсел
 	while(isNaN(monye) || monye == " " || monye == "" || monye == null)
 		monye = prompt("Ваш бюджет?","");

 	name = prompt("Название магазина","").toUpperCase();
 	time = 21;
 }

 //start();

 let mainList = {
 	budget: monye,
 	shopName: name,
 	shopGoods: [],
 	employers: {},
 	open: false,
 	discount: false,
 	shopItems: [],
 	chooseGoods: function chooseGoods(){

 		for(let i=0; i<5; i++){

 			let good = prompt("Выберите товар","");
 			if(typeof(good) === "string" && typeof(good) != null && good!="" && good!=" "){
 				console.log("Все верно ", i);
 				mainList.shopGoods[i] = good;
 			}
 				
 		else {i = i-1;
 					console.log("else " + i);
 				 }
 		}
 },
 workTime: function workTime(time){

 		if(time < 8)console.log("Еще слишком рано");
 		else if(time >=8 && time <20){console.log("Время работать"); mainList.open = true; console.log(mainList.open);}
 		else if(time < 24)console.log("Уже слишком поздно");
 		else console.log("В сутках 24 часа!");
 },

 dayBudget: function dayBudget(){
 		alert("Ежедневный бюджет " + mainList.budget/30);
 },

 makeDiscount: function makeDiscount(){
 	if(mainList.discount == true) mainList.price = price*0.8
 },

 hireEmployers: function hireEmployers(){
 	for(var i = 0; i <= 4; i++){
 		mainList.employers[i] = prompt("Введите имя сотрудника");
 	}
 },

 chooseShopItems: function chooseShopItems(){
 	var x = false;
 	var arr;
 	while(x == false){
 	 let items = prompt("Перечислите товары через запятую", "")
 	 if(items == null){alert("введите правильно");continue;}
 	 var arr = items.split(",");
 	 for(var i = 0; i < arr.length; i++) {

  		if(typeof(arr[i]) === "string" && typeof(arr[i]) != null && arr[i]!="" && arr[i]!=" ") x = true;
  		else {x = false;alert("введите снова");break }
		};

	}
	 mainList.shopItems = arr;	
 	 mainList.shopItems.sort();

 	 var str = "";
 	 mainList.shopItems.forEach(function(item, i, arr){
 	 			str = str + (i + 1) + ". " + item + ", ";
 	 })
  	 var str1 = "В нашем магазине вы можете купить " + str;
  	 console.log(str1);
 	},

 }

 

 //mainList.chooseGoods();
 //mainList.workTime(9);
 console.log(mainList);



