const baseURL = 'https://api.tvmaze.com/';

const endpoints = {
    shows: 'shows'
};

function getAllShows() {
    fetch(`${baseURL}${endpoints.shows}`, {
        method: 'GET'
    }).then((response) =>{
       return response.json();
    }).then((data) =>{
        const shows = document.querySelector('.shows')
        data.forEach(show=>{
            const show_block = `
                <div class= "show_block">
                    <div class="image">
                        <img src="${show.image.medium}" alt=""/>
                    </div>
                
                    <h3>Name cinema:${show.name}</h3>
                    <h3>Rating:${show.rating.average}</h3>
                    <h3>Genres:${show.genres}</h3>
                    <h3>Language:${show.language}</h3>
                    <h3>Data:${show.ended}</h3>
                    <button>
                    <a href="${show.officialSite}"  target="_blank">
                    More
                    </a>
                    </button>
                </div>
                `;
            shows.innerHTML += show_block;


        })
    })
}


getAllShows();



let select = document.querySelector('select')
let button = document.querySelector('button');
button.addEventListener('click',function () {
    if (select.value === '1') {
        alert("не смог сделать фильтр")}
    else {alert('Фильтр не работает')}

})