// Contenu des pages embarque directement dans le JS
// -> evite l'utilisation de fetch() qui est bloque par les navigateurs
// quand le site est ouvert en double-cliquant sur index.html (protocole file://)
const pages = {
    TP1: `
<div class="page-content">

    <h2>BONJOUR TOUT LE MONDE !</h2>
    <h3>Bienvenue en IG1 A !</h3>
    </p>Je suis étudiant en IG1A.
    Ceci est mon premier site web. En route pour devenir un meilleur dans le domaine.</p>

</div>
`,
    TP2: `
<div class="page-content">

    <h2>Texte : Le Corbeau et le renard</h2>
<img src="corb.png" width ="200" alt="Photo de tête"
style="
    width: 300px;
    float: right;
    magin-left: 20px;
    margin-bottom: 10px;
    border: 4px solid #1e88e5;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    ">
   <p>Maître Corbeau, sur un arbre perché,</p>
<p>Tenait en son bec un fromage.</p>
<p>Maître Renard, par l'odeur alléché,</p>
<p>Lui tint à peu près ce langage :</p>
<p>Et bonjour, Monsieur du Corbeau.</p>
<p>Que vous êtes joli ! que vous me semblez beau !</p>
<p>Sans mentir, si votre ramage</p>
<p>Se rapporte à votre plumage,</p>
<p>Vous êtes le Phénix des hôtes de ces bois.</p>
<p>À ces mots, le Corbeau ne se sent pas de joie</p>
<p>Et pour montrer sa belle voix,</p>
<p>Il ouvre un large bec, laisse tomber sa.</p>
<p>Le Renard s'en saisit, et dit : Mon bon Monsieur,</p>
<p>Apprenez que tout flatteur</p>
<p>Vit aux dépens de celui qui l'écoute.</p>
<p>Cette leçon vaut bien un fromage, sans doute.</p>
<p>Le Corbeau honteux et confus</p>
<p>Jura, mais un peu tard, qu'on ne l'y prendrait plus.</p>

</div>
`,
    TP3: `

    <style>
        .header-logos{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
}
.logo{
    width: 80px;
    height: auto;
    border: none; /* pour ne pas hériter du border de la règle img générale */
    cursor: pointer;
}
/*Fond de la page*/
body{
    blacbackground-color: lightblue;
    text-align: center;/*position du centre*/
    padding:20px;
    margin:20px;}

/*style de l'image*/
img{ 
    border: 4px solid black ;
    width: 200px;
}
</style>
</head> 
<div class="page-content">
<div class="header-logos">
    <a href="https://www.eneamuac.bj/" target="_blank">
        <img src="logo_eneam.png" alt="LOGO-ENEAM" class="logo">
    </a>
    <a href="https://www.uac.bj/" target="_blank">
        <img src="logo_uac.png" alt="uac" class="logo">
    </a>
</div>

<body >
    <h1>Yves HOUNKPEVI</h1>
    <img src="dhys.png" width ="200" alt="Photo de profil">
    <p> Je suis étudiant en informatique de gestion. Passionné par le football et la programmation.</p>
    <h2>Mes passions</h2>
    <ul>
        <li> Programmation</li>
        <li>Football</li>
        <li>Technologie</li>
        <li> Musique 🪊</li>
    </ul>
    <h2>Mes objectifs</h2>
    <p> Mon objectif est de devenir développeur et créateur de logiciels professionnels</p>
    <h4>Cliquez en bas pour accéder au plateforme de l'école :</h4>
    <a href="https://eneam.uac.bj/ " target="_blank">ENEAM</a>


</div>
`,
    Listes: `
<div class="page-content">

    <h2>Listes</h2>
    
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Ma page</title>
</head>
<body>

    <h1>Quelques listes non ordonnées</h1>
    <p>Voici une liste à puce non ordonnée sans modification (= <em>disc</em>) :</p>
    <ul>
    <li>Liste</li>
    <li>à</li>
    <li>puces</li>
    </ul>
    <p>Avec <em>circle</em> :</p>
    <ul class="cercle">
    <li>Liste</li>
    <li>à</li>
    <li>puces</li>
    </ul>
    <p>Avec <em>square</em> :</p>
    <ul class="carre">
    <li>Liste</li>
    <li>à</li>
    <li>puces</li>
    </ul>
    <p>Avec <em>none</em> (sans puces) :</p>
    <ul class="rien">
    <li>Liste</li>
    <li>à</li>
    <li>puces</li>
    </ul>

</body>
</html>
</div>
`,
    Tableau: `
<div class="page-content">

    <h2>Tableau</h2>

     <style>

        table{
            width: 800px;
            height: 500px;
            border: 5px solid red;
            border-collapse: collapse;
            box-shadow: 0 0 0 5px yellow;
        }

        td{
            border: 2px solid red;
            text-align: center;
            color: #111;
            font-weight:bold;
        }

        .titre{
            color: blue;
            font-size: 35px;
        }

        .ig{
            background-color: lightblue;
        }

        .prog{
            transform: rotate(25deg);
            font-size: 30px;
        }
       . clignote {
           animation: clignoter 1s infinite 
       } 
       @keyframes clignoter{
           0% {opacity : 1}
           50% {opacity :0}
           100% {opacity 1}
           
       }

    </style>

</head>

<body>

<table>

    <tr>
        <td rowspan="2"><div class="prog">EPAC</div></td>

        <td class="titre">ENEAM</td>

        <td class="clignote">IA</td>
    </tr>

    <tr>
        <td class="ig">IG</td>

        <td>Claude</td>
    </tr>

    <tr>
        <td>FLASH</td>

        <td colspan="2">
            <div class="prog">Programmation</div>
        </td>
    </tr>

</table>

</div>
`,
    Formulaire: `
<div class="page-content">

    <h2>Formulaire</h2>

   <form method="post" action="traitement.php">
    <p>
        <label for="pseudo">Votre pseudo :</label>
        <input type="text" name="pseudo" id="pseudo" value="M@teo21" size="30" maxlength="10" />
    </p>
    </form>
    <form method="post" action="traitement.php">
    <p>
        <label for="pseudo">Votre pseudo :</label>
        <input type="text" name="pseudo" id="pseudo" value="M@teo21" />
        <br />
        <label for="pass">Votre mot de passe :</label>
        <input type="password" name="pass" id="pass" />
    </p>
    </form>
    <form method="post" action="traitement.php">
    <p>
        <label for="ameliorer">Comment pensez-vous que je pourrais améliorer mon site ?</label><br />
        <textarea name="ameliorer" id="ameliorer"></textarea>
    </p>
    </form>
    <form method="post" action="traitement.php">
    <p>
        <label for="ameliorer">Comment pensez-vous que je pourrais améliorer mon site ?</label><br />
        <textarea name="ameliorer" id="ameliorer" rows="10" cols="50"></textarea>
    </p>
    </form>
    <form method="post" action="traitement.php">
    <p>
    Cochez les aliments que vous aimez manger :<br />
        <input type="checkbox" name="frites" id="frites" /> <label for="frites">Frites</label><br />
        <input type="checkbox" name="steak" id="steak" /> <label for="steak">Steak haché</label><br />
        <input type="checkbox" name="epinards" id="epinards" /> <label for="epinards">Epinards</label><br />
        <input type="checkbox" name="huitres" id="huitres" /> <label for="huitres">Huitres</label>
    </p>
    </form>
    <form method="post" action="traitement.php">
    <p>
    Cochez les aliments que vous aimez manger :<br />
        <input type="checkbox" name="frites" id="frites" /> <label for="frites">Frites</label><br />
        <input type="checkbox" name="steak" id="steak" /> <label for="steak">Steak haché</label><br />
        <input type="checkbox" name="epinards" id="epinards" checked="checked" /> <label
        for="epinards">Epinards</label><br />
        <input type="checkbox" name="huitres" id="huitres" /> <label for="huitres">Huitres</label>
    </p>
    </form>
   
<form method="post" action="traitement.php">
<p>
<label>Votre pseudo</label> : <input type="text" name="pseudo" />
</p>
</form>
Mais ça ne suffit pas. Il faut lier le label avec la zone de texte. Pour ce faire, il faut donner un nom à la zone de

<form method="post" action="traitement.php">
<p>
<label for="pseudo">Votre pseudo</label> : <input type="text" name="pseudo" id="pseudo" />
</p>
</form>

<form method="post" action="traitement.php">
<p>
<label for="pseudo">Votre pseudo :</label>
<input type="text" name="pseudo" id="pseudo" value="M@teo21" size="30" maxlength="10" />
</p>
</form>
<form method="post" action="traitement.php">
<p>
<label for="pseudo">Votre pseudo :</label>
<input type="text" name="pseudo" id="pseudo" value="M@teo21" />
<br />
<label for="pass">Votre mot de passe :</label>
<input type="password" name="pass" id="pass" />
</p>
</form>
<form method="post" action="traitement.php">
<p>
<label for="ameliorer">Comment pensez-vous que je pourrais améliorer mon site ?</label><br />
<textarea name="ameliorer" id="ameliorer"></textarea>
</p>
</form>
<form method="post" action="traitement.php">
<p>
<label for="ameliorer">Comment pensez-vous que je pourrais améliorer mon site ?</label><br />
<textarea name="ameliorer" id="ameliorer" rows="10" cols="50"></textarea>
</p>
</form>
<form method="post" action="traitement.php">
<p>
Cochez les aliments que vous aimez manger :<br />
<input type="checkbox" name="frites" id="frites" /> <label for="frites">Frites</label><br />
<input type="checkbox" name="steak" id="steak" /> <label for="steak">Steak haché</label><br />
<input type="checkbox" name="epinards" id="epinards" /> <label for="epinards">Epinards</label><br />
<input type="checkbox" name="huitres" id="huitres" /> <label for="huitres">Huitres</label>
</p>
</form>
<form method="post" action="traitement.php">
<p>
Cochez les aliments que vous aimez manger :<br />
<input type="checkbox" name="frites" id="frites" /> <label for="frites">Frites</label><br />
<input type="checkbox" name="steak" id="steak" /> <label for="steak">Steak haché</label><br />
<input type="checkbox" name="epinards" id="epinards" checked="checked" /> <label
for="epinards">Epinards</label><br />
<input type="checkbox" name="huitres" id="huitres" /> <label for="huitres">Huitres</label>
</p>
</form>
lue différent à chaque fois.
<form method="post" action="traitement.php">
<p>
Veuillez indiquer la tranche d'âge dans laquelle vous vous situez :<br />
<input type="radio" name="age" value="moins15" id="moins15" /> <label for="moins15">Moins de 15
ans</label><br />
<input type="radio" name="age" value="medium15-25" id="medium15-25" /> <label for="medium15-
25">15-25 ans</label><br />
<input type="radio" name="age" value="medium25-40" id="medium25-40" /> <label for="medium25-
40">25-40 ans</label><br />
<input type="radio" name="age" value="plus40" id="plus40" /> <label for="plus40">Encore plus vieux que
</label>
</p>
<form method="post" action="traitement.php">
<p>
Veuillez indiquer la tranche d'âge dans laquelle vous vous situez :<br />
<input type="radio" name="age" value="moins15" id="moins15" /> <label for="moins15">Moins de 15 ans</label><br />
<input type="radio" name="age" value="medium15-25" id="medium15-25" /> <label for="medium15-25">15-25
ans</label><br />
<input type="radio" name="age" value="medium25-40" id="medium25-40" /> <label for="medium25-40">25-40
ans</label><br />
<input type="radio" name="age" value="plus40" id="plus40" /> <label for="plus40">Encore plus vieux que ça ?!</label>
</p>
<p>
Sur quel continent habitez-vous ?<br />
<input type="radio" name="continent" value="europe" id="europe" /> <label
for="europe">Europe</label><br />
<input type="radio" name="continent" value="afrique" id="afrique" /> <label for="afrique">Afrique</label><br />
<input type="radio" name="continent" value="asie" id="asie" /> <label for="asie">Asie</label><br />
<input type="radio" name="continent" value="amerique" id="amerique" /> <label for="amerique">Amérique</label><br
/>
<input type="radio" name="continent" value="australie" id="australie" /> <label for="australie">Australie</label>
</p>
</form>
<form method="post" action="traitement.php">
<p>
<label for="pays">Dans quel pays habitez-vous ?</label><br />
<select name="pays" id="pays">
<option value="france">France</option>
<option value="espagne">Espagne</option>
<option value="italie">Italie</option>
<option value="royaume-uni">Royaume-Uni</option>
<option value="canada">Canada</option>
<option value="etats-unis">Etats-Unis</option>
<option value="chine">Chine</option>
<option value="japon">Japon</option>
</select>
</p>
</form>
<form method="post" action="traitement.php">
<p>
<label for="pays">Dans quel pays habitez-vous ?</label><br />
<select name="pays" id="pays">
<option value="france">France</option>
<option value="espagne">Espagne</option>
<option value="italie">Italie</option>
<option value="royaume-uni">Royaume-Uni</option>
<option value="canada" selected="selected">Canada</option>
<option value="etats-unis">Etats-Unis</option>
<option value="chine">Chine</option>
<option value="japon">Japon</option>
</select>
</p>
</form>
<form method="post" action="traitement.php">
<p>
<label for="pays">Dans quel pays habitez-vous ?</label><br />
<select name="pays" id="pays">
<optgroup label="Europe">
<option value="france">France</option>
<option value="espagne">Espagne</option>
<option value="italie">Italie</option>
<option value="royaume-uni">Royaume-Uni</option>
</optgroup>
<optgroup label="Amérique">
<option value="canada">Canada</option>
<option value="etats-unis">Etats-Unis</option>
</optgroup>
<optgroup label="Asie">
<option value="chine">Chine</option>
<option value="japon">Japon</option>
</optgroup>
</select>
</p>
</form>
<form method="post" action="traitement.php">
<fieldset>
<legend>Vos coordonnées</legend> <!-- Titre du fieldset -->
<label for="nom">Quel est votre nom ?</label><br />
<input type="text" name="nom" id="nom" tabindex="10" /><br />
<label for="prenom">Quel est votre prénom ?</label><br />
<input type="text" name="prenom" id="prenom" tabindex="20" /><br />
<label for="email">Quel est votre e-mail ?</label><br />
<input type="text" name="email" id="email" tabindex="30" /><br />
</fieldset>
<fieldset>
<legend>Votre souhait</legend> <!-- Titre du fieldset -->
<p>
Faites un souhait que vous voudriez voir exaucé :<br />
<input type="radio" name="souhait" value="riche" id="riche" tabindex="40" /> <label for="riche">Etre
riche</label><br />
<input type="radio" name="souhait" value="celebre" id="celebre" tabindex="50" /> <label
for="celebre">Etre célèbre</label><br />
<input type="radio" name="souhait" value="intelligent" id="intelligent" tabindex="60" /> <label
for="intelligent">Etre <strong>encore</strong> plus intelligent</label><br />
<input type="radio" name="souhait" value="autre" id="autre" tabindex="70" /> <label
for="autre">Autre...</label><br />
</p>
<p>
<label for="precisions">Si "Autre", veuillez préciser :</label><br />
<textarea name="precisions" id="precisions" cols="40" rows="4" tabindex="80"></textarea>
</p>
</fieldset>
</form>
<input type="button" value="Je sers à rien" />
<form method="post" action="cible_formulaire.php">
<fieldset>
<legend>Vos coordonnées</legend>
<label for="nom">Quel est votre nom ?</label><br />
<input type="text" name="nom" id="nom" tabindex="10" /><br />
<label for="prenom">Quel est votre prénom ?</label><br />
<input type="text" name="prenom" id="prenom" tabindex="20" /><br />
<label for="email">Quel est votre e-mail ?</label><br />
<input type="text" name="email" id="email" tabindex="30" /><br />
</fieldset>
<fieldset>
<legend>Votre souhait</legend>
<p>
Faites un souhait que vous voudriez voir exaucé :<br />
<input type="radio" name="souhait" value="riche" id="riche" tabindex="40" /> <label for="riche">Etre
riche</label><br />
<input type="radio" name="souhait" value="celebre" id="celebre" tabindex="50" /> <label for="celebre">Etre
célèbre</label><br />
<input type="radio" name="souhait" value="intelligent" id="intelligent" tabindex="60" /> <label
for="intelligent">Etre <strong>encore</strong> plus intelligent</label><br />
<input type="radio" name="souhait" value="autre" id="autre" tabindex="70" /> <label
for="autre">Autre...</label><br />
</p>
<textarea name="precisions" id="precisions" cols="40" rows="4" tabindex="80"></textarea>
</p>
</fieldset>
<p>
<input type="submit" /> <input type="reset" />
</p>
</form>

    

</div>
`,
    CV: `
<div class="page-content">

   <style>
body{
    background-color: #f5f7fa;
    font-family: Arial, sans-serif;
}

.entete{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    margin: 20px;
}

img{
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 3px solid #333;
    object-fit: cover;
}

.identite{
    background-color: #dbeafe;
    padding: 20px;
    border-radius: 15px;
    border-left: 6px solid #2563eb;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    width: 500px;
}

.identite h1{
    color: #1e3a8a;
    margin-top: 0;
}
</style>
</head>

<body>
<div class="entete">

    <img src="dhys.png" alt="picture">

    <div class="identite">
        <h1>Yves HOUNKPEVI</h1>

        <p>
            Étudiant en Informatique de Gestion, passionné par la
            programmation, le développement web et les nouvelles technologies.
        </p>
     </div>   
 </div>

        <p><strong>Téléphone :</strong> +229 0193366034</p>
        <p><strong>Email :</strong> yveshounkpevi9@gmail.com</p>
        <p><strong>Adresse :</strong> Cotonou-Akpakpa, Bénin</p>
    <h2>Diplômes</h2>

    <table border="1">
        <tr>
            <th>Diplôme</th>
            <th>Année</th>
        </tr>

        <tr>
            <td>CEP</td>
            <td>2017-2018</td>
        </tr>

        <tr>
            <td>BEPC</td>
            <td>2021-2022</td>
        </tr>

        <tr>
            <td>BAC</td>
            <td>2025-2026</td>
        </tr>
    </table>

    <h2>Compétences</h2>

    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Linux</li>
        <li>Bureautique</li>
    </ul>

    <h2>Expériences professionnelles</h2>

    <ul>
        <li>Stage d'initiation en informatique</li>
        <li>Maintenance et assistance informatique</li>
        <li>Création de pages web simples en HTML/CSS</li>
    </ul>

    <h2>Centres d'intérêt</h2>

    <ul>
        <li>Football</li>
        <li>Technologie</li>
        <li>Programmation</li>
        <li>Musique</li>
    </ul>


</div>
`,
};

function loadHome() {
    document.getElementById("content").innerHTML = "";
    setActiveLink(null);
}

function loadPage(page) {
    const content = pages[page];

    if (content) {
        document.getElementById("content").innerHTML = content;
    } else {
        document.getElementById("content").innerHTML = `
            <div class="page-content">
                <h2>Erreur</h2>
                <p>Impossible de charger cette page.</p>
            </div>
        `;
    }

    setActiveLink(page);
}

function setActiveLink(page) {
    document.querySelectorAll("aside a").forEach(link => link.classList.remove("active"));

    const selector = page ? `aside a[data-page="${page}"]` : `aside a[data-page="home"]`;
    const activeLink = document.querySelector(selector);

    if (activeLink) {
        activeLink.classList.add("active");
    }
}

document.addEventListener("DOMContentLoaded", () => setActiveLink(null));
