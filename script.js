function switchgif(gifnum, newpath, first) {
    if (first) {
        if (document.getElementById("master").checked) {
            masterswitch(newpath);
            return;
        } else if (document.getElementById("rockies").checked) {
            switchrockies(newpath);
            return;
        } else if (document.getElementById("prairies").checked) {
            switchprairies(newpath);
            return;
        }
    }

    var image;
    switch (gifnum) {
        case 1:
            image = document.getElementById("gif-1");
            break;
        case 2:
            image = document.getElementById("gif-2");
            break;    
        case 3:
            image = document.getElementById("gif-3");
            break;                
        case 4:
            image = document.getElementById("gif-4");
            break;
        case 5:
            image = document.getElementById("gif-5");
            break;
        case 6:
            image = document.getElementById("gif-6")
            break;
        default:
            break;
    }
    image.src = newpath;    
}


function masterswitch(newpath) {
    switchgif(1, newpath, false);
    switchgif(2, newpath, false);
    switchgif(3, newpath, false);
    switchgif(4, newpath, false);
    switchgif(5, newpath, false);
    switchgif(6, newpath, false);
}

function switchrockies(newpath) {
    switchgif(1, newpath, false);
    switchgif(2, newpath, false);
    switchgif(3, newpath, false);
}

function switchprairies(newpath) {
    switchgif(4, newpath, false);
    switchgif(5, newpath, false);
    switchgif(6, newpath, false);
}