/* links.js for Magnemite */
/*global say, mafiathemes*/

module.exports = {
	init: function() { },
	message: function(playname, playmessage, channel) {
		if (playmessage.indexOf("[[") < playmessage.indexOf("]]")) {
			var res = playmessage.split("[[")[1].split("]]")[0].toLowerCase();
			var params = res.split(":");
			if (res == "mafia theme checker" || res == "theme checker") {
				say("Mafia Theme Checker: http://icekirby.github.com/PO-stuff/mafiachecker/", channel);
				return true;
			}
			if (res == "mafia guide" || res == "mafia theme guide") {
				say("Mafia Theme Guide: http://pokemon-online.eu/forums/showthread.php?9793-How-To-Make-Mafia-Themes-(v2.0)", channel);
				return true;
			}
			if (res == "mafia documentation" || res == "theme documentation" || res == "mafia theme documentation" || res == "mafia documentation thread") {
				say("Mafia Theme Documentation: http://pokemon-online.eu/forums/showthread.php?15833-Mafia-Theme-Documentation", channel);
				return true;
			}
			if (res == "mafia suggestion" || res == "mafia suggestions" || res == "mafia suggestion thread" || res == "mafia suggestions thread") {
				say("Mafia Suggestions Thread: http://pokemon-online.eu/forums/showthread.php?11018-Suggestion-Thread-Post-your-suggestions-for-mafia-here!", channel);
				return true;
			}
			if (res == "mafia command" || res == "mafia commands" || res == "mafia command thread" || res == "mafia commands thread") {
				say("Mafia Commands Thread: http://pokemon-online.eu/forums/showthread.php?16686-All-Mafia-Commands-In-One-Thread&p=217502#post217502", channel);
				return true;
			}
			if (res == "mafia review" || res == "mafia review forum") {
				say("Mafia Review: http://pokemon-online.eu/forums/forumdisplay.php?109-Mafia-Review", channel);
				return true;
			}
			if (res == "theme critique" || res == "theme improvement" || res == "theme critique thread" || res == "theme improvement thread") {
				say("Theme Critique/Improvement: http://pokemon-online.eu/forums/forumdisplay.php?114-Theme-Critique-and-Improvement", channel);
				return true;
			}
			if (res == "mafia tutoring" || res == "mafia tutoring thread") {
				say("Mafia Tutoring: http://pokemon-online.eu/forums/showthread.php?16801-Mafia-Tutoring-Sign-up-to-be-tutored!", channel);
				return true;
			}
			if (mafiathemes.hasOwnProperty(res)) {
				say(mafiathemes[res].name + ": " + mafiathemes[res].link, channel);
				return true;
			}
			if (channel == client.channelId("Project Mafia")) return false;
			if (sys.pokeNum(res) !== undefined || sys.pokeNum(params[0]) !== undefined) {
				var shiny, back;
				for (var i=1; i<params.length; i++) {
					var parameter = params[i].toLowerCase();
					if (parameter == "shiny")
						shiny = true;
					if (parameter == "back")
						back = true;
				}
				var pokemon = (params.length > 1 ? sys.pokemon(sys.pokeNum(params[0])) : sys.pokemon(sys.pokeNum(res)));
				var pokeNum = sys.pokeNum(pokemon);
				if (pokeNum.toString().length < 3) {
					pokeNum = (pokeNum.toString().length == 1 ? "00"+pokeNum : "0"+pokeNum);
				}
				var Send = [];
				if (shiny) Send.push("Shiny ");
				Send.push(pokemon);
				if (back) Send.push("'s back sprite");
				Send.push(": http://pokemon-online.eu/images/pokemon/black-white/animated/");
				if (back) Send.push("back/");
				if (shiny) Send.push("shiny/");
				Send.push(sys.pokeNum(pokemon) + ".gif");
				say(Send.join(""), channel);
				return true;
			}
		}
	}
};