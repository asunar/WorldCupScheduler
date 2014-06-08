var TeamListView = function(adapter) {

    this.initialize = function() {
        this.el = document.createElement("div");
    };


    this.render = function() {
	var style = "style='background-color:#00CD00;color: white;font-weight:bold; font-family: helvetica; width:100%;  font-size: medium'";
	var template = "<table id='container' border='0' " + style + " > \
			{{# .}} \
				<tr style='border-bottom: 1px solid #DCDCDC;'> \
				<td style='text-align:right'><div id='{{ code }}' /></td> \
				<td >{{ name }}</td> \
				<td style='text-align:left'><button id='{{ code }}' value='Test'>Matches</button></td> \
				</tr> \
			{{/.}} \
			</table>"; 

	var teamListTemplate = Handlebars.compile(template);
        this.el.innerHTML = teamListTemplate(adapter.getTeams());
	this.wireUpEvents();
        return this.el;
    };

    this.wireUpEvents = function() {
	var buttons = this.el.getElementsByTagName('button');
	// convert nodelist into an array
    	var matchesButtons = Array.prototype.slice.call(buttons, 0);

	var that = this;
	matchesButtons.forEach(function(button){
		var code = button.id;
		button.onclick = function(e) {
		var matchDaysByTeam = adapter.getMatchDaysByTeam(code);
		var matchListView = new MatchListView(matchDaysByTeam);
		that.el.innerHTML = '';
		that.el.innerHTML = matchListView.render().innerHTML;
		};
	});
    }

    this.initialize();
}