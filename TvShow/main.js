const baseURL = 'https://api.tvmaze.com/';

const endpoints = {
    shows: 'shows'
};

const state = {
    products: null
}

function getAllShows() {
    fetch(`${baseURL}${endpoints.shows}`, {
        method: 'GET'
    }).then((response) =>{
       return response.json();
    }).then((data) =>{
        state.products = data;
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

function filterShowsByGenre(genre){
    for(let show of state.products){
        if(!show.genres.find(g => g === genre)){
            state.products = state.products.filter(p => console.log(p.id, show.id))
        }
    }
    console.log(state.products)
}


let select = document.querySelector('select')
select.addEventListener('change',function () {
    if (select.value === '2') {
        filterShowsByGenre('crime')
    }
})