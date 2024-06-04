window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApiUrl = 'https://getazureresumeth.azurewebsites.net/api/GetResumeCounter?code=f4iE-zn1B7GlbbTE5ofEtPboZgdrdC7j8wxUZn8MXXoVAzFuC-pl8Q%3D%3D'
const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter'; 

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl)
        .then(response => {
            return response.json();
        })
        .then(response => {
            console.log("Website called function API.");
            count = response.count;
            document.getElementById("counter").innerText = count;
        })
        .catch(error => {
            console.log(error);
        });
    return count;
};
