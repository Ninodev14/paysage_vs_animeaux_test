let infoWithTotal = 6;
let infoWithActualle = 1;
let typeKind = 0;
let pointPerso = 0;
let pointsCounted = false;
let checkLost = 0;
let reloadCheck = 0;
let witchReponce = 0;
let req = new XMLHttpRequest();
let lol = false;
let bodyNone = document.getElementById('body-none');

req.open("GET", "https://api.jsonbin.io/v3/b/65ba11021f5677401f28c1a7/latest", true);
req.setRequestHeader("X-Master-Key", "$2a$10$t0TB.mYwq16iqROanh0X7OBAWGrdVeyeXa3Xd92lZNir2NRkwtOi.");
req.send();

function addPoint(teamName, points) {
    req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            const jsonData = JSON.parse(req.responseText);
            const team = jsonData.record.teams.find(t => t.teamName === teamName);

            if (team) {
                team.points += points;

                // Update data on JSONBin
                req.open("PUT", "https://api.jsonbin.io/v3/b/65ba11021f5677401f28c1a7", true);
                req.setRequestHeader("Content-Type", "application/json");
                req.setRequestHeader("X-Master-Key", "$2a$10$t0TB.mYwq16iqROanh0X7OBAWGrdVeyeXa3Xd92lZNir2NRkwtOi.");

                if (lol == false) {
                    req.send(JSON.stringify(jsonData.record));
                    console.log('POINTS!');
                    lol = true;
                }

            }
        }
    };

    req.open("GET", "https://api.jsonbin.io/v3/b/65ba11021f5677401f28c1a7/latest", true);
    req.setRequestHeader("X-Master-Key", "$2a$10$t0TB.mYwq16iqROanh0X7OBAWGrdVeyeXa3Xd92lZNir2NRkwtOi.");
    req.send();

    lol = false;
}
window.onbeforeunload = function (event) {
    if (reloadCheck == 0) {
        return "Êtes-vous sûr de vouloir quitter cette page ? Vos données non sauvegardées seront perdues.";
    }
};

function IniA() {
    typeKind = 1;
    document.getElementById("img2").style.height = "100px";
    document.getElementById("img1").style.height = "150px";
    document.getElementById("img2").style.filter = "grayscale(100%)";
    document.getElementById("img1").style.filter = "grayscale(0%)";
    document.getElementById("name-kind").innerText = "Animaux";
    document.getElementById("name-kind").style.display = "flex";
    document.getElementById("paragraphe-center").style.marginLeft = "10%"
    document.getElementById("paragraphe-center").style.marginRight = "10%"
    document.getElementById("paragraphe-center").style.textAlign = "center";
    document.getElementById("button-next").style.backgroundColor = "#CD844E";
    document.getElementById("paragraphe-center").style.marginTop = "30px";
    document.getElementById("question").innerText = "L’équipe";
    document.getElementById("paragraphe-center").innerText = "Les animaux sont souvent associés à la loyauté, à la force et au charisme. Ils sont reconnus pour leur générosité et leur enthousiasme.";
    bodyNone.classList.add('body-animal');
    bodyNone.classList.remove('body-paysage');
    document.getElementById("button-next").style.display = "flex";
}

function IniP() {
    typeKind = 2;
    document.getElementById("img1").style.height = "100px";
    document.getElementById("img2").style.height = "150px";
    document.getElementById("img2").style.filter = "grayscale(0%)";
    document.getElementById("img1").style.filter = "grayscale(100%)";
    document.getElementById("name-kind").innerText = "Paysage";
    document.getElementById("name-kind").style.display = "flex";
    document.getElementById("paragraphe-center").style.marginLeft = "5%"
    document.getElementById("paragraphe-center").style.marginRight = "5%"
    document.getElementById("paragraphe-center").style.textAlign = "center";
    document.getElementById("button-next").style.backgroundColor = "#AFCF94";
    document.getElementById("paragraphe-center").style.marginTop = "30px";
    document.getElementById("question").innerText = "L’équipe";
    document.getElementById("paragraphe-center").innerText = "Les paysages possèdent une détermination et une résilience silencieuse, comme le calme avant une tempête. Ils sont reconnus pour leur empathie et leur créativité.";
    bodyNone.classList.add('body-paysage');
    bodyNone.classList.remove('body-animal');
    document.getElementById("button-next").style.display = "flex";
}


