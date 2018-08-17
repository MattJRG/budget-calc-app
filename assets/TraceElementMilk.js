function TraceElementMilk(level, name, lowBoundary, marginalBoundary, satisfactoryBoundary, highBoundary, veryHighBoundary, extremelyHighBoundary){
	this.level = level;
	this.name = name;
	this.lowBoundary = lowBoundary;
	this.marginalBoundary = marginalBoundary;
	this.satisfactoryBoundary = satisfactoryBoundary;
	this.highBoundary = highBoundary;
	this.veryHighBoundary = veryHighBoundary;
	this.extremelyHighBoundary = extremelyHighBoundary;

	this.isVeryLow = function(){
		return this.level < this.lowBoundary;
	}

	this.isLow = function(){
		return this.level >= this.lowBoundary && this.level < this.marginalBoundary;
	}

	this.isMarginal = function(){
		return this.level >= this.marginalBoundary && this.level < this.satisfactoryBoundary;
	}

	this.isSatisfactory = function(){
		return this.level >= this.satisfactoryBoundary && this.level < this.highBoundary;
	}

	this.isHigh = function(){
		return this.level >= this.highBoundary && this.level < this.veryHighBoundary;
	}

	this.isVeryHigh = function(){
		return this.level >= this.veryHighBoundary && this.level < this.extremelyHighBoundary;
	}

	this.isExtremelyHigh = function(){
		return this.level >= this.extremelyHighBoundary;
	}
}