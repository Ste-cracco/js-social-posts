const posts = [
    {
        id: 1,
        contenuto : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        immagine : "https://unsplash.it/600/300?image=171",
        nomeProfilo : "Phil Mangione",
        immagineProfilo : "https://unsplash.it/300/300?image=15",
        likes : 71,
        data : "2021-06-25"
    },
    {
        id: 2,
        contenuto : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        immagine : "https://unsplash.it/600/300?image=172",
        nomeProfilo : "Marco Zuckembergo",
        immagineProfilo : "https://unsplash.it/300/300?image=15",
        likes : 180,
        data : "2021-06-25"
    },
    {
        id: 3,
        contenuto : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        immagine : "https://unsplash.it/600/300?image=173",
        nomeProfilo : "Antonio Traversone",
        immagineProfilo : "https://unsplash.it/300/300?image=15",
        likes : 122,
        data : "2021-06-25"
    },    
]

const arrayPost = []

for (let i = 0; i < posts.length; i++) {    
    arrayPost.push(posts[i])
}
console.log(arrayPost)

// const {immagineProfilo, nomeProfilo} = posts

// console.log(immagineProfilo, nomeProfilo)

const containerPostEl = document.querySelector('.container_post')

posts.forEach((element) => {
    const divPostEl = document.createElement('div');
    divPostEl.classList.add('post')
    const divTitoloPostEl = document.createElement('div');
    divTitoloPostEl.classList.add('titolo_post')

    let src = element.immagineProfilo 
    const imgElement = document.createElement('img');
	imgElement.src = src
    const imgProfilo = (`${element.immagineProfilo} `)
    imgElement.append(imgProfilo)
    divTitoloPostEl.append(imgElement)

    const nomeProfilo = (`${element.nomeProfilo} `)
    containerPostEl.append(divPostEl)
    divPostEl.append(divTitoloPostEl)
    divTitoloPostEl.append(nomeProfilo)
    divPostEl.append(divTitoloPostEl)
    

    const divContenutoEl = document.createElement('div');
    divContenutoEl.classList.add('contenuto_post')
    const contenutoPost = (`${element.contenuto} `)
    divContenutoEl.append(contenutoPost)
    divPostEl.append(divContenutoEl)
   

    let srcPost = element.immagine
    const divImgPost = document.createElement('img');
    divImgPost.classList.add('immagine_post')
    divImgPost.src = srcPost
    const immaginePost = (`${element.immagine} `)
    divImgPost.append(immaginePost)
    divPostEl.append(divImgPost)

    const divLikes = document.createElement('div');
    divLikes.classList.add('container_likes')
    const buttonLikes = document.createElement('button')
    buttonLikes.classList.add('button_likes')
    const textLikes = document.createElement('span')

    divPostEl.append(divLikes)
    divLikes.append(buttonLikes)
    divLikes.append(textLikes)

    buttonLikes.innerHTML += "Mi Piace"
    textLikes.innerHTML += `Piace a ${element.likes}`
  
})