function validationKind() {
    if (typeKind == 1) {
        document.getElementById("img1").style.filter = "grayscale(0%)";
        document.getElementById("img2").style.filter = "grayscale(0%)";
        document.getElementById("question").innerText = "Bienvenue chez les animaux";
        document.getElementById("paragraphe-center").innerText = "Pour défendre notre équipe dans ce combat acharné, tu vas être confronté à une série de mini-jeux et de questions. En ce qui concerne les questions, toutes les réponses peuvent te sembler correctes, mais ne te trompe pas, tu fais partie de l'équipe animaux. Pour les mini-jeux, essaie d’obtenir rapidement le maximum de points.";
        document.getElementById("img1").style.height = "150px";
        document.getElementById("img1").setAttribute("onclick", "");
        document.getElementById("paragraphe-center").style.display = "flex";
        document.getElementById("button-next").setAttribute("onclick", "step1()");
        document.getElementById("img1").setAttribute("onclick", "");
        document.getElementById("btn1").style.borderColor = "#CD844E";
        document.getElementById("btn2").style.borderColor = "#CD844E";
        document.getElementById("btn3").style.borderColor = "#CD844E";
        document.getElementById("container-score").style.backgroundColor = "#F4D9BD";
        document.getElementById("container-score").style.borderColor = "#CD844E";
        document.getElementById("container-bottom-info").style.backgroundColor = "#CD844E";
        document.getElementById("barre-info-contenue").style.backgroundColor = "#493C36";
        document.getElementById("name-kind").style.display = "none";
        document.getElementById("img2").style.display = "none";
        document.getElementById("img1").style.marginTop = "20px";
        document.getElementById("img2").style.marginTop = "20px";
    }
    else if (typeKind == 2) {
        document.getElementById("img1").style.filter = "grayscale(0%)";
        document.getElementById("img2").style.filter = "grayscale(0%)";
        document.getElementById("question").innerText = "Bienvenue chez les paysages";
        document.getElementById("paragraphe-center").innerText = "Pour défendre notre équipe dans ce combat acharné, tu vas être confronté à une série de mini-jeux et de questions. En ce qui concerne les questions, toutes les réponses peuvent te sembler correctes, mais ne te trompe pas, tu fais partie de l'équipe Paysage. Pour les mini-jeux, essaie d’obtenir rapidement le maximum de points.";

        document.getElementById("img2").style.height = "150px";
        document.getElementById("img2").setAttribute("onclick", "");
        document.getElementById("paragraphe-center").style.display = "flex";
        document.getElementById("button-next").setAttribute("onclick", "step1()");
        document.getElementById("img1").setAttribute("onclick", "");
        document.getElementById("btn1").style.borderColor = "#AFCF94";
        document.getElementById("btn2").style.borderColor = "#AFCF94";
        document.getElementById("btn3").style.borderColor = "#AFCF94";
        document.getElementById("container-score").style.backgroundColor = "#E1F5ED";
        document.getElementById("container-score").style.borderColor = "#AFCF94";
        document.getElementById("container-bottom-info").style.backgroundColor = "#AFCF94";
        document.getElementById("barre-info-contenue").style.backgroundColor = "#225945";
        document.getElementById("name-kind").style.display = "none";
        document.getElementById("img1").style.display = "none";
        document.getElementById("img1").style.marginTop = "20px";
        document.getElementById("img2").style.marginTop = "20px";
    }
}

function step1() {
    document.getElementById("img1").setAttribute("onclick", "");
    document.getElementById("img1").style.width = "80%";
    document.getElementById("img1").style.height = "auto";
    document.getElementById("img1").style.display = "flex";
    document.getElementById("img1").src = "source/image/tableau_musee/Chevaux.jpg";
    document.getElementById("question").innerText = "Déplacez-vous jusqu'à cette œuvre.";
    document.getElementById("paragraphe-center").classList.remove('p1'); 
    document.getElementById("paragraphe-center").classList.add('p2');
    document.getElementById("paragraphe-center").innerText = "La Foulaison du blé en Camargue\nRosa Bonheur";
    document.getElementById("paragraphe-center").style.marginTop = "-20px"
    document.getElementById("paragraphe-center").style.textAlign = "end"
    document.getElementById("button-next").setAttribute("onclick", "BeginQuestion()");
    document.getElementById("button-next").innerText = "JE SUIS DEVANT !";
    document.getElementById("button-lost").style.display = "flex";
    document.getElementById("container-img").style.position = "relative"
    document.getElementById("container-img").style.height = "fit-content"
    document.getElementById("plans").src = "source/image/plans/Plan_BleCamargue.svg";
    document.getElementById("paragraphe-center").style.marginLeft = "0%"
    document.getElementById("paragraphe-center").style.marginRight = "0%"
    document.getElementById("paragraphe-center").style.width = "80%"
    document.getElementById("paragraphe-center").style.justifyContent = "flex-end"
    document.getElementById("img2").style.display = "none";
    document.getElementById("score-validation").style.display = "none";

}


function BeginQuestion() {

    document.getElementById("button-next").setAttribute("onclick", "reponceQ2()");
    document.getElementById("button-next").innerHTML = "JE VALIDE";
    document.getElementById("container-bottom-info").style.display = "flex";
    document.getElementById("container-button").style.display = "flex";
    document.getElementById("question-ask").style.display = "block";
    document.getElementById("question-ask").innerText = "Ces chevaux…";
    checkLost = 1;
    document.getElementById("img1").setAttribute("onclick", "zoomImgIn()");
    document.getElementById("img1").style.width = "50%";
    document.getElementById("img1").style.height = "auto";
    iAmLost()
    document.getElementById("button-lost").style.display = "none";
    document.getElementById("paragraphe-center").style.display = "none";
    document.getElementById("question").style.display = "none";
    document.getElementById("button-next").style.display = "none";
}

function updateQuestionAndButtons(questionText, btn1Text, btn1OnClick, btn2Text, btn2OnClick, btn3Text, btn3OnClick) {
    document.getElementById("question-ask").innerText = questionText;
    document.getElementById("btn1").innerText = btn1Text;
    document.getElementById("btn1").setAttribute("onclick", btn1OnClick);
    document.getElementById("btn2").innerText = btn2Text;
    document.getElementById("btn2").setAttribute("onclick", btn2OnClick);
    document.getElementById("btn3").innerText = btn3Text;
    document.getElementById("btn3").setAttribute("onclick", btn3OnClick);
    document.getElementById("question-ask").style.display = "block";
}



