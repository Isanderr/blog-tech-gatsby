---
templateKey: blog-post
title: 'Microsoft SQL instalacja na Linux, Docker'
date: 2019-12-01T19:01:59.281Z
description: >-
  Krótki opis instalacji Microsoft SQL bezpośrednio na Linuxie (Fedora, CentOS),
  oraz z wykorzystaniem Dockera. 
featuredpost: true
featuredimage: /img/sql-tutorials.png
tags:
  - SQL
  - Microsoft
  - Linux
  - Docker
  - installation
  - fedora
  - centos
  - serwer
  - server
---
![SQL](/img/sql-tutorials.png "SQL")

## **Linux serwer**

**Ściągamy potrzebne repozytoria oraz wykonujemy wstępną konfigurację**

```bash
sudo curl –o /etc/yum.repos.d/mssql-server.repo
```

```bash
https://packages.microsoft.com/config/rhel/7/mssql-server-2017.repo
```

**Instalacja serwera SQL**

```bash
sudo yum install –y mssql-server
```

**Konfiguracja**

```bash
sudo /opt/mssql/bin/mssql-conf setup
```

**W celu sprawdzenia czy serwer działa poprawnie wpisujemy:**

```bash
sudo systemctl status mssql-server
```

**Konfiguracja Firewalla**

```bash
sudo firewall-cmd –zone=public –add-port=1433/tcp –permanent
```

```bash
sudo firewall-cmd –reload
```

**Instalacja narzędzi command-line**

```bash
sudo curl –o /etc/yum.repos.d/msprod.repo
```

```bash
https://packages.microsoft.com/config/rhel/7/prod.repo
```

```bash
sudo yum install –y mssql-tools unixODBC-devel
```

```bash
echo ‘export PATH=”$PATH:/opt/mssql-tools/bin”’ >> ~/.bash_profile
```

```bash
echo ‘export PATH=”$PATH:/opt/mssql-tools/bin”’ >> ~/.bashrc
```

```bash
source ~/.bashrc
```

**Połącznie z CMD bazy danych**

```bash
sqlcmd –S localhost –U SA –P ‘Password’
```

**Utworzenie bazy danych**

```bash
CREATE DATABASE Test;
```

```bash
GO
```

**Potwierdzenia utworzenia DB**

```bash
SELECT name FROM sys.databases;
```

```bash
GO
```

## DOCKER

**Ściągamy SQL serwer image**

```bash
sudo docker pull mcr.microsoft.com/mssql/server:2017-latest
```

**Uruchamiamy serwer**

```bash
sudo docker run –e ‘ACCEPT_EULA=Y’ \
```

```bash
-e ‘SA_PASSWORD=Password’ \
```

```bash
-p 1433:1433 –name sql1 \
```

```bash
-d mcr.microsoft.com/mssql/server:2017-latest
```

**Sprawdzenie czy kontener działa poprawnie**

```bash
sudo docker ps –a
```

**Podłączenie do kontenera**

```bash
sudo docker exec –it sql1 ”bash”
```

**Podłączenie przy użyciu SQLCMD**

```bash
/opt/mssql-tools/bin/sqlcmd –S localhost –U SA \
```

```bash
-P ‘Password’
```

**Utworzenie bazy danych**

```bash
CREATE DATABASE test1;
```

**Potwierdzenie utworzenia DB**

```bash
SELECT name FROM sys.databases;
```

```bash
GO
```
