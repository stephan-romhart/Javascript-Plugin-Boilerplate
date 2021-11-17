(function()
{
	/*** Register plugin in window object */
	
	this.myPlugin = function()
	{
		let defaults = {};
		
		this.elements = [];
		this.settings = (arguments[0] && typeof arguments[0] === 'object') ? extendDefaults(defaults,arguments[0]) : defaults;
		
		this.init();
	}
	
	
	/*** Public Methods */
	
	myPlugin.prototype.init = function()
	{
		console.log('Init plugin.');
		
		build.call(this);
	}
	
	
	myPlugin.prototype.update = function(element)
	{
		console.log('Update plugin.');
	}
	
	
	/*** Private Methods */
	
	function build(element)
	{
		console.log('Build plugin.');
	}
	
	
	function extendDefaults(defaults,properties)
	{
		Object.keys(properties).forEach(property => {
			if(properties.hasOwnProperty(property))
			{
				defaults[property] = properties[property];
			}
		});
		return defaults;
	}
}());