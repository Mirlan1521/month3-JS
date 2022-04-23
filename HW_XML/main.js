let baseURL = 'https://api.tvmaze.com/shows'

function sendRequest(method, baseURL){
  return new Promise((resolve, reject) =>{
    const xhr = new XMLHttpRequest()
    xhr.open(method, baseURL)
    xhr.responseType = 'json'
    xhr.onload = () => {
  if (xhr.status >=400){
    reject(xhr.response)
  }else{
    resolve(xhr.response)
  }
}
xhr.onerror = ()=> {
    reject(xhr.response)
}
xhr.send()
  })
}


sendRequest('GET', baseURL)
.then((data) =>{

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


