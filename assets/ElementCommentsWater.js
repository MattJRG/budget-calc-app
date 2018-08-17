function ElementCommentsWater(){

	this.printElementComment = function(level, elements, allElements){

		if (elements.length === 0){
			return " ";
		} else {
			return " " + level + " " + this.printElements(elements, allElements.length);
		}
	}

	this.printElementNotLevel = function(elements, allElements){
		if (elements.length === 0){
			return " ";
		} else {
			return " " + this.printElements(elements, allElements.length);
		} 
	}

	this.levelOrLevels = function(raisedElements){
		if (raisedElements.length >= 2){
			return " levels ";
		} else {
			return " level ";
		}
	}

	// this.raisedElementsPresent = function(raisedElements){
	// 	if (raisedElements.length > 0){
	// 		return " including the raised";
	// 	} else {
	// 		return "";
	// 	}
	// }

	// this.printAllElementComments = function(sortedElements, allElements, raisedElements){
	// 	var comment = "";

	// 	sortedElements = this.filterEmptyArrays(sortedElements);
	// 	console.log(sortedElements);
	// 	for (var i=0; i<sortedElements.length; i++) {
	// 		comment += 	this.raisedElementsPresent(raisedElements) + this.printElementComment(sortedElements[i].level, sortedElements[i].elements, allElements, raisedElements)
	// 		if (i === 0 && sortedElements.length > 1 && raisedElements.length >= 1) {
	// 			comment += "" + this.levelOrLevels(raisedElements) + "but with the exception of the ";
	// 		} else if (i === sortedElements.length - 2 && sortedElements.length > 2) {
	// 			comment += " and ";
	// 		} else if (i !== sortedElements.length - 1 && raisedElements.length <=2) {
	// 			comment += " and ";
	// 		} else if (i !== sortedElements.length - 1) {
	// 			comment += ", ";
	// 		} else {
	// 			comment += " status.";
	// 		}
	// 	}
	// 	return comment 
	// }

	this.printAllElementComments = function(sortedElements, allElements, raisedElements){
		var comment = "";

		sortedElements = this.filterEmptyArrays(sortedElements);
		console.log(sortedElements);
		for (var i=0; i<sortedElements.length; i++) {
			comment += this.printElementComment(sortedElements[i].level, sortedElements[i].elements, allElements, raisedElements)
			if (i === 0 && sortedElements.length > 1 && raisedElements.length >= 1) {
				comment += "" + this.levelOrLevels(raisedElements) + " but with the exception of the ";
			} else if (i === sortedElements.length - 2 && sortedElements.length > 2) {
				comment += " and ";
			} else if (i !== sortedElements.length - 1 && raisedElements.length <=2) {
				comment += " and ";
			} else if (i !== sortedElements.length - 1) {
				comment += ", ";
			} else {
				comment += " level.";
			}
		}
		return comment 
	}

	// this.levelOrLevels2(highElements, veryHighElements, ExtremelyHighElements){
	// 	var 
	// }

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
}

function arrayContainsElement(elements, name){
	for(var i=0; i<elements.length; i++){
		if (elements[i].name === name)
			return true;
		}
	return false;
}