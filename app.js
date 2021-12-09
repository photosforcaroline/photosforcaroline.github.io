window.onload = function() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navBar = document.getElementById('navBar');
    const body = document.getElementById('body');

    const IDs = ['sep', 'oct', 'nov', 'dec'];
    const elements = [];

    let menuOpen = false;



    for(var i = 0; i < IDs.length; i++) {
        elements.push(document.getElementById(IDs[i]));
    }

    hamburgerBtn.addEventListener('click', () => {
        console.log("Button clicked");
        if(!menuOpen) {
            hamburgerBtn.classList.add('open');
            menuOpen = true;
            console.log("menu open!");
        } else {
            hamburgerBtn.classList.remove('open');
            menuOpen = false;
            console.log("menu closed!")
        }
        navBar.classList.toggle('open');
        // hamburgerBtn.classList.toggle('open');

        // if(menuOpen) {
        //     menuOpen = false;
        // } else {
        //     menuOpen = true;
        // }
    })

    if(navBar.classList == 'open') {
        // body.css("overflow", "hidden");
        console.log("open");
        body.style.overflow = "hidden";
    }

    for(var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', () => {
                if(navBar.classList == 'open') {
                    navBar.classList = '';
                }
        })
    }

}