---
templateKey: blog-post
title: Instalacja Rocket.Chat na Ubuntu 18.04
date: 2019-10-23T14:04:10.000Z
description: >-
  Rocket.Chat jest darmową, open-soursową aplikacją służącą do porozumiewania
  się za pośrednictwem czatu grupowego. Jego funkcjonalność jest podobna do
  takich aplikacji jak HipChat oraz Slack. 
featuredpost: true
featuredimage: /img/rocket-chat1.jpg
tags:
  - rocket.chat
  - ubuntu
  - czat
  - własny serwer
  - node.js
  - npm
  - mongodb
  - mobile
---


![rocket.chat](/img/rocket-chat1.jpg "rocket chat")

Poniżej przedstawię instalację Rocket.Chat na systemie Ubuntu w wersji 18.04. Do uruchomienia systemu wykorzystuję system wirtualizacji Vmware Workstation Player.

## Instalacja niezbędnych pakietów oraz wstępna konfiguracja systemu

Najpierw updatujemy listę naszych pakietów do najnowszej wersji.

```bash
sudo apt-get -y update
```

Pobieramy publiczny klucz aplikacji.

```bash
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
```

Dodajemy repozytorium MongoDB w wersji 4.0.

```bash
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
```

Instalacja curl oraz konfiguracja pakietu Node.js w wersji 8.x (Rocket.chat działa poprawnie na tej wersji Node).

```bash
sudo apt-get -y update && sudo apt-get install -y curl && curl -sL https://deb.nodesource.com/setup_8.x | sudo bash -
```

Instalacja build-essential, MongoDB, Nodejs, Graphicmagick.

```bash
sudo apt-get install -y build-essential mongodb-org nodejs graphicsmagick
```

Instalacja dodatkowych pakietów poprzez Node Package Manager.

```bash
sudo npm install -g inherits n && sudo n 8.11.4
```

## Instalacja Rocket.Chat

Ściągamy najnowszą wersję Rocket.Chat.

```bash
curl -L https://releases.rocket.chat/latest/download -o /tmp/rocket.chat.tgz
```

Rozpakowujemy do katalogu /tmp

Flaga –xzf oznacza kolejno:

* x - wyodrębnia wymienione pliki
* z - włącza kompresję programem gzip
* f - określa nazwę pliku archiwum tar



```bash
tar -xzf /tmp/rocket.chat.tgz -C /tmp
```

Instalacja aplikacji w katalogu /opt/Rocket.Chat

```bash
cd /tmp/bundle/programs/server && npm installsudo mv /tmp/bundle /opt/Rocket.Chat
```

## Konfiguracja serwisów aplikacji Rocket.Chat

Utworzenie konta użytkownika, dodanie odpowiednich uprawnień, utworzenie pliku konfiguracyjnego aplikacji.

```bash
sudo useradd -M rocketchat && sudo usermod -L rocketchatsudo chown -R rocketchat:rocketchat /opt/Rocket.Chatcat << EOF |sudo tee -a /lib/systemd/system/rocketchat.service[Unit]Description=The Rocket.Chat serverAfter=network.target remote-fs.target nss-lookup.target nginx.target mongod.target[Service]ExecStart=/usr/local/bin/node /opt/Rocket.Chat/main.jsStandardOutput=syslogStandardError=syslogSyslogIdentifier=rocketchatUser=rocketchatEnvironment=MONGO_URL=mongodb://localhost:27017/rocketchat?replicaSet=rs01 MONGO_OPLOG_URL=mongodb://localhost:27017/local?replicaSet=rs01 ROOT_URL=http://localhost:3000/ PORT=3000[Install]WantedBy=multi-user.targetEOF
```

Następnie musimy otworzyć stworzony przed chwilą plik konfiguracyjny w używanym przez nas edytorze. Ja użyje edytora nano. 

```bash
sudo nano /lib/systemd/system/rocketchat.service
```

W polu ROOT_URL wpisujemy adres IP maszyny na której zainstalowaliśmy Rocket.Chat, poniżej możemy zmienić też PORT na którym będzie działać aplikacja.

```bash
MONGO_URL=mongodb://localhost:27017/rocketchat?replicaSet=rs01MONGO_OPLOG_URL=mongodb://localhost:27017/local?replicaSet=rs01ROOT_URL=http://your-host-name.com-as-accessed-from-internet:3000PORT=3000
```

Przygotowanie storage engine dla MongoDB oraz uruchomienie MongoDB i Rocket.Chat.

```bash
sudo sed -i "s/^#  engine:/  engine: mmapv1/"  /etc/mongod.conf
```

```bash
sudo sed -i "s/^#replication:/replication:\n  replSetName: rs01/" /etc/mongod.confsudo systemctl enable mongod && sudo systemctl start mongod
```

```bash
mongo --eval "printjson(rs.initiate())"
```

```bash
sudo systemctl enable rocketchat && sudo systemctl start rocketchat
```

Komendą **sudo systemctl status (nazwa aplikacji)** możemy sprawdzić czy powyższe aplikacje są uruchomione i działają popranie. 



I w zasadzie to wszystko. W przeglądarce internetowej pod adresem podanym w polu ROOT_URL oraz portem 3000 (np. http://192.168.1.2:3000)powinniśmy zobaczyć działającego Rocket.Chat i przystąpić do konfiguracji konta administratora.

Rocket.Chat posiada także aplikację na smartfona po jej uruchomieniu wystarczy, że połączymy się z tą samą siecią, w której znajduje się uruchomiony serwer następnie klikniemy Connect to a server i wpiszemy adres naszego serwera wraz z portem.

Przydatne linki:

<https://rocket.chat/install>

<https://nodejs.org/en/>
