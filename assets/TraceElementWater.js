function TraceElementWater(level, name, satisfactoryBoundary, raisedBoundary, highBoundary, veryHighBoundary){
	this.level = level;
	this.name = name;
	this.satisfactoryBoundary = satisfactoryBoundary;
	this.raisedBoundary = raisedBoundary;
	this.highBoundary = highBoundary;
	this.veryHighBoundary = veryHighBoundary;

	this.isSatisfactory = function(){
		return this.level <= this.satisfactoryBoundary
	}

	this.isRaised = function(){
		return  this.level > this.satisfactoryBoundary && this.level <= this.raisedBoundary;
	}

	this.isHigh = function(){
		return this.level <= this.highBoundary && this.level > this.raisedBoundary;
	}

	this.isVeryHigh = function(){
		return this.level <= this.veryHighBoundary && this.level > this.highBoundary;
	}

	this.isExtremelyHigh = function(){
		return this.level > this.veryHighBoundary;
	}
}