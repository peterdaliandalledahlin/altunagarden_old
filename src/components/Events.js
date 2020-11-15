const Events = () => {


const renderEvents = async () => {

    const container = document.querySelector('#eventsContainer');
    
    let uri = 'http://localhost/wordpress-headless-cms/wp-json/wp/v2/events';

    const res = await fetch(uri);
    const events = await res.json();
    // console.log(events);

  let eventTemplate = '';
  events.forEach(event => {
    // console.log(event.title.rendered);
    // console.log(event.slug);
    // console.log(event.content.rendered);
    console.log(event.date);
    const cleanText = event.content.rendered.replace(/<\/?[^>]+(>|$)/g, "");
    console.log(cleanText);
    eventTemplate += `
    <div class="col-sm-6">
        <div class="card mb-3 shadow-sm">
        <div class="card-body">
            <h5 class="card-title">${event.title.rendered}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${event.date}</h6>
            <p class="card-text">${cleanText}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    </div>
    `
  });

  container.innerHTML = eventTemplate;
}

window.addEventListener('DOMContentLoaded', () => renderEvents());
};
export default Events;