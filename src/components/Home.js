const Home = () => {
	const template = `
    <div class="jumbotron jumbotron-fluid mb-0">
        <div id="home" class="container home">
            <h1 class="display-2 text-light">Välkomna till Altuna bygdegård</h1>
            <p class="display-4 text-light">En mötesplats för alla.</p>
            <a class="btn btn-primary btn-lg mt-md-4 mb-2 mb-md-0" href="#boka" role="button">Boka bygdegården</a>
            <a class="btn btn-secondary btn-lg mt-md-4 ml-md-2" href="#about" role="button">Till evenemangen</a>
        </div>
    </div>
  `;

	return template;
};

export default Home;