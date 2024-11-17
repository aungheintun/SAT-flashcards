// Add functionality for adding new flashcards
const form = document.getElementById('card-form');
const cardContainer = document.getElementById('card-container');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get user inputs
  const frontText = document.getElementById('front-input').value;
  const backText = document.getElementById('back-input').value;

  // Create a new flashcard
  const card = document.createElement('div');
  card.classList.add('flashcard');
  card.innerHTML = `
    <div class="front">${frontText}</div>
    <div class="back">${backText}</div>
  `;

  // Add click event for flipping the card
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });

  // Add the card to the container
  cardContainer.appendChild(card);

  // Clear the form
  form.reset();
});
