		$(function() {
				$('#tabs').tabs();
			    $('#intro').click(function(){
			        $('#overlay').fadeIn('fast',function(){
			            $('#box').show();
			        });
			    });
			    $('#boxclose').click(function(){
			    	  $('#overlay').fadeOut('fast',function(){
				            $('#box').hide();
				        });
			    });
				var availableTags = [
				"Computer Science",
				"General",
				"Mathematics",
				"Programming",
				"C",
				"C++",
				"Clojure",
				"Erlang",
				"Fortran",
				"Groovy",
				"Haskell",
				"Java",
				"JavaScript",
				"Lisp",
				"Perl",
				"PHP",
				"Python",
				"Ruby",
				"Scala"
				];
				$( "#tags" ).autocomplete({
					source: availableTags
				});

		});