function Q2R1() {
    witchReponce = 1;
    if (typeKind == 1) {
        document.getElementById("btn1").style.backgroundColor = "#CD844E";
    } else if (typeKind == 2) {
        document.getElementById("btn1").style.backgroundColor = "#AFCF94";
    }
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
}

function Q2R2() {
    witchReponce = 2;
    if (typeKind == 1) {
        document.getElementById("btn2").style.backgroundColor = "#CD844E";
    } else if (typeKind == 2) {
        document.getElementById("btn2").style.backgroundColor = "#AFCF94";
    }
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
}
function Q2R3() {
    witchReponce = 3;
    if (typeKind == 1) {
        document.getElementById("btn3").style.backgroundColor = "#CD844E";
    } else if (typeKind == 2) {
        document.getElementById("btn3").style.backgroundColor = "#AFCF94";
    }
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";

}


function reponceQ2() {
    if (witchReponce == 1) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 50;
            document.getElementById("reponce-h1").innerText = "Bravo";
            document.getElementById("paragraphe-reponce").innerText = "Bravo, tu as compris. Continue sur cette lancée.";
            document.getElementById("container-score-h3").innerText = "+50";
            witchReponce = 0;
        } else {
            pointPerso = pointPerso + 25;
            document.getElementById("reponce-h1").innerText = "Super";
            document.getElementById("paragraphe-reponce").innerText = "Malheureusement, cette réponse est destinée à l’équipe des animaux. Rappelle-toi, nous devons tout faire pour les battre.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+25";
        }
    }
    else if (witchReponce == 2) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 25;
            document.getElementById("reponce-h1").innerText = "Super";
            document.getElementById("paragraphe-reponce").innerText = "Malheureusement, cette réponse est destinée à l’équipe des paysages. Rappelle-toi, nous devons tout faire pour les battre.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+25";
        } else {
            pointPerso = pointPerso + 50;
            document.getElementById("reponce-h1").innerText = "Bravo";
            document.getElementById("paragraphe-reponce").innerText = "Bravo, tu as compris. Continue sur cette lancée.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+50";
        }
    } else if (witchReponce == 3) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 5;
            document.getElementById("reponce-h1").innerText = "bien joué...";
            document.getElementById("paragraphe-reponce").innerText = "Cette réponse n'avait rien à voir avec notre combat contre l'équipe paysage, mais au moins nous avons pu récolter quelques points.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+5";
        } else {
            pointPerso = pointPerso + 5;
            document.getElementById("reponce-h1").innerText = "bien joué...";
            document.getElementById("paragraphe-reponce").innerText = "Cette réponse n'avait rien à voir avec notre combat contre l'équipe animal, mais au moins nous avons pu récolter quelques points.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+5";
        }
    }
    document.getElementById("btn1").setAttribute("onclick", "");
    document.getElementById("btn2").setAttribute("onclick", "");
    document.getElementById("btn3").setAttribute("onclick", "");
    document.getElementById("reponce-button").setAttribute("onclick", "step2()");
    document.getElementById("score-validation").style.display = "flex";
}


function step2() {
    document.getElementById("question").style.display = "block";
    document.getElementById("img1").style.display = "flex";
    document.getElementById("img1").src = "source/image/tableau_musee/Mareebasse.jpg";
    document.getElementById("paragraphe-center").innerText = "Marée basse à Etaples \nEugène Boudin";
    document.getElementById("button-next").setAttribute("onclick", "next1()");
    document.getElementById("button-next").innerText = "JE SUIS DEVANT !";
    document.getElementById("button-lost").style.display = "flex";
    document.getElementById("paragraphe-center").style.display = "block";
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("img1").setAttribute("onclick", "");
    document.getElementById("img1").style.width = "80%";
    document.getElementById("img1").style.height = "auto";
    infoWithActualle++;
    document.getElementById("bottom-info").innerText = infoWithActualle + "/" + infoWithTotal;
    document.getElementById("barre-info-contenue").style.width = (100 * infoWithActualle / infoWithTotal) + "%";
    document.getElementById("plans").src = "source/image/plans/Plan_MarreBasseEtample.svg";
    document.getElementById("container-button").style.display = "none";
    document.getElementById("img2").style.width = "none";
    document.getElementById("question-ask").style.display = "none";
    document.getElementById("score-validation").style.display = "none";
}


function next1() {
    updateQuestionAndButtons(
        "Que font les personnages ?",
        "Ils sont perdus.",
        "Q3R1()",
        "Ils essaient d'attraper des coquillages.",
        "Q3R2()",
        "Ils admirent le reflet du ciel sur la mer.",
        "Q3R3()"
    );
    document.getElementById("container-button").style.display = "flex";
    document.getElementById("button-next").setAttribute("onclick", "reponceQ3()");
    document.getElementById("button-next").innerHTML = "JE VALIDE";
    checkLost = 1;
    document.getElementById("img1").setAttribute("onclick", "zoomImgIn()");
    document.getElementById("img1").style.width = "50%";
    document.getElementById("img1").style.height = "auto";
    iAmLost()
    document.getElementById("button-lost").style.display = "none";
    document.getElementById("question").style.display = "none";
    document.getElementById("paragraphe-center").style.display = "none";
    document.getElementById("button-next").style.display = "none";
}


