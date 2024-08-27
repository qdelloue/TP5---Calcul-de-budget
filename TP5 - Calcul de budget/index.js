const loyerCharges = document.getElementById('loyer-charges');
const remboursementCredit = document.getElementById('remboursement-credit');
const eauElectriciteGaz = document.getElementById('eau-electricite-gaz');
const telephoneInternet = document.getElementById('telephone-internet');
const assuranceHabitation = document.getElementById('assurance-habitation');
const assuranceVehicules = document.getElementById('assurance-vehicules');
const mutuelleSante = document.getElementById('mutuelle-sante');
const fraisGarde = document.getElementById('frais-garde');
const impotsRevenu = document.getElementById('impots-revenu');
const impotsLocaux = document.getElementById('impots-locaux');
const courses = document.getElementById('courses');
const essenceFraisTransport = document.getElementById('essence-frais-transport');
const activitesSportivesCulturelles = document.getElementById('activites-sportives-culturelles');
const sorties = document.getElementById('sorties');
const salaire = document.getElementById('salaire');
const aides = document.getElementById('aides');
const rentes = document.getElementById('rentes');
const autres = document.getElementById('autres');
const epargne = document.getElementById('epargne');
const submit = document.getElementById('submit');
const reset = document.getElementById('reset');
const resultat = document.getElementById('resultat');

const debug = 1;

submit.addEventListener('click', () => {
    const loyerChargesInput = parseFloat(loyerCharges.value) || 0;
    const remboursementCreditInput = parseFloat(remboursementCredit.value) || 0;
    const eauElectriciteGazInput = parseFloat(eauElectriciteGaz.value) || 0;
    const telephoneInternetInput = parseFloat(telephoneInternet.value) || 0;
    const assuranceHabitationInput = parseFloat(assuranceHabitation.value) || 0;
    const assuranceVehiculesInput = parseFloat(assuranceVehicules.value) || 0;
    const mutuelleSanteInput = parseFloat(mutuelleSante.value) || 0;
    const fraisGardeInput = parseFloat(fraisGarde.value) || 0;
    const impotsRevenuInput = parseFloat(impotsRevenu.value) || 0;
    const impotsLocauxInput = parseFloat(impotsLocaux.value) || 0;
    const coursesInput = parseFloat(courses.value) || 0;
    const essenceFraisTransportInput = parseFloat(essenceFraisTransport.value) || 0;
    const activitesSportivesCulturellesInput = parseFloat(activitesSportivesCulturelles.value) || 0;
    const sortiesInput = parseFloat(sorties.value) || 0;
    const aidesInput = parseFloat(aides.value) || 0;
    const salaireInput = parseFloat(salaire.value) || 0;
    const rentesInput = parseFloat(rentes.value) || 0;
    const autresInput = parseFloat(autres.value) || 0;
    const epargneInput = parseFloat(epargne.value) || 0;
    
    const depenseTotal = loyerChargesInput + remboursementCreditInput + eauElectriciteGazInput + telephoneInternetInput + assuranceHabitationInput + assuranceVehiculesInput + mutuelleSanteInput + fraisGardeInput + impotsRevenuInput + impotsLocauxInput + coursesInput + essenceFraisTransportInput + activitesSportivesCulturellesInput + sortiesInput;

    const recetteTotal = salaireInput + aidesInput + rentesInput + autresInput;

    const epargneTotal = epargneInput;

    const total = recetteTotal - depenseTotal - epargneTotal;

    if (debug) {
        console.log("d"+depenseTotal);
        console.log("r"+recetteTotal);
        console.log("e"+epargneTotal);
    };

    const p = document.createElement("p");
    resultat.appendChild(p);
    p.innerHTML = recetteTotal - depenseTotal - epargneTotal;

    let resultatPositif = document.createElement("p");
    resultat.appendChild(resultatPositif);

    let economie = document.createElement("p");
    resultat.appendChild(economie);

    let resultatNul = document.createElement("p");
    resultat.appendChild(resultatNul);

    let resultatNegatif = document.createElement("p");
    resultat.appendChild(resultatNegatif);


    if (total > 0) {
        resultatPositif.innerHTML = "Budget positif !";

        if (total >= 500) {
            economie.innerHTML = "Vous pouvez mettre de l'argent dans votre budget vacance !";
        }
    }
    else if (total === 0 ) {
        resultatNul.innerHTML = "Budget nul !";
    }
    else {
        resultatNegatif.innerHTML = "Budget négatif !";
    };

    submit.style.display = "none";
    reset.style.display = "block";

    reset.addEventListener('click', () => {
        p.innerHTML = "";
        resultatPositif.innerHTML = "";
        resultatNegatif.innerHTML = "";
        resultatNul.innerHTML = "";
    
        submit.style.display = "block";
        reset.style.display = "none";
    });
});
