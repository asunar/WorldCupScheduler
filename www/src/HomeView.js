var HomeView = function(adapter) {

    this.initialize = function() {
        this.el = document.createElement("div");
    };

    this.render = function() {
	var template = "<table border='1' class='gridMenuContainer' > \
				{{#each rows}} \
				<tr> \
					{{#.}} \
					<td class='gridMenuItem'> \
						<a href={{ url }} class='navBarItem' > \
						<i class='{{ icon }}'></i><div>{{ label }}</div> \
						</a> \
					</td> \
					{{/.}} \
				</tr> \
				{{/each}} \
			</table>";

	var gridMenuTemplate = Handlebars.compile(template);
        this.el.innerHTML = gridMenuTemplate(adapter.getGridMenuItems());
        return this.el;
    };



    this.initialize();
};
