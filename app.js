const dayjs = require('dayjs');
var utc = require("dayjs/plugin/utc");
const fonts = require('google-fonts')
var timezone = require("dayjs/plugin/timezone");
const MicroModal = require('micromodal');

    window.addEventListener('DOMContentLoaded', () => { MicroModal.init() });
     
    fonts.add({
        'Poppins': ['900','600','200italic']
    })
   dayjs.extend(utc);
    dayjs.extend(timezone);



    let timeZoneO = document.getElementById('timeZone');
    
    let timeO = document.getElementById('currentTime');
    let dateO = document.getElementById('date');
    let select =  document.getElementById('select');

    var myInterval;

    

    const App = (userTimeZone) => {
        timeZoneO.textContent =  userTimeZone;
        myInterval = setInterval(() => {
            timeO.textContent = dayjs().tz(userTimeZone).format('HH:mm:ss');
        }, 1000); 
        dateO.textContent = dayjs().tz(userTimeZone).format(`dddd, DD MMM, YYYY`);
    }

        App(dayjs.tz.guess())
const selecttag = document.querySelector('#select');
selecttag.addEventListener('change', (e) => {
    console.log(e.target.value);
    const value = e.target.value;
    clearInterval(myInterval);
           !value ?  App(dayjs.tz.guess()) : App(value); 
}, { passive: true });

 
   
   