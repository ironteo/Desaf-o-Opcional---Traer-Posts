const urlBase = 'https://jsonplaceholder.typicode.com/posts';

const request = async (url) => {
     const results = await fetch(url);
     const response = await results.json();
     return response;
}

const getPost = async () => {
    const url = `${urlBase}`;
    return request(url);
}

getPost().then( resp => { 
    console.log(resp);
    const escribir = document.getElementById('post-data');
    resp.forEach(element => {
        const title = element.title;
        const body = element.body;
        escribir.innerHTML = `
        <ul>
            <li>${title} \n
            ${body} </li>
        </ul>
    `;
    console.log('title', title);
    console.log('body', body)
    });
}).catch(err => console.log(err))


