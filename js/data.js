const card = document.querySelector(".card-item")


fetch("../data/alis/ofisler/ofisler.json")
.then((response) => response.json())
.then ((data) => {
    console.log(data)
})