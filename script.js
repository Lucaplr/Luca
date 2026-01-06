console.log("hello world")
let nomEquipement = "Switch Cisco 2960";
let nombrePorts = 24;
let estActif = true;
let adresseIP = "192.168.1.254";
let debit = 1000.5;


console.log("Nom :" + nomEquipement)
console.log("NombrePorts :" + nombrePorts)
console.log("EstActif :" + estActif)
console.log("AdresseIP :" + adresseIP)
console.log("Debit :" + debit + " Mbps");

console.log("========== IF ELSE ==========")

let motDepasse = "Cyber2024!"
let longueur = motDepasse.length

console.log("mot de passe : " + motDepasse)
console.log("longueur : "+ longueur + " caractères")

if (longueur < 6) {
    console.log("Sécurité faible")
    console.log("Recommandation : utilisez au moins 6 caractères")
} else if (longueur < 10) {
    console.log("Sécurité moyenne")
    console.log("Recommandation : utilisez au moins 10 caractères")
} else {
    console.log("Sécurité forte")
}



let vitesse = 1000


if (vitesse === 0) {
    console.log("ERREUR : pas de connexion")
} else {
    if (vitesse < 10) {
    console.log("Connexion LENTE")
    console.log("Recommandation : Vérifiez les cables")
    } else if (vitesse < 100) {
    console.log("Connexion CORRECTE")
    console.log("Recommandation : Débit standard")
    } else if (vitesse < 1000) {
    console.log("Connexion RAPIDE")
    console.log("Recommandation : Bon débit")
    } else if (vitesse >= 1000) {
    console.log("Connexion TRES RAPIDE")
    console.log("Recommandation : Fibre optique")
    }
}


console.log("========== Boucle FOR ==========")

let decompte = 10

for (let i = 0; decompte > 0;  i++) {
    console.log("Décompte : ", decompte)
    decompte --
}

let ports = [20, 80, 443, 3306, 8080];
console.log(ports[2])

for (let i = 0; i < ports.length; i++) {
    console.log("Port :" + ports[i])
}

let TotalServeurs = 0


let serveurs = ["8.8.8.8", "1.1.1.1", "288.67.222.222", "192.168.1.1", "10.0.0.1"];
console.log(serveurs[2])

for (let i = 0; i < serveurs.length; i++) {
    console.log("Serveur :" + serveurs[1])
    console.log("Temps de réponse :" + i*15 + "ms")
    console.log(TotalServeurs ++)
}

console.log("Total :" + TotalServeurs)