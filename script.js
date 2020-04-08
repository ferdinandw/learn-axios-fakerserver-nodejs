// debugger;
axios.get('http://localhost:3000/contacts')
    .then((response) => {
        console.log(response)
        const listsHTML = document.querySelector("#contacts")
        response.data.forEach(item => {
            const { name, age, id} = item
            const itemHTML = `<li>
            Name : ${name}
            <br>
            Age : ${age} Tahun 
                <button onclick"ubah(${id})">edit</button> 
                <button onclick="hapus(${id})")>hapus</button>
            </li>`;
            listsHTML.innerHTML += itemHTML;
        })
    })
    .catch((pesanError) => {
        console.error(pesanError);
    })
document.getElementById('simpanContact').addEventListener('submit',function(event){
    event.preventDefault();
    const name = document.getElementsByName('name')[0].value;
    const age = document.getElementsByName('age')[0].value;

    axios.post('http://localhost:3000/contacts', {
        data:{
            name,
            age,
            
        }
    })
    .then(response => {
        console.log(response);
        window.alert('berhasil menambah data');
    })
    .catch(pesanError =>{
        console.error(pesanError)
    })
})

const hapus = id =>{
    axios.delete(`http://localhost:3000/contacts/${id}`)
}

const ubah = id =>{
    const contact = data.find(item =>{
        return item.id === id
    })

    if (contact){
        const name = window.prompt('Name', contact.name);
        const age = window.prompt('Age',contact.age);
        axios.put(`http://localhost:3000/contacts/${id}`,{
            name,
            age
        });
    }
}
    