function Q3R1() {
    witchReponce = 1;
    if (typeKind == 1) {
        document.getElementById("btn1").style.backgroundColor = "#CD844E";
    } else if (typeKind == 2) {
        document.getElementById("btn1").style.backgroundColor = "#AFCF94";
    }
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
}

function Q3R2() {
    witchReponce = 2;
    if (typeKind == 1) {
        document.getElementById("btn2").style.backgroundColor = "#CD844E";
    } else if (typeKind == 2) {
        document.getElementById("btn2").style.backgroundColor = "#AFCF94";
    }
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
}
function Q3R3() {
    witchReponce = 3;
    if (typeKind == 1) {
        document.getElementById("btn3").style.backgroundColor = "#CD844E";
    } else if (typeKind == 2) {
        document.getElementById("btn3").style.backgroundColor = "#AFCF94";
    }
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
}


function reponceQ3() {
    if (witchReponce == 1) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 5;
            document.getElementById("reponce-h1").innerText = "bien joué...";
            document.getElementById("paragraphe-reponce").innerText = "Certes, mais les coquillages sont des animaux.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+5";
        } else {
            pointPerso = pointPerso + 5;
            document.getElementById("reponce-h1").innerText = "bien joué...";
            document.getElementById("paragraphe-reponce").innerText = "Certes, mais ce ciel et son reflet étaient quand même éblouissants.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+5";
        }
    }
    else if (witchReponce == 2) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 50;
            document.getElementById("reponce-h1").innerText = "Bravo";
            document.getElementById("paragraphe-reponce").innerText = "Eh oui, les coquillages sont bien des animaux.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+50";
        } else {
            pointPerso = pointPerso + 25;
            document.getElementById("reponce-h1").innerText = "Super";
            document.getElementById("paragraphe-reponce").innerText = "Ah zut, les coquillages sont des animaux. Ce ciel, quant à lui, était quand même magnifique.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+25";
        }
    } else if (witchReponce == 3) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 25;
            document.getElementById("reponce-h1").innerText = "Super";
            document.getElementById("paragraphe-reponce").innerText = "Ah zut, les coquillages sont des animaux.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+25";
        } else {
            pointPerso = pointPerso + 50;
            document.getElementById("reponce-h1").innerText = "Bravo";
            document.getElementById("paragraphe-reponce").innerText = "Ah on est bien d’accord, quel paysage magnifique !";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+50";
        }
    }
    document.getElementById("btn1").setAttribute("onclick", "");
    document.getElementById("btn2").setAttribute("onclick", "");
    document.getElementById("btn3").setAttribute("onclick", "");
    document.getElementById("reponce-button").setAttribute("onclick", "step3()");
    document.getElementById("score-validation").style.display = "flex";
}

function step3() {
    document.getElementById("question").style.display = "block";
    document.getElementById("img1").setAttribute("onclick", "");
    document.getElementById("img1").style.width = "80%";
    document.getElementById("img1").style.height = "auto";
    document.getElementById("img1").style.display = "flex";
    document.getElementById("img1").src = "source/image/tableau_musee/Autonme.jpg";
    document.getElementById("paragraphe-center").innerText = "Rayon d’Automne \nSouvenir du parc de Cognac \nLouis Augustin Auguin";
    document.getElementById("button-next").setAttribute("onclick", "next2()");
    document.getElementById("button-next").innerText = "JE SUIS DEVANT !";
    document.getElementById("button-lost").style.display = "flex";
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("paragraphe-center").style.display = "block";
    infoWithActualle++;
    document.getElementById("bottom-info").innerText = infoWithActualle + "/" + infoWithTotal;
    document.getElementById("barre-info-contenue").style.width = (100 * infoWithActualle / infoWithTotal) + "%";
    document.getElementById("plans").src = "source/image/plans/Plan_RayonAutomne.svg";
    document.getElementById("question-ask").style.display = "none";
    document.getElementById("container-button").style.display = "none";
    document.getElementById("img2").style.width = "none";
    document.getElementById("score-validation").style.display = "none";
}

function next2() {
    updateQuestionAndButtons(
        "Cette forêt est :",
        "Accueillante (On se fait une sieste ?).",
        "Q4R1()",
        "Originale (Je reconnais, c’est la forêt interdite !).",
        "Q4R2()",
        "Stressante (Mais au moins elle repousse les dangers ?).",
        "Q4R3()"
    );
    document.getElementById("container-button").style.display = "flex";
    checkLost = 1;
    iAmLost()
    document.getElementById("button-next").setAttribute("onclick", "reponceQ4()");
    document.getElementById("button-next").innerHTML = "JE VALIDE";
    document.getElementById("img1").setAttribute("onclick", "zoomImgIn()");
    document.getElementById("img1").style.width = "50%";
    document.getElementById("img1").style.height = "auto";
    document.getElementById("question").style.display = "none";
    document.getElementById("paragraphe-center").style.display = "none";
    document.getElementById("button-next").style.display = "none";
    document.getElementById("button-lost").style.display = "none";
}

function Q4R1() {
    witchReponce = 1;
    if (typeKind == 1) {
        document.getElementById("btn1").style.backgroundColor = "#CD844E";
    } else if (typeKind == 2) {
        document.getElementById("btn1").style.backgroundColor = "#AFCF94";
    }
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
}

