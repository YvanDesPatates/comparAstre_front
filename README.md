# Compar'Astre | VueJs
Un site de recensement et de comparaisons entre les astres

## lancer le projet
```
git clone https://github.com/YvanDesPatates/comparAstre_front.git
cd comparAstre_front/
npm install
npm run serve
```
Si votre port 8080 est libre, le projet est consultable à l'adresse [http://localhost:8080/](http://localhost:8080/)

### Naviguer dans le site
<pre>
Pour naviguer dans le site, n'hésitez pas à créer un compte.
Cela permettra de pouvoir créer, supprimer et mettre à jour les astres.

Pour avoir un compte qui à crée déjà plusieurs astre se connecter avec les identifiants login: "juvan" mdp: "juvan"
</pre>

### Le projet dans les grandes lignes
- Communication avec notre API via axios
- Ajout de computed en plus des données : rayon, volume, densité (affichage selon les données présentes dans l'astre en question)
- Barre de recherche pour filtrer les astres par nom
- CRUD des astres, avec vérification des droits pour l'update et le delete (un utilisateur ne peu delete que les astres qu'il a crée)
- Utilisation d'une transition en fondue entre les pages et d'un loader (visible surtout sur la page d'accueil)
- Création d'un système de comparaison en utilisant l'EventBus
- Gestion de la connexion avec enregistrement dans le store de VueX
- Utilisation de cookie pour rendre le store persistant
- Utilisation de Bootsrap-Vue


