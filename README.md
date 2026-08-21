# ZSHS0 Web

Prototype web/PWA V0.2 du casque ZSHS0, optimisé pour les essais sur iPhone 14 Pro.

## Fonctions

- caméra arrière plein écran, lancée par un toucher pour respecter les permissions iOS
- HUD sans viseur central et marges compatibles avec la Dynamic Island
- modes NORMAL / NIGHT logiciel
- heading, pitch, roll et horizon artificiel quand iOS fournit les données
- commandes vocales en français avec saisie manuelle de secours
- cache PWA utilisable hors connexion après une première ouverture en ligne

## Installation sur l’iPhone 14 Pro

1. Ouvrir **https://lordzerosama.github.io/ZSHS0-web/** dans Safari (pas dans le navigateur intégré d’une autre app).
2. Toucher **DÉMARRER LA CAMÉRA**, puis autoriser la caméra.
3. Safari : **Partager > Sur l’écran d’accueil > Ajouter**.
4. Ouvrir ZSHS0 depuis l’icône créée.
5. Toucher **CAPTEURS** et autoriser l’accès aux mouvements et à l’orientation.
6. Toucher **PARLER** et autoriser le micro si iOS le demande. Si Safari ne fournit pas la reconnaissance vocale, une saisie manuelle apparaît.

La caméra et les capteurs exigent HTTPS et une action de l’utilisateur. En cas de refus : **Réglages > Safari > Caméra / Micro / Mouvement et orientation**, autoriser l’accès, puis fermer et relancer la PWA.

## Commandes

- « mode nuit »
- « mode normal » ou « mode jour »
- « batterie » / « alimentation »
- « statut »
- « capteurs »

## Test hors connexion

1. Ouvrir la PWA une première fois avec Internet et attendre son chargement complet.
2. Fermer puis rouvrir une fois la PWA afin que le service worker actif serve la nouvelle version.
3. Activer le mode avion et relancer ZSHS0. Le HUD doit s’ouvrir ; la caméra reste locale et ne nécessite pas Internet.

Après une mise à jour, ouvrir une fois la PWA en ligne puis la relancer. Le numéro interne du cache est modifié à chaque version pour éviter de conserver un ancien prototype.

## Limites connues et sécurité

- iOS ne fournit pas l’état réel de la batterie aux pages web ; le HUD affiche donc « iOS ».
- Le heading dépend de la calibration de la boussole. « N/A » signifie qu’aucune donnée de capteur n’est reçue.
- La reconnaissance vocale dépend de Safari/iOS et peut nécessiter Internet ; la saisie manuelle reste disponible.
- NIGHT est un filtre logiciel, pas une vision infrarouge.
- Ne jamais utiliser ce prototype comme seul moyen de vision pour conduire, piloter ou se déplacer dans une zone dangereuse.