function Q4R2() {
    witchReponce = 2;
    if (typeKind == 1) {
        document.getElementById("btn2").style.backgroundColor = "#CD844E";
    } else if (typeKind == 2) {
        document.getElementById("btn2").style.backgroundColor = "#AFCF94";
    }
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
}
function Q4R3() {
    witchReponce = 3;
    if (typeKind == 1) {
        document.getElementById("btn3").style.backgroundColor = "#CD844E";
    } else if (typeKind == 2) {
        document.getElementById("btn3").style.backgroundColor = "#AFCF94";
    }
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
}


function reponceQ4() {
    if (witchReponce == 1) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 25;
            document.getElementById("reponce-h1").innerText = "Super";
            document.getElementById("paragraphe-reponce").innerText = "Ce paysage est tout de même un peu effrayant, non.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+25";
        } else {
            pointPerso = pointPerso + 50;
            document.getElementById("reponce-h1").innerText = "Bravo";
            document.getElementById("paragraphe-reponce").innerText = "Eh oui, quel paysage splendide pour une petite promenade.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+50";
        }
    }
    else if (witchReponce == 2) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 5;
            document.getElementById("reponce-h1").innerText = "bien joué...";
            document.getElementById("paragraphe-reponce").innerText = "Un peu trop flou, non ?";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+5";
        } else {
            pointPerso = pointPerso + 5;
            document.getElementById("reponce-h1").innerText = "bien joué...";
            document.getElementById("paragraphe-reponce").innerText = "Un peu trop flou, non ?";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+5";
        }
    } else if (witchReponce == 3) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 50;
            document.getElementById("reponce-h1").innerText = "Bravo";
            document.getElementById("paragraphe-reponce").innerText = "Elle fait un peu peur, non ? Mais au moins elle accueille les animaux.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+50";
        } else {
            pointPerso = pointPerso + 25;
            document.getElementById("reponce-h1").innerText = "Super";
            document.getElementById("paragraphe-reponce").innerText = "Dans la team paysage, on essaie de voir tous les paysages sous un aspect positif.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+25";
        }
    }
    document.getElementById("btn1").setAttribute("onclick", "");
    document.getElementById("btn2").setAttribute("onclick", "");
    document.getElementById("btn3").setAttribute("onclick", "");
    document.getElementById("reponce-button").setAttribute("onclick", "step4()");
    document.getElementById("score-validation").style.display = "flex";
}

function step4() {
    document.getElementById("question").style.display = "block";
    document.getElementById("img1").setAttribute("onclick", "");
    document.getElementById("img1").style.width = "80%";
    document.getElementById("img1").style.height = "auto";
    document.getElementById("img1").style.display = "flex";
    document.getElementById("img1").src = "source/image/tableau_musee/Baindiane.jpg";
    document.getElementById("paragraphe-center").innerText = "Le Bain de Diane \nCamille Corot";
    document.getElementById("button-next").setAttribute("onclick", "next3()");
    document.getElementById("button-next").innerText = "JE SUIS DEVANT !";
    document.getElementById("button-lost").style.display = "flex";
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("paragraphe-center").style.display = "block";
    infoWithActualle++;
    document.getElementById("bottom-info").innerText = infoWithActualle + "/" + infoWithTotal;
    document.getElementById("barre-info-contenue").style.width = (100 * infoWithActualle / infoWithTotal) + "%";
    document.getElementById("plans").src = "source/image/plans/Plan_BainDiane.svg";
    document.getElementById("question-ask").style.display = "none";
    document.getElementById("score-validation").style.display = "none";
    document.getElementById("img2").style.width = "none";
    document.getElementById("container-button").style.display = "none";
}
function next3() {
    updateQuestionAndButtons(
        "Le plus important dans ce tableau c’est…",
        "Le mythe étrange qui l’inspire (Pourquoi est-ce toujours des histoires tordues ?).",
        "Q5R1()",
        "La totalité du tableau qui anime l'espace.",
        "Q5R2()",
        "Les (tout tout tout petits) détails qui apportent de la consistance à l’œuvre.",
        "Q5R3()"
    );

    document.getElementById("container-button").style.display = "flex";
    checkLost = 1;
    document.getElementById("button-next").setAttribute("onclick", "reponceQ5()");
    document.getElementById("button-next").innerHTML = "JE VALIDE";
    document.getElementById("img1").setAttribute("onclick", "zoomImgIn()");
    document.getElementById("img1").style.width = "50%";
    document.getElementById("img1").style.height = "auto";
    iAmLost()
    document.getElementById("button-lost").style.display = "none";
    document.getElementById("question").style.display = "none";
    document.getElementById("paragraphe-center").style.display = "none";
    document.getElementById("button-next").style.display = "none";
}


function Q5R1() {
    witchReponce = 1;
    if (typeKind == 1) {
        document.getElementById("btn1").style.backgroundColor = "#CD844E";
    } else if (typeKind == 2) {
        document.getElementById("btn1").style.backgroundColor = "#AFCF94";
    }
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
}

function Q5R2() {
    witchReponce = 2;
    if (typeKind == 1) {
        document.getElementById("btn2").style.backgroundColor = "#CD844E";
    } else if (typeKind == 2) {
        document.getElementById("btn2").style.backgroundColor = "#AFCF94";
    }
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
}
function Q5R3() {
    witchReponce = 3;
    if (typeKind == 1) {
        document.getElementById("btn3").style.backgroundColor = "#CD844E";
    } else if (typeKind == 2) {
        document.getElementById("btn3").style.backgroundColor = "#AFCF94";
    }
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
}


