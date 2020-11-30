const result = document.getElementById('result');
const button = document.querySelectorAll('.button');
const buttonplus = document.querySelectorAll('.buttonplus');
const tehnic = document.querySelectorAll('.textview');
const Officerange = document.getElementById('Officerange');
const Officeinput = document.getElementById('Officeinput');
const Inputs = document.querySelectorAll('input');
const Total = document.getElementById('total-price');



//checkbox
const Clean = document.querySelector('input[name="Clean"]');
const Think = document.querySelector('input[name="Think"]');
const Work = document.querySelector('input[name="Work"]');
const Domen = document.querySelector('input[name="Domen"]');
const Strat = document.querySelector('input[name="Strat"]');
const Analitic = document.querySelector('input[name="Analitic"]');
const Filed = document.querySelector('input[name="Field1"]');
const Filed2 = document.querySelector('input[name="Fiel2d"]');
const Filed3 = document.querySelector('input[name="Fiel3d"]');



Officerange.addEventListener('input', function(){
  Officeinput.value = Officerange.value;
});

Officeinput.addEventListener('input', function(){
  Officerange.value = Officeinput.value;
});


//CHECK ALL INPUT
Inputs.forEach(function(item){
  item.addEventListener('input', calc);
});

function calc(){
  const officenum = parseInt(Officeinput.value);
  console.log(officenum);

  const secondClean = Clean.checked ? parseFloat(Clean.value) : 1;
  const secondWork = Work.checked ? parseFloat(Work.value) : 1;
  const secondThink = Think.checked ? parseFloat(Think.value) : 1;
  const secondAnalitic = Analitic.checked ? parseFloat(Analitic.value) : 1;
  const secondDomen = Domen.checked ? parseFloat(Domen.value) : 1;
  const secondStrat = Strat.checked ? parseFloat(Strat.value) : 1;
  const field1 = Filed.checked ? parseFloat(Filed.value) : 0;
  const field2 = Filed2.checked ? parseFloat(Filed2.value) : 0;
  const field3 = Filed3.checked ? parseFloat(Filed3.value) : 0;


  console.log(field2);
  console.log(field1);
  console.log(field3);
  console.log(secondClean);
  console.log(secondWork);
  console.log(secondThink);
  console.log(secondAnalitic);
  console.log(secondDomen);
  console.log(secondStrat);

  //BASE PRICE AND ALL WITH PRICE

  const base_price = parseInt(2000);




  const TotalPrice = parseInt((((((((base_price + currentPrice1+field1+field2+field3)*secondClean)*secondWork)*secondThink)*officenum)*secondAnalitic)*secondDomen)*secondStrat);

  console.log(TotalPrice);

  const format = new Intl.NumberFormat('ru');
  Total.innerText = format.format(TotalPrice);
}

// DB PRICE MODELS

const models =[
  {
    name: 'level_one',
    price: '4000',
    description: 'good choice'
  },
  {
    name: 'level_two',
    price: '5000'
  },
  {
    name: 'level_three',
    price: '6000'
  }
]

let currentPrice1 = parseInt(models[0].price);


for(let models of button){
  models.addEventListener('click', () => {
    console.log(models);
    takeActiveBank(models);
  })
}

const takeActiveBank= CurrentActive => {
  const data = CurrentActive.dataset.name;
  const dataprice = CurrentActive.dataset.price;
  const CurrentBank = models.find( models => models.name == data );
  currentPrice1 =parseInt(CurrentBank.price);
  console.log(currentPrice1);
// DB PRICE TECNIC

const technics =[
  {
    name:'server',
    price:'200',
  },
  {
    name:'mobile',
    price: '300'
  },
  {
    name: 'camera',
    price: '500'
  }
]

let currentPrice2 = technics[0].price;
console.log(tehnic);

for(let technics of tehnic){
  technics.addEventListener('click', () => {
    console.log(technics);
    takeActiveBank2(technics);
  })
}

const takeActiveBank2= CurrentActive2 => {
  const data2 = CurrentActive2.dataset.name;
  const dataprice2 = CurrentActive2.dataset.price;
  const CurrentBank2 = technics.find( technics => technics.name == data2 );
  currentPrice2 =parseInt(CurrentBank2.price);
  console.log(currentPrice2);
}
}

console.log(button);
