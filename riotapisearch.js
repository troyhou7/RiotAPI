
async function getChampion(){
    const root = document.getElementById("root");
    const search = document.getElementById("search");
    let name = search.value.toLowerCase();
    name = name.charAt(0).toUpperCase() + name.slice(1);

    console.log(name);
    const httpResponse = await fetch(`http://ddragon.leagueoflegends.com/cdn/11.4.1/data/en_US/champion/${name}.json`);
    
    const body = await httpResponse.json();
    console.log(body);

    console.log(body.data[name].spells);

    let listHtml = ``;
    for(let spell of body.data[name].spells){
        const spellName = spell.name;
        const spellDesc = spell.description;
        listHtml += `<li><h3>${spellName}</h4> <br>
                     <p>${spellDesc}</p></li>`;
    }
    root.innerHTML = listHtml;

}