function ElementCommentsMilk(){

	this.areThereNoValues = function(allElements){
		if (allElements.length !== 0)
			return "Trace element status is ";
		else {
			return "Please enter trace element levels".fontcolor("red");
		}
	}

	this.printElementComment = function(level, elements, allElements){

		if (elements.length === 0){
			return " ";
		} else {
			return " " + level + " for " + this.printElements(elements, allElements.length);
		}
	}

	this.printAllElementComments = function(sortedElements, allElements, veryLowElements, lowElements, marginalElements){
		var comment = "";

		sortedElements = this.filterEmptyArrays(sortedElements);

		for (var i=0; i<sortedElements.length; i++) {
			comment += this.printElementComment(sortedElements[i].level, sortedElements[i].elements, allElements)
			if (i === 0 && sortedElements.length > 1) {
				comment += " but is "
			} else if (i === sortedElements.length - 2 && sortedElements.length > 2) {
				comment += " and "
			} else if (i !== sortedElements.length - 1) {
				comment += ", "
			} else {
				comment += "."
			}
		}
		return comment 
	}

	this.printElements = function(elements, maxNumberOfElements){
	  if (elements.length === 1) {
	    return elements[0].name;
	  } else if (elements.length === maxNumberOfElements) {
	    return this.generateMaxElementsString(elements);
	  } else {
	    return this.generateElementsString(elements);
	  }
	}

	this.generateMaxElementsString = function(elements) {
	  return this.generateElementsString(elements) /*+ ". "*/;
	}

	this.generateElementsString = function(elements) {
	  var elementString = "";

	  for(var i=0; i<elements.length; i++) {
	    if (i === elements.length - 2) {
	      elementString += elements[i].name + " and ";
	    } else if (i === elements.length - 1) {
	    	elementString += elements[i].name;
	    } else {
	      elementString += elements[i].name + ", ";
	    }
	  }

	  return elementString;
	}

	this.filterEmptyArrays = function(sortedElements){
	return sortedElements.filter(function(elements){
		return elements.elements.length !== 0;
	});
}

this.variableIodineComment = function(allElements){
		if (document.getElementById("varICheckbox").checked && allElements.length > 0) {
			return " Iodine levels fluctuate widely on a seasonal basis, with summer levels being on average half those of peak winter values. This is due to a combination of a reduced Iodine dietary intake at grass and the antagonistic impact of goitregenic factors in pasture legumes and brassicas.";
		}
		else {
			return "";
		}
	}

}

function arrayContainsElement(elements, name){
	for(var i=0; i<elements.length; i++){
		if (elements[i].name === name)
			return true;
		}
	return false;
}