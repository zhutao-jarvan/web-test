window.onload = function () {
    body_content("m_main");
}

function body_content(menu_select) {
    document.getElementById("banner_main").hidden = true;
    document.getElementById("login").hidden = true;
    document.getElementById("org_story").hidden = true;
    document.getElementById("hot_topic").hidden = true;
    document.getElementById("beautiful_art").hidden = true;
    document.getElementById("support").hidden = true;
    switch (menu_select) {
        case "m_main":
            document.getElementById("banner_main").hidden = false;
            break;
        case "m_org_story":
            document.getElementById("org_story").hidden = false;
            break;
        case "m_hot_topic":
            document.getElementById("hot_topic").hidden = false;
            break;
        case "m_beautiful_art":
            document.getElementById("beautiful_art").hidden = false;
            break;
        case "m_support":
            document.getElementById("support").hidden = false;
            break;
        case "login_btn":
            document.getElementById("login").hidden = false;
            break;
        default:
            document.getElementById("banner_main").hidden = false;
            break;
    }
}
