var TeamListView = function(adapter) {

    this.initialize = function() {
        this.el = document.createElement("div");
    };

    this.render = function() {
	var style = "style='background-color:#00CD00;color: white;font-weight:bold; font-family: helvetica; width:100%;  font-size: medium'";
	var template = "<table " + style + " > \
			{{# .}} \
				<tr style='border-bottom: 1px solid #DCDCDC;'> \
				<td style='text-align:right'><img src=images/flags/{{ code }}.png /></td> \
				<td >{{ name }}</td> \
				</tr> \
			{{/.}} \
			</table>"; 

	var teamListTemplate = Handlebars.compile(template);
        this.el.innerHTML = teamListTemplate(adapter.getTeams());
        return this.el;
    };



    this.initialize();
}
