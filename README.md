<h1>HackerNews 2.0</h1>
<p>Проект на стажировку в Авито на позицию стажер-фронтенд разработчик</p>

<h3>Технологии:</h3>
<h5>Клиентская часть:</h5>
<img src="https://img.shields.io/badge/TypeScript-blue?logo=TypeScript&logoColor=white&style=for-the-badge" alt="TypeScript Badge"/>
<img src="https://img.shields.io/badge/JavaScript-yellow?logo=JavaScript&logoColor=white&style=for-the-badge" alt="JavaScript Badge"/>
<img src="https://img.shields.io/badge/HTML5-orange?logo=HTML5&logoColor=white&style=for-the-badge" alt="HTML5 Badge"/>
<img src="https://img.shields.io/badge/SCSS-grey?logo=SASS&logoColor=white&style=for-the-badge" alt="SCSS Badge"/>
<img src="https://img.shields.io/badge/React-blue?logo=React&logoColor=white&style=for-the-badge" alt="React Badge"/>
<img src="https://img.shields.io/badge/Redux-blueviolet?logo=Redux&logoColor=white&style=for-the-badge" alt="Redux Badge"/>

<h5>Серверная часть:</h5>
<img src="https://img.shields.io/badge/JavaScript-yellow?logo=JavaScript&logoColor=white&style=for-the-badge" alt="JavaScript Badge"/>
<img src="https://img.shields.io/badge/Express-white?logo=Express&logoColor=black&style=for-the-badge" alt="Express Badge"/>
<img src="https://img.shields.io/badge/Node.JS-grey?logo=Node.JS&logoColor=white&style=for-the-badge" alt="Node Badge"/>

<h5>База данных:<h5>
<img src="https://img.shields.io/badge/JSONServer-red?logo=JavaScript&logoColor=white&style=for-the-badge" alt="JavaScript Badge"/>

<h3>Общие сведения:</h3>
<p>Проект построен по логике трёхзвенной архитектуры: клиентская часть, сервер приложений, база-данных(здесь json-server - имитация хранилища)</p>

<h3>Команды запуска:</h3>
<ul>
 <li><b>yarn run go</b> - команда запуска всех составляющих проекта</li>
</ul>

<h3>Общая полезная информаця</h3>
<p>Существует возможность запустить каждый компонент отдельно, для этого в каждой папке существует свой package.json, в котором имеются свои команды. Для удобства понимания, в каждой папке есть свой README.md файл, в котором описана вся необходимая информация</p>


<h3>Послесловие от автора:</h3>
<p>Т.к. часто в присланном ТЗ были расплывчатые формулировки, а Тех. Поддержка, конкретных ограничений не ставила, то были приняты следующие решения.</p>
<ol>
<li>Были переработаны API с сайта HackerAPI, ибо при их использовании на сервер приходилаcь колоссальная нагрузка
<ul>
<li>Число запросов без подгрузки частями составляло - 125 запросов в минуту, время, занятое данным процессом, состовляло 35 секунд</li>
<li>При использовании подгрузки и параллельных процессах, число запросов не уменьшалось, но занятое время - 5 секунд, что тоже критично</li>
</ul>
</li>
<li>На основе вышеуказанных проблем, было принято решение написать свою серверную часть. Т.к. требования по ТЗ - использовать NodeJS(чистый или фреймворк - требования не было), то серверная часть написана на Express.js</li>
<li>Для разделения обязанностей серверов, было принято решение, создать ещё один сервер, который будет хранить, отсылать и обрабатывать данные по запросам</li>
</ol>

Все подробности по каждой части написаны в собственных README.md


