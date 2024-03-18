//creare un array di oggetti utilizzando i dati forniti

const teamMembers = [
    {
        name: `Wayne Barnett`,
        role: `Founder & CEO`,
        picture: `wayne-barnett-founder-ceo.jpg`
    },
    {
        name: `Angela Caroll`,
        role: `Chief Editor`,
        picture: `angela-caroll-chief-editor.jpg`
    },
    {
        name: `Walter Gordon`,
        role: `Office Manager`,
        picture: `walter-gordon-office-manager.jpg`
    },
    {
        name: `Angela Lopez`,
        role: `Social Media Manager`,
        picture: `angela-lopez-social-media-manager.jpg`
    },
    {
        name: `Scott Estrada`,
        role: `Developer`,
        picture: `scott-estrada-developer.jpg`
    },
    {
        name: `Barbara Ramos`,
        role: `Graphic Designer`,
        picture: `barbara-ramos-graphic-designer.jpg`
    }
]


// - recupero dal DOM l'elemento div con classe team_info
const teamInfoElement = document.querySelector(".team_info")

//stampiamo su console le informazioni fornite oer ogni membro del team
// - utilizzo un ciclo for per ciclare quindi l'array

for(let i = 0; i < teamMembers.length; i++){
    
    const teamMember = teamMembers[i]
    
    //stampo le informazioni in console
    // console.log(teamMember)
    
    // - creo nel DOM l'elemento paragraphElement
    const paragraphElement = document.createElement(`p`)

    //inserisco le informazioni all'interno dell'elemento paragraphElement con il metodo innerHTML
    paragraphElement.innerHTML = `
    Name: ${teamMember.name} <br>
    Role: ${teamMember.role} <br>
    `
    //stampo nel DOM usando il metodo append sull'elemento con classe team_info
    teamInfoElement.append(paragraphElement)

    //creo l'element img nel DOM
    const image = document.createElement(`img`)
    //setto l'attributo src all'elemento img
    image.setAttribute("src", `./img/${teamMember.picture}`)
    //stampo nel DOM usando il metodo append in ogni paragrafo la foto con la src diversa
    paragraphElement.append(image)
}



