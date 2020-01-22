---
templateKey: blog-post
title: Instalacja systemu operacyjnego Security Onion Linux na VMware Workstation
date: 2020-01-22T17:49:19.083Z
description: >-
  Poniżej przedstawię instalację oraz wstępną konfigurację systemu Security
  Onion Linux.
featuredpost: true
featuredimage: /img/security-onion-linux.png
tags:
  - security
  - onion
  - linux
  - vmware
  - cybersecurity
  - system hardening
  - utwardzanie systemu
  - monitoring
  - sieć
  - network
---
![Security onion linux](/img/security-onion-linux.png "security onion linux")

Security Onion – jest darmową open source-ową dystrybucją systemu linux opartą na Debianie.

System ten zawiera wiele narzędzi, które mogą posłużyć do przeprowadzania analiz powłamaniowych, wykrywania incydentów, monitorowania bezpieczeństwa w przedsiębiorstwie, zarządzania dziennikami zdarzeń.

Zainstalowane narzędzia to między innymi Elasticsearch, Logstash, Kibana, Snort, Suricata, Bro, Wazuh, Squil, Squert, CyberChef, NetworkMiner i wiele innych.

Zawarty w systemie kreator pozwala w łatwy sposób skonfigurować większość zainstalowanych narzędzi i bezproblemowo wdrożyć system do działania. 

## Pobranie najnowszego obrazu ISO Security Onion (na dzień pisania tego posta jest to wersja 16.04.6.3 z 26.11.2019)

W celu pobrania najnowszej wersji w/w systemu udamy się pod ten adres:

[https://download.securityonion.net/file/Security-Onion-16/securityonion-16.04.6.3.iso](https://download.securityonion.net/file/Security-Onion-16/securityonion-16.04.6.3.iso)

Jest to oficjalne źródło dystrybucji. Więcej informacji możemy znaleźć pod tym linkiem: 

[https://github.com/Security-Onion-Solutions/security-onion/blob/master/Verify_ISO.md](https://github.com/Security-Onion-Solutions/security-onion/blob/master/Verify_ISO.md)

## Przygotowanie wirtualnego środowiska w VMware Workstation

Po uruchomieniu VMware widzimy następujący interface.

![vmware home](/img/vmware-home.jpg "vmware home")

W otwartym oknie klikamy „Create a New Virtual Machine”. Wyskakuje nam okno New Virtual Machine Wizard wybieramy w nim Installer disc image file (iso) i wskazujemy na wcześniej pobrany system operacyjny.

![vmware disk choose](/img/vmware_new_virtual_machine_wizard_disk_image.jpg "vmware disk choose")

W następnym oknie **„Select a Guest Operating System”** wybieramy Linux i następnie Ubuntu.

Kolejnym krokiem jest nadanie nazwy naszej wirtualnej maszynie oraz wskazanie miejsca instalacji. 

W oknie **„Specify Disk Capacity”** ustalamy jak dużą przestrzeń chcemy przeznaczyć na system. Wartość na poziomie 20GB jest w pełni wystarczająca na początku instalacji. Zaznaczamy także opcję **„Split virtual disk into multiple files”** i przechodzimy dalej.

![vmware disk capacity](/img/vmware_new_virtual_machine_wizard_specify_disk_capacity.jpg "vmware disk capacity")

Nasze środowisko jest już prawie gotowe, w kolejnym oknie wybieramy jeszcze **Customize Hardware**, przechodzimy do zakładki **memory** i tutaj według uznania oraz specyfikacji naszego komputera możemy przydzielić odpowiednie zasoby maszynie wirtualnej. W moim przypadku będzie to 8 GB RAM, natomiast w zakładce **procesor** wybiorę 4 rdzenie. Klikamy Close oraz finish aby zakończyć proces tworzenia wirtualki.

## Instalacja systemu Security Onion

W oknie domowym VMware wybieramy utworzone przez nas środowisko i klikamy **„Play virtual machine”**.

Po chwili pojawia się okno bootowania systemu. Wybieramy w nim "**Boot SecurityOnion 16.04.6.3"** lub czekamy aż system sam się uruchomi.

![security onion linux boot](/img/botowanie.png "security onion linux boot")

Po uruchomieniu systemu na ekranie widzimy pulpit, na którym znajduje się ikona **Install SecurityOnion 16.04**.

![security onion linux installation](/img/pulpit-do-instalacji.png "security onion linux installation")

Klikamy w nią i rozpoczynamy proces instalacji.

1. W pierwszym oknie wybieramy język systemu.
2. Następnie musimy zdecydować czy w trakcie instalacji, system ma automatycznie aktualizować aplikacje. 
3. W kolejnym kroku wybieramy typ instalacji. Możemy wybrać dowolną opcje lub zaakceptować wybór domyślny. Klikamy **Install now**.
4. W następnych krokach wybieramy kolejno, strefę czasową, układ klawiatury oraz tworzymy nowego użytkownika. Akceptujemy i rozpoczynamy instalację. 

![security onion install](/img/instalacja.png "security onion install")

Instalacja trwa od kilku do kilkunastu minut. Po całym procesie następuje restart systemu. I to wszystko!

W kolejnym wpisie przedstawię konfigurację usług oraz aplikacji dołączonych do systemu. 



Przydatne linki:

[https://securityonion.net](https://securityonion.net)

[https://github.com/Security-Onion-Solutions](https://github.com/Security-Onion-Solutions)
