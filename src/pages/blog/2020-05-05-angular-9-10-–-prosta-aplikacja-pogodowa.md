---
templateKey: blog-post
title: Angular 9/10 – prosta aplikacja pogodowa
date: 2020-05-05T19:21:36.697Z
description: >-
  W tym poście postaram się w czytelny sposób przedstawić jak stworzyć prostą
  aplikację pokazującą aktualną pogodę z wybranego przez nas miasta, wykorzystam
  do tego API od https://weatherstack.com/. 
featuredpost: true
featuredimage: /img/app-final.jpg
tags:
  - angular
  - ts
  - js
  - html
  - css
  - aplikacja
  - pogodowa
  - pogoda
  - api
  - tutorial
  - prosta aplikacja
  - programowanie angular
  - bootstrap angular
  - api angular
  - ''
---
![weather-app](/img/app-final.jpg "weather-app")

Zapoznamy się z takimi elementami Angulara jak moduły (modules), komponenty (components), dyrektywy (directives), zdarzenia (event), przypisywanie własności (property binding), tworzenie własnych serwisów oraz korzystanie z zewnętrznego API. Pokaże także jak do Angulara zaimportować bibliotekę Bootstrap https://getbootstrap.com/ .

Gotowy projekt możecie znaleźć w repozytorium [Git](https://github.com/Isanderr/Angular_simple_weatherApp). 

## Tworzymy nowy projekt

Zakładam, że mamy już zainstalowaną najnowszą wersję Node.js, npm oraz AngularCli w przeciwnym wypadku odsyłam do mojego wcześniejszego [posta](https://codetechnology.netlify.app/blog/2020-04-23-angular-%E2%80%93-przygotowanie-systemu-instalacja/). 

W celu stworzenia nowego projektu przechodzimy do katalogu, w którym chcemy umieścić naszą aplikację, uruchamiamy wiersz poleceń i wpisujemy:

```bash
ng new ng-weather
```

CLI zapyta nas czy chcemy użyć routingu w naszym projekcie, odpowiadamy yes. Jako format stylesheet wybieramy CSS. 

Generowanie nowego projektu chwile potrwa.

W celu sprawdzenia czy wszystko działa poprawnie przechodzimy do utworzonego przez CLI katalogu i uruchamiamy aplikację poprzez następujące polecenia.

```bash
cd ng-weatherng serve --open
```

Po kompilacji, aplikacja otworzy nam się automatycznie w domyślnej przeglądarce. Dostępna jest pod adresem http://localhost:4200

W celu zakończenia działania aplikacji w wierszu poleceń, naciskamy kombinację klawiszy CTRL + C.

## Instalacja Bootstrap, jQuery, popper.js

Do poprawnego działania Bootstrapa z Angularem potrzebujemy doinstalować biblioteki jQuery oraz popper.js. Pomimo tego że nie musimy początkowo wykorzystywać ich w naszej aplikacji uniknie to problemów w przyszłości w miarę rozbudowy programu. 

W celu instalacji w wierszu poleceń wpisujemy poniższe komendy:

```bash
npm install --save jquery popper.js bootstrap
```

opcja --save spowoduje automatyczne dodanie bibliotek do package.json

Pakiety zostały zainstalowane, należy jeszcze dodać do nich odpowiednie ścieżki w pliku angular.json w celu poinformowania aplikacji o ich istnieniu. W tym celu otwieramy powyższy plik i dodajemy poniższe linie.

Do styles:

```js
"styles": [  "node_modules/bootstrap/dist/css/bootstrap.css",  "src/styles.css"],
```

Oraz scripts: 

```js
"scripts": ["node_modules/jquery/dist/jquery.slim.js","node_modules/popper.js/dist/umd/popper.js","node_modules/bootstrap/dist/js/bootstrap.js"]},
```

Tworzenie componentu

W celu utworzenie nowego componentu o nazwie weather wpisujemy w wierszu poleceń następującą komendę:

```js
ng generate component weather
```

Posłuży on nam w celu wygenerowania widoku (tzw. view) naszej aplikacji oraz pozwoli na wyszukanie oraz wyświetlenie pogody w interesującej nas lokalizacji. 

Powyższy component został automatycznie zaimportowany do pliku _src/app/app.module.ts_ oraz do pliku _src/app/app-routing.module.ts_.

## Obsługa dodanego componentu

W celu prawidłowego działania componentu potrzebujemy poinformować aplikację gdzie powinna go szukać. Dzięki temu, że podczas tworzenia nowego projektu zainstalowaliśmy moduł routingu, praktycznie całą pracę wykonała za nas komenda ng generate. 

Jedyne co nam pozostaje do edytować plik _src/app/app.component.html_ 

Usuwamy z niego całą zawartość dodaną przez deweloperów Angulara i dodajemy tylko:

```js
<router-outlet></router-outlet>
```

Tag ten pozwoli przekierować ruch naszej aplikacji poprzez moduł routera do utworzonego componentu. 

Jeżeli teraz uruchomimy aplikację wpisując polecenie:

```bash
ng serve -- open
```

zobaczymy tekst **weather wokrs!**

Oznacza to, że routing działa poprawnie i po przejściu na stronę główną aplikacji widzimy zawartość componentu.

## Tworzenie interface componentu

Do utworzenia szkieletu interface componentu użyjemy zainstalowanej wcześniej biblioteki Bootstrap. Out of the Box nie wygląda ona zbyt rewelacyjnie więc trochę poprawimy jej wygląd.

Bibliotekę bootstrap wykorzystamy głównie dla zaimplementowanego w niej grida (systemu pozycjonowania elementów na stronie) ale równie dobrze mogliśmy obyć się tutaj bez niego. Po prostu chciałem pokazać Wam jak wygląda proces instalacji oraz inicjalizacji biblioteki w aplikacji budowanej w Angularze. 

Przechodzimy do pliku _src/app/weather/weather.component.html_ i usuwamy całą jego zawartość.

Następnie wpisujemy poniższy kod odpowiedzialny za strukturę aplikacji:

```
<div class="container">
  <div class="card">
    <div class="card__image-container">
      <!-- <img class="card__image" src="assets/firewatch.jpg" alt=""> -->
      <h3 class="text-center my-4">Search for Weather:</h3>
      <form [formGroup]="weatherSearchForm" (ngSubmit)="sendToAPIXU(weatherSearchForm.value)">
        <div class="form-group">
          <input class="form-control" type="text" id="weatherLocation" aria-describedby="weatherLocation"
            placeholder="Please input a Location" formControlName="location" />
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-danger btn-md"> Search for the weather </button>
        </div>
      </form>
    </div>
  </div>
  <div class="card right">
    <h3 class="text-center my-4">Weather Details:</h3>
    <p class="text-center">Current weather conditions: <span
        class="font-weight-bold">{{this.weatherData?.current.weather_descriptions}}</span></p>
    <p class="text-center">Temperature in Degrees Celsius: <span
        class="font-weight-bold">{{this.weatherData?.current.temperature}}</span></p>
    <p class="text-center">Pressure in hPa: <span class="font-weight-bold">{{this.weatherData?.current.pressure}}</span>
    </p>
    <p class="text-center">Feels like in Degrees Celsius: <span
        class="font-weight-bold">{{this.weatherData?.current.feelslike}}</span></p>
    <p class="text-center">Humidity: <span class="font-weight-bold">{{this.weatherData?.current.humidity}}</span></p>
    <p class="text-center">Location Searched: <span
        class="font-weight-bold">{{this.weatherData?.location.country}}</span>, <span
        class="font-weight-bold">{{this.weatherData?.location.name}}</span></p>
  </div>
</div>
```

Zaczynając od góry, cała aplikacja zamknięta jest w _<div>_ o nazwie _container_, następnie została podzielona na dwie sekcję card. W pierwszej umieszczony jest formularz w raz z buttonem odpowiedzialny za przechwytywanie zapytać userów. W drugiej natomiast widoczna jest część mająca za zadanie wyświetlania przechwyconych od API https://weatherstack.com/ informacji.

Po uruchomieniu poprzez _ng serve -- open_, aplikacja wygląda następująco. 

![only-html-bootstrap](/img/onlyhtml.jpg "only-html-bootstrap")

Przejdźmy teraz do pliku _src/app/weather/weather.component.css_ i przepiszmy tam następujący kod mający za zadanie nadać trochę smaczku naszej aplikacji.

```
* {
  box-sizing: border-box;
  line-height: 1.5;
  font-family: 'Open Sans', sans-serif;
}
img {
  max-width: 100%;
}
.container {
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.card {
  position: relative;
  background: #333;
  width: 400px;
  height: 75vh;
  border-radius: 6px 0 0 6px;
  padding: 2rem;
  color: #aaa;
  box-shadow: 0 .25rem .25rem rgba(0, 0, 0, 0.2),
    0 0 1rem rgba(0, 0, 0, 0.2);  overflow: hidden;
}
.right {
  border-radius: 0 6px 6px 0;
}
.card__image-container {
  margin: -2rem -2rem 1rem -2rem;
}
.card__line {
  opacity: 0;
  animation: LineFadeIn .8s .8s forwards ease-in;
}
.card__image {
  opacity: 0;
  animation: ImageFadeIn .8s 1.4s forwards;
}
.card__title {
  color: white;
  margin-top: 0;
  font-weight: 800;
  letter-spacing: 0.01em;
}
.card__content {
  margin-top: -1rem;
  opacity: 0;
  animation: ContentFadeIn .8s 1.6s forwards;
}
.card__svg {
  position: absolute;
  left: 0;
  top: 115px;
}
@keyframes LineFadeIn {
  0% {
    opacity: 0;
    d: path("M 0 300 Q 0 300 0 300 Q 0 300 0 300 C 0 300 0 300 0 300 Q 0 300 0 300 ");
    stroke: #fff;
  }
  50% {
    opacity: 1;
    d: path("M 0 300 Q 50 300 100 300 Q 250 300 350 300 C 350 300 500 300 650 300 Q 750 300 800 300");
    stroke: #888BFF;
  }
  100% {
    opacity: 1;
    d: path("M -2 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 802 400");
    stroke: #545581;
  }
}
@keyframes ContentFadeIn {
  0% {
    transform: translateY(-1rem);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
```

Aplikacja powinna wyglądać teraz mniej więcej tak.

![htmlcss](/img/htmlcss.jpg "htmlcss")

Jak widzimy podział na sekcję jest teraz mocno widoczny.

Zapewne zauważyliście już, że w górnej partii kodu HTML w pliku `src/app/weather/weather.component.html` znajduje się za komentowana część.  Jest to nic innego jak ścieżka do pliku img z małą animacją. 

```js
<!-- <img class="card__image" src="assets/firewatch.jpg" alt=""> -->
```

Możemy już go od komentować. Jeżeli pobraliście aplikację umieszczoną przeze mnie na gicie możecie skopiować ten sam plik do katalogu _src/assets/_ i wszystko powinno wyglądać tak jak poniżej. Oczywiście nic nie stoi na przeszkodzie użycia dowolnej grafiki oraz przerobienia kodu CSS w taki sposób jak Wam się podoba.  

![htmlcssimg](/img/htmlcssimg.jpg "htmlcssimg")

## Tworzenie formularza

Do stworzenia logiki formularza wykorzystamy moduł _ReactiveForms_. Za jego pomocą tworzymy listę elementów w pliku _.component.ts_ następnie łączymy ją z kodem HTML zawartym w _.component.html._ Utworzone w ten sposób połączenie jest jednokierunkowe. 

Za pomocą dyrektyw takich jak _ngModel_ możemy natomiast stworzyć połączenie dwukierunkowe tzw. two-way data binding.

W tym celu przechodzimy do pliku _src/app/app.module.ts_ i importujemy wspomniany moduł.

```js
...import { ReactiveFormsModule } from '@angular/forms';@NgModule({...})...
```

Dodajemy go również do listy imports.

```js
...@NgModule({    ...    imports: [    BrowserModule,    WeatcherComponent,    ReactiveFormsModule    ]    ...})..
```

Następnie przechodzimy do pliku _/src/app/weather/weather.component.ts_ i importujemy klasy _FormBuilder_ oraz _FormGroup_. 

```js
import { Component, OnInit } from '@angular/core';import { FormBuilder, FormGroup } from '@angular/forms';
```

\
Kolejnym krokiem jest utworzenie i export zmiennej:

```js
export class WeatherComponent implements OnInit {   public weatherSearchForm: FormGroup;   constructor() { }...
```

Za każdym razem wykonując jakąś akcję na formularzu, będziemy odwoływać się do zmiennej _weatherSearchForm_. Następnie dodajemy zaimportowany _FormBuilder_ do constructora. 

```js
...public weatherSearchForm: FormGroup;constructor(private formBuilder: FormBuilder) {}...
```

Poprzez dodanie _formBuilder_ do constructora uzyskujemy możliwość użycia go jako class w componentach. 

Kolejnym krokiem jest zainicjowanie naszego formularza w sekcji _ngOnInit_ w tym samym pliku, w tym celu dodajemy następujący wpis:

```js
ngOnInit() {    this.weatherSearchForm = this.formBuilder.group({    location: ['']    });  }
```

## Logika formularza oraz dodanie obsługi API

W tym kroku połączymy logikę ts z naszym btn i formularzem. Dodamy także obsługę API https://weatherstack.com/ .

Przechodzimy do _src/app/weather/weather.component.ts_ 

Pod _ngOnInit_ dodajemy następującą metodę:

```js
sendToAPIXU( formValues ) {        } );  }
```

Będzie miała ona za zadanie przesłanie naszego formularza do API https://weatherstack.com/ 

 API weatherstack obsługuje zapytania zawierające lokalizację oraz zwraca do clienta dane takie jak temperatura, temperatura odczuwalna, wilgotność, ciśnienie itd. 

Aby w Angularze wykonać zapytanie HTTP należy importować odpowiedni moduł. W tym celu przechodzimy do pliku _src/app/app/module.ts_ i dodajemy następujące wiersze:

```
...
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
    ...
    imports: [
        BrowserModule,
        RouterModule.forRoot(allAppRoutes),
        ReactiveFormsModule,
        HttpClientModule
    ]
    ...
})
...
```

Teraz zajmiemy się napisaniem zapytania HTTP do API weatherstack. W tym celu najlepszą praktyką jest utworzenie oddzielnego serwisu który będzie się tym zajmował. Tak utworzony serwis pozwoli nam odwoływać się do zewnętrznego API w każdym componencie, w którym zajdzie taka potrzeba. 

W celu utworzenia serwisu o nazwie apixu w oknie wiersza poleceń wpisujemy komendę:

```bash
ng g service apixu
```

Polecenie te utworzy dwa pliki _apixu.service.ts_ oraz _apixu.service.spec.ts_ 

Musimy teraz odpowiednio poinformować naszą aplikację o nowo utworzonym serwisie, w tym celu otwieramy _src/app/app.module.ts_ i dodajemy następujące wiersze:

```js
...import { HttpClientModule } "@angular/common/http";import { ApixuService } from "./apixu.service";...
```

Następnie dodajemy ApixuService jako provider: 

```js
...@NgModule({    ...    providers: [ApixuService],    ...})...
```

Po tych czynnościach otwieramy utworzony serwis _src/app/apixu.service.ts_ , usuwamy znajdujący się tam kod i dodajemy poniższy:

```
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable( {
  providedIn: 'root'
} )
export class ApixuService {

  constructor ( private http: HttpClient ) { }
  getWeather( location ) {
    return this.http.get(
      'http://api.weatherstack.com/current?access_key=Yours_API_KEY&query='+location
    );
  }
}
```

Decorator _@Injectable_ pozwala nam użyć serwisu wewnątrz componentów. Natomiast dzięki _HttpClient_ możemy wykonać zapytanie do API weatherstack.

W zapytaniu .get w części zawierającej URL API, a dokładniej w zapisie „**Yours_API_KEY**” musimy umieści nasz kod API.

W tym celu udajemy się na stronę https://weatherstack.com i rejestrujemy się. Tworzymy darmowe konto, które pozwoli nam wykonać do 1000 zapytań w miesięcznym okresie rozliczeniowym. 

Po zalogowaniu przechodzimy do Dashbordu gdzie możemy zobaczyć nasz **API Access KEY**. 

![apiaccess](/img/weatherstack.jpg "apiaccess")

Kopiujemy API Access Key i wklejamy na miejsce **Yours_API_KEY** bez spacji. 

Serwis jest gotowy. Jedyne co musimy zrobić to zaimportować go do componentu. Przechodzimy do _src/app/weather/weather.component.ts_ i dodajemy następujący kod:

```
...
import { FormBuilder, FormGroup } from "@angular/forms";
import { ApixuService } from "../apixu.service";
...
constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService
  ) {}
...
ngOnInit(){...}
…
sendToAPIXU( formValues ) {
    this.apixuService
      .getWeather( formValues.location )
      .subscribe( data => {
        this.weatherData=data;
        console.log( this.weatherData );
      } );
  }
```

Jednym z ostatnich kroków jest stworzenie zmiennej _weatherData_ i przypisanie jej do zwróconego przez API kodu JSON. 

```
export class WeatherComponent implements OnInit {
public weatherSearchForm: FormGroup;
public weatherData: any;
...
sendToAPIXU(formValues){
    this.apixuService
    .getWeather(formValues.location)
    .subscribe(data => this.weatherData = data)
      console.log(this.weatherData);
    }
}
```

Cały plik _src/app/weather/weather.component.ts_ powinien wyglądać w następujący sposób:

```
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from '../apixu.service';
@Component( {
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
} )
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weatherData: any;
  constructor (
    private formBuilder: FormBuilder,
    private apixuService: ApixuService
  ) { }
  ngOnInit(): void {
    this.weatherSearchForm=this.formBuilder.group( {
      location: ['']
    } );
  }
  sendToAPIXU( formValues ) {
    this.apixuService
      .getWeather( formValues.location )
      .subscribe( data => {
        this.weatherData=data;
        console.log( this.weatherData );
      } );
  }
}
```

Jeżeli chcecie dowiedzieć się jakie jeszcze dane możemy przechwycić z API weatherstack wystarczy, że po wykonaniu zapytania o wybraną przez nas lokalizację przejdziemy w przeglądarce do narzędzi deweloperkich (najczęściej klawisz F12), w zakładce wybierzemy Console i rozwiniemy listę Object.

I to w zasadzie wszystko. Możemy zapisać wszelkie zmiany i uruchomić aplikację poprzez komendę:

```bash
ng serve -- open
```

## Podsumowanie

Stworzyliśmy aplikację pogodową na bazie frameworku Angular, która poprzez wykonywanie zapytań do zewnętrznego API, pobiera dane i wyświetla je w wybrany przez nas sposób.
