//console.log('Hello world');

const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];



//- Cicliamo all'interno dell'array Team e ci logghiamo le info di ogni singolo member 

for (let i = 0; i < team.length; i++) {
    const member = team[i];

    let rowEl = document.querySelector('.row')

    let col4 = document.createElement('div')

    col4.classList.add('col-4')

    rowEl.append(col4)

    let card = document.createElement('div')

    card.classList.add('card', 'my-3')

    col4.append(card)


    //console.log(member.name, member.role, member.image);

    for (const key in member) {
        //console.log(member[key]);
        let info = member[key]


        //- Stampiamo all'interno della DOM queste info per ogni member

        ///BONUS///
        //- Ci creiamo una let markup dove all'interno prendiamo parte del codice HTML e con il tamplate litteral inseriamo la variabile che contiene la foto
        //- Modifichiamo il markup per poter organizzare le card dei member

        if (info === member.image) {
            let markup = `<img src="./assets/img/${info}" alt="">`;
            card.insertAdjacentHTML('beforeend', markup);
        } else if (info === member.name) {
            let markup = `<h2 class="text-center py-3">${info}</h2>`;
            card.insertAdjacentHTML('beforeend', markup);
        } else {
            let markup = `<p class="text-center py-1">${info}</p>`;
            card.insertAdjacentHTML('beforeend', markup);
        }
    }

}



