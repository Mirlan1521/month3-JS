const baseUrl = 'https://api.tvmaze.com/';

const  endpoints = {
    shows: 'shows'
};



const  xhr = new XMLHttpRequest()

xhr.open('GET', `${baseUrl}${endpoints.shows}`);

xhr.onreadystatechange = (state)=> {
   if (xhr.readyState === 2){
       console.log('Request send...');
   }else if (xhr.readyState === 3){
       console.log('Loading...');
   }else if (xhr.readyState === 4) {
       console.log('Response');
   }
}

xhr.onload = (response) =>{
    console.log(response.target.status)
    console.log(response.target.statusText)
    console.log(response.target.response)
}

xhr.onerror = (response) => {
    console.log('Error in: ',response.timeStamp);
    console.log('Запросы нормально пиши');
}



xhr.onabort = (response) => {
    console.log(xhr.readyState, 'Aborting!!!')
}
xhr.send();
xhr.abort();

