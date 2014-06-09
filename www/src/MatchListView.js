var MatchListView = function(matchesToDisplay) {

    this.initialize = function() {
        this.el = document.createElement("div");
    };

    this.render = function() {
	var style = "style='background-color:#00CD00;color: white;font-weight:bold; font-family: helvetica; width:100%;  font-size: medium'";
	var template = "{{# .}} \
			<div style='border-bottom: solid 1px #474747;' >{{ date }} </div> \
			<table id='container' " + style + " > \
			{{#matches}} \
				<tr style='border-bottom: 1px solid #DCDCDC;'> \
				<td>{{ group }}</td> \
				<td style='width:5%;text-align:right'><div id='{{ team1Code }}' /></td> \
				<td style='width:40%'>{{ team1Name }}</td> \
				<td style='width:5%;text-align:center'>{{ time }}</td> \
				<td style='width:40%;text-align:right'>{{ team2Name }}</td> \
				<td style='width:5%'><div id='{{ team2Code }}' /></td> \
				<td style='width:5%'><i class='fa fa-plus square'></td> \
				</tr> \
			{{/matches}} \
			</table> \
			{{/ .}} ";

	var matchListTemplate = Handlebars.compile(template);
	var matchDaysToDisplay = [];

	matchesToDisplay.forEach(function(md) {
		matchDaysToDisplay.push({"date": formatDate(new Date(md.date)),"matches": md.matches});
	});
        this.el.innerHTML = matchListTemplate(matchDaysToDisplay);
        return this.el;
    };


    this.initialize();
}
