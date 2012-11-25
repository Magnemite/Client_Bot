/* mafia_links.js */
/*global say, mafiathemes*/

module.exports = {
	links: function(playname, playmessage, channel) {
		if (playmessage.indexOf("[[") < playmessage.indexOf("]]")) {
				var b = playmessage.split("[[")[1].split("]]")[0].toLowerCase();
				if (b == "mafia theme checker" || b == "theme checker") {
					say("Mafia Theme Checker: http://icekirby.github.com/PO-stuff/mafiachecker/", channel)
					return true;
				}
				if (b == "mafia guide" || b == "mafia theme guide") {
					say("Mafia Theme Guide: http://pokemon-online.eu/forums/showthread.php?9793-How-To-Make-Mafia-Themes-(v2.0)", channel)
					return true;
				}
				if (b == "mafia documentation" || b == "theme documentation" || b == "mafia theme documentation") {
					say("Mafia Theme Documentation: http://pokemon-online.eu/forums/showthread.php?15833-Mafia-Theme-Documentation", channel)
					return true;
				}
				if (b == "mafia suggestion" || b == "mafia suggestions" || b == "mafia suggestion thread" || b == "mafia suggestions thread") {
					say("Mafia Suggestions Thread: http://pokemon-online.eu/forums/showthread.php?11018-Suggestion-Thread-Post-your-suggestions-for-mafia-here!", channel)
					return true;
				}
				if (b == "mafia command" || b == "mafia commands" || b == "mafia command thread" || b == "mafia commands thread") {
					say("Mafia Commands Thread: http://pokemon-online.eu/forums/showthread.php?16686-All-Mafia-Commands-In-One-Thread&p=217502#post217502", channel)
					return true;
				}
				if (b == "mafia review") {
					say("Mafia Review: http://pokemon-online.eu/forums/forumdisplay.php?109-Mafia-Review", channel)
					return true;
				}
				if (b == "theme critique" || b == "theme improvement") {
					say("Theme Critique/Improvement: http://pokemon-online.eu/forums/forumdisplay.php?114-Theme-Critique-and-Improvement", channel)
					return true;
				}
				if (mafiathemes.hasOwnProperty(b)) {
					say(mafiathemes[b].name + ": " + mafiathemes[b].link, channel);
					return true;
				}
			}
		if (playname.toLowerCase() == "pokeworldbw" && playmessage.indexOf("updatethemes") > -1) {
			say("/themeinfo", "Mafia")
			say("Mafia theme links were updated!", "PokeWorldBW", true)
			return true;
		}
	}
};