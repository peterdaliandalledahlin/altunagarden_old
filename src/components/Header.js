const Header = () => {
	const template = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm smart-scroll">
      <div class="container">
          <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarToggler">
              <a class="navbar-brand" href="#home">Altunagården</a>
              <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                  <li class="nav-item"><a class="nav-link" href="#home">Hem</a></li>
                  <li class="nav-item"><a class="nav-link" href="#book">Boka</a></li>
                  <li class="nav-item"><a class="nav-link" href="#about">På gång</a></li>
                  <li class="nav-item"><a class="nav-link" href="#activities">Aktiviteter</a></li>
                  <li class="nav-item"><a class="nav-link" href="#map">Hitta till oss</a></li>
                  <li class="nav-item"><a class="nav-link" href="#contact">Kontakta oss</a></li>
                  <li class="nav-item"><a class="nav-link" href="#timeline">Tidslinje</a></li>
                  <li class="nav-item"><a class="nav-link" href="https://www.facebook.com/Altunagarden" target="_blank"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 455.73 455.73" style="enable-background:new 0 0 455.73 455.73;" xml:space="preserve">
                <path style="fill:#3A559F;" d="M0,0v455.73h242.704V279.691h-59.33v-71.864h59.33v-60.353c0-43.893,35.582-79.475,79.475-79.475
                 h62.025v64.622h-44.382c-13.947,0-25.254,11.307-25.254,25.254v49.953h68.521l-9.47,71.864h-59.051V455.73H455.73V0H0z"/>
             </svg></a></li>
              </ul>
          </div>
      </div>
    </nav>
  `;

	return template;
};

export default Header;
