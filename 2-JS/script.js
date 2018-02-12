const span = $("span");

span.each(function(index, element) {
	if (index % 2) {
		$(element).css('color', 'red');
	}
});
//===
// $(span:even).css('color', 'red');

$('p').each(function(index, element) {
	var button = '<button class="btn" data-tmp="' + index + '"></button>';
	$(element).append(button);
});

//Event handlers
$('button').click(function() {
	alert($(this).attr('data-tmp'));
});