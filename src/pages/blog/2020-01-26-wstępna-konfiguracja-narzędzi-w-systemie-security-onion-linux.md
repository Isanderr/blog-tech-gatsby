---
templateKey: blog-post
title: Wstępna konfiguracja narzędzi w systemie Security Onion Linux
date: 2020-01-26T16:58:45.419Z
description: >-
  Konfiguracja między innymi Elasticsearch, Logstash, Kibana, Squert, Sguil,
  Bro, Snort, Suricata. 
featuredpost: true
featuredimage: /img/6.png
tags:
  - security onion
  - Elasticsearch
  - Logstash
  - Kibana
  - Squert
  - Sguil
  - Bro Snort
  - Suricata
  - cybersecurity
  - bezpieczeństwo
---


![security onion linux](/img/6.png "security onion linux")

Po zalogowaniu się do systemu zobaczymy poniższy ekran. Klikamy dwukrotnie na ikonę setup i rozpoczynamy proces instalacji narzędzi. System poprosi o podanie hasła administratora, następnie na ekranie zostanie wyświetlona lista usług które zostaną skonfigurowane. 

![security onion setup](/img/1.png "security onion setup")

Klikamy na **Yes, Continue!**

W kolejnym oknie zostaniemy zapytani o to czy chcemy skonfigurować interface sieciowy. Klikamy na **Yes, configure /etc/network/interfaces!**

Następnie musimy wybrać opcję czy chcemy przydzielić naszej maszynie statyczny adres IP czy skorzystać z dynamicznego przydzielania adresu poprzez serwer DHCP. Wybieramy tutaj zgodnie z naszymi wymaganiami. Ja wybiorę DHCP.

Na poniższym oknie zostanie wyświetlona wybrana przez nas konfiguracja. Aby kontynuować klikamy na **Yes, make changes!** 

![security onion setup](/img/3.png "security onion setup")

Po tej czynności uruchamiamy ponownie system. 

Po ponownym uruchomieniu systemu klikamy jeszcze raz na setup. Następnie w oknie na **Yes, continue!** W pytaniu czy chcemy pominąć konfigurację sieci tym razem klikamy na **Yes, skip network configuration!**

W kolejnym korku program zapyta czy chcemy skonfigurować system w trybie **Evaluation Mode** (tryb testowy), czy w trybie **Production Mode** (tryb produkcyjny) wybieramy opcję, która bardziej nam odpowiada. Ja wybiorę **Evaluation Mode**. 

W kolejnych oknach wybieramy naszą nazwę użytkownika dla zainstalowanych usług, hasło, wpisujemy je dwukrotnie, następnie klikamy na **Yes, oriceed with changes!** I przechodzimy dalej.

![security onion setup](/img/4.png "security onion setup")

W kolejnych krokach zobaczymy kilka informacji dotyczących zainstalowanych usług, między innymi: jak sprawdzić ich status, informację dotyczącą lokalizacji, dostęp do man. Przechodzimy dalej poprzez potwierdzenie wyświetlanych informacji. 

![security onion setup](/img/5.png "security onion setup")

Od tej pory mamy już pełen dostęp do usług zainstalowanych w systemie.

Skróty do najważniejszych z nich pojawiły się na pulpicie. Mamy do nich także dostęp z menu applications oraz gdy przejdziemy w przeglądarce pod adres  **https://localhost/**

![security onion ](/img/6.png "security onion")

Jak zapewne zauważyliście konfiguracja Security Onion Linux jest bardzo prosta. Zawiera on jednak w sobie bardzo zaawansowany zestaw narzędzi pozwalający zadbać o bezpieczeństwo naszych systemów. 

Przydatne linki:

[https://securityonion.net](https://securityonion.net)

[https://github.com/Security-Onion-Solutions](https://github.com/Security-Onion-Solutions)
