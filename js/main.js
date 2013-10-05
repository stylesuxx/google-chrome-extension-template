jQuery.noConflict();
(function($) { 
  $(function() {
  	/**
  	 * Production code comes here.
  	 */
  	var text = ['This is', 'jquery appending', 'line after line.', '<span class="glyphicon glyphicon-star"></span>'];
  	var show = function(text, index){
  		if(index >= text.length) return;
  		$('#home').append($('<div class="line">' + text[index] + '</div>').fadeIn(2000, function(){
  			show(text, index+1);
  		}));
  	}

	$('#myTab a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	});

  	$('.set-badge').click(function() {
  		chrome.browserAction.setBadgeText({'text': '1111'});
  	});

  	$('.reset-badge').click(function() {
  		chrome.browserAction.setBadgeText({'text': ''});
  	});

  	show(text, 0);
  });
})(jQuery);