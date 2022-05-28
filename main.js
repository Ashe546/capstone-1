const humburger = document.querySelector('.hamburger');

function changeClass() {
  document.querySelector('.nav').classList.toggle('active');
  humburger.classList.toggle('active');
}

humburger.addEventListener('click', changeClass);

document.querySelectorAll('.nav-list').forEach((n) => n.addEventListener('click', () => {
  humburger.classList.remove('active');
  document.querySelector('.nav').classList.remove('active');
}));

const persons = [
  {
    name: 'ashe',
    img: './image/person11.jpg',
    position: 'dgw frqwuyF WQYRGFY y TREWFVuyf fhvfuySAR FYrikfi',
    description: 'kae eqf fygyeg 3t yg3t g 3hft h3fg 8fb3y fg3y b3f',
  },

  {
    name: 'ashe',
    img: './image/person11.jpg',
    position: 'dgw frqwuyF WQYRGFY y TREWFVuyf fhvfuySAR FYrikfi',
    description: 'kae eqf fygyeg 3t yg3t g 3hft h3fg 8fb3y fg3y b3f',
  },

  {
    name: 'ashe',
    img: './image/person11.jpg',
    position: 'dgw frqwuyF WQYRGFY y TREWFVuyf fhvfuySAR FYrikfi',
    description: 'kae eqf fygyeg 3t yg3t g 3hft h3fg 8fb3y fg3y b3f',
  },

  {
    name: 'ashe',
    img: './image/person11.jpg',
    position: 'dgw frqwuyF WQYRGFY y TREWFVuyf fhvfuySAR FYrikfi',
    description: 'kae eqf fygyeg 3t yg3t g 3hft h3fg 8fb3y fg3y b3f',
  },

  {
    name: 'ashe',
    img: './image/person11.jpg',
    position: 'dgw frqwuyF WQYRGFY y TREWFVuyf fhvfuySAR FYrikfi',
    description: 'kae eqf fygyeg 3t yg3t g 3hft h3fg 8fb3y fg3y b3f',
  },

  {
    name: 'ashe',
    img: '/image/person11.jpg',
    position: 'dgw frqwuyF WQYRGFY y TREWFVuyf fhvfuySAR FYrikfi',
    description: 'kae eqf fygyeg 3t yg3t g 3hft h3fg 8fb3y fg3y b3f',
  },
];

const section = document.getElementById('person-wrap');
persons.forEach((person) => {
  const div = document.createElement('div');
  div.className = 'persons';
  div.innerHTML = `<div class="person">
        <div class="person-img">
            <img src= ${person.img} alt="person" width="100px" height="100px">
        </div>
        <div class="person-detail">
            <h1>${person.name}</h1>
            <p class="person-position">Assistant Professor Department of Mechanical Engineering, American University in Dubai</p>
            <hr class="person-hr">
            <p>He is the recipient of a PhD in Systems Design Engineering in 2012 from the University of Waterloo in Canadatice in IT.</p>
        </div>
    </div>`;
  section.appendChild(div);
});