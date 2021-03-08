const About = () => {
	const template = `
    <div id="about" class="container about">
    <h4>På gång</h4>
    <div id="eventsContainer" class="row">
        
    </div>
    <div id="member" class="card text-center mt-3 mt-md-5 shadow-sm">
        <div class="card-header">
            Medlemsavgift för 2021
        </div>
        <div class="card-body">
          <h5 class="card-title">Vill du bli medlem?</h5>
          <p class="card-text">Medlemsavgift för 2021 är 100 kronor för enskild och 150 kronor för familj. Betalning kan göras till BG 320-0490 eller via swish 123 578 92 50.</p>
          <a href="#contact" class="btn btn-primary">Kontakt</a>
        </div>
        <div class="card-footer text-muted">
            Kom ihåg att uppge ditt namn, telefonnummer och gärna e-postadress om det finns.
        </div>
    </div>
    
    <h5 id="sponsor">Sponsorpaket Altunagården 2020</h5>
    <div class="row row-cols-1 row-cols-md-4">
        <div class="col mb-4">
            <div class="card h-100 shadow-sm">
            <div class="card-body">
                <h5 class="card-title">Femhundringen</h5>
                <p class="card-text"><u>I paketet ingår följande.</u></p>
            </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">- Bjuds på enklare samkväm en gång per år.</li>
                    <li class="list-group-item">- Deltagande i lotteri två gånger per år.</li>
                </ul>
            </div>
        </div>
        <div class="col mb-4">
            <div class="card h-100 shadow-sm">
            <div class="card-body">
                <h5 class="card-title">Brons 3000 kr</h5>
                <p class="card-text"><u>I paketet ingår följande</u></p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">- Nyttja Altunagården 1 gång per år.</li>
                <li class="list-group-item">- Annonsplats med företagets namn eller ditt eget namn på Altunagårdens hemsida samt i Altunagården.</li>
                <li class="list-group-item">- Bjuds på enklare samkväm en gång per år.</li>
                <li class="list-group-item">- Deltar i ett lotteri två gånger per år.</li>
            </ul>
            </div>
        </div>
        <div class="col mb-4">
            <div class="card h-100 shadow-sm">
            <div class="card-body">
                <h5 class="card-title">Silver 5000 kr</h5>
                <p class="card-text"><u>I paketet ingår följande</u></p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">- Nyttja Altunagården 2 gånger per år.</li>
                <li class="list-group-item">- Annonsplats med företagets namn eller ditt eget namn på Altunagårdens hemsida samt i Altunagården.</li>
                <li class="list-group-item">- Bjuds på enklare samkväm en gång per år.</li>
                <li class="list-group-item">- Deltar i ett lotteri två gånger per år.</li>
            </ul>
            </div>
        </div>
        <div class="col mb-4">
            <div class="card h-100 shadow-sm">
            <div class="card-body">
                <h5 class="card-title">Guld 7000 kr</h5>
                <p class="card-text"><u>I paketet ingår följande</u></p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">- Nyttja Altunagården 3 gånger per år.</li>
                <li class="list-group-item">- Annonsplats med företagets namn eller ditt eget namn på Altunagårdens hemsida samt i Altunagården.</li>
                <li class="list-group-item">- Bjuds på enklare samkväm en gång per år.</li>
                <li class="list-group-item">- Deltar i ett lotteri två gånger per år.</li>
            </ul>
            </div>
        </div>
    </div>
    <h6>Följande företag har sponsrat och på ett eller annat sätt bidragit till bevarandet av Altunagården!</h6>      
    <div class="list-group mb-2 mb-md-5">
        <a href="https://abkarlhedin.se" target="_blank" class="list-group-item list-group-item-action list-group-item-light">AB Karl Hedin</a>
        <a href="https://ackes-fargcenter.nordsjoidedesign.se/" target="_blank" class="list-group-item list-group-item-action list-group-item-light">Ackes Färgcenter</a>
        <a href="https://www.elgiganten.se/" target="_blank" class="list-group-item list-group-item-action list-group-item-light">Elgiganten, Enköping</a>
        <a href="#" target="_blank" class="list-group-item list-group-item-action list-group-item-light">Ena Golv</a>
        <a href="mailto:ebygg@hotmail.com" target="_blank" class="list-group-item list-group-item-action list-group-item-light">Enköpings Bygg & Inredning</a>
        <a href="http://www.gf100.se/" target="_blank" class="list-group-item list-group-item-action list-group-item-light">Grillby &  Fjärdhundra Rör AB</a>
        <a href="http://www.glastjanstab.se/" target="_blank" class="list-group-item list-group-item-action list-group-item-light">Enköpings Glastjänst AB</a>
        <a href="#" target="_blank" class="list-group-item list-group-item-action list-group-item-light">Fröslunda Ekogård, Fjärdhundra</a>
        <a href="https://hygienteknik.se/" target="_blank" class="list-group-item list-group-item-action list-group-item-light">Hygienteknik AB, Västerås</a>
        <a href="https://www.jannesgolv-enkoping.torget.se/" target="_blank" class="list-group-item list-group-item-action list-group-item-light">Jannes Golv, Enköping</a>
        <a href="https://joshyr.se/" target="_blank" class="list-group-item list-group-item-action list-group-item-light">Josefssons Maskinuthyrning AB</a>
        <a href="https://tkgolv.se/" target="_blank" class="list-group-item list-group-item-action list-group-item-light">TK Golv, Enköping</a>
        <a href="mailto:stefan@golvkakelspecialisten.se" target="_blank" class="list-group-item list-group-item-action list-group-item-light">Golv & Kakelspecialisten i Enköping AB</a>
        <a href="https://yp.se" target="_blank" class="list-group-item list-group-item-action list-group-item-light">YP Yrkesbutiker, Enköping</a>
    </div>
    <h6 class="mt-md-3 mb-md-3">Här nedan finns några länkar till företag och föreningar i bygden.</h6>
    <div class="list-group mb-2 mb-md-5">
        <a href="https://fjardhundraland.se/" target="_blank" class="list-group-item list-group-item-action list-group-item-light">Fjärdhundraland</a>
        <a href="https://www.hembygd.se/altuna-hembygdsforening" target="_blank" class="list-group-item list-group-item-action list-group-item-light">Altuna Hembygdsförening</a>
        <a href="https://www.bygdegardarna.se/" target="_blank" class="list-group-item list-group-item-action list-group-item-light">Bygdegårdarnas riksförbund</a>
        <a href="https://www.facebook.com/Dragmansbosjon" target="_blank" class="list-group-item list-group-item-action list-group-item-light">Dragmansbosjön</a>
    </div>
</div>
  `;

	return template;
};

export default About;