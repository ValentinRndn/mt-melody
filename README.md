# **MT MELODY**

Application web qui permet aux artistes de visualiser l'évolution et les statistiques de leur contenu.
---

## **Table des matières**

1. [Fonctionnalités](#fonctionnalités)  
2. [Technologies utilisées](#technologies-utilisées)  
3. [Installation](#installation)  
4. [Configuration](#configuration)  
5. [Lancement de l'application](#lancement-de-lapplication)  
6. [Fonctionnement](#fonctionnement)  
7. [Structure du projet](#structure-du-projet)  
8. [Contributeurs](#contributeurs)  

---

## **Fonctionnalités**

- **Dashboards :** Dashboard administrateur et artistes.  
- **Authentification JWT :** Connexion sécurisée via tokens.  
- **API REST :** Communication entre le frontend et backend.  
- **Responsive design :** Adapté aux ordinateurs et mobiles.  

---

## **Technologies utilisées**

### **Frontend :**

- **Vue.js 3** avec Composition API   
- **Tailwind CSS** pour le design  

### **Backend :**

- **Node.js** et **Express.js**  
- **MongoDB** avec **Mongoose** pour la base de données  

### **Autres :**

- **MongoDB Atlas** pour le stockage cloud de la base de données  
- **dotenv** pour la gestion des variables d'environnement  

---

## **Installation**

1. Clonez le dépôt :
   ```bash
   git clone [https://github.com/votre-repo/academ.git](https://github.com/ValentinRndn/mt-melody.git)
   cd mt-melody
   ```
2. Installez les dépendances pour le backend :
   ```bash
   cd backend
   npm install
   ```
2. Installez les dépendances pour le frontend : 
   ```bash
   cd ../frontend
   npm install
   ```

## **Configuration**

1. Créez un fichier .env dans le dossier racine pour le frontend et dans le dossier backend avec les variables suivantes :

   Dossier racine : .env
   ```bash
   VITE_API_URL=<urlAPI>
   ```

1. Créez un fichier .env dans les dossiers frontend et backend avec les variables suivantes :
   Dossier backend : .env
   ```bash
   PORT=5000
   MONGO_URI=<liendelabase>
   JWT_SECRET=your_jwt_secret
   ```

## **Lancement de l'application**

1. Démarrez le serveur backend 
   Backend
   ```bash
   cd backend
   node server
   ```

2. Démarrez le serveur frontend 
   Frontend
   ```bash
   cd frontend
   npm run dev
   ```

## **Fonctionnement**

1. Authentification :
   Les utilisateurs se connectent avec leur email et mot de passe.
   Les tokens JWT sécurisent les requêtes.


## **Structure du projet**
   ```bash
/mt-melody
├── /backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
├── /frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── views/
│   │   ├── services/
│   │   └── App.vue
│   └── .env
└── README.md
```

## **Contributeurs**
Valentin Renaudin- Développeur principal
Contributions, questions ou suggestions ? Contactez-moi sur [Lien](https://valentin-renaudin.com/ "Mon site").