function reponceQ5() {
    if (witchReponce == 1) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 5;
            document.getElementById("reponce-h1").innerText = "bien joué...";
            document.getElementById("paragraphe-reponce").innerText = "Il y a un vrai mythe, mais ici, ce n’est pas le sujet le plus important pour ton équipe !";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+5";
        } else {
            pointPerso = pointPerso + 5;
            document.getElementById("reponce-h1").innerText = "bien joué...";
            document.getElementById("paragraphe-reponce").innerText = "Il y a un vrai mythe, mais ici, ce n’est pas le sujet le plus important pour ton équipe !";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+5";
        }
    }
    else if (witchReponce == 2) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 25;
            document.getElementById("reponce-h1").innerText = "Super";
            document.getElementById("paragraphe-reponce").innerText = "Aïe, cette réponse était pour l’équipe paysage car l’ensemble représente majoritairement un paysage.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+25";
        } else {
            pointPerso = pointPerso + 50;
            document.getElementById("reponce-h1").innerText = "Bravo";
            document.getElementById("paragraphe-reponce").innerText = "Yeah, tu as su choisir la bonne réponse !";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+50";
        }
    } else if (witchReponce == 3) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 50;
            document.getElementById("reponce-h1").innerText = "Bravo";
            document.getElementById("paragraphe-reponce").innerText = "Tu as l'œil, tu as su voir les lévriers sur la berge!";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+50";
        } else {
            pointPerso = pointPerso + 25;
            document.getElementById("reponce-h1").innerText = "Super";
            document.getElementById("paragraphe-reponce").innerText = "Aïe, cette réponse était pour l’équipe animal. En effet, si tu regardes bien, il y a des lévriers sur la berge !";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+25";
        }
    }
    document.getElementById("btn1").setAttribute("onclick", "");
    document.getElementById("btn2").setAttribute("onclick", "");
    document.getElementById("btn3").setAttribute("onclick", "");
    document.getElementById("reponce-button").setAttribute("onclick", "step5()");
    document.getElementById("score-validation").style.display = "flex";
}

function step5() {
    document.getElementById("question").style.display = "block";
    document.getElementById("img1").setAttribute("onclick", "");
    document.getElementById("img1").style.width = "80%";
    document.getElementById("img1").style.height = "auto";
    document.getElementById("img1").style.display = "flex";
    document.getElementById("img1").src = "source/image/tableau_musee/Chasse.jpg";
    document.getElementById("paragraphe-center").innerText = "La chasse de Méléagre ou la Mort du sanglier de Calydon \nJacques Raymond Brascassat";
    document.getElementById("button-next").setAttribute("onclick", "next4()");
    document.getElementById("button-next").innerText = "JE SUIS DEVANT !";
    document.getElementById("button-lost").style.display = "flex";
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("paragraphe-center").style.display = "block";
    infoWithActualle++;
    document.getElementById("bottom-info").innerText = infoWithActualle + "/" + infoWithTotal;
    document.getElementById("barre-info-contenue").style.width = (100 * infoWithActualle / infoWithTotal) + "%";
    document.getElementById("plans").src = "source/image/plans/Plan_ChasseMéléagre.svg";
    document.getElementById("question-ask").style.display = "none";
    document.getElementById("score-validation").style.display = "none";
    document.getElementById("img2").style.width = "none";
    document.getElementById("container-button").style.display = "none";

}
function next4() {
    updateQuestionAndButtons(
        "En regardant cette œuvre, tu ressens…",
        "Une profonde et intense tristesse (Quelle scène désolante !).",
        "Q6R1()",
        "Une indifférence totale (Ok.).",
        "Q6R2()",
        "Un sentiment de calme brisé (Crac).",
        "Q6R3()"
    );
    document.getElementById("container-button").style.display = "flex";
    checkLost = 1;

    document.getElementById("button-next").setAttribute("onclick", "reponceQ6()");
    document.getElementById("button-next").innerHTML = "JE VALIDE";
    document.getElementById("img1").setAttribute("onclick", "zoomImgIn()");
    document.getElementById("img1").style.width = "50%";
    document.getElementById("img1").style.height = "auto";
    iAmLost()
    document.getElementById("button-lost").style.display = "none";
    document.getElementById("question").style.display = "none";
    document.getElementById("paragraphe-center").style.display = "none";
    document.getElementById("button-next").style.display = "none";
}

function Q6R1() {
    witchReponce = 1;
    if (typeKind == 1) {
        document.getElementById("btn1").style.backgroundColor = "#CD844E";
    } else if (typeKind == 2) {
        document.getElementById("btn1").style.backgroundColor = "#AFCF94";
    }
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
}

function Q6R2() {
    witchReponce = 2;
    if (typeKind == 1) {
        document.getElementById("btn2").style.backgroundColor = "#CD844E";
    } else if (typeKind == 2) {
        document.getElementById("btn2").style.backgroundColor = "#AFCF94";
    }
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
}
function Q6R3() {
    witchReponce = 3;
    if (typeKind == 1) {
        document.getElementById("btn3").style.backgroundColor = "#CD844E";
    } else if (typeKind == 2) {
        document.getElementById("btn3").style.backgroundColor = "#AFCF94";
    }
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
}


