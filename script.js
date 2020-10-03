
function run(){
    navigator.bluetooth.requestDevice({
    acceptAllDevices: true,
    optionalServices: ['battery_service']
  })
  .then(device => { document.getElementById('heading').innerText = device.name} )
  .catch(error => { console.log(error); });
  
//   There is nothing at the moment &#129299; 
}
