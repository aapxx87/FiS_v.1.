const findFarm = (farm) => {

 if (farm === 'Амелотекс' || farm === 'Гриппферон' || farm === 'Дифлюкан' || farm === 'Зовиракс' || farm === 'Лидокаин спрей' || farm === 'Макмирор' || farm === 'Мидокалм' || farm === 'Микролакс' || farm === 'Млекоин' || farm === 'Найз табл' || farm === 'Но-шпа внутривенно' || farm === 'Но-шпа таблетки' || farm === 'Нурофен экспресс' || farm === 'Нурофен сироп детский' || farm === 'Отофа' || farm === 'Офтагель' || farm === 'Парацетомол' || farm === 'Реаферон-Липинт' || farm === 'Burn free' || farm === 'Hydrocortison' || farm === 'Пластырь детский' || farm === 'Терафлю' || farm === 'Пластырь детский' || farm === 'Пластырь детский' || farm === 'Зостерин-ультра' || farm === 'Ринофлуимуцил' || farm === 'Тантум-Верде спрей' || farm === 'Доктор мом' || farm === 'Панатус форте' || farm === 'Отикапс') {
 return 'Коробка 1';
 }


 if (farm === 'Таваник' || farm === 'Тева мазь' || farm === 'Феррум Лек' || farm === 'Фурацилин' || farm === 'Хофитол' || farm === 'Эмла' || farm === 'Энтерол' || farm === 'Новалгин' || farm === 'Нимесил' || farm === 'Налгезин' || farm === 'Креон' || farm === 'Пивные дрожжи' || farm === 'Фенистил' || farm === 'Тонзилгон' || farm === 'Нурофен крем') {
 return 'Коробка 2';
 }


 if (farm === 'Регидрон' || farm === 'Самоклеящийся бинт' || farm === 'Пластырь' || farm === 'Рулон ваты' || farm === 'Фламин' || farm === 'Кетонал свечи' || farm === 'Йод' || farm === 'Зеленка' || farm === 'Ихтиол мазь' || farm === 'Виброцил') {
 return 'Коробка 3';
 }


 else {
   return 'Данного продукта нет'
 }

};


function poisk(){
  let str;
  let result;

  str = document.getElementById('inp_1').value;

  result = findFarm(str);

  document.getElementById('result1').innerHTML = result;
};



const kont1 = ['Амелотекс', 'Гриппферон', 'Дифлюкан', 'Зовиракс', 'Лидокаин спрей', 'Макмирор', 'Мидокалм', 'Микролакс', 'Млекоин', 'Найз табл', 'Но-шпа внутривенно', 'Но-шпа таблетки', 'Нурофен экспресс'];
const kont2 = ['Таваник', 'Тева мазь'];
const kont3 = ['Регидрон', 'Самоклеящийся бинт'];


const vivodKont1 = (lastNumber) => {

  let i = 0;

  let result = '';

  while (i < kont1.length) {

   const currentChar = kont1[i];

    result = `${result} \n \n ${currentChar}`;

   i = i + 1;
  }

 return result;

}


function addmassiv(){

  let str;
  let result;

  str = kont1
  result = vivodKont1(str);

  document.getElementById('rezult').innerHTML = result;

};

/*

function addmassiv(){
    document.getElementById('rezult').innerHTML = kont1.join(", ");
    };

*/


function addmassiv1(){
    document.getElementById('rezult').innerHTML = kont2.join(", ");
    };


function addmassiv2(){
    document.getElementById('rezult').innerHTML = kont3.join(", ");
    };
