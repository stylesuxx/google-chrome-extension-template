jQuery.noConflict();
(function($) { 
  $(function() {
  	/**
  	 * Production code comes here.
  	 */
  	var text = ['This is', 'jquery appending', 'line after line.', '<span class="glyphicon glyphicon-star"></span>'];
  	var show = function(text, index) {
  		if(index >= text.length) return;
  		$('#home').append($('<div class="line">' + text[index] + '</div>').fadeIn(2000, function(){
  			show(text, index+1);
  		}));
  	}

  	$('#myTab a').click(function (e) {
  	  e.preventDefault()
  	  $(this).tab('show')
  	});

    // Setting the badge text when the button is pressed
  	$('.set-badge').click(function() {
  		chrome.browserAction.setBadgeText({'text': '1111'});
  	});

  	$('.reset-badge').click(function() {
  		chrome.browserAction.setBadgeText({'text': ''});
  	});

  	var l = function(message) {
      console.log('Log:', message);
    }

    // Initializing the settings
    settings = new Settings($, 'form.settings');
    settings.get('text-field', l);

    // Show some text
    show(text, 0);
  });
})(jQuery);