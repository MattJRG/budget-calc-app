function TraceElementSorterMicro(elements) {
	this.elements = elements;
	
	// console.log(this.elements);

	this.getSatisfactoryTraceElements = function(){
		var satisfactoryTraceElements = [];

		for(var i=0; i<this.elements.length; i++){
			if(elements[i].isSatisfactory()) {
				satisfactoryTraceElements.push(elements[i]);
			}
		}
		return satisfactoryTraceElements;
	}

	this.getRaisedTraceElements = function(){
		var raisedTraceElements = [];

		for(var i=0; i<this.elements.length; i++){
			if(elements[i].isRaised()) {
				raisedTraceElements.push(elements[i]);
			}

		}
		return raisedTraceElements;
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