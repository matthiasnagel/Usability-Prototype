// JavaScript Document

jQuery(document).ready(function(){
	$("#chat_accordion").accordion({
		collapsible: true,
		active: false
	});
	$("#groups_accordion").accordion({
		collapsible: true,
		active: false
	});
});

var chat = {
	testMessage : function(id) {
		var input = "#chat_input" + id;
		input = $(input).val();
		var output = "#chat_box" + id;
		output = $(output);
		
		var txt = "";
		txt = '<p><span class="green_txt">Du: </span>' + input + '</p>';
		
		output.append(txt);
		
		var answerer = "#chat_name" + id;
		answerer = $(answerer).text();
		
		txt = '<p><span class="blue_txt">' + answerer + ': </span>Alles klar!!</p>';
		
		setTimeout(function() {
        	output.append(txt);
    	}, 1000);
	}
}