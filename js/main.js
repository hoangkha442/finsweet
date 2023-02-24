// nav__bar responsive
hamburger = document.querySelector('.hamburger');
hamburger.onclick = function(){
    navBar = document.querySelector('.nav__bar');
    navBar.classList.toggle('active');
}

// CHART

var ctx = document.getElementById('doughnut').getContext('2d');
var doughnut = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [40, 35, 10, 10, 5],
            backgroundColor: [
                'rgb(190, 243, 192)',
                'rgb(172, 148, 241)',
                'rgb(255, 240, 202)',
                'rgb(249, 207, 100)',
                'rgb(243, 143, 191)',

            ],
            
            borderColor: [
                'rgb(190, 243, 192)',
                'rgb(172, 148, 241)',
                'rgb(255, 240, 202)',
                'rgb(249, 207, 100)',
                'rgb(243, 143, 191)',
            ],
            borderWidth: 1
        }]
    },
});

