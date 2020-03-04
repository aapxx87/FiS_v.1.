const findFarm = (farm) => {

 if (farm === 'Амелотекс' || farm === 'Гриппферон' || farm === 'Дифлюкан' || farm === 'Зовиракс' || farm === 'Лидокаин спрей' || farm === 'Макмирор' || farm === 'Мидокалм' || farm === 'Микролакс' || farm === 'Млекоин' || farm === 'Найз табл' || farm === 'Но-шпа внутривенно' || farm === 'Но-шпа таблетки' || farm === 'Нурофен экспресс' || farm === 'Нурофен сироп детский' || farm === 'Отофа' || farm === 'Офтагель' || farm === 'Парацетомол' || farm === 'Реаферон-Липинт' || farm === 'Burn free' || farm === 'Hydrocortison' || farm === 'Пластырь детский' || farm === 'Терафлю') {
 return 'Коробка 1';
 }


 if (farm === 'Таваник' || farm === 'Тева мазь') {
 return 'Коробка 2';
 }


 if (farm === 'Регидрон' || farm === 'Самоклеящийся бинт') {
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

function addmassiv(){
    document.getElementById('rezult').innerHTML = kont1.join(", ");
    };


const kont2 = ['Таваник', 'Тева мазь'];

function addmassiv1(){
    document.getElementById('rezult').innerHTML = kont2.join(", ");
    };


const kont3 = ['Регидрон', 'Самоклеящийся бинт'];

function addmassiv2(){
    document.getElementById('rezult').innerHTML = kont3.join(", ");
    };
