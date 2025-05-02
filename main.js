const prompt = require("prompt-sync")();

while (true) {
    let choice = "";
    let question = "";

    console.log("Bienvenue à Ri7 !");
    const name = prompt("Quel est votre nom ? ");
    console.log(`Bonjour ${name}, ravi de vous accueillir ! Prenez un instant pour explorer votre environnement.`);

    // Première décision : 
    while (true) {
        console.log("Vous êtes dans l'accueil de Ri7. Que faites-vous ?");
        console.log("1 - Aller voir Serge pour discuter de votre projet.");
        console.log("2 - Aller voir Julie, la secrétaire, pour finaliser votre dossier.");

        question = prompt("Entrez 1 ou 2 : ");
        if (question === "1") {
            choice = "serge";
            break;
        } else if (question === "2") {
            choice = "julie";
            break;
        } else {
            console.log("Réponse invalide. Merci d'entrer 1 ou 2.");
        }
    }

    // Deuxième niveau de choix : 
    if (choice === "serge") {
        while (true) {
            console.log("Serge est ravi de vous voir et vous propose deux options :");
            console.log("1 - Faire un tour de l’entreprise avec lui.");
            console.log("2 - Vous laisser dans la salle détente pour que vous preniez vos marques.");

            question = prompt("1 ou 2 ? ");
            if (question === "1") {
                choice = "visite";
                break;
            } else if (question === "2") {
                choice = "detente";
                break;
            } else {
                console.log("Réponse invalide. Essayez encore.");
            }
        }
    }

    if (choice === "julie") {
        while (true) {
            console.log("Julie vous demande si vous avez bien envoyé tous vos documents.");
            console.log("1 - Vous dites que vous les avez oubliés (oups...).");
            console.log("2 - Vous lui montrez un mail contenant... vos photos de vacances par erreur.");

            question = prompt("1 ou 2 ? ");
            if (question === "1") {
                choice = "oubli";
                break;
            } else if (question === "2") {
                choice = "erreur-mail";
                break;
            } else {
                console.log("Merci d’entrer une réponse valide.");
            }
        }
    }

    // Troisième niveau de choix : 
    if (choice === "visite") {
        while (true) {
            console.log("Pendant la visite, Serge vous propose :");
            console.log("1 - De rencontrer l’équipe de dev.");
            console.log("2 - D'assister à un cours improvisé sur l’IA générative.");

            question = prompt("1 ou 2 ? ");
            if (question === "1") {
                console.log("L’équipe vous accueille avec un café et des gifs motivants !");
                break;
            } else if (question === "2") {
                console.log("Vous êtes maintenant convaincu de révolutionner le monde. Rien que ça.");
                break;
            } else {
                console.log("Petit rappel : entrez 1 ou 2.");
            }
        }
    }

    if (choice === "detente") {
        while (true) {
            console.log("Dans la salle détente, vous croisez un collègue qui regarde une série Netflix.");
            console.log("1 - Vous discutez des meilleures séries tech.");
            console.log("2 - Vous branchez la console pour une petite partie de Mario Kart.");

            question = prompt("1 ou 2 ? ");
            if (question === "1") {
                console.log("Vous êtes immédiatement ajouté à un canal Slack : #culture-geek.");
                break;
            } else if (question === "2") {
                console.log("Vous gagnez haut la main et devenez la légende de la salle détente.");
                break;
            } else {
                console.log("Choix invalide. Essayez encore.");
            }
        }
    }

    if (choice === "oubli") {
        while (true) {
            console.log("Julie soupire, mais reste pro.");
            console.log("1 - Vous promettez de tout envoyer ce soir.");
            console.log("2 - Vous proposez une réunion pour clarifier vos documents.");

            question = prompt("1 ou 2 ? ");
            if (question === "1") {
                console.log("Attention : promesse non tenue = formation en péril !");
                break;
            } else if (question === "2") {
                console.log("Julie apprécie votre professionnalisme. Un bon point !");
                break;
            } else {
                console.log("Choix invalide. Merci de réessayer.");
            }
        }
    }

    if (choice === "erreur-mail") {
        while (true) {
            console.log("Julie lève un sourcil. Oups !");
            console.log("1 - Vous transformez ça en blague.");
            console.log("2 - Vous créez une présentation humoristique avec vos photos.");

            question = prompt("1 ou 2 ? ");
            if (question === "1") {
                console.log("Heureusement, elle a le sens de l’humour !");
                break;
            } else if (question === "2") {
                console.log("Toute l’équipe applaudit votre créativité.");
                break;
            } else {
                console.log("Entrée non reconnue. Essayez 1 ou 2.");
            }
        }
    }

    // Fin du jeu : proposition de recommencer
    let restart = "";
    while (true) {
        console.log("Fin de cette session de jeu !");
        restart = prompt("Souhaitez-vous rejouer ? (oui ou non) : ");

        if (restart.toLowerCase() === "non") {
            console.log("Merci pour votre participation, à bientôt !");
            break;
        } else if (restart.toLowerCase() === "oui") {
            console.log("Redémarrage du jeu...");
            break; // recommence le jeu
        } else {
            console.log("Réponse invalide. Veuillez répondre par 'oui' ou 'non'.");
        }
    }

    if (restart.toLowerCase() === "non") {
        break; // sort de la boucle principale
    }
}
