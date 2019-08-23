function openbutton(){
    document.getElementById("myOverlay").style.display="block";
}
function closesearch(){
    document.getElementById("myOverlay").style.display="none";
}

document.getElementById('post').addEventListener('click',getPost);



function getPost(){
    name=document.getElementById('name').value;
    document.getElementById("myOverlay").style.display="none";
    fetch('https://restcountries.eu/rest/v2/all?fields=name;capital;population;flag')
    .then((res) => res.json())
    .then((data) => {
        const output=data.filter(post=>post.name===name);
        console.log(output);
        let countrysearch='';
        output.forEach(function(cuntsel){
            countrysearch+=`
            <form action ="action.html" style="background-color:white">
                <h3>NAME: ${cuntsel.name}</h3>
                <p>CAPITAL: ${cuntsel.capital}</p>
                <p>POPULATION: ${cuntsel.population}</p>
                <img src="${cuntsel.flag}" width="100px" height="70px"><br>
                <button type="submit">Click here to expand</button>
            </form>
            `;
        });
        document.getElementById('output').innerHTML = countrysearch;
    })
}