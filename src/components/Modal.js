const Modal = () => {
	const template = `
    <div class="modal show" id="altunagarden-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">Stöd Föreningen Altunagården – bli medlem eller sponsor!</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body text-center">
                    <p class="m-0">Vill du bli medlem i Altuna bygdegårdsförening?</p>
                    <a class="btn btn-primary btn-sm my-2 modal-btn" href="#member" role="button">Jag vill veta mer...</a>
                    <hr />
                    <p class="m-0">Vill du bli sponsor och stödja Altunagården?</p>
                    <a class="btn btn-primary btn-sm my-2 modal-btn" href="#sponsor" role="button">Jag vill veta mer...</a>
                    <hr />
                    <p class="m-0">Du som känner att du vill hjälpa till med att ordna eller leda aktiviteter och/eller kanske hjälpa till att arbeta med Altunagårdens skötsel är välkommen att kontakta någon i vår styrelse.</p>
                    <a class="btn btn-primary btn-sm my-2 modal-btn" href="#contact" role="button">Till kontaktsidan</a>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#altunagarden-modal">
  Launch demo modal
</button>
  `;

	return template;
};

export default Modal;