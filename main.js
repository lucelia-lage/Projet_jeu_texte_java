const prompt = require("prompt-sync")();

while (true) {
    console.log("Salutations, camarade!");
    let name = prompt("Comment tu t'appelles? ")
    console.log(name + " jouons ensemble! Arrête un peu tes codes, viens t'amuser (ou pas...)");


    let choice = ""
    let question = ""

    while (true) {
        console.log("C'est ton premier jour à Ri7, tu arrives en avance. Qu'est-ce que tu fais?");
        console.log("1- Voir Serge");
        console.log("2- Voir Julie, la nouvelle secretaire");

        question = prompt("1 ou 2?")

        if (question === "1") {
            console.log("Il te propose une visite de site");
            choice = "serge"
            break;
        } else if (question === "2") {
            console.log("Elle demande si tu as envoyé tous tes documents");
            choice = "julie"
            break;
        } else {
            console.log("oupsss, mauvais choix! merci d'entrer 1 ou 2, ce n'est pas si compliqué en fin des comptes, n'est-ce pas, camarade ?");
        }
    }

    if (choice === "serge") {
        while (true) {
            console.log("1- Tu acceptes et croise Thomas qui perd de Lucas au ping-pong");
            console.log("2- Tu refuses pour manger un bel avocat tofu avec ta camarade Julie pour bien démarrer ta matinée");

            question = prompt("1 ou 2?")

            if (question === "1") {
                console.log("Je rigole, c'est Thomas qui gagne au ping-pong");
                choice = "thomas"
                break;
            } else if (question === "2") {
                console.log("Vous 2 gagnez une énergie de fou avec ce petit déj, sauts sur un pied avant de continuer le jeu!");
                choice = "camarade"
                break;
            } else {
                console.log("oupsss, mauvais choix! merci d'entrer 1 ou 2, ce n'est pas si compliqué en fin des comptes, n'est-ce pas, camarade ?");
            }
        }
    }

    if (choice === "thomas") {
        while (true) {
            console.log("Je rigole encore, Thomas perd vraiment. En regardant cette defaite, qu'est-ce que tu fais?");
            console.log("1- Tu lui proposes une danse, comme Macarena, pour bien démarrer ton année d'études à Ri7");
            console.log("2- Tu change de sujet, tu commences à parler de la météo pour changer le focus");

            question = prompt("1 ou 2?")

            if (question === "1") {
                console.log("Quel mauvais choix! Comment tu te permets de danser à Ri7 à ton premier jour de cours?");
                choice = "Macarena"
                break;
            } else if (question === "2") {
                console.log("Bon choix, parler de la météo est recommandé aux premiers jours de formation, aussi quand tu croise ton voisin dans l'ascenseur");
                choice = "météo"
                break;
            } else {
                console.log("oupsss, mauvais choix! merci d'entrer 1 ou 2, ce n'est pas si compliqué en fin des comptes, n'est-ce pas, camarade ?");

            }

        }

    }

    if (choice === "Macarena") {
        while (true) {
            console.log("Essaie de te remettre!! Qu'est-ce que tu fais finalement?");
            console.log("1- Propose à Thomas de jouer aux échecs.");
            console.log("2- Fais semblant qu'un acteur célèbre passe devant Ri7, que tu vas lui demander un autographe.");
            let question = prompt("1 ou 2?")

            if (question === "1") {
                console.log("Thomas perd aussi aux échecs!");
                console.log("C'est fini le jeu! Reprends tes cours! Merci :) ")

                choice = "echec"
                while (true) {
                    question = prompt("tu veux jouer : oui ou non?")
                    if (question === "non") {
                        console.log("alors bye bye");
                    } else if (question === "oui") {
                        choice = ""
                        break;
                    } else {
                        console.log(prompt("répondre oui ou non"))
                    }
                }
                break;
            } else if (question === "2") {
                console.log("Tu prends l'autographe d'un ouvrier qui fait les travaux dehors, sous pretexte qu'il taff à la télé les weekends");
                console.log("C'est fini le jeu! Reprends tes cours! Merci :) ")

                choice = "tele"
                while (true) {
                    question = prompt("tu veux jouer : oui ou non?")
                    if (question === "non") {
                        console.log("alors bye bye");
                    } else if (question === "oui") {
                        choice = ""
                        break;
                    } else {
                        console.log(prompt("répondre oui ou non"))
                    }
                }
                break;
            } else {
                console.log("oupsss, mauvais choix! merci d'entrer 1 ou 2, ce n'est pas si compliqué en fin des comptes, n'est-ce pas, camarade ?");

            }

        }
    }

    if (choice === "météo") {
        while (true) {
            console.log("Tout dans un coup, une forte pluie commence. Qu'est-ce qui se passe dans ta tête?");
            console.log("1- en parlant du loup...");
            console.log("2- j'ai prêté mon parapluie à ma belle-mère, pas de chance!");
            question = prompt("1 ou 2?")

            if (question === "1") {
                console.log("L'intuition est ton truc, change de voie!");
                console.log("C'est fini le jeu! Reprends tes cours! Merci :) ")
                choice = "intuition"
                while (true) {
                    question = prompt("tu veux jouer : oui ou non?")
                    if (question === "non") {
                        console.log("alors bye bye");
                    } else if (question === "oui") {
                        choice = ""
                        break;
                    } else {
                        console.log(prompt("répondre oui ou non"))
                    }
                }
                break;
            } else if (question === "2") {
                console.log("Avec ta belle-mère, rien est du hasard. ");
                console.log("C'est fini le jeu! Reprends tes cours! Merci :) ")
                choice = "belle-mere"
                while (true) {
                    question = prompt("tu veux jouer : oui ou non?")
                    if (question === "non") {
                        console.log("alors bye bye");
                    } else if (question === "oui") {
                        choice = ""
                        break;
                    } else {
                        console.log(prompt("répondre oui ou non"))
                    }
                }
                break;
            } else {
                console.log("oupsss, mauvais choix! merci d'entrer 1 ou 2, ce n'est pas si compliqué en fin des comptes, n'est-ce pas, camarade ?");

            }

        }
    }

    if (choice === "camarade") {
        while (true) {
            console.log("Maintenant, estomac chouchotté, tu fais quoi?");
            console.log("1- Une sieste pour digérer, afinal tu es arrivé en avance");
            console.log("2- Tu cours entre tracteurs qui font les travaux juste devant l'éecole, afinal c'est toujours bien de commencer la journée avec un peu de sport");

            question = prompt("1 ou 2?")

            if (question === "1") {
                console.log("Hummm...tu sais faire des mauvais choix dans ta vie! Bravo! ");
                choice = "sieste"
                break;
            } else if (question === "2") {
                console.log("ATTENTION: te fais pas écraser par un tracteur");
                choice = "sport"
                break;
            } else {
                console.log("oupsss, mauvais choix! merci d'entrer 1 ou 2, ce n'est pas si compliqué en fin des comptes, n'est-ce pas, camarade ?");

            }

        }

    }

    if (choice === "sieste") {
        while (true) {
            console.log("Ta sieste a duré trop longtemps. Tu te reveilles et te rend compte qu'il est 11h. Qu'est-ce que tu fais?");
            console.log("1- Vas en cours, dis qui faisait une sieste dehors et démarre la formation avec un sympa surnom de paresseux");
            console.log("2- Rentre chez toi et tu dis à toi même que demain c'est un nouveau jour, que tu vas gérer!");

            question = prompt("1 ou 2?")

            if (question === "1") {
                console.log("Tkt pas, bientôt tu auras un autre surnom sympa, tu es fort pour inspirer les gens! ");
                console.log("C'est fini le jeu! Reprends tes cours! Merci :) ")
                choice = "paresseux"
                while (true) {
                    question = prompt("tu veux jouer : oui ou non?")
                    if (question === "non") {
                        console.log("alors bye bye");
                    } else if (question === "oui") {
                        choice = ""
                        break;
                    } else {
                        console.log(prompt("répondre oui ou non"))
                    }
                }
                break;
            } else if (question === "2") {
                console.log("Ma mère me dit toujours : 'rien mieux qu'un jour après l'autre'");
                console.log("C'est fini le jeu! Reprends tes cours! Merci :) ")
                choice = "demain"
                while (true) {
                    question = prompt("tu veux jouer : oui ou non?")
                    if (question === "non") {
                        console.log("alors bye bye");
                    } else if (question === "oui") {
                        choice = ""
                        break;
                    } else {
                        console.log(prompt("répondre oui ou non"))
                    }
                }
                break;
            } else {
                console.log("oupsss, mauvais choix! merci d'entrer 1 ou 2, ce n'est pas si compliqué en fin des comptes, n'est-ce pas, camarade ?");

            }

        }
    }

    if (choice === "sport") {
        while (true) {
            console.log("Tu captes qu'en vrai tu kiffes les tracteurs. Quoi faire?");
            console.log("1- Tu vas à Ri7 juste pour voir le défiler quotidien de tracteurs.");
            console.log("2- Tu arrêtes d'aller à Ri7, tu suis une formation conducteur de tracteur!");

            question = prompt("1 ou 2?")

            if (question === "1") {
                console.log("Un tracteur t'écrase. Dommage!");
                console.log("C'est fini le jeu! Reprends tes cours! Merci :) ")
                choice = "dommage"
                while (true) {
                    question = prompt("tu veux jouer : oui ou non?")
                    if (question === "non") {
                        console.log("alors bye bye");
                    } else if (question === "oui") {
                        choice = ""
                        break;
                    } else {
                        console.log(prompt("répondre oui ou non"))
                    }
                }
                break;
            } else if (question === "2") {
                console.log("Tu t'inscrits à l'amour est dans le près");
                console.log("C'est fini le jeu! Reprends tes cours! Merci :) ")
                choice = "emission"
                while (true) {
                    question = prompt("tu veux jouer : oui ou non?")
                    if (question === "non") {
                        console.log("alors bye bye");
                    } else if (question === "oui") {
                        choice = ""
                        break;
                    } else {
                        console.log(prompt("répondre oui ou non"))
                    }
                }
                break;
            } else {
                console.log("oupsss, mauvais choix! merci d'entrer 1 ou 2, ce n'est pas si compliqué en fin des comptes, n'est-ce pas, camarade ?");

            }

        }
    }

    if (choice === "julie") {
        while (true) {
            console.log("1- Tu n'as pas envoyé tous les docs nécessaires, tu leur dis que tu vas tout envoyer demain, même en sachant que c'est faux");
            console.log("2- Tu te rends compte que tu t'es trompé en repondant tes mails : tu leur as envoyé les photos de ton dernier voyage");

            question = prompt("1 ou 2?")

            if (question === "1") {
                console.log("ATTENTION: tu vas te faire virer de la formation");
                choice = "attention"
                break;
            } else if (question === "2") {
                console.log("Tu peux te terrer dans un trou de souris");
                choice = "souris"
                break;
            } else {
                console.log("oupsss, mauvais choix! merci d'entrer 1 ou 2, ce n'est pas si compliqué en fin des comptes, n'est-ce pas, camarade ?");
            }

        }
    }

    // coucou

    if (choice === "attention") {
        while (true) {
            console.log("Tu n'as pas envie de te faire virer de la formation. Tu fais quoi pour corriger cette situation?");
            console.log("1- Tu changes de sujet, commence a chanter pour ambiancer la secretaire.");
            console.log("2- Tu démarre un breakdance inatendu qui change la direction de votre conversation.");

            question = prompt("1 ou 2?")

            if (question === "1") {
                console.log("La sécretaire décide de chanter avec toi!");
                choice = "chanter"
                break;
            } else if (question === "2") {
                console.log("La sécretaire confie son grand rêve de faire du breakdance aux Olympiades!");
                choice = "breakdance"
                break;
            } else {
                console.log("oupsss, mauvais choix! merci d'entrer 1 ou 2, ce n'est pas si compliqué en fin des comptes, n'est-ce pas, camarade ?");

            }

        }

    }

    if (choice === "chanter") {
        while (true) {
            console.log("Tout le monde qui est à Ri7 décide de vous rejoindre et vous démarrez un grand musical. Qu'est-ce que va se passer ?");
            console.log("1- Après concertation, vous décidez de transformer l'école en un reality show de musique");
            console.log("2- Des zoumbies sortent du placard de la cuisine en suppliant que vous arrêtez de chanter");

            question = prompt("1 ou 2?")

            if (question === "1") {
                console.log("Bravo! Ton talent musical est incroyable! Continuez dans cette voie (ou 'voix' pour le jeu de mot!");
                console.log("C'est fini le jeu! Reprends tes cours! Merci :) ")
                choice = "musique"
                while (true) {
                    question = prompt("tu veux jouer : oui ou non?")
                    if (question === "non") {
                        console.log("alors bye bye");
                    } else if (question === "oui") {
                        choice = ""
                        break;
                    } else {
                        console.log(prompt("répondre oui ou non"))
                    }
                }
                break;
            } else if (question === "2") {
                console.log("Oulalaaa, tu crois vraiment aux zoumbies?");
                console.log("C'est fini le jeu! Reprends tes cours! Merci :) ")
                choice = "zoumbie"
                while (true) {
                    question = prompt("tu veux jouer : oui ou non?")
                    if (question === "non") {
                        console.log("alors bye bye");
                    } else if (question === "oui") {
                        choice = ""
                        break;
                    } else {
                        console.log(prompt("répondre oui ou non"))
                    }
                }
                break;
            } else {
                console.log("oupsss, mauvais choix! merci d'entrer 1 ou 2, ce n'est pas si compliqué en fin des comptes, n'est-ce pas, camarade ?");

            }

        }

    }

    if (choice === "breakdance") {
        while (true) {
            console.log("Vous vous rendez compte que plusieurs personnes de Ri7 ont ce même rêve. Quoi faire?");
            console.log("1- Le rendre réel");
            console.log("2- Tu proposes un atelier hebdomadaire de breakdance, inspiré du style australien olympique.");

            question = prompt("1 ou 2?")

            if (question === "1") {
                console.log("Bravo! Cours cours, Forest, derrière tes rêves!");
                console.log("C'est fini le jeu! Reprends tes cours! Merci :) ")
                choice = "forest"
                while (true) {
                    question = prompt("tu veux jouer : oui ou non?")
                    if (question === "non") {
                        console.log("alors bye bye");
                    } else if (question === "oui") {
                        choice = ""
                        break;
                    } else {
                        console.log(prompt("répondre oui ou non"))
                    }
                }
                break;
            } else if (question === "2") {
                console.log("Pour rendre plus rigolo ces ateliers, tu crée un badget `breakdanceur officiel Ri.`");
                console.log("C'est fini le jeu! Reprends tes cours! Merci :) ")
                choice = "badget"
                while (true) {
                    question = prompt("tu veux jouer : oui ou non?")
                    if (question === "non") {
                        console.log("alors bye bye");
                    } else if (question === "oui") {
                        choice = ""
                        break;
                    } else {
                        console.log(prompt("répondre oui ou non"))
                    }
                }
                break;
            } else {
                console.log("oupsss, mauvais choix! merci d'entrer 1 ou 2, ce n'est pas si compliqué en fin des comptes, n'est-ce pas, camarade ?");

            }
        }
    }
    if (choice === "souris") {
        while (true) {
            console.log("Tu as pris la phrase litéralement, fallait pas! Quoi faire?");
            console.log("1- Sortir du trou");
            console.log("2- Continuer terré, la honte persevere");

            question = prompt("1 ou 2?")

            if (question === "1") {
                console.log("Bravo, tu peux continuer ton aventure chez Ri7.");
                choice = "continue"
                break;
            } else if (question === "2") {
                console.log("Oulaaa, sors de là, camarade! Tu peux te détendre");
                choice = "sors"
                break;
            } else {
                console.log("oupsss, mauvais choix! merci d'entrer 1 ou 2, ce n'est pas si compliqué en fin des comptes, n'est-ce pas, camarade ?");

            }

        }

    }
    if (choice === "continue") {
        while (true) {
            console.log("Tu décides de blaguer sur les photos envoyées. Qu'est-ce qui va se passer?");
            console.log("1- Julie rigole et demande des nouvelles de ton voyage");
            console.log("2- Julie se trompe et envoie les photos avec tous de Ri7 en copie");

            question = prompt("1 ou 2?")

            if (question === "1") {
                console.log("Tu t'emballes et montre encore d'autres photos sur l'écran de la classe en mode power point")
                console.log("C'est fini le jeu! Reprends tes cours! Merci :) ");
                choice = "power-point"
                while (true) {
                    question = prompt("tu veux jouer : oui ou non?")
                    if (question === "non") {
                        console.log("alors bye bye");
                    } else if (question === "oui") {
                        choice = ""
                        break;
                    } else {
                        console.log(prompt("répondre oui ou non"))
                    }
                }
                break;
            } else if (question === "2") {
                console.log("Tu proposes un team building pour que chacun partege leurs photos de vacances")
                console.log("C'est fini le jeu! Reprends tes cours! Merci :) ");
                choice = "team-building"
                while (true) {
                    question = prompt("tu veux jouer : oui ou non?")
                    if (question === "non") {
                        console.log("alors bye bye");
                    } else if (question === "oui") {
                        choice = ""
                        break;
                    } else {
                        console.log(prompt("répondre oui ou non"))
                    }
                }
            } else {
                console.log("oupsss, mauvais choix! merci d'entrer 1 ou 2, ce n'est pas si compliqué en fin des comptes, n'est-ce pas, camarade ?");

            }
        }
    }
    if (choice === "sors") {
        while (true) {
            console.log("Tu sors, mais te rends compte qu'en dehors ce n'est plus comfortable que sous terre. Quoi faire?");
            console.log("1- Tu décides de te transformer en être sous-terrain");
            console.log("2- Tu deviens pote d'un verre de terre");

            question = prompt("1 ou 2?")

            if (question === "1") {
                console.log("Quelle idée! hahaha tu es drôle hein?");
                console.log("C'est fini le jeu! Reprends tes cours! Merci :) ");
                choice = "drole"
                while (true) {
                    question = prompt("tu veux jouer : oui ou non?")
                    if (question === "non") {
                        console.log("alors bye bye");
                    } else if (question === "oui") {
                        choice = ""
                        break;
                    } else {
                        console.log(prompt("répondre oui ou non"))
                    }
                }
                break;
                break;
            } else if (question === "2") {
                console.log("Miskine, fais toi des amis sur terre!");
                console.log("C'est fini le jeu! Reprends tes cours! Merci :) ");
                choice = "miskine"
                while (true) {
                    question = prompt("tu veux jouer : oui ou non?")
                    if (question === "non") {
                        console.log("alors bye bye");
                    } else if (question === "oui") {
                        choice = ""
                        break;
                    } else {
                        console.log(prompt("répondre oui ou non"))
                    }
                }
                break;
            } else {
                console.log("oupsss, mauvais choix! merci d'entrer 1 ou 2, ce n'est pas si compliqué en fin des comptes, n'est-ce pas, camarade ?");

            }
        }
    }
}