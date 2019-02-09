require("../scss/style.scss");
require("../index.html");
import * as $ from "jquery/dist/jquery.min";
import * as mdc from "material-components-web";
import { MDCRipple } from "@material/ripple";

$(document).ready(function() {
    $(".toggler").on("click", function() {
        $(".exitedBtn").toggleClass("mdc-fab--exited");
    });
});

$(document).ready(function() {
    $(".iconToggle").each(function() {
        new mdc.iconButton.MDCIconButtonToggle(this);
    });
    $(".rippleEffect").each(function() {
        const iconToggleRipple = new MDCRipple(this);
        iconToggleRipple.unbounded = true;
    })
});