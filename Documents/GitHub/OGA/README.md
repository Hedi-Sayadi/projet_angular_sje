# Configuration Keycloak 

* installer keycloak version 18 
* exécuter le avec la commande :
 ```sh
 standalone.sh -Djboss.socket.binding.port-offset=100
  ```
  
 * Ensuite, connectez-vous à la console d'administration Keycloak, disponible à l'adresse : 
  ```sh
 http://localhost:8180
  ```
 * Lors de votre première connexion, il vous sera demandé de créer un utilisateur d'administration 
 * Ensuite, connectez-vous avec l'utilisateur admin que vous venez de créer 
 * Créez votre Realm, Roles et Users




------------

## Configuration Verify mail pour le Realm

* Keycloak envoie des e-mails aux utilisateurs pour vérifier leurs adresses e-mail, lorsqu'ils oublient leurs mots de passe ou lorsqu'un administrateur a besoin de recevoir des notifications concernant un événement de serveur. Pour permettre à Keycloak d'envoyer des e-mails, vous fournissez à Keycloak les paramètres de votre serveur SMTP.
* Procedure
1. Click Realm settings dans le  menu.
2. Click login tab.
3. Basculez verify mail sur ON.
4. Click  Email tab.
5. Remplissez les champs et basculez les commutateurs selon vos besoins.
  * FROM indique l'adresse utilisée pour le From SMTP-Header pour les e-mails envoyés.
  * From display name permet de configurer des alias d'adresse e-mail conviviaux (facultatif). Si elle n'est pas définie, l'adresse e-mail de l'expéditeur sera      affichée dans les clients de messagerie
  
------------------------

## Configuration Keycloack avec Quarkus 

* vous pouvez ajouter les extensions oidc et keycloak-authorization à votre projet en exécutant la commande suivante dans le répertoire de base de votre projet 
```sh
 mvnw quarkus:add-extension -Dextensions="oidc,keycloak-authorization"
  ```
 * Cela ajoutera ce qui suit à votre fichier de construction :
 ```sh
 <dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-oidc</artifactId>
</dependency>
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-keycloak-authorization</artifactId>
</dependency>
  ```
* Configuring the application 
- L'extension OpenID Connect vous permet de définir la configuration de l'adaptateur à l'aide du fichier application.properties qui doit se trouver dans le répertoire src/main/resources.
 ```sh
# OIDC Configuration
%prod.quarkus.oidc.auth-server-url=https://localhost:8543/realms/quarkus
quarkus.oidc.client-id=backend-service
quarkus.oidc.credentials.secret=secret
quarkus.oidc.tls.verification=none

# Enable Policy Enforcement
quarkus.keycloak.policy-enforcer.enable=true

# Tell Dev Services for Keycloak to import the realm file
# This property is not effective when running the application in JVM or Native modes
quarkus.keycloak.devservices.realm-path=quarkus-realm.json
  ```
  
  



