---
templateKey: blog-post
title: 'Angular – przygotowanie systemu, instalacja'
date: 2020-04-23T19:17:37.257Z
description: >-
  Postanowiłem napisać serię o jednym z najbardziej popularnych Frameworów dla
  deweloperów JavaScript jakim niewątpliwie jest Angular. 
featuredpost: true
featuredimage: /img/angular800.jpg
tags:
  - Angular AngularCLI Angular start Node.js NPM ng
---
Angular został wydany przez Google w 2009 r. pod nazwą AngularJS, nie należy jednak mylić tej wersji z obecnie wspieraną przez Google wersją Angular 2 wydaną we wrześniu 2016 r. 

Obecnie Angular  doczekał się swojej 9 edycji, trwają także prace nad jego 10 odsłoną. Wszystkie wersje od 2 nazywane są po prostu Angular. 

Angular jest open-sourcowym frameworkiem i platformą do tworzenie Single Page Application, napisany został w języku TypeScript. 

TypeScript jest supersetem (nadzbiorem) JavaScript stworzonym przez Microsoft. Umożliwia on między innymi statyczne typowanie oraz programowanie zorientowane obiektowo oparte na klasach. TS jest językiem wymagającym wcześniejszej kompilacji do JavaScript gdyż sama w sobie przeglądarka nie będzie w stanie go wykonać. Do jego kompilacji możemy wykorzystać np. grunta lub gulpa. 

TS wspierany jest obecnie przez dwóch gigantów branżowych, wspomniany wcześniej Microsoft oraz Google. 

## **Dlaczego warto używać Angulara?**

Angular jest open-sourcową opartą na TypeScript platformą do budowania strony klienckiej aplikacji webowych jako Single Page Application. Zapewnia między innymi:

\- możliwość tworzenia aplikacji webowych, mobilnych i desktopowych

\- jest bardzo wszechstronnym nowoczesnym i kompletnym ekosystemem

\- może być wykorzystany do tworzenia natywnych aplikacji mobilnych przy wykorzystaniu Native-Script i Ionic

\- może być wykorzystany do tworzenia aplikacji desktopowych przy pomocy Electrona

\- wyposażony jest w narzędzia pozwalające w łatwy sposób zarządzać projektem

\- wykorzystuje TS, a nie zwykły JS

\- zawiera w sobie wiele narzędzi, które pozwalają bez instalacji dodatkowego oprogramowania tworzyć routing, forms, http calls

\- używa RxJS, który pozwala pracować z Observables

\- Angular złożony jest z komponentów, dzięki czemu w łatwy sposób możemy powielać je w innych aplikacjach

\- pozwala budować PWA (Progressive Web Apps)



## Instalacja

Niezależnie od tego czy pracujemy na Windowsie, Os, czy Linuxie do korzystania z Angulara potrzebujemy zainstalować na naszej maszynie Node.js oraz NPM, Node.js przynajmniej w wersji 8.9 lub wyższej, NPM 5.5.1 lub wyższej.

**Windows**

Przechodzimy do strony <https://nodejs.org/en/> wybieramy wersję LTS z długim wsparciem producenta lub current. Kreator instalacji pod Windows jest standardowy, w kroku Custom Setup upewniamy się tylko, że instalujemy również NPM. 

**Linux Debian/Ubuntu**

W przypadku Linuxa otwieramy terminal i wpisujemy 

`sudo apt install nodejs`

`sudo apt install npm`

**Potwierdzenie poprawności instalacji**

Aby potwierdzić, że instalacja przebiegła prawidłowo zarówno w Windowsie jak i Linuxie otwieramy wiersz poleceń/terminal i wpisujemy:

`node –v`

`npm –v`

Powinniśmy zobaczyć jakie wersje oprogramowania zainstalowane są w systemie.

![ubuntu terminal version](/img/1.jpg "ubuntu terminal version")



## Instalacja Angular CLI

Angular CLI jest narzędziem wiersza poleceń stworzonym przez zespół odpowiedzialny za Angulara po to aby ułatwić tworzenie nam projektów. Możemy za jego pomocą utworzyć między innymi komponenty, pipes, serwisy itp. 

Do instalacji Angular CLI wykorzystamy zainstalowany wcześniej NPM.

