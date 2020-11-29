const result = document.getElementById('result');
const button = document.querySelectorAll('.button');
const inputs = document.querySelectorAll('.textview');
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

  console.log(secondClean);
  console.log(secondWork);
  console.log(secondThink);
  console.log(secondAnalitic);
  console.log(secondDomen);
  console.log(secondStrat);

  //BASE PRICE AND ALL WITH PRICE

  const base_price = 2000;




  const TotalPrice = parseInt((((((((base_price + currentPrice1)*secondClean)*secondWork)*secondThink)*officenum)*secondAnalitic)*secondDomen)*secondStrat);

  console.log(TotalPrice);

  const format = new Intl.NumberFormat('ru');
  Total.innerText = format.format(TotalPrice);
}

//

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

const assignValue = () => {
  inputs.value = inputs.value;
}


let currentPrice1 = models[0].price;


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
}

console.log(button);


for(let input of inputs){
  input.addEventListener('input', () => {
    console.log(inputs.value);
  })
}

function insert(num) {
  document.form.textview.value =  document.form.textview.value + num;
}
