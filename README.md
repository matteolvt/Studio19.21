# 🚀 Studio 19.21 - Agence Digitale

Bienvenue sur le dépôt officiel du site de l'agence **Studio 19.21**. Ce projet est développé en **ReactJS** avec une architecture robuste et un déploiement continu.

---

## 🛠 Stack Technique

- **Framework:** [React](https://reactjs.org/) (via Vite)
- **Hébergement:** [Vercel](https://vercel.com)
- **CI/CD:** GitHub Actions & Vercel Integration

---

## 🏗 Workflow du Projet

Pour garantir une stabilité maximale, nous utilisons un flux de travail structuré :

- **`main`** : Branche de production. Reflète le site en ligne.
- **`preprod`** : Branche de staging. Utilisée pour la validation client avant mise en ligne.
- **`develop`** : Branche d'intégration. Toutes les nouvelles fonctionnalités y sont regroupées.
- **`feature/*`** : Branches éphémères pour le développement de nouvelles fonctionnalités.

---

## 🚀 Installation Locale

1.  **Cloner le projet**
    ```bash
    git clone [https://github.com/matteolvt/Studio19.21.git](https://github.com/matteolvt/Studio19.21.git)
    ```
2.  **Installer les dépendances**
    ```bash
    npm install
    ```
3.  **Lancer le serveur de développement**
    ```bash
    npm run dev
    ```

---

## 📮 Déploiement

Chaque Pull Request génère automatiquement un lien de **Preview** via Vercel pour tester les modifications en conditions réelles avant le merge.
