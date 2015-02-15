module.exports = function(epoch) {
	var secs = ((new Date()).getTime() / 1000) - epoch;
	Math.floor(secs);
	var minutes = secs / 60;
	secs = Math.floor(secs % 60);
	if (minutes < 1) {
		return secs + (secs > 1 ? ' seconds' : ' second');
	}
	var hours = minutes / 60;
	minutes = Math.floor(minutes % 60);
	if (hours < 1) {
		return minutes + (minutes > 1 ? ' minutes' : ' minute');
	}
	var days = hours / 24;
	hours = Math.floor(hours % 24);
	if (days < 1) {
		return hours + (hours > 1 ? ' hours' : ' hour');
	}
	var weeks = days / 7;
	days = Math.floor(days % 7);
	if (weeks < 1) {
		return days + (days > 1 ? ' days' : ' day');
	}
	var months = weeks / 4.35;
	weeks = Math.floor(weeks % 4.35);
	if (months < 1) {
		return weeks + (weeks > 1 ? ' weeks' : ' week');
	}
	var years = months / 12;
	months = Math.floor(months % 12);
	if (years < 1) {
		return months + (months > 1 ? ' months' : ' month');
	}
	years = Math.floor(years);
	return years + (years > 1 ? ' years' : ' years');
};