Otwieramy wiersz poleceń/terminal i wpisujemy:

`npm install –g @angular/cli`

w przypadku linuxa przed poleceniem dodajemy _sudo_

flaga –g sprawia, że CLI zainstaluje się globalnie na naszym systemie.

Proces instalacji trwa kilka chwil. W celu sprawdzenie zainstalowanej wersji wpisujemy w wierszu poleceń/terminalu:

`ng version `

![ubuntu terminal ng version](/img/2.jpg "ubuntu terminal ng version")



W celu wyświetlenie innych dostępnych poleceń wpisujemy:

`ng help`

Znajdziemy tam następujące komendy:

![ubuntu terminal ng help](/img/3.jpg "ubuntu terminal ng help")

## Angular CLI – tworzenie nowego projektu

Do utworzenia nowego projektu możemy użyć Angular CLI jest to forma zalecana przez deweloperów Googla, aby to zrobić otwieramy wiersz poleceń/terminal przechodzimy do katalogu, w którym chcemy rozpocząć projekt i wpisujemy:

`ng new first_app`

„first_app” możemy zastąpić dowolną nazwą naszej aplikacji.

Podczas tworzenia nowej aplikacji zostaniemy zapytani czy chcemy dodać do niej routing oraz jaki format stylów zamierzamy wykorzystać CSS, SCSS itd. 

Po tych czynnościach utworzona zostanie struktura plików i katalogów, następnie zainstalują wymagane przez Angulara paczki. 

Struktura wewnątrz utworzonego folderu first_app przedstawia się następująco:

_/e2e/_: zawiera testy end-to-end

_/node_modules/_: zawiera wszystkie paczki instalowane przy użyciu NPM

_/src/_: główny folder naszej aplikacji

•	_/app/_: zawiera moduły i komponenty

•	_/assets/_: zawiera obrazki, ikony itd.

•	_/enviroments/_: zawiera pliki konfiguracyjne (dewelopment i produkcja)

•	_browserlist_: wykorzystuje autoprefixer do CSS

•	_favicon.ico_: ikonka favicon

•	_index.html_: główny plik HTML aplikacji

•	_karma.conf.js_: plik konfiguracyjny Karmy, narzędzie do testowania

•	_main.ts_: główny plik startowy aplikacji

•	_polyfills.js_: dodanie nowych funkcjonalności dla starych przeglądarek

•	_styles.css_: główny plik zawierający style dla naszej aplikacji

•	_test.js_: plik konfiguracyjny dla Karmy

•	_tsconfig.*.json_: plik konfiguracyjny TS

_angular.json_: plik konfiguracyjny dla CLI

_package.json_: zawiera podstawowe informacje o aplikacji, nazwę, opis, zależności itd. 

_README.md_: plik Markdown zawierający opis aplikacji

_tsconfig.json_: plik konfiguracyjny TS

_tslint.json_: plik konfiguracyjny TSlint (narzędzie analityczne)

## Uruchomienie aplikacji

Angular CLI daje nam możliwość kompletnego uruchomienia naszej aplikacji w środowisku deweloperskim na naszym systemie. Aby to zrobić przechodzimy w wierszu poleceń/terminalu do katalogu, w którym utworzyliśmy nasza aplikację, w moim przypadku będzie to „first_app”

`cd first_app`

następnie możemy uruchomić aplikację wpisując polecenie:

`ng serve`

Po skompilowaniu naszej aplikacji będzie ona dostępna w oknie przeglądarki pod adresem <http://localhost:4200/> . Strona, która nam się ukaże zawiera umieszczone przez deweloperów Angulara podstawowe informacje o frameworku oraz inne przydatne linki.

![angular welcome ](/img/4.jpg "angular welcome")

Jeżeli chcemy możemy dodać do polecenia flagę _–open_ wtedy aplikacja otworzy się automatycznie w domyślnej przeglądarce systemowej.

`ng serve –open`

Możemy także zdefiniować hosta oraz port, na którym chcemy uruchomić naszą Angularową aplikację:

`ng serve –host 0.0.0.0 – port 8080`



To tyle jeżeli chodzi o instalację środowiska oraz narzędzia jakim jest Angular CLI. W kolejnych postach postaram się przedstawić więcej informacji o samym Angularze oraz stworzyć kilka prostych projektów.
