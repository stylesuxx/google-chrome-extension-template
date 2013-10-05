Google Chrome: extension template with jQuery and bootstrap
================================
This is a google chrome extension template including jQuery, bootstrap and a settings mechanism for your convencience.

## Customizing title and description
In manifest.json you can change the information about your extension. The fields you want to change are:
* name
* description
* default_title

## Customizing the Icon
Just swap images/icon.png with the icon you want to use for your project.  

## Customizing the permissions
If you want to access url's from your extension do not forget to add them to permissions in manifest.json

## Customizing the Popup
The apperance of the popup may be changed in html/popup.html
For your convenience there are two tabs in place already:
* #home: The tab with the main content
* #settings: The settings tab

## Customizing the settings
In the settings tab you can add more settings. The following input elements are supported:
* text
* radio
* checkbox
* select
Settings are saved when clicked on the save button. When the cancel button is pressed, the settings are reset to the last saved values.

## Customizing the style
Add your own styles to css/main.css
Don't forget, bootstrap is in place: you might be able to achive good results by just setting the right classes ;-)

## Adding code
Add your business logic to js/main.js

For further information about usage check the documentations:
* [jQuery 1.12.2] (http://jquery.com)
* [bootsrap 3.0.0] (http://getbootstrap.com)
* [Google Chrome Extension Tutorial] (http://developer.chrome.com/extensions/getstarted.html)
