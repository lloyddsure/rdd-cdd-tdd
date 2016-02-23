# cli-weather


- [Comment utiliser CliWeather](#comment-utiliser-cliweather)
  - [public-ip](#public-ip)
  - [chalk](#chalk)
  - [cli-table](#cli-table)
  - [minimist](#minimist)
  - [lancer](#lancer)
- [Ce que fait CliWeather](#ce-que-fait-cliweather)
- [Differents packages](#differents-packages)
  - [args](#args)
  - [config](#config)
  - [data](#data)
  - [format](#format)
  - [help](#help)
- [Licence](#licence)



## Comment utiliser CliWeather

Lancer le terminal ou l'invite commande entrer dans le repertoire /rdd-cdd-tdd/weather.

###public-ip
Installer la librairie public-ip :
```sh
❯ npm install public-ip
```
###chalk
Installer la librairie chalk :
```sh
❯ npm install chalk
```
###cli-table
Installer la librairie cli-table :
```sh
❯ npm install cli-table
```
###minimist
Installer la librairie minimist : 
```sh
❯ npm install minimist
```

###lancer
Pour lancer le programme, écrire 
```sh
❯ node index.js
```


## Ce que fait CliWeather

Le programme donne les prévisions météo sur les 4 prochains jours
![alt tag](https://github.com/lloyddsure/rdd-cdd-tdd/blob/master/weather/image.PNG)


## Differents packages

###args
Args est le package qui fait la requête HTTP afin d'obtenir la localisation et les information sur la météo.
###config
Config permet de récupérer les informations venant de la machine.
###data
Data traite les résultats obtenus par la requête HTTP.
###format
Récupère les données depuis le fichier data.js qui sont traités.
###help
Aide pour savoir à quoi les commandes correspondent.

## Licence
Uncopyrite