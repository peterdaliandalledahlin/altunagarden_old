import App from './App';

const app = async () => {
  document.getElementById('root').appendChild(await App());

  //START LISTENING FOR SCROLL AND ADD FIXED NAVBAR
  // document.addEventListener("DOMContentLoaded", function(){
  //   window.addEventListener('scroll', function() {
  //     if (window.scrollY > 50) {
  //       document.getElementById('navbar_top').classList.add('fixed-top');
  //       // add padding top to show content behind navbar
  //       navbar_height = document.querySelector('.navbar').offsetHeight;
  //       document.body.style.paddingTop = navbar_height + 'px';
  //     } else {
  //        document.getElementById('navbar_top').classList.remove('fixed-top');
  //        // remove padding top from body
  //       document.body.style.paddingTop = '0';
  //     } 
  //   });
  // }); 
//END LISTENING FOR SCROLL AND ADD FIXED NAVBAR
  
  $(function() {

//START BACK TO TOP BTN
    let btn = $('#backtotopbutton');
    $(window).on('scroll', function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });
//END BACK TO TOP BTN

//START CLOSE MOBILE MENU ON CLICK
     $(".navbar-collapse").on("click", "a:not([data-toggle])", null, function () {
      $(".navbar-collapse").collapse('hide');
     });
//END CLOSE MOBILE MENU ON CLICK

//START LOAD MODAL
  $('#altunagarden-modal').modal('show');

  $('.modal-btn').on('click', function () {
    $('#altunagarden-modal').modal('hide');
  })
//END LOAD MODAL
    
//START READMORE TIMELINE
    $(".content").hide();
    $(".show_hide").on("click", function () {
        let txt = $(".content").is(':visible') ? 'Läs mer...' : 'Läs mindre...';
        $(".show_hide").text(txt);
        $(this).next('.content').slideToggle(200);
    });
//END READMORE TIMELINE

//START GET DATA FROM WORDPRESS BACKEND AND RENDER COMPONENT
    const renderEvents = async () => {
      const container = document.querySelector('#eventsContainer');
      let uri = 'https://altunagarden.se/wordpress/wp-json/wp/v2/posts';
      const res = await fetch(uri);
      const events = await res.json();

    let eventTemplate = '';
    events.forEach(event => {
      //REMOVE LINEBREAKS
      // someText = event.content.rendered.replace(/(\r\n|\n|\r)/gm,"");
      //REMOVE HTML TAGS
      const cleanText = event.content.rendered.replace(/<\/?[^>]+(>|$)/g, "");

      eventTemplate += `
      <div class="col-sm-6">
          <div class="card mb-3 shadow-sm">
          <div class="card-body">
              <h5 class="card-title">${event.title.rendered}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Upplagd: ${event.date.slice(0,event.date.length-9)}</h6>
              <p id="readmore" class="card-text">${cleanText}</p>
              <a href="#contact" class="btn btn-primary">Kontakt</a>
          </div>
          </div>
      </div>
      `
    }); 
    container.innerHTML = eventTemplate;
  }
  renderEvents();
//END GET DATA FROM WORDPRESS BACKEND AND RENDER COMPONENT
//START SHOW PDF FROM SELECT 
    $("#comboFile").on('change', function (e) {
      e.preventDefault();
      //window.location.href = 'http://localhost:56818/' + $(this).val();
      window.open($(this).val())
    });
//END SHOW PDF FROM SELECT
  });//END DOCUMENT READY

};
// Load app
app();