---
templateKey: blog-post
title: 'Microsoft SQL instalacja na Linux, Docker'
date: 2019-12-01T19:01:59.281Z
description: >-
  Krótki opis instalacji Microsoft SQL Serwer 2017 bezpośrednio na Linuxie
  (Fedora, CentOS), oraz z wykorzystaniem Dockera. 
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

> Microsoft SQL Server (MS SQL) – system zarządzania bazą danych, wspierany i rozpowszechniany przez korporację Microsoft. Jest to główny produkt bazodanowy tej firmy, który charakteryzuje się tym, iż jako język zapytań używany jest przede wszystkim Transact-SQL, który stanowi rozwinięcie standardu ANSI/ISO. 
>
> _https://pl.wikipedia.org/wiki/Microsoft_SQL_Server_

## **Linux serwer**

**Ściągamy potrzebne repozytoria oraz wykonujemy wstępną konfigurację**

```bash
sudo curl –o /etc/yum.repos.d/mssql-server.repo https://packages.microsoft.com/config/rhel/7/mssql-server-2017.repo
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

sudo firewall-cmd –reload
```

**Instalacja narzędzi command-line**

```bash
sudo curl –o /etc/yum.repos.d/msprod.repo https://packages.microsoft.com/config/rhel/7/prod.repo

sudo yum install –y mssql-tools unixODBC-devel

echo ‘export PATH=”$PATH:/opt/mssql-tools/bin”’ >> ~/.bash_profile

echo ‘export PATH=”$PATH:/opt/mssql-tools/bin”’ >> ~/.bashrc

source ~/.bashrc
```

**Połącznie z CMD bazy danych**

```bash
sqlcmd –S localhost –U SA –P ‘Password’
```

**Utworzenie bazy danych**

```bash
CREATE DATABASE Test;

GO
```

**Potwierdzenia utworzenia DB**

```bash
SELECT name FROM sys.databases;

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

-e ‘SA_PASSWORD=Password’ \

-p 1433:1433 –name sql1 \

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
-P ‘Password’
```

**Utworzenie bazy danych**

```bash
CREATE DATABASE test1;
```

**Potwierdzenie utworzenia DB**

```bash
SELECT name FROM sys.databases;
GO
```

Przydatne linki:

<https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-red-hat?view=sql-server-2017>

<https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker?view=sql-server-2017&pivots=cs1-bash>
