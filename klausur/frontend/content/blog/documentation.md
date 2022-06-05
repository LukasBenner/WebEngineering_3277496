---
title: Dokumentation
description: 'Dokumentation der Web Engineering Arbeit'
slug: documentation
---

# Dokumentation Web-Engineering

Matrikelnummer: 3277496

## Welche Elemente wurden implementiert?

1. **Vue.js** wurde in Form von Nuxt.js verwendet. (3 Pkt.)

2. **Wetter Daten** können angezeigt werden (1 Pkt.)

3. Es wurde ein **Nutzersystem** zum Login implementiert (3 Pkt.)
   
   1. Hierfür wurde ein **Backend** mit Node.js implementiert, dass zu Speicherung der Daten eine **MongoDB** Datenbank nutzt.

4. Die Komponenten kann über **Docker** insalliert werden. (1 Pkt.)

Das Flussdiagram befindet sich auch im GitHub Repository.

## Installationsbeschreibung für lokales Environment

1. Klonen des Repositories:
   
   ```bash
   git clone https://github.com/LukasBenner/WebEngineering_3277496.git
   ```

2. Installation der Dependencies:
   
   Installiere die Dependencies in den Subdirectories "backend" und "frontend" jeweils mit dem Befehl `npm install`

### Installation von MongoDB

#### Mac Nutzer

Gehe auf [die Webseite von MongoDB](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/#install-mongodb-community-edition) und lies die Installation durch.

Hier in kurz:

1. Wenn Homebrew nicht installiert ist:
   
   1. Installation der Xcode command-line tools
      `xcode-select --install`
   
   2. Installation von Homebrew
      
      ```bash
      /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
      ```

2. Installiere MongoDB
   
   ```bash
   brew tap mongodb/brew
   brew update
   brew install mongodb-community@5.0
   ```

3. Starte MongoDB
   
   ```bash
   brew services start mongodb-community@5.0`
   ```

Um MongoDB wieder zu stoppen, führe folgends aus:

```bash
brew services stop mongodb-community@5.0
```

Um MongoDB zu deinstalliern:

```bash
brew remove mongodb-community@5.0
```

### Starten der Anwendung

1. Im Backend: `npm run dev`

2. Im Frontend: `npm run dev`

3. Wenn das Frontend buildet und der Backend ein "connected to db!" ausgiebt, hat alles funktioniert.

4. Gehe auf http://localhost:3000

5. Um Auf die Wetter Seite zu kommen muss man sich einloggen. 😀

6. Einmal bitte also registrieren und einloggen.

## Installationsbeschreibung mit Docker

**Es wird eine funktionierende Installation von Docker und Docker Compose vorausgesetzt**

Infos zur Installation sind hier zu finden: [Install Docker Desktop on Mac | Docker Documentation](https://docs.docker.com/desktop/mac/install/)

1. Klonen des Repositories:
   
   ```bash
   git clone https://github.com/LukasBenner/WebEngineering_3277496.git
   ```

2. Builden des Backend Images im directory "backend"
   
   ```bash
   docker build -t lukasbenner/web_engineering_3277496-backend:1.0 .
   ```

3. Builden des Frontend Images im directory "frontend"
   
   ```bash
   docker build -t lukasbenner/web_engineering_3277496-frontend:1.0 .
   ```

4. Ausführen der "docker-compose.yaml"
   
   Das Working Directory muss das Directory mit der compose Datei sein.
   
   Der Tag -d bedeutet detached. Läuft alles durch, kann die App unter 
   
   ```bash
   docker compose up -d
   ```

5. Rausfinden der Adresse unter der die App läuft:
   
   ```bash
   docker logs frontend
   ```
   
   zeigt das Log des Frontends an. Dort müsste ein `Listening on: ....` zu finden sein.

## Erfahrungsbericht

### Probleme

1. Ein Problem was das Entscheiden für ein Framework. Anfänglich hatte ich mich Angular entschieden. Nachdem ich damit anfänglich aber große Schwierigkeiten hatte und ich von Nuxt.js gehört hatte. Habe ich mich für Nuxt.js entschieden. Also Vue.js auf Steroiden😀.

2. Ein Problem mit dem ich lange zu kämpfen hatte war CORS. Nach einer Weile Mozilla lesen und ausprobieren ging es dann aber.

3. Das State Modul von Nuxt ist eine super Sache. Damit kann man requests bündeln, kann prefetching und vieles weiteres machen. Natürlich muss man dazu aber auch erstmal verstehen wie das ganze funktioniert... 🥲

### Was ging gut

1. Das Implementieren des Backends für den User Login und die Wetter Daten ging relativ einfach. Die Kommunikation mit einer Datenbank hatten ich in vorherigen Projekten schon gemacht. Das Abfragen der Wetter Daten im eigenen Backend vereinfacht auch die Behandlung der Daten im Client, da man die Daten im Backend vereinfachen und umstrukturieren kann.

### Was habe ich gelernt

1. Ich habe gelernt in Vue.js Komponenten zu erstellen und diese Wiederzuverwenden.
2. Ich habe gelernt mit asynchronen Methoden umzugehen.
3. Ich habe CSS Konzepte wie Flexbox und Grid, usw. besser verstanden.
