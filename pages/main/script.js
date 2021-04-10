const menu = document.querySelector('.list');
const menuItem = document.querySelectorAll('.list__item');
const hamburger = document.querySelector('.hamburger');
const hidden = document.querySelector('.block');
const aboutShelter = document.querySelector('.about');

// close-open hamburger menu
function toggleHamburgerMenu() {
  hamburger.classList.toggle('hamburger-active');
  menu.classList.toggle('list-active');
  hidden.classList.toggle('hidden');
  document.body.style.overflow = document.body.style.overflow === 'hidden' ?  'auto' : 'hidden';
}

hamburger.addEventListener('click', () => {
  toggleHamburgerMenu();
});

hidden.addEventListener('click', () => {
  toggleHamburgerMenu();
});

aboutShelter.addEventListener('click', () => {
  toggleHamburgerMenu();
});


let pets = [
  {
    "name": "Katrine",
    "img": "../../assets/images/pets/katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
    {
      "name": "Jennifer",
      "img": "../../assets/images/pets/jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/images/pets/woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/images/pets/sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/pets/scarlett.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/images/pets/timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/images/pets/freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/images/pets/charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ];

let arrowLeft = document.querySelector(".slide__left");
let arrowRight = document.querySelector(".slide__right");
let petsWrapper = document.querySelector(".pets__wrapper");
let insert;
let width = window.getComputedStyle(petsWrapper).width;
let petsOnSlide;

let listen990 = () => {
  document.getElementById("pop1").addEventListener('click', () => {
    scrollMove();
    let pop = document.getElementById("pop1");
    paste(pop);
  })
  document.getElementById("pop2").addEventListener('click', () => {
    scrollMove();
    let pop = document.getElementById("pop2");
    paste(pop);
  })
  document.getElementById("pop3").addEventListener('click', () => {
      scrollMove();
      let pop = document.getElementById("pop3");
      paste(pop);
  })
}
let listen580 = () => {
  document.getElementById("pop1").addEventListener('click', () => {
      scrollMove();
      let pop = document.getElementById("pop1");
      paste(pop);
  })
  document.getElementById("pop2").addEventListener('click', () => {
      scrollMove();
      let pop = document.getElementById("pop2");
      paste(pop);
  })
}
let listen270 = () => {
  document.getElementById("pop1").addEventListener('click', () => {
      scrollMove();
      let pop = document.getElementById("pop1");
      paste(pop);
  })
}
let listenpop2 = () => {
  document.getElementById("pop2").addEventListener('click', () => {
      scrollMove();
      let pop = document.getElementById("pop2");
      paste(pop);
  })
}
let listenpop3 = () => {
  document.getElementById("pop3").addEventListener('click', () => {
      scrollMove();
      let pop = document.getElementById("pop3");
      paste(pop);
  })
}

let scrollMove = () => {
    document.body.style.paddingRight = (window.innerWidth - document.body.clientWidth)+'px';
    document.body.style.width = '100%';
    let y=window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = -y+'px';
    document.body.style.overflow = 'hidden';
}

switch(width) {
    case '990px': 
        listen990();
        break;
    case '580px': 
        petsWrapper.children[2].remove(); 
        listen580();
        break;
    case '270px': 
        petsWrapper.children[2].remove();
        petsWrapper.children[1].remove();
        listen270();
        break;
}

arrowRight.addEventListener('click', moveRight => {
  arrowRight.disabled = true;
  arrowLeft.disabled = true;
  document.querySelector(".overflow-slide").style.overflow = "hidden";
  switch(width) {
    case '990px': 
      petsOnSlide = 3;
        // TODO: создание картинок
        sliderRight990(3);
        break;
    case '580px': 
      petsOnSlide = 2;
        sliderRight580();
        break;
    case '270px': 
      petsOnSlide = 1;
        sliderRight270();
        break;
  }
})

let sliderRight990 = () => {
    shuffle(pets);
    insert = `<div class="pets__items ${pets[0].name}" id="pop1">
                <img class="pets__items_image" src='${pets[0].img}' alt='${pets[0].name}'>
                ${pets[0].name}
                <button class="pets__items_learn">Learn more</button>
            </div>`;
    insert += `<div class="pets__items ${pets[1].name}" id="pop2">
                <img class="pets__items_image" src="${pets[1].img}" alt="${pets[1].name}">
                ${pets[1].name}
                <button class="pets__items_learn">Learn more</button>
              </div>`;
    insert += `<div class="pets__items ${pets[2].name}" id="pop3">
              <img class="pets__items_image" src="${pets[2].img}" alt="${pets[2].name}">
              ${pets[2].name}
              <button class="pets__items_learn">Learn more</button>
            </div>`;
    petsWrapper.insertAdjacentHTML('beforeend', insert);
    removeLeftAnimation990();
    setTimeout(function removal () {
      petsWrapper.children[0].remove();
      petsWrapper.children[0].remove();
      petsWrapper.children[0].remove();
      document.querySelector(".overflow-slide").style.overflow = "visible";
      arrowRight.disabled = false;
      arrowLeft.disabled = false;
      listen990();
    }, 750);
    
}

let sliderRight580 = () => {
    shuffle(pets);
    insert = `<div class="pets__items ${pets[0].name}" id="pop1">
                <img class="pets__items_image" src='${pets[0].img}' alt='${pets[0].name}'>
                ${pets[0].name}
                <button class="pets__items_learn">Learn more</button>
            </div>`;
    insert += `<div class="pets__items ${pets[1].name}" id="pop2">
                  <img class="pets__items_image" src='${pets[1].img}' alt='${pets[1].name}'>
                  ${pets[1].name}
                  <button class="pets__items_learn">Learn more</button>
              </div>`;
    petsWrapper.insertAdjacentHTML('beforeend', insert);
    removeLeftAnimation580();
    setTimeout(function removal () {
      petsWrapper.children[0].remove();
      petsWrapper.children[0].remove();
      document.querySelector(".overflow-slide").style.overflow = "visible";
      arrowRight.disabled = false;
      arrowLeft.disabled = false;
      listen580();
    }, 500);
}

let sliderRight270 = () => {
    shuffle(pets);
    insert = `<div class="pets__items ${pets[0].name}" id="pop1">
                <img class="pets__items_image" src='${pets[0].img}' alt='${pets[0].name}'>
                ${pets[0].name}
                <button class="pets__items_learn">Learn more</button>
            </div>`;
    petsWrapper.insertAdjacentHTML('beforeend', insert);
    removeLeftAnimation270();
    setTimeout(function removal () {
      petsWrapper.children[0].remove();
      document.querySelector(".overflow-slide").style.overflow = "visible";
      arrowRight.disabled = false;
      arrowLeft.disabled = false;
      listen270();
    }, 250);
}

arrowLeft.addEventListener('click', moveLeft => {
    arrowLeft.disabled = true;
    arrowRight.disabled = true;
    document.querySelector(".overflow-slide").style.overflow = "hidden";
    switch(width) {
      case '990px':
        petsOnSlide = 3;
        sliderLeft990();
        break;
      case '580px': 
        petsOnSlide = 2;
        sliderLeft580();
        break;
      case '270px': 
        petsOnSlide = 1;
        sliderLeft270();
        break;
    }
})

let sliderLeft990 = (n) => {
  shuffle(pets);
    insert = `<div class="pets__items ${pets[0].name}" id="pop1">
                <img class="pets__items_image" src='${pets[0].img}' alt='${pets[0].name}'>
                ${pets[0].name}
                <button class="pets__items_learn">Learn more</button>
            </div>`;
    insert += `<div class="pets__items ${pets[1].name}" id="pop2">
                <img class="pets__items_image" src="${pets[1].img}" alt="${pets[1].name}">
                ${pets[1].name}
                <button class="pets__items_learn">Learn more</button>
              </div>`;
    insert += `<div class="pets__items ${pets[2].name}" id="pop3">
              <img class="pets__items_image" src="${pets[2].img}" alt="${pets[2].name}">
              ${pets[2].name}
              <button class="pets__items_learn">Learn more</button>
            </div>`;
  petsWrapper.insertAdjacentHTML('afterbegin', insert);
  removeRightAnimation990();
  setTimeout(function removal () {
    petsWrapper.children[petsWrapper.children.length-1].remove();
    petsWrapper.children[petsWrapper.children.length-1].remove();
    petsWrapper.children[petsWrapper.children.length-1].remove();
    document.querySelector(".overflow-slide").style.overflow = "visible";
    arrowRight.disabled = false;
    arrowLeft.disabled = false;
    listen990();
  }, 750);
}

let sliderLeft580 = () => {
  shuffle(pets);
    insert = `<div class="pets__items ${pets[0].name}" id="pop1">
                <img class="pets__items_image" src='${pets[0].img}' alt='${pets[0].name}'>
                ${pets[0].name}
                <button class="pets__items_learn">Learn more</button>
            </div>`;
    insert += `<div class="pets__items ${pets[1].name}" id="pop2">
                <img class="pets__items_image" src="${pets[1].img}" alt="${pets[1].name}">
                ${pets[1].name}
                <button class="pets__items_learn">Learn more</button>
              </div>`;
  petsWrapper.insertAdjacentHTML('afterbegin', insert);
  removeRightAnimation580();
  setTimeout(function removal () {
    petsWrapper.children[petsWrapper.children.length-1].remove();
    petsWrapper.children[petsWrapper.children.length-1].remove();
    document.querySelector(".overflow-slide").style.overflow = "visible";
    arrowRight.disabled = false;
    arrowLeft.disabled = false;
    listen580();
  }, 500);
}

let sliderLeft270 = () => {
  shuffle(pets);
    insert = `<div class="pets__items ${pets[0].name}" id="pop1">
                <img class="pets__items_image" src='${pets[0].img}' alt='${pets[0].name}'>
                ${pets[0].name}
                <button class="pets__items_learn">Learn more</button>
            </div>`;
  petsWrapper.insertAdjacentHTML('afterbegin', insert);
  removeRightAnimation270();
  setTimeout(function removal () {
    petsWrapper.children[petsWrapper.children.length-1].remove();
    document.querySelector(".overflow-slide").style.overflow = "visible";
    arrowRight.disabled = false;
    arrowLeft.disabled = false;
    listen270();
  }, 250);
}
    

let paste = (pop) => {
    let id = pop.innerText;
    for (let i=0; i<pets.length; i++) {
      let name = new RegExp(pets[i].name);
      if (name.test(id)) {
        insert = `<div id="shadow__popup"><button id="button__popup"><img src="../../assets/icons/X.svg"></button></div>`;
        insert += `<div class="popup"><img class="image__popup" src="${pets[i].img}">
                    <div class="popup__text">
                    <h3 class="popup__title">${pets[i].name}</h3>
                    <h4 class="popup__subtitle">${pets[i].type} - ${pets[i].breed}</h4>
                    <p class="popup__paragraph">${pets[i].description}</p>
                    <ul>
                      <li class="popup__list_item"><b>Age</b>: ${pets[i].age}</li>
                      <li class="popup__list_item"><b>Inoculations:</b> ${pets[i].inoculations.join(', ')}</li>
                      <li  class="popup__list_item"><b>Diseases:</b> ${pets[i].diseases.join(', ')}</li>
                      <li class="popup__list_item"><b>Parasites:</b> ${pets[i].parasites.join(', ')}</li>
                    </ul>
                    </div>
                  </div>`;
        petsWrapper.insertAdjacentHTML('beforebegin', insert);
        document.querySelector(".popup").animate([{ 
          opacity: 0},{
          opacity: 1}], 250);
        document.getElementById("shadow__popup").animate([{ 
          opacity: 0},{
          opacity: 1}], 250);
        setTimeout(close,250);
      }
    }
}

let close = () => {
document.getElementById("shadow__popup").addEventListener('click', () => {
  let overflowSlide = document.querySelector(".overflow-slide");
  document.querySelector(".popup").animate([{ 
    opacity: 1},{
    opacity: 0}], 250);
  document.getElementById("shadow__popup").animate([{ 
    opacity: 1},{
    opacity: 0}], 250);
  setTimeout(function removal () {
    overflowSlide.children[1].remove();
    overflowSlide.children[0].remove();
    document.body.style.paddingRight = '0px';
    let y=document.body.style.top;
    document.body.style.position = 'static';
    document.body.style.overflow = 'visible';
    window.scrollTo(0,-(y).replace('px',''));
  }, 200);
})
}

window.onresize = () => {
  let old = width;
  width = window.getComputedStyle(petsWrapper).width;
  if (old!==width) {
    switch(Math.round(Number(old.replace('px','')))-Math.round(Number(width.replace('px','')))) {
      case 720:
        petsWrapper.children[2].remove();
        petsWrapper.children[1].remove();
        break;
      case 410: 
        petsWrapper.children[2].remove(); 
        break; 
      case 310: 
        petsWrapper.children[1].remove(); 
        break; 
      case -310: 
        insert = `<div class="pets__items ${pets[1].name} "id="pop2">
                    <img class="pets__items_image" src="${pets[1].img}" alt="${pets[1].name}">${pets[1].name}
                    <button class="pets__items_learn">Learn more</button>
                  </div>`;
        petsWrapper.insertAdjacentHTML('beforeend', insert);
        listenpop2();
        break;
      case -410:
        insert = `<div class="pets__items ${pets[2].name} "id="pop2">
                    <img class="pets__items_image" src="${pets[2].img}" alt="${pets[2].name}">${pets[2].name}
                    <button class="pets__items_learn">Learn more</button>
                  </div>`;
        petsWrapper.insertAdjacentHTML('beforeend', insert); 
        listenpop3();
        break;
      case -720:
        insert = `<div class="pets__items ${pets[1].name} "id="pop2">
                    <img class="pets__items_image" src="${pets[1].img}" alt="${pets[1].name}">${pets[1].name}
                    <button class="pets__items_learn">Learn more</button>
                  </div>`;
        insert = `<div class="pets__items ${pets[2].name} "id="pop2">
                  <img class="pets__items_image" src="${pets[2].img}" alt="${pets[2].name}">${pets[2].name}
                  <button class="pets__items_learn">Learn more</button>
                </div>`;
        petsWrapper.insertAdjacentHTML('beforeend', insert); 
        listenpop2();
        listenpop3();
        break;
    }
  }
}

removeLeftAnimation990 = () => {
  petsWrapper.animate([{ 
    transform: "translateX(0px)"},{
    transform: "translateX(-1080px)"}], 750);
}

removeLeftAnimation580 = () => {
  petsWrapper.animate([{ 
    transform: "translateX(0px)"},{
    transform: "translateX(-620px)"}], 500);
}

removeLeftAnimation270 = () => {
  petsWrapper.animate([{ 
    transform: "translateX(135px)"},{
    transform: "translateX(-135px)"}], 250);
}

removeRightAnimation990 = () => {
  petsWrapper.animate([{ 
    transform: "translateX(-1080px)"},{
    transform: "translateX(0px)"}], 750);
}

removeRightAnimation580 = () => {
  petsWrapper.animate([{ 
    transform: "translateX(-620px)"},{
    transform: "translateX(0px)"}], 500);
}

removeRightAnimation270 = () => {
  petsWrapper.animate([{ 
    transform: "translateX(-135px)"},{
    transform: "translateX(135px)"}], 250);
}

function shuffle(pets) {
  pets.reverse();
  for (let i = (pets.length - petsOnSlide -1); i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [pets[i], pets[j]] = [pets[j], pets[i]];
  }
}