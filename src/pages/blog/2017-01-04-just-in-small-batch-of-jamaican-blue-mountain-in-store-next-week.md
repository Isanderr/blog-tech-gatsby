---
templateKey: blog-post
title: Instalacja Kali Linux 2019.3 na VMware Workstation
date: 2019-11-02T15:04:10.000Z
description: >-
  Poniżej przedstawię podstawową instalację najbardziej znanej dystrybucji
  Linuxa przeznaczonej do wykonywania pentatestów. 
featuredpost: true
featuredimage: /img/title-kali.jpg
tags:
  - kali
  - linux
  - hakowanie
  - pentatesty
  - instalcja
  - vmware
  - wirtualka
  - bezpieczeństwo
  - cybersecurity
---
![kali_linux_desktop](/img/title-kali.jpg "kali_linux_desktop")

Kali Linux – dystrybucja systemu operacyjnego Linux bazująca na Debian przeznaczona głównie do łamania zabezpieczeń i testów penetracyjnych czy też audytów bezpieczeństwa

## Pobranie najnowszego obrazu ISO Kali Linux

W celu pobrania najnowszej wersji w/w systemu udamy się pod ten link <https://www.kali.org/downloads/>. Jest to oficjalna strona dystrybucji. Ja osobiście używam wersji **Kali Linux 64-Bit** i taką też zainstalujemy. Jeżeli potrzebujesz innego wydania, instalacja przebiega w ten sam sposób.

![kali-linux-verion](/img/version-kali.png "kali-linux-verion")

## Przygotowanie wirtualnego środowiska w VMware

Po uruchomieniu **VMware** naszym oczom ukazuję się następujący ekran.

![vmware-home](/img/vmware-home.jpg "vmware-home")

W otwartym oknie klikamy „Create a New Virtual Machine”. Wyskakuje nam okno New Virtual Machine Wizard wybieramy w nim Installer disc image file (iso) i wskazujemy na wcześniej pobrany system operacyjny.

![vmware-disk](/img/vmware_new_virtual_machine_wizard_disk_image.jpg "vmware-disk")

Następnie w oknie wyboru **„Select a Guest Operating System”** wybieramy dystrybucję **Debian 9.x 64-bit** gdyż właśnie na jej podstawie został stworzony **Kali Linux 2019.3.**

Kolejnym krokiem jest nazwanie naszej wirtualnej maszyny oraz wskazanie miejsca gdzie ma być ona przechowywana.

W oknie **Specify Disk Capacity** ustalamy jak duża przestrzeń ma zostać na starcie zarezerwowane przez nasz wirtualny system. Możemy zostawić tą wartość na poziomie 20GB gdyż VMware i tak w miarę potrzeb będzie poszerzał tą przestrzeń. Zaznaczamy także **"Split virtual disk into multiple files"** i przechodzimy dalej.

![vmware-disk-capacity](/img/vmware_new_virtual_machine_wizard_specify_disk_capacity.jpg "vmware-disk-capacity")

Nasze środowisko jest już prawie gotowe, w kolejnym oknie wybieramy jeszcze **Customize Hardware**, przechodzimy do zakładki **memory** i tutaj według uznania oraz specyfikacji naszego komputera możemy przydzielić odpowiednie zasoby maszynie wirtualnej. W moim przypadku będzie to 8 GB RAM, natomiast w zakładce **procesor** wybiorę 4 rdzenie. Klikamy Close oraz finish aby zakończyć proces tworzenia wirtualki.

## Instalacja Kali Linux

W oknie domowym VMware wybieramy utworzone przez nas środowisko i klikamy **„Play virtual machine”**

Po chwili pojawia nam się okno instalacyjne naszego systemu. Wybieramy w nim **Graphical install.** 

![kali-linux-graphical-install](/img/kali_linux_installation_boot_menu.jpg "kali-linux-graphical-install")

Następnie wybieramy kolejno:  **język systemu, nasza lokalizację, konfigurację klawiatury.** 

Instalowany system dogra odpowiednie komponenty i po chwili jesteśmy poproszeni o podanie naszego **hostname**. Jest to nic innego jak nazwa naszej maszyny wirtualnej jaka będzie widoczna w sieci.

![kali-linux-hostname](/img/install_kali_linux_2017_in_vmware_workstation_12_configure_the_network_screenshot.jpg "kali-linux-hostname")

Następnie wybieram nazwę naszej **domeny**, jeżeli żadnej nie posiadamy wpisujemy w pole cokolwiek i przechodzimy dalej.

W kolejnym oknie ustanawiamy **hasło** które posłuży nam do zalogowania się na użytkownika **root**. Lepiej nie pomijać tego okna i od razu ustanowić odpowiednie hasło. 

![kali-linux-password](/img/install_kali_linux_2017_in_vmware_workstation_12_set_up_users_and_password_screenshot.jpg "kali-linux-password")

Po wprowadzeniu hasło przechodzimy dalej i ustawiamy nasza **strefę czasową**.

Następnie jesteśmy poproszeni o wybranie w jaki sposób chcemy utworzyć partycję na naszym dysku. Polecam opcję **„Guided – use entire disk”**. Jest ona wystarczając dla naszej maszyny wirtualnej.

Kolejnym krokiem jest wybór dysku na którym ma być ona utworzona. Wybieramy **„sda, VMware virtual disk”**.

![kali-linux-partition-disk](/img/install_kali_linux_2017_in_vmware_workstation_12_partition_disk_select_disk_partition_screenshot.jpg "kali-linux-partition-disk")

W następnym oknie wybieramy opcje **„All files in one partition”** i klikamy continue.

Widzimy potwierdzenie zmian jakie chcemy wprowadzić. Przechodzimy dalej.

Następnie jesteśmy pytani czy na pewno chcemy zapisać zmiany na dysku klikamy **„yes”** i przechodzimy dalej. 

![kali-linux-partion](/img/install_kali_linux_2017_in_vmware_workstation_12_disk_partition_confirmation_screenshot.jpg "kali-linux-partition")

_**System przystępuje do instalacji.**_

Po jej ukończeniu jesteśmy poproszeni o wybranie **network mirror dla Package managera**. Wybieramy **"yes"**, następnie zapytani o **http proxy** zostawiamy pole puste i przechodzimy dalej.

**Instalacja GRUB boot loader**

W widocznym oknie zapytani o to czy chcemy zainstalować **GRUB** wybieramy **"yes"**. Następnie wskazujemy boot loader device którym będzie **/dev/sda**. 

![kali-linux-grub](/img/install_kali_linux_2017_in_vmware_workstation_12_select_grub_boot_loader_device_screenshot.jpg "kali-linux-grub")

System kończy proces instalacji i to tyle. Możemy uruchomić nasz nowo zainstalowany system operacyjny.

Jako dane do zalogowania używamy w polu login Username: **root** oraz wpisujemy zdefiniowane podczas instalacji hasło.

![kali-linux-finish](/img/installation-finish.jpg "kali-linux-finish")

Przydatne linki:

[https://www.kali.org/
](https://www.kali.org/)

[https://www.vmware.com/products/workstation-player/workstation-player-evaluation.html
](https://www.vmware.com/products/workstation-player/workstation-player-evaluation.html)
