<h1>HackerNews 2.0</h1>


<hr>




<p>Проект на стажировку в Авито на позицию стажер-фронтенд разработчик</p>
<h3>Технологии:</h3>
<h5>Клиентская часть:</h5>
<div id="technologyStack">
<img src="https://img.shields.io/badge/TypeScript-blue?logo=TypeScript&logoColor=white&style=for-the-badge" alt="TypeScript Badge"/>
<img src="https://img.shields.io/badge/JavaScript-yellow?logo=JavaScript&logoColor=white&style=for-the-badge" alt="JavaScript Badge"/>
<img src="https://img.shields.io/badge/HTML5-orange?logo=HTML5&logoColor=white&style=for-the-badge" alt="HTML5 Badge"/>
<img src="https://img.shields.io/badge/SCSS-grey?logo=SASS&logoColor=white&style=for-the-badge" alt="SCSS Badge"/>
<img src="https://img.shields.io/badge/React-blue?logo=React&logoColor=white&style=for-the-badge" alt="React Badge"/>
<img src="https://img.shields.io/badge/Redux-blueviolet?logo=Redux&logoColor=white&style=for-the-badge" alt="Redux Badge"/>
<img src="https://img.shields.io/badge/Jest-blue?logo=Jest&logoColor=white&style=for-the-badge" alt="Jest Badge"/>
</div>

<h5>Серверная часть:</h5>
<div id="technologyStack">
<img src="https://img.shields.io/badge/JavaScript-yellow?logo=JavaScript&logoColor=white&style=for-the-badge" alt="JavaScript Badge"/>
<img src="https://img.shields.io/badge/Express-white?logo=Express&logoColor=black&style=for-the-badge" alt="Express Badge"/>
<img src="https://img.shields.io/badge/Node.JS-grey?logo=Node.JS&logoColor=white&style=for-the-badge" alt="Node Badge"/>
</div>
<h5>База данных:</h5>
<div id="technologyStack">
<img src="https://img.shields.io/badge/JSONServer-red?logo=JavaScript&logoColor=white&style=for-the-badge" alt="JavaScript Badge"/>
</div>
<hr/>
<h3>Общие сведения:</h3>
<p>Проект построен по логике трёхзвенной архитектуры: клиентская часть, сервер приложений, база-данных(здесь json-server - имитация хранилища). Проект писался в сжатые сроки(6 дней), поэтому местами имеются решения быстрого характера. </p>
<hr/>
<h3>Инструкция по запуску:</h3>
<p>
Приложение использует следующие порты:
</p>
<p>Клиентская часть: 3000 порт</p>
<p>База данных: 3001 порт</p>
<p>Серверная часть: 5000 порт</p>
<h5>Вариант 1:</h5>
<ol>
<li>Клонировать проект с GitHub</li>
<li>Установить все необходимые зависимости</li>
<li>В общем package.json нажать на выполнение команды <b>yarn go</b> (Команда <b>yarn start</b>
оставлена для запуска клиентской части)</li>
<li>Также можно запустить проект из консоли, введя команду <b>yarn go</b></li>
</ol>
<h5>Вариант 2:</h5>
<ol>
<li>Клонировать проект с GitHub</li>
<li>Установить все необходимые зависимости</li>
<li>Пройтись по каждой папке проекта с каждой частью, прочитать описания в README.md, выполнить команды запуска (Предпочтительна цепочка БД->Сервер->Клиент)</li>
</ol>

<hr/>

<h3>Послесловие от автора:</h3>
<p>Т.к. часто в присланном ТЗ были расплывчатые формулировки, а Тех. Поддержка, конкретных ограничений не ставила, то были приняты следующие решения.</p>
<ol>
<li>Были переработаны API с сайта HackerAPI, ибо при их использовании сервер получал большую нагрузку
<ul>
<li>Число запросов без подгрузки частями составляло - 125 запросов в минуту, время, занятое данным процессом, состовляло 35 секунд</li>
<li>При использовании подгрузки и параллельных процессах, число запросов не уменьшалось, но занятое время - 5 секунд, что тоже критично</li>
</ul>
</li>
<li>На основе вышеуказанных проблем, было принято решение написать свою серверную часть. Т.к. требования по ТЗ - использовать NodeJS(чистый или фреймворк - требования не было), то серверная часть написана на Express.js</li>
<li>Для разделения обязанностей серверов, было принято решение, создать ещё один сервер, который будет хранить, отсылать и обрабатывать данные по запросам</li>
</ol>

Все подробности по каждой части написаны в собственных README.md


