# Guide de déploiement Hostinger avec GitHub Actions

## Vue d'ensemble

Ce guide explique comment configurer le déploiement automatique de votre application Angular vers Hostinger en utilisant GitHub Actions.

## Structure des fichiers de build

Après le build Angular (`npm run build`), votre application génère les fichiers suivants dans le dossier `dist/` :

```
dist/
└── space-tourism-website-project/
    ├── browser/               # ← Contenu principal du site web
    │   ├── index.html        # Point d'entrée principal
    │   ├── main-[hash].js    # JavaScript principal
    │   ├── polyfills-[hash].js
    │   ├── styles-[hash].css
    │   └── assets/           # Images et ressources statiques
    └── prerendered-routes/   # ← Routes pré-rendues (si SSR activé)
```

## Configuration requise sur Hostinger

### 1. Récupérer les informations FTP de Hostinger

1. Connectez-vous à votre panneau de contrôle Hostinger
2. Allez dans **Fichiers** → **Gestionnaire de fichiers** ou **FTP**
3. Notez les informations suivantes :
   - **Serveur FTP** : généralement `ftp.votredomaine.com` ou une IP
   - **Nom d'utilisateur FTP** : votre nom d'utilisateur
   - **Mot de passe FTP** : votre mot de passe FTP

### 2. Configurer les secrets GitHub

Dans votre repository GitHub :

1. Allez dans **Settings** → **Secrets and variables** → **Actions**
2. Cliquez sur **New repository secret**
3. Ajoutez les secrets suivants :

| Nom du secret            | Valeur                 | Description                      |
| ------------------------ | ---------------------- | -------------------------------- |
| `HOSTINGER_FTP_SERVER`   | `ftp.votredomaine.com` | Adresse du serveur FTP Hostinger |
| `HOSTINGER_FTP_USERNAME` | `votre_username`       | Nom d'utilisateur FTP            |
| `HOSTINGER_FTP_PASSWORD` | `votre_password`       | Mot de passe FTP                 |

## Comment ça fonctionne

### Workflow GitHub Actions

Le workflow modifié (`/.github/workflows/deploy.yml`) fait ceci :

1. **Build** : Compile l'application Angular en mode production
2. **Branch build** : Pousse les fichiers compilés vers la branche `build`
3. **Deploy** : Envoie le contenu du dossier `browser/` vers Hostinger

### Contenu déployé

- **Source** : `./dist/space-tourism-website-project/browser/`
- **Destination** : `/public_html/` sur Hostinger
- **Contenu** : Tous les fichiers statiques (HTML, CSS, JS, images)

## Structure sur Hostinger

Après déploiement, votre site aura cette structure sur Hostinger :

```
/public_html/
├── index.html           # Page d'accueil
├── main-[hash].js      # Application Angular
├── polyfills-[hash].js
├── styles-[hash].css
└── assets/             # Images et ressources
    ├── images/
    │   ├── crew/
    │   ├── destination/
    │   ├── home/
    │   ├── shared/
    │   └── technology/
    └── favicon.png
```

## Déclenchement du déploiement

Le déploiement se déclenche automatiquement quand vous :

1. Poussez du code vers la branche `main`
2. GitHub Actions :
   - Installe les dépendances
   - Build l'application
   - Pousse vers la branche `build`
   - Deploy vers Hostinger via FTP

## Vérification

### 1. Vérifier la branche build

```bash
git checkout build
ls -la
# Vous devriez voir les fichiers de dist/
```

### 2. Vérifier le déploiement

- Visitez votre site web sur Hostinger
- Vérifiez que les fichiers sont présents dans `/public_html/`

## Gestion des routes Angular

Si vous utilisez le routage Angular, ajoutez un fichier `.htaccess` pour rediriger toutes les routes vers `index.html` :

```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^.*$ /index.html [L]
```

## Troubleshooting

### Problèmes courants

1. **Erreur FTP** : Vérifiez les credentials et l'adresse du serveur
2. **Fichiers manquants** : Vérifiez que le build s'est terminé avec succès
3. **Routes 404** : Ajoutez le fichier `.htaccess` mentionné ci-dessus

### Logs GitHub Actions

- Allez dans **Actions** dans votre repository GitHub
- Cliquez sur le dernier workflow pour voir les logs détaillés

## Notes importantes

- Le dossier `prerendered-routes/` n'est pas déployé car il contient des fichiers de pré-rendu côté serveur
- Seul le contenu de `browser/` est nécessaire pour un déploiement statique
- La branche `build` conserve l'historique de tous vos builds
