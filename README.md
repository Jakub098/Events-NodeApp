# ExampleNodeApp
## description
Przykładowy CRUD dla aplikacji przechowującej informację na temat wydarzeń kulturowych. Założeniem aplikacji było:
* rozróżnienie typu wydarzenia (koncert, wydarzenie teatralne...)
* przechowywanie informacji o miejscach wydarzeń, aby można było zarządzać sprzedażą blietów wstępu
* przychowywanie informacji o artystach z którymi była nawiązana współpraca
* przechowywanie informacji o wydarzeniach które się odbyły lub odbędą

## technology stack
ticket-app use:
* node.js
* mySQL
* docker

## Create DB in Docker
To create mySQL database with phpMyAdmin, you should typ in cmd inside *docker*
* *docker-compose up*
now phpMyAdmin running on port localhost:8183 and you can log in using
* serwer: mysql
* user: root
* password: root

## Run backend
To run backend, you should type in cmd in catalog *backend*
* npm install
* npm run dev

then application will run on port localhost:3032
