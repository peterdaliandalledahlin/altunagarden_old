const Book = () => {
	const template = `
    <div id="book" class="container boka">
    <h4 class="mt-3">Uthyrning av Altunagården</h4>
    <p>Telefonnummer till lokalbokningen: <a href="tel:0736260079" class="card-link">073-626 00 79</a> (Lisa svarar)</p>
    <p>Vill du hellre skicka en förfrågan via e-post så är adressen <a href="mailto:uthyrning.altunagarden@gmail.com?subject=Mail from website" class="card-link">uthyrning.altunagarden@gmail.com</a> </p>
    <p>Behöver ni utrymmen så har vi lokalerna. Vi har fullständig anpassning för funktionshindrade – rullstolsramp,  handikapptoalett etc.</p>
    <h5 class="mt-5">Vi har lokaler för t.ex:</h5>
    <ul class="list-group list-group-flush w-100">
        <li class="list-group-item d-flex justify-content-between align-items-center">Födelsedagskalas</li>
        <li class="list-group-item d-flex justify-content-between align-items-center">Bröllopsfester</li>
        <li class="list-group-item d-flex justify-content-between align-items-center">Begravningskaffe</li>
        <li class="list-group-item d-flex justify-content-between align-items-center">Kulturevenemang</li>
        <li class="list-group-item d-flex justify-content-between align-items-center">Kurser</li>
        <li class="list-group-item d-flex justify-content-between align-items-center">Möten</li>
    </ul>
    <h5 class="mt-3">Prislista</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Lilla salen inkl. kök (max 25 personer)
            <span class="badge badge-primary badge-pill">500:-/12 tim (350:- medlem)</span>
            <span class="badge badge-primary badge-pill">300:-/6 tim (200:- medlem)</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Stora salen inkl kök (max 150 pers)
            <span class="badge badge-primary badge-pill">2000:-/24 tim (1500:- medlem)</span>
            <span class="badge badge-primary badge-pill">1000:-/6 tim (700:- medlem)</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Porslin för bruk på annan plats än Altunagården (obs. endast medlemmar)
            <span class="badge badge-primary badge-pill">250:- (färre än 50 kuvert)</span>
            <span class="badge badge-primary badge-pill">500:- (fler än 50 kuvert)</span>
        </li>
    </ul>
    <h5 class="my-5 forskottsbetalning"><mark>Förskottsbetalning gäller vid all uthyrning!</mark></h5>
</div>
  `;

	return template;
};

export default Book;