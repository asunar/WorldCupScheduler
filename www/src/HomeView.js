var HomeView = function(adapter) {

    this.initialize = function() {
        this.el = document.createElement("div");
    };

    this.render = function() {
	var style = "style='background-color:#00CD00; color:white; font-weight: bolder; font-family: helvetica;border-collapse:collapse;border-color:white; width:100%; height:100%; font-size: larger'";    
	var template = "<table border='1' " + style + " > \
				{{#each rows}} \
				<tr> \
					{{#.}} \
					<td class='gridMenuItem'> \
						<a href={{ url }} style='color:white;text-decoration:none'> \
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
