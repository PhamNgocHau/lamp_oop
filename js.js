var Lamp1 = function (status, battery, name) {
    this.status = status;
    this.battery = battery;
    this.name = name;

    this.checkStatus = function () {
        let powerLamp = document.getElementById('on' + this.name);
        if (this.battery > 0) {
            if (this.status === 'on') {
                this.status = 'off';
            } else {
                this.status = 'on';
            }
            if (this.status === 'on') {
                powerLamp.innerHTML = 'on';
            } else {
                powerLamp.innerHTML = 'off';
            }
            this.battery--;
        } else {
            alert('No energy left');
        }
    }
}
let status = 'off';
let name = "Torch";
let battery = 10;
let lamp = new Lamp1(status, battery, name);

function onLamp(name) {
    name.checkStatus();
    var images = document.getElementById('img');
    if (name.status === 'off') {
        images.src = 'lamp_off.jpg';
    } else {
        images.src = 'lamp_on.jpg';

    }
}
function addEnery(name) {
        if(name.battery < 100){
        name.battery+= 10;
        alert(name.battery);
    }
}