const buttonsButAny = document.querySelectorAll('.genButton');
const typeButtons = document.querySelectorAll('.typeBtn');
const input = document.querySelector('#search');
let data = [];

const dataList = (data) => {
    document.querySelector('.data').innerHTML = data.map((item) => {
        const typeList = item.types.map(type => {
            const typeName = type.type.name;
            return `<span class="typeIcon ${typeName}"></span>`}).join(" ");
        return `<div>
        <img src="${item.sprites.other.dream_world.front_default}"/>
        <p>${typeList}</p>
        <h2>${item.name}</h2>
        </div>`}).join('')
};

buttonsButAny.forEach((button, i) => {
  button.addEventListener('click', () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${generation[i].limit}&offset=${generation[i].offset}`)
    .then(response => response.json())
    .then(json => {
        const fetches = json.results.map(item => {
            return fetch (item.url).then(res => res.json())
        })
        Promise.all(fetches).then(res => {
            data = res;
            dataList(data);
          })
  });
});
})

let generation = [
    { limit: 151, offset: 0},
    { limit: 100, offset: 151},
    { limit: 135, offset: 251},
    { limit: 107, offset: 386},
    { limit: 156, offset: 493},
    { limit: 72, offset: 649},
    { limit: 88, offset: 721},
    { limit: 96, offset: 809},
    { limit: 110, offset: 905},
]

const searchPok = (e) => {
    const inputValue = e.target.value.toLowerCase();
    let filteredData = [];
    if (data.length > 0 && inputValue.length >0){
        filteredData = data.filter((item) => {
        return item.name.toLowerCase().includes(inputValue);
    });
    dataList(filteredData);
    } else {
        dataList(data);
    }
};

const filterByType = (typeName) => {
    let filteredData = [];
    if (data.length > 0 && typeName.length > 0) {
      filteredData = data.filter((item) => {
        return item.types.some((type) => type.type.name === typeName);
      });
      dataList(filteredData);
      console.log(dataList);
    } else {
      dataList(data);
    }
  };
  
  typeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const typeName = button.textContent.toLowerCase();
      filterByType(typeName);
      console.log(typeName)
    });
  });

input.addEventListener('input', searchPok);