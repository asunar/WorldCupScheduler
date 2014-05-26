var MatchListView = function(adapter, date) {

    this.initialize = function() {
        this.el = document.createElement("div");
    };

    this.render = function() {
	var style = "style='background-color:#00CD00;color: white;font-weight:bold; font-family: helvetica; width:100%;  font-size: medium'";
	var template = "{{# .}} \
			<div style='border-bottom: solid 1px #474747;' >{{ date }} </div> \
			<table " + style + " > \
			{{#matches}} \
				<tr style='border-bottom: 1px solid #DCDCDC;'> \
				<td style='width:5%;text-align:right'><img src=images/flags/{{ team1Code }}.png /></td> \
				<td style='width:40%'>{{ team1Name }}</td> \
				<td style='text-align:center;width:10%'>{{ time }}</td> \
				<td style='text-align:right;width:40%'>{{ team2Name }}</td> \
				<td style='width:5%'><img src=images/flags/{{ team2Code }}.png /></td> \
				</tr> \
			{{/matches}} \
			</table> \
			{{/ .}} ";

	var matchListTemplate = Handlebars.compile(template);
	var matchesToDisplay = date === undefined || date === null ? adapter.getAllMatches() : adapter.getMatchesByDate(date); 
        this.el.innerHTML = matchListTemplate(matchesToDisplay);
        return this.el;
    };



    this.initialize();
}
