async function getFuturamaQs(e) {
    e.preventDefault();

    const url = `https://api.sampleapis.com/futurama/questions`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
    
}

$("button").on("click", getFuturamaQs);