window.onload = function () {
    //body_content("m_main");
}

function body_content(menu_select) {
    var vals = new Array("hidden", "hidden", "hidden", "hidden", "hidden", "hidden");
    switch (menu_select) {
        case "m_main":
            //document.getElementById("banner_main").hidden = false;
            vals[0] = "visible";
            break;
        case "m_org_story":
            //document.getElementById("org_story").hidden = false;
            vals[2] = "visible";
            break;
        case "m_hot_topic":
            //document.getElementById("hot_topic").hidden = false;
            vals[3] = "visible";
            break;
        case "m_beautiful_art":
            //document.getElementById("beautiful_art").hidden = false;
            vals[4] = "visible";
            break;
        case "m_support":
            //document.getElementById("support").hidden = false;
            vals[5] = "visible";
            break;
        case "login_btn":
            //document.getElementById("login").hidden = false;
            vals[1] = "visible";
            break;
        default:
            //document.getElementById("banner_main").hidden = false;
            vals[0] = "visible";
            break;
    }

    document.getElementById("banner_main").style.visibility = vals[0]; //0
    document.getElementById("login").style.visibility = vals[1];      //1
    document.getElementById("org_story").style.visibility = vals[2];  //2
    document.getElementById("hot_topic").style.visibility = vals[3];  //3
    document.getElementById("beautiful_art").style.visibility = vals[4]; //4
    document.getElementById("support").style.visibility = vals[5];   //5
}
