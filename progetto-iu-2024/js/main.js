/* java per fare cambiare automaticamente le quote slides della home */

document.addEventListener("DOMContentLoaded", function() {
   var currentSlide = 1;
   var totalSlides = document.querySelectorAll('#slides .slide').length;

   function nextSlide() {
      currentSlide = (currentSlide % totalSlides) + 1;
      document.getElementById('slide' + currentSlide).checked = true;
   }

   setInterval(nextSlide, 5000); // Cambia slide ogni 5 secondi (5000 millisecondi)
});


/* carousel home*/
document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector('.card-carousel');
  const cards = document.querySelectorAll('.card');
  let cardWidth = cards[0].offsetWidth;
  const containerWidth = document.querySelector('.container').offsetWidth;
  const numCards = cards.length;
  let index = 0;

  function adjustCardWidth() {
    cardWidth = containerWidth / numCards;
    cards.forEach(card => {
      card.style.width = `${cardWidth}px`;
    });
  }

  function nextCard() {
    index = (index + 1) % numCards;
    carousel.style.transform = `translateX(-${cardWidth * index}px)`;
  }

  setInterval(nextCard, 1000);
  adjustCardWidth(); // Call the function once to set initial card widths
  window.addEventListener('resize', adjustCardWidth); // Adjust card widths when window is resized
});

/* barra di ricerca orizzontale con collegamenti per ogni lettera dell'alfabeto */
document.addEventListener('DOMContentLoaded', function() {
    const filter1 = document.getElementById('filter1');
    const resultsDiv = document.getElementById('results');
    const podcasts = document.querySelectorAll('.podcast');
    const logList = document.getElementById('log-list');

    function logActivity(activity) {
        const logEntry = document.createElement('li');
        logEntry.textContent = activity;
        logList.appendChild(logEntry);
    }

    function showPodcasts(filter) {
        podcasts.forEach(podcast => {
            if (filter === 'all' || podcast.classList.contains(filter)) {
                podcast.style.display = 'block';
            } else {
                podcast.style.display = 'none';
            }
        });
    }

    // Mostra tutti i podcast inizialmente
    showPodcasts('all');

    filter1.addEventListener('change', function() {
        const selectedFilter = filter1.value;

        // Nascondi o mostra i podcast in base al filtro selezionato
        if (selectedFilter === 'option1') {
            showPodcasts('ansia');
        } else if (selectedFilter === 'option2') {
            showPodcasts('depressione');
        } else {
            showPodcasts('all');
        }

        logActivity(`Filtro 1 cambiato a: ${selectedFilter}`);
    });

    document.addEventListener('click', function(event) {
        const target = event.target;
        logActivity(`Cliccato su: ${target.tagName} ${target.className}`);
    });
});


