function submitForm(){
    // console.log("hello world");
    // window.alert("Login functionality is under development.");
    const location = document.getElementById('location').value;
    const comment = document.getElementById('comment').value;
    console.log(comment);

    fetch('http://localhost:3000/submit', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "location": location , "comment": comment})
    })
    .then(response => response.json())
    .then(response => console.log(JSON.stringify(response)))


}   