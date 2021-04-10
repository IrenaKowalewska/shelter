const cardsContainer = document.querySelector('.main-pets-cards');
let pets = [];
let fullPetsList = [];

const request = new XMLHttpRequest();
request.open('GET', './pets.json');

request.onload = () => {
    pets = JSON.parse(request.response);
    fullPetsList = (() => {
        let tempArr = [];
        for (let i = 0; i < 6; i++) {
            const newPets = pets;
            for (let j = pets.length; j > 0; j--) {
                let randInd = Math.floor(Math.random() * j);
                const randElem = newPets.splice(randInd, 1)[0];
                newPets.push(randElem);
            }
            tempArr = [...tempArr, ...newPets];
        }
        return tempArr;
    })();

    fullPetsList = sort863(fullPetsList);
    createPets(fullPetsList);
};

const createPets = (list) => {
    cardsContainer.innerHTML += createElements(list); 
};

const createElements = (list) => {
    let str = '';
    for(let i = 0; i < list.length; i++) {
        str += `
        <div class="pets__card">
            <div class="pets__card_img"><img src="../../assets/images/pets/${list[i].img}" alt="${list[i].name}"></div>
                <div class="pets__card-content">
                    <h4 class="pets__card_title">${list[i].name}</h4>
                    <button class="pets__card_button">Learn more</button>
            </div>
        </div>
        `;
    }
    return str;
}

request.send();

const sort863 = (list) => {
    let length = list.length;

    for (let i = 0; i < (length / 6); i++) {
        const stepList = list.slice(i * 6, (i * 6) + 6);

        for (let j = 0; j < 6; j++) {
            let duplicateItem = stepList.find((item, index) => {
                return (item.name === stepList[j].name && index !== j);
            });
            if (duplicateItem !== undefined) {
                let index = (i * 6) + j;
                let which8OfList = Math.trunc(index / 8);
                list.splice(which8OfList * 8, 0 , list.splice(index, 1)[0]);
                i -= 2;
                break;
            }
        }
    }
    return list;
};

const menu = document.querySelector('.list-pets');
const menuItem = document.querySelectorAll('.list-pets__item');
const hamburger = document.querySelector('.hamburger');
const hidden = document.querySelector('.block');
const aboutShelter = document.querySelector('.about');

// close-open hamburger menu
function toggleHamburgerMenu() {
  hamburger.classList.toggle('hamburger-active');
  menu.classList.toggle('list-pets-active');
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