function reponceQ6() {
    if (witchReponce == 1) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 50;
            document.getElementById("reponce-h1").innerText = "Bravo";
            document.getElementById("paragraphe-reponce").innerText = "Bravo, tu as bien répondu ! Dans le titre, tu peux retrouver 'mort du sanglier', quel triste événement !";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+50";
        } else {
            pointPerso = pointPerso + 25;
            document.getElementById("reponce-h1").innerText = "Super";
            document.getElementById("paragraphe-reponce").innerText = "Dommage ! Cette réponse était pour l’équipe animal car tu peux retrouver 'mort du sanglier' dans le titre de l'œuvre.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+25";
        }
    }
    else if (witchReponce == 2) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 5;
            document.getElementById("reponce-h1").innerText = "bien joué...";
            document.getElementById("paragraphe-reponce").innerText = "Ah... ok ?";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+5";
        } else {
            pointPerso = pointPerso + 5;
            document.getElementById("reponce-h1").innerText = "bien joué...";
            document.getElementById("paragraphe-reponce").innerText = "Ah... ok ?";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+5";
        }
    } else if (witchReponce == 3) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 25;
            document.getElementById("reponce-h1").innerText = "Super";
            document.getElementById("paragraphe-reponce").innerText = "Mince, cette réponse était pour l’équipe paysage. En effet, tu peux remarquer qu’un arbre est brisé à droite du centre.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+25";
        } else {
            pointPerso = pointPerso + 50;
            document.getElementById("reponce-h1").innerText = "Bravo";
            document.getElementById("paragraphe-reponce").innerText = "Félicitations, tu as remarqué l’arbre brisé ?";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+50";
        }
    }
    document.getElementById("btn1").setAttribute("onclick", "");
    document.getElementById("btn2").setAttribute("onclick", "");
    document.getElementById("btn3").setAttribute("onclick", "");
    document.getElementById("reponce-button").setAttribute("onclick", "step6()");
    document.getElementById("score-validation").style.display = "flex";
}

function step6() {
    document.getElementById("question").style.display = "block";
    document.getElementById("img1").setAttribute("onclick", "");
    document.getElementById("img1").style.width = "80%";
    document.getElementById("img1").style.height = "auto";
    document.getElementById("img1").style.display = "flex";
    document.getElementById("img1").src = "source/image/tableau_musee/vache.jpg";
    document.getElementById("paragraphe-center").innerText = "Marée basse à Etaples \nEugène Boudin";
    document.getElementById("button-next").setAttribute("onclick", "next5()");
    document.getElementById("button-next").innerText = "JE SUIS DEVANT !";
    document.getElementById("button-lost").style.display = "flex";
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("paragraphe-center").style.display = "block";
    infoWithActualle++;
    document.getElementById("bottom-info").innerText = infoWithActualle + "/" + infoWithTotal;
    document.getElementById("barre-info-contenue").style.width = (100 * infoWithActualle / infoWithTotal) + "%";
    document.getElementById("plans").src = "source/image/plans/Plan_MarreBasseEtample.svg";
    document.getElementById("question-ask").style.display = "none";
    document.getElementById("score-validation").style.display = "none";
    document.getElementById("img2").style.width = "none";
    document.getElementById("container-button").style.display = "none";
}
function next5() {
    updateQuestionAndButtons(
        "Je suis attiré par…",
        "Le reflet de la vache dans la flaque d'eau (Quel réalisme !).",
        "Q7R1()",
        "Les textures de la laine des moutons (Qui veut leur faire des câlins ?).",
        "Q7R2()",
        "Le soir qui approche et les ombres qui arrivent (Rentrez vite, les loups risquent de surgir !).",
        "Q7R3()"
    );
    document.getElementById("container-button").style.display = "flex";
    checkLost = 1;
    document.getElementById("button-next").setAttribute("onclick", "reponceQ7()");
    document.getElementById("button-next").innerHTML = "JE VALIDE";
    document.getElementById("img1").setAttribute("onclick", "zoomImgIn()");
    document.getElementById("img1").style.width = "50%";
    document.getElementById("img1").style.height = "auto";
    iAmLost()
    document.getElementById("button-lost").style.display = "none";
    document.getElementById("question").style.display = "none";
    document.getElementById("paragraphe-center").style.display = "none";
    document.getElementById("button-next").style.display = "none";
}
function Q7R1() {
    witchReponce = 1;
    if (typeKind == 1) {
        document.getElementById("btn1").style.backgroundColor = "#CD844E";
    } else if (typeKind == 2) {
        document.getElementById("btn1").style.backgroundColor = "#AFCF94";
    }
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
}

function Q7R2() {
    witchReponce = 2;
    if (typeKind == 1) {
        document.getElementById("btn2").style.backgroundColor = "#CD844E";
    } else if (typeKind == 2) {
        document.getElementById("btn2").style.backgroundColor = "#AFCF94";
    }
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
}
function Q7R3() {
    witchReponce = 3;
    if (typeKind == 1) {
        document.getElementById("btn3").style.backgroundColor = "#CD844E";
    } else if (typeKind == 2) {
        document.getElementById("btn3").style.backgroundColor = "#AFCF94";
    }
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("button-next").style.display = "flex";
}


function reponceQ7() {
    if (witchReponce == 1) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 25;
            document.getElementById("reponce-h1").innerText = "Super";
            document.getElementById("paragraphe-reponce").innerText = "Malheureusement, cette réponse était pour l’équipe paysage ! En effet, dans cette réponse, nous parlons du reflet d’une flaque.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+25";
        } else {
            pointPerso = pointPerso + 50;
            document.getElementById("reponce-h1").innerText = "Bravo";
            document.getElementById("paragraphe-reponce").innerText = "Bravo, tu as trouvé la bonne réponse ! Tu n’es pas tombé dans le piège du coucher de soleil !";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+50";
        }
    }
    else if (witchReponce == 2) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 50;
            document.getElementById("reponce-h1").innerText = "Bravo";
            document.getElementById("paragraphe-reponce").innerText = " Bravo, tu as trouvé la bonne réponse ! Tu n’es pas tombé dans le piège de la flaque d’eau !";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+50";
        } else {
            pointPerso = pointPerso + 25;
            document.getElementById("reponce-h1").innerText = "Super";
            document.getElementById("paragraphe-reponce").innerText = "Malheureusement, cette réponse était pour l’équipe animal ! Tu aurais dû te concentrer sur le reflet de la flaque d’eau…";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+25";
        }
    } else if (witchReponce == 3) {
        if (typeKind == 1) {
            pointPerso = pointPerso + 5;
            document.getElementById("reponce-h1").innerText = "bien joué...";
            document.getElementById("paragraphe-reponce").innerText = "Oups, cette réponse était neutre. Pourtant, la texture de la laine des moutons avait l’air bien, n'est-ce pas ?";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+5";
        } else {
            pointPerso = pointPerso + 5;
            document.getElementById("reponce-h1").innerText = "bien joué...";
            document.getElementById("paragraphe-reponce").innerText = "Oups, cette réponse était neutre. Pourtant, le reflet de la flaque d’eau est réussi.";
            witchReponce = 0;
            document.getElementById("container-score-h3").innerText = "+5";
        }
    }
    document.getElementById("btn1").setAttribute("onclick", "");
    document.getElementById("btn2").setAttribute("onclick", "");
    document.getElementById("btn3").setAttribute("onclick", "");
    document.getElementById("reponce-button").setAttribute("onclick", "next6()");
    document.getElementById("score-validation").style.display = "flex";
}

function next6() {
    if (typeKind == 1) {
        document.getElementById("img1").src = "source/image/badge-animaux.svg";
    } else if (typeKind == 2) {
        document.getElementById("img1").src = "source/image/badge-paysage.svg";
    }
    if (pointsCounted == false) {
        if (typeKind = 1) {
            addPoint('Team A', pointPerso);
        } else {
            addPoint('Team B', pointPerso)
        }
        checkCompletion();
    }
    document.getElementById("img1").setAttribute("onclick", "");
    document.getElementById("img1").style.height = "150px";
    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn3").style.backgroundColor = "white";
    document.getElementById("question-ask").style.display = "none";
    document.getElementById("score-validation").style.display = "none";
    document.getElementById("paragraphe-center").style.display = "none";
}

function checkCompletion() {
    if (infoWithActualle = infoWithTotal) {
        reloadCheck = 1;
        document.getElementById("question").style.display = "block";
        document.getElementById("question").innerText = "Félicitations !";
        document.getElementById("bottom-info").innerText = infoWithTotal + "/" + infoWithTotal;
        document.getElementById("barre-info-contenue").style.width = "100%";
        document.getElementById("scorF").style.display = "flex";
        document.getElementById("paragraphe-resultat1").style.display = "block";
        document.getElementById("paragraphe-resultat1").innerHTML = "Grâce à toi, ton équipe Animaux a remporté " + pointPerso + " pts"
        document.getElementById("paragraphe-resultat2").style.display = "block";
        document.getElementById("paragraphe-resultat2").innerHTML = "Viens récupérer ton badge !";
        document.getElementById("button-next").style.display = "none";
        document.getElementById("container-button").style.display = "none";
    }
}

function iAmLost() {
    if (checkLost == 0) {
        document.getElementById("container-plans").style.display = "flex";
        checkLost = 1;
    } else {
        checkLost = 0;
        document.getElementById("container-plans").style.display = "none";
    }
}

function zoomImgIn() {
    document.getElementById("img1").style.width = "calc(100vw - 40px)";
    document.getElementById("img1").style.height = "auto";
    document.getElementById("fond-img-plans").style.display = "flex"
    document.getElementById("img1").setAttribute("onclick", "zoomImgOut()");
    document.getElementById("container-img").style.zIndex = "2000"
    document.getElementById("container-img").style.position = "absolute"
    document.getElementById("container-img").style.top = "50%"
    document.getElementById("container-img").style.left = "50%"
    document.getElementById("container-img").style.transform = "translate(-50%, -50%)";
    document.getElementById("img1").style.margin = "0px";

}
function zoomImgOut() {
    document.getElementById("img1").style.width = "50%";
    document.getElementById("img1").style.height = "auto";
    document.getElementById("img1").setAttribute("onclick", "zoomImgIn()");
    document.getElementById("container-img").style.zIndex = "1"
    document.getElementById("container-img").style.position = "relative"
    document.getElementById("container-img").style.top = "0"
    document.getElementById("container-img").style.left = "0"
    document.getElementById("container-img").style.transform = "translate(0%, 0%)";
    document.getElementById("img1").style.marginTop = "60px";
    document.getElementById("img1").style.marginBottom = "20px";
    document.getElementById("fond-img-plans").style.display = "none"
}