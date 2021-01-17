const Contact = () => {
	const template = `
    <div id="contact" class="container contact">
    <h4 class="my-3">Kontakta oss</h4>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 mb-md-3">
      <div class="col">
        <div class="card mb-1">
              <div class="card-body">
                <h5 class="card-title">Ordförande</h5>
                <h6 class="card-subtitle mb-2 text-muted">Lisa Ekehult</h6>
                <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                <a href="tel:0736260079" class="card-link">073-626 00 79</a>
                <a href="mailto:lisa@ekehult.se" class="card-link">lisa@ekehult.se</a>
              </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-1">
              <div class="card-body">
                <h5 class="card-title">Sekreterare</h5>
                <h6 class="card-subtitle mb-2 text-muted">Per Westin</h6>
                <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                <a href="tel:0708964947" class="card-link">070-896 49 47</a>
                <a href="mailto:per@elesystems.se" class="card-link">per@panhard.se</a>
              </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-1">
              <div class="card-body">
                <h5 class="card-title">Kassör</h5>
                <h6 class="card-subtitle mb-2 text-muted">Ingrid Tamm</h6>
                <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                <a href="tel:0702838373" class="card-link">070-283 83 73</a>
                <a href="mailto:ninni.tam@gmail.com" class="card-link">ninni.tam@gmail.com</a>
              </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-1">
              <div class="card-body">
                <h5 class="card-title">Suppleant</h5>
                <h6 class="card-subtitle mb-2 text-muted">Håkan Wallén</h6>
                <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                <a href="tel:0702838373" class="card-link">070-529 61 07</a>
                <a href="#" class="card-link">hakan@sevasta.se</a>
              </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-1">
              <div class="card-body">
                <h5 class="card-title">Suppleant</h5>
                <h6 class="card-subtitle mb-2 text-muted">Kent Möller</h6>
                <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                <a href="tel:0701625436" class="card-link">070-162 54 36</a>
                <a href="mailto:arezzo953@hotmail.com" class="card-link">arezzo953@hotmail.com</a>
              </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-1">
              <div class="card-body">
                <h5 class="card-title">Revisor</h5>
                <h6 class="card-subtitle mb-2 text-muted">Lars Johansson</h6>
                <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                <a href="tel:0705767763" class="card-link">070-576 77 63</a>
                <a href="mailto:lars.johansson@live.com" class="card-link">lars.johansson@live.com</a>
              </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-1">
              <div class="card-body">
                <h5 class="card-title">Suppleant</h5>
                <h6 class="card-subtitle mb-2 text-muted">Barbro Vestin</h6>
                <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                <a href="tel:0730765421" class="card-link">073-076 54 21</a>
                <a href="#" class="card-link">bw505121@gmail.com</a>
              </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-1">
              <div class="card-body">
                <h5 class="card-title">Valberedning</h5>
                <h6 class="card-subtitle mb-2 text-muted">Eva Blomkvist</h6>
                <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                <a href="tel:0702564217" class="card-link">070-256 42 17</a>
                <a href="#" class="card-link">ingen mailadress</a>
              </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-1">
              <div class="card-body">
                <h5 class="card-title">Valberedning</h5>
                <h6 class="card-subtitle mb-2 text-muted">Mats Melander</h6>
                <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                <a href="tel:0707137714" class="card-link">070-713 77 14</a>
                <a href="#" class="card-link">ingen mailadress</a>
              </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-1">
              <div class="card-body">
                <h5 class="card-title">Webb & Facebook</h5>
                <h6 class="card-subtitle mb-2 text-muted">Lisa Ekehult</h6>
                <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                <a href="tel:0736260079" class="card-link">073-626 00 79</a>
                <a href="https://www.facebook.com/Altunagarden" target="_blank" class="card-link">Vår Facebooksida</a>
              </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-1">
              <div class="card-body">
                <h5 class="card-title">Organisationsnummer / Bankgiro</h5>
                <h6 class="card-subtitle mb-2 text-muted"></h6>
                <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                <a href="#" class="card-link">817000-8703</a>
                <a href="#" class="card-link">320-0490</a>
              </div>
          </div>
        </div>
    </div>
</div>
  `;

	return template;
};

export default Contact;
