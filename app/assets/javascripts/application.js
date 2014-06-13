// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){
	$('#new_note').submit(function(){
		$.post($(this).attr('action'), $(this).serialize(),
			function(note){
				var note = "<div class='note'>" +
					"<h3>"+ note.title + "</h3>" +
					"<p>" + note.note + "</p>" +
					"<a href='notes/" + note.id +"' data-method='delete'>x</a>" +
				"</div>";
				$('#notes').append(note)
				$("input[type='text'], textarea").val('');
			}, 'json')
		return false
	})

	$('#notes').on('click', 'a', function(){
		var link = $(this);
		$.post($(this).attr('href'), {'_method': 'delete'}, function(data){
			$(link).parent().remove();
		}, 'json')
		return false
	})
})