import festdukningstorasalen from '../assets/images/festdukning-stora-salen.webp';
import festdukninglillasalen from '../assets/images/festdukning-lilla-salen.webp';
import hallen1 from '../assets/images/hallen1.webp';
import hallen2 from '../assets/images/hallen2.webp';
import luftgevarsskytte from '../assets/images/luftgevarsskytte.webp'
const Gallery = () => {
	const template = `
    <div id="gallery" class="container gallery">
    <h5 class="mt-3">Galleri</h5>
        <h6 class="font-weight-light text-center text-lg-left mt-3 mb-0">Ett urval av bilder</h6>
        <hr class="mt-2 mb-5">
            <div class="row text-center text-lg-left">
                <div class="col-lg-3 col-md-4 col-6">
                    <a href="javascript:void(0)" class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail" src="${festdukningstorasalen}" alt="festdukning i stora salen">
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <a href="javascript:void(0)" class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail" src="${festdukninglillasalen}" alt="festdukning i lilla salen">
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <a href="javascript:void(0)" class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail" src="${hallen1}" alt="hallen">
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <a href="javascript:void(0)" class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail" src="${hallen2}" alt="hallen">
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <a href="javascript:void(0)" class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail" src="${luftgevarsskytte}" alt="hallen">
                    </a>
                </div>
            </div>
    </div>
  `;
	return template;
};

export default Gallery;