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
        immagine : "https://unsplash.it/600/300?image=171",
        nomeProfilo : "Marco Zuckembergo",
        immagineProfilo : "https://unsplash.it/300/300?image=15",
        likes : 180,
        data : "2021-06-25"
    },
    {
        id: 3,
        contenuto : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        immagine : "https://unsplash.it/600/300?image=171",
        nomeProfilo : "Antonio Traversone",
        immagineProfilo : "https://unsplash.it/300/300?image=15",
        likes : 122,
        data : "2021-06-25"
    },    
]

const {immagineProfilo, nomeProfilo} = posts

console.log(immagineProfilo, nomeProfilo)

const containerPostEl = document.querySelector('.container_post')

posts.forEach(() => {
    const divTitoloPostEl = document.createElement('div');
    divTitoloPostEl.classList.add('post')
    divTitoloPostEl.append(immagineProfilo, nomeProfilo)
    containerPostEl.append(divTitoloPostEl)
})
