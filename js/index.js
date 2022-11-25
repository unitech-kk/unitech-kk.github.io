window.onpageshow = function(event) {
	if (event.persisted || document.getElementById("menu-btn-check").checked) {
		 window.location.reload();
	}
};

new Vivus("tekkotsu", {
    duration: 100,
    start: "autostart",
    type: "scenario"
});