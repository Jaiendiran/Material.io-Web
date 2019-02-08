require("../scss/style.scss");
require("../index.html");
import * as $ from "jquery/dist/jquery.min";
import "@material/mdc-fab/mdc-icon-button";

$(document).ready(function() {
    $(".toggler").on("click", function() {
        $(".exitedBtn").toggleClass("mdc-fab--exited");
    })
})