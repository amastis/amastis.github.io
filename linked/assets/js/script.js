function show(e) {
    if (e.classList.contains("fa-moon-o")) { //if there's a moon
        e.classList.remove("fa-moon-o"); //remove moon class icon
        e.classList.add("fa-sun-o"); //add sun class
        e.style.color = "rgb(255, 255, 255)";
        document.body.style.background = 'rgb(42, 42, 42)'; //The answer to life....
        document.querySelector('#userName').style.color = '#fff';

        let links = document.querySelectorAll('.link');
        links[0].style.filter = 'grayscale(100%)';
        for (let i = 0; i < links.length; i++) {
            links[i].style.filter = 'grayscale(100%)';
        }

        let circles = document.querySelectorAll('.circle');
        circles[0].style.filter = 'grayscale(100%)';
        for (let i = 0; i < circles.length; i++) {
            circles[i].style.filter = 'grayscale(100%)';
        }

    } else { //if there's a sun
        e.classList.remove("fa-sun-o"); //remove sun class icon
        e.classList.add("fa-moon-o"); //add moon class
        e.style.color = "#585858";
        document.body.style.background = 'rgb(243, 242, 242)';
        document.querySelector('#userName').style.color = 'rgb(99, 99, 99)';

        let links = document.querySelectorAll('.link');
        links[0].style.filter = 'grayscale(0%)';
        for (let i = 0; i < links.length; i++) {
            links[i].style.filter = 'grayscale(0%)';
        }

        let circles = document.querySelectorAll('.circle');
        circles[0].style.filter = 'grayscale(0%)';
        for (let i = 0; i < circles.length; i++) {
            circles[i].style.filter = 'grayscale(0%)';
        }
    }

}