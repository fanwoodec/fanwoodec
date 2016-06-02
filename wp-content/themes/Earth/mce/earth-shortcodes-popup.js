(function() {
	tinymce.create('tinymce.plugins.earth_shortcodesPlugin', {
		init : function(ed, url) {
			// Register commands
			ed.addCommand('mceearth_shortcodes', function() {
				ed.windowManager.open({
					file : url + '/earth-shortcodes-iframe.php', // file that contains HTML for our modal window
					width : 600 + parseInt(ed.getLang('earth_shortcodes.delta_width', 0)), // size of our window
					height : 700 + parseInt(ed.getLang('earth_shortcodes.delta_height', 0)), // size of our window
					inline : 1
				}, {
					plugin_url : url
				});
			});
			 
			// Register earth_shortcodess
			ed.addButton('earth_shortcodes', {title : 'Insert Shortcode', cmd : 'mceearth_shortcodes', image: url + '/images/shortcodes.png' });
		},
		 
		getInfo : function() {
			return {
				longname : 'Insert Shortcode',
				author : 'AJ Clarke',
				authorurl : 'http://wpexplorer.com',
				infourl : 'http://wpexplorer.com',
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			};
		}
	});
	 
	// Register plugin
	// first parameter is the earth_shortcodes ID and must match ID elsewhere
	// second parameter must match the first parameter of the tinymce.create() function above
	tinymce.PluginManager.add('earth_shortcodes', tinymce.plugins.earth_shortcodesPlugin);

})();