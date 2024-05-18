window.onscroll = function() { stickyMenu() }

function stickyMenu() {
    if(document.documentElement.scrollTop > 60) {
        document.querySelector("header").classList.add("sticky")
        document.getElementById("searchNavWrapper").classList.add("smallSearchBar")
        document.getElementById("mainLinkMenu").classList.add("displayNone")
    } else {
        document.querySelector("header").classList.remove("sticky")
        document.getElementById("searchNavWrapper").classList.remove("smallSearchBar")
        document.getElementById("mainLinkMenu").classList.remove("displayNone")
    }
}