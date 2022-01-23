function load() {
    console.log("Hello!!!!!!!!!")
    let url = 'https://accc-128-195-97-139.ngrok.io/'
fetch(url).then(res => res.json()).then(response => {
  console.log(response);
  document.getElementById('display').innerHTML = response['content'];
});
}
let counter = 0;
function click(){
  counter = counter + 1;
  document.getElementById('counter').innerHTML = counter;
}