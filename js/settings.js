/**
 * Settings Storage
 * 
 * The user settings are stored in the chrome storage and are synced between browsers
 * where sync is enabled.
 *
 * When the save button is clicked, all current values are stored to the chrome storage.
 * When the cancel button is clicked, the current values are overwritten by the last
 * that were saved.
 *
 * Values from the storage can be passed to a callback via get(key, callback)
 */
var Settings = function(jQuery, form) {
  var $ = jQuery;
  var $settings = $(form);

  // Save and sync all settings
  var save = function(){
    var options = {};

    // Processing all text and select inputs
    $('input[type="text"], select', $settings).each(function(index, item) {
      options[$(item).attr('name')] = $(item).val();
    });

    // Processing radio inputs
    $('input[type="radio"]', $settings).each(function(index, item) {
      if($(item).is(":checked")){
        options[$(item).attr('name')] = $(item).val();
      }
    });

    // Processing all checkboxes
    $('input[type="checkbox"]', $settings).each(function(index, item) {
      options[$(item).attr('name')] = ($(item).is(":checked")) ? true : false;
    });

    // Syncing the data with the storage
    chrome.storage.sync.set(options, function() {
      console.log('Saved the settings');
    });
  };

  // Initialize the settings
  var initialize = function() {
    chrome.storage.sync.get(function(e) {
      var $item = null;
      $.each(e, function(key, value) {
        $item = $('[name="' + key + '"]', $settings);
        if($item.length > 0){
          if($item[0].type == 'text' || $item[0].type == 'select-one'){
            $item.val(value);
          }
          
          else if($item[0].type == 'checkbox'){
            if(value){
              $item.prop('checked', true);
            }
          }

          else {
            $('[name="' + key + '"][value="' + value + '"]', $settings).prop('checked', true);
          }
        }
      });
    });
  };

  // Pass a value by its key to a callback function
  this.get = function(key, callback) {
    var value = chrome.storage.sync.get(key, function(e) {
      callback(e[key]);
    });
  }

  // Action when the save button is clicked
  $('.save-settings').click(function(e) {
    e.preventDefault();
    save();
  });

  // Action when the cancel button is clicked
  $('.cancel-settings').click(function(e) {
    e.preventDefault();
    initialize();
  });

  initialize();
};