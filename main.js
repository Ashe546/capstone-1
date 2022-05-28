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
    name: 'Ashe',
    img: './image/person11.jpg',
    position: 'Assistant Professor Department of Mechanical Engineering, American University in Dubai',
    description: 'He is the recipient of a PhD in Systems Design Engineering in 2012 from the University of Waterloo in Canadatice in IT.',
    class: '',
  },

  {
    name: 'Mula',
    img: './image/person12.jpg',
    position: 'Assistant Professor Department of Mechanical Engineering, American University in Dubai',
    description: 'He is the recipient of a PhD in Systems Design Engineering in 2012 from the University of Waterloo in Canadatice in IT.',
    class: '',
  },

  {
    name: 'Abel',
    img: './image/person13.jpg',
    position: 'Assistant Professor Department of Mechanical Engineering, American University in Dubai',
    description: 'He is the recipient of a PhD in Systems Design Engineering in 2012 from the University of Waterloo in Canadatice in IT.',
    class: 'none',
  },

  {
    name: 'Aman',
    img: './image/person14.jpg',
    position: 'Assistant Professor Department of Mechanical Engineering, American University in Dubai',
    description: 'He is the recipient of a PhD in Systems Design Engineering in 2012 from the University of Waterloo in Canadatice in IT.',
    class: 'none',
  },

  {
    name: 'Bini',
    img: './image/person11.jpg',
    position: 'Assistant Professor Department of Mechanical Engineering, American University in Dubai',
    description: 'He is the recipient of a PhD in Systems Design Engineering in 2012 from the University of Waterloo in Canadatice in IT.',
    class: 'none',
  },

  {
    name: 'Besa',
    img: '/image/person16.jpg',
    position: 'Assistant Professor Department of Mechanical Engineering, American University in Dubai',
    description: 'He is the recipient of a PhD in Systems Design Engineering in 2012 from the University of Waterloo in Canadatice in IT.',
    class: 'none',
  },
];

const section = document.getElementById('person-wrap');
persons.forEach((person) => {
  const div = document.createElement('div');
  div.className = `persons ${person.class}`;
  div.innerHTML = `<div class="person">
        <div class="person-img">
            <img src= ${person.img} alt="person" width="100px" height="100px">
        </div>
        <div class="person-detail">
            <h1>${person.name}</h1>
            <p class="person-position">${person.position}</p>
            <hr class="person-hr">
            <p>${person.description}</p>
        </div>
    </div>`;
  section.appendChild(div);
});