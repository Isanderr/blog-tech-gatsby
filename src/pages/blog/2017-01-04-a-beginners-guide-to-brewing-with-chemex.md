---
templateKey: blog-post
title: Własny serwer GitLab (Omnibus) na Ubuntu 18.04
date: 2019-10-27T15:04:10.000Z
description: >+
  GitLab jest platformą typu open source służącą do hostowania repozytoriów
  naszych aplikacji oraz w zasadzie wszelkiego rodzaju projektów. GitLab
  umożliwia pracę zarówno przy wykorzystaniu GUI (Graphical User Interface) jak
  i wiersza poleceń. 

featuredpost: true
featuredimage: /img/gitlab.jpg
tags:
  - ubuntu
  - GitLab
  - omnibus
  - git
  - własny serwer
  - own GitLab
  - GitLab installation
  - GitLab instalacja
---
![GitLab](/img/gitlab.jpg "GitLab")

Powyższą aplikacje możemy użyć do tworzenia naszych projektów od pomysły aż do wypuszczenia gotowego produktu. 

Z platformy GitLab możemy korzystać zarówno online (płacąc odpowiednio za subskrypcję) lub offline (wykupując licencje, bądź korzystać z darmowej wersji GitLab CE).

Poniżej przedstawię instalację GitLab EE, bez płatnej subskrypcji na utworzonym przez nas serwerze. Wersja EE jest pełnoprawnym systemem, z którego możemy bez obaw korzystać, po szczegóły odsyłam do dokumentacji <https://docs.gitlab.com/omnibus/README.html> .

Systemem bazowym będzie Ubuntu 18.04 postawiony na VMware Workstation.

## Instalacja

W pierwszej kolejności zajmiemy się openssh, certyfikatami oraz postfixem.

```bash
sudo apt-get update
```

```bash
sudo apt-get install -y curl openssh-server ca-certificates
```

Postfix posłuży nam do wysyłania wiadomości email poprzez aplikacje.

```bash
sudo apt-get install -y postfix
```

Podczas instalacji postfix pojawi się okno konfiguracyjne. Na początku wybieram „Internet Site” następnie wpisujemy zewnętrzny DNS naszego serwera jeżeli taki posiadamy, w przeciwnym razie wpisujemy dowolną nazwę.

Dodanie repozytoriów GitLab

```bash
cd /tmp
```

```bash
curl -LO https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh
```

Kolejnym krokiem jest uruchomienie pobranego skryptu poprzez poniższą komendę:

```bash
sudo bash /tmp/script.deb.sh
```

Po wykonaniu skryptu przystępujemy do instalacji z wykorzystaniem apt:

```bash
sudo apt-get install gitlab-ce
```

Po poprawnie przeprowadzonej instalacji musimy jeszcze odpowiednio skonfigurować adres http/s na którym będzie działać nasza aplikacja. W tym celu edytujemy plik gitlab.rb.

```bash
sudo nano /etc/gitlab/gitlab.rb
```

W otwartym oknie znajdujemy linie z zapisem external_url 'tutaj wpisujemy adres http/s' systemu na którym zainstalowaliśmy GitLab. 

Po powyższej czynności zapisujemy plik ctrl + o i zamykamy edytor ctrl + x. Następnie musimy zainicjować zmianę konfiguracji. W tym celu wpisujemy poniższą komendę:

```bash
sudo gitlab-ctl reconfigure
```

Po chwili gdy cała akcja zostaje zakończona sukcesem możemy przejść do przeglądarki i wpisać w niej adres, który zadeklarowaliśmy w konfiguracji GitLaba. 

I to wszystko. Podczas pierwszego uruchomienia w przeglądarce zostaniemy poproszeni o ustanowienie hasła. Do logowania w polu **username** wpisujemy **root**.

Przydatne linki:

<https://docs.gitlab.com/omnibus/README.html#installation-and-configuration-using-omnibus-package>

<https://about.gitlab.com/install/#ubuntu>
