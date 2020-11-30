<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="css/calc.css">
    <link rel="stylesheet" href="css/bootstrap.css">
  </head>
  <body>
<header>
  <div class="bg_logo">
    <img class="img-fluid" src="img/logo.png" alt="">
</div>
    <h5>Калькулятор для подсчёта стоимости услуг</h1>
</header>


<main>
<div class="container mt-5">

<h1 class="mt-3 mb-5 text-center">Модель обслуживания</h1>
<input data-name="level_one" class="button" type="button" name="" data-price="1000" value="Комплексный ИТ аутсорсинг">
<input data-name="level_two" class="button" type="button" name="" data-price="2000" value="Выездная поддержка 1-го уровня">
<input data-name="level_three" class="button" type="button" name="" data-price="3000" value="Специализированная поддержка 2-го уровня">

<div class="row">
<div class="office col-md-6 ml-3">
  <h2>Количество офисов</h2>
  <input id="Officeinput" type="number" min="0" max="50" name="" value="42">
  <br>
  <input id="Officerange" type="range" name="" min="0" max="50" step="1" value="42">
</div>
<div class=" secondWork col-md-5 mt-4 ml-4">

<h2 class="m-2 mb-4 ">Дополнительные услуги</h2>
<p><input class="work mr-1" type="checkbox" name="Clean" value="1.2">Логистика</p>
<p><input class="work mr-1" type="checkbox" name="Work" value="1.3" >ЗИП</p>
<p><input class="work mr-1" type="checkbox" name="Think" value="1.5">Взаимодействие с 3-ми сторонами</p>
<p><input class="work mr-1" type="checkbox" name="Domen" value="1.5" >Подменный фонд</p>
<p><input class="work mr-1" type="checkbox" name="Strat" value="3" >Стратегия развития</p>
<p><input class="work mr-1" type="checkbox" name="Analitic" value="3" >Расширенная аналитика и отчетность</p>
</div>
</div>
<br>
<div class="row">
<div class=" col-md-6 text-center result mr-3">
<span class="text-center pr-4"><span class="mr-1" id="total-price"></span>грн/месяц</span>
</div>
<div class=" col-md-5 mt-4 ml-4 secondWork">
  <h2 class="m-2 mb-4">ИТ-инфраструктура</h2>
  <div>
    <p class=""><input class="mr-1"  type="checkbox" name="Field1" value="200" />Серверы</p>
  </div>

  <div>
    <p><input class="mr-1" type="checkbox" name="Fiel2d" value="300" />Мобильные устройства</p>
  </div>

  <div>
    <p><input class="mr-1" type="checkbox" name="Fiel3d" value="500" />Видеонаблюдение</p>
  </div>
</div>
</div>


<script type="text/javascript" src="calc.js"></script>
</div>

</div>

</main>
  </body>
</html>
