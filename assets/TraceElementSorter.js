function TraceElementSorter(elements) {
	this.elements = elements;
	
	// console.log(this.elements);

	this.getVeryLowTraceElements = function(){
		var veryLowTraceElements = [];

		for(var i=0; i<this.elements.length; i++){
			if(elements[i].isVeryLow()) {
				veryLowTraceElements.push(elements[i]);
			}
		}
		return veryLowTraceElements;
	}

	this.getLowTraceElements = function(){
		var lowTraceElements = [];

		for(var i=0; i<this.elements.length; i++){
			if(elements[i].isLow()) {
				lowTraceElements.push(elements[i]);
			}
		}
		return lowTraceElements;
	}
	this.getMarginalTraceElements = function(){
		var marginalTraceElements = [];

		for(var i=0; i<this.elements.length; i++){
			if(elements[i].isMarginal()) {
				marginalTraceElements.push(elements[i]);
			}

		}
		return marginalTraceElements;
	}
	this.getSatisfactoryTraceElements = function(){
		var satisfactoryTraceElements = [];

		for(var i=0; i<this.elements.length; i++){
			if(elements[i].isSatisfactory()) {
				satisfactoryTraceElements.push(elements[i]);
			}

		}
		return satisfactoryTraceElements;
	}
	this.getHighTraceElements = function(){
		var highTraceElements = [];

		for(var i=0; i<this.elements.length; i++){
			if(elements[i].isHigh()) {
				highTraceElements.push(elements[i]);
			}

		}
		return highTraceElements;
	}
	this.getVeryHighTraceElements = function(){
		var veryHighTraceElements = [];

		for(var i=0; i<this.elements.length; i++){
			if(elements[i].isVeryHigh()) {
				veryHighTraceElements.push(elements[i]);
			}

		}
		return veryHighTraceElements;
	}
	this.getExtremelyHighTraceElements = function(){
		var extremelyHighTraceElements = [];

		for(var i=0; i<this.elements.length; i++){
			if(elements[i].isExtremelyHigh()) {
				extremelyHighTraceElements.push(elements[i]);
			}

		}
		return extremelyHighTraceElements;
	}
}