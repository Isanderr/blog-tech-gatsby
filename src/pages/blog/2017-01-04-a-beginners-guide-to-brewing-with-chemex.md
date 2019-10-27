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
curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | sudo bash
```

Kolejnym krokiem jest instalacja aplikacji. W miejscu  **„http://gitlab.example.com”** 

wpisujemy nazwę naszej domeny lub adres IP komputera na którym instalujemy GitLab. 

```bash
sudo EXTERNAL_URL="http://gitlab.example.com" apt-get install gitlab-ee
```



I to wszystko. Podczas pierwszego uruchomienia w przeglądarce zostaniemy poproszeni o ustanowienie hasła. Do logowania w polu username wpisujemy root.



Przydatne linki:

<https://docs.gitlab.com/omnibus/README.html#installation-and-configuration-using-omnibus-package>

<https://about.gitlab.com/install/#ubuntu>
