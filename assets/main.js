function comment() {
	var pLevel = parseInt(document.getElementById("phosphorus").value);
	var mnLevel = parseInt(document.getElementById("manganese").value);
	var znLevel = parseInt(document.getElementById("zinc").value);
	var cuLevel = parseInt(document.getElementById("copper").value);
	var moLevel = parseInt(document.getElementById("molybdenum").value);
	var iLevel = parseInt(document.getElementById("iodine").value);
	var seLevel = parseInt(document.getElementById("selenium").value);


	phosphorus = new TraceElement(pLevel, "Phosphorus", 350, 600, 900, 1500, 1750, 2500);
	manganese = new TraceElement(mnLevel, "Manganese", 10, 15, 20, 30, 35, 70);
	zinc = new TraceElement(znLevel, "Zinc", 2000, 2500, 3000, 4500, 5000, 7500);
	copper = new TraceElement(cuLevel, "Copper", 35, 40, 50, 65, 75, 120);
	molybdenum = new TraceElement(moLevel, "Molybdenum", 30, 35, 40, 60, 70, 100);
	iodine = new TraceElement(iLevel, "Iodine", 20, 40, 60, 150, 250, 400);
	selenium = new TraceElement(seLevel, "Selenium", 5, 10, 15, 25, 30, 65);

	var elements = [];
		elements.push(phosphorus);
		elements.push(manganese); 
		elements.push(zinc);
		elements.push(copper);
		elements.push(molybdenum);
		elements.push(iodine);
		elements.push(selenium);

	var sorter = new TraceElementSorter(elements);
	var veryLowElements = sorter.getVeryLowTraceElements()
	var lowElements = sorter.getLowTraceElements()
	var marginalElements = sorter.getMarginalTraceElements()
	var satisfactoryElements = sorter.getSatisfactoryTraceElements()
	var highElements = sorter.getHighTraceElements()
	var veryHighElements = sorter.getVeryHighTraceElements()
	var extremelyHighElements = sorter.getExtremelyHighTraceElements()

	var sortedElements = [];
		sortedElements.push(new GroupedElements("satisfactory", satisfactoryElements));
		sortedElements.push(new GroupedElements("extremely high", extremelyHighElements));
		sortedElements.push(new GroupedElements("very high", veryHighElements));
		sortedElements.push(new GroupedElements("high", highElements));
		sortedElements.push(new GroupedElements("marginal", marginalElements));
		sortedElements.push(new GroupedElements("low", lowElements));
		sortedElements.push(new GroupedElements("very low", veryLowElements));

	var specificComments = new SpecificElementComments();
	var elementComments = new ElementComments();
	var lowlowlow = "lowlowlow";

	var allElementsLessThanSatisfactory = veryLowElements.concat(lowElements).concat(marginalElements);
	var allElementsMoreThanSatisfactory = highElements.concat(veryHighElements).concat(extremelyHighElements);

	var nonSatisfactoryElements = veryLowElements.concat(lowElements).concat(marginalElements).concat(highElements).concat(veryHighElements).concat(extremelyHighElements)
	var nonSatisfactoryElementsLessMolybdenum = veryLowElements.concat(lowElements).concat(marginalElements).concat(highElements).concat(veryHighElements).concat(extremelyHighElements)

	var allElements = veryLowElements.concat(lowElements).concat(marginalElements).concat(satisfactoryElements).concat(highElements).concat(veryHighElements).concat(extremelyHighElements)

	specificComments.removeMolybdenum(nonSatisfactoryElementsLessMolybdenum, satisfactoryElements, moLevel);

	document.getElementById("milkComments").innerHTML = elementComments.areThereNoValues(allElements) + elementComments.printAllElementComments(sortedElements, allElements, veryLowElements, lowElements, marginalElements) + specificComments.belowSatisfactoryCopper(veryLowElements, lowElements, marginalElements, moLevel) + specificComments.mainSatisfactory(satisfactoryElements, allElements, cuLevel, moLevel) + specificComments.mainCopper(marginalElements, cuLevel, moLevel) + specificComments.mainCopper2(extremelyHighElements, veryHighElements, highElements, cuLevel, moLevel) + specificComments.mainMolybdenum(cuLevel, moLevel) + specificComments.mainIodine(allElementsMoreThanSatisfactory) + specificComments.mainManganese(allElementsMoreThanSatisfactory) + specificComments.mainSelenium(allElementsMoreThanSatisfactory) + elementComments.variableIodineComment (allElements) + specificComments.reviewElements(nonSatisfactoryElementsLessMolybdenum, allElements) + specificComments.reviewCuHighMo(satisfactoryElements, allElements, allElementsMoreThanSatisfactory, cuLevel, moLevel) + specificComments.mainCommentPhosphorus(allElements);

}

function toggleGuide() {
	var x = document.getElementById("guideBox");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

function LiveUpdate() {

var liveElementStatus = new LiveElementStatus();
	var pLevel = parseInt(document.getElementById("phosphorus").value);
	var mnLevel = parseInt(document.getElementById("manganese").value);
	var znLevel = parseInt(document.getElementById("zinc").value);
	var cuLevel = parseInt(document.getElementById("copper").value);
	var moLevel = parseInt(document.getElementById("molybdenum").value);
	var iLevel = parseInt(document.getElementById("iodine").value);
	var seLevel = parseInt(document.getElementById("selenium").value);

document.getElementById("pStatus").innerHTML = liveElementStatus.pStatusLive(pLevel);
document.getElementById("mnStatus").innerHTML = liveElementStatus.mnStatusLive(mnLevel);
document.getElementById("znStatus").innerHTML = liveElementStatus.znStatusLive(znLevel);
document.getElementById("cuStatus").innerHTML = liveElementStatus.cuStatusLive(cuLevel);
document.getElementById("moStatus").innerHTML = liveElementStatus.moStatusLive(moLevel);
document.getElementById("iStatus").innerHTML = liveElementStatus.iStatusLive(iLevel);
document.getElementById("seStatus").innerHTML = liveElementStatus.seStatusLive(seLevel);

}

function showLiveStatus() {
	var stsChkBx = document.getElementById("statusCheckbox");
	var vis = "none";
if (stsChkBx.checked) {
 vis = "block";
} else {
	vis ="none"
}

document.getElementById("pStatus").style.display = vis;
document.getElementById("mnStatus").style.display = vis;
document.getElementById("znStatus").style.display = vis;
document.getElementById("cuStatus").style.display = vis;
document.getElementById("moStatus").style.display = vis;
document.getElementById("iStatus").style.display = vis;
document.getElementById("seStatus").style.display = vis;

}

var button = document.getElementById("copy-button"),
    contentHolder = document.getElementById("milkComments");

button.addEventListener("click", function() {

    // We will need a range object and a selection.
    var range = document.createRange(),
        selection = window.getSelection();

    // Clear selection from any previous data.
    selection.removeAllRanges();

    // Make the range select the entire content of the contentHolder paragraph.
    range.selectNodeContents(contentHolder);

    // Add that range to the selection.
    selection.addRange(range);

    // Copy the selection to clipboard.
    document.execCommand('copy');

    // Clear selection if you want to.
    selection.removeAllRanges();

    }, false);

function clearPage(){

	document.getElementById("milkComments").innerHTML = "";
	document.getElementById("phosphorus").value = "";
	document.getElementById("manganese").value = "";
	document.getElementById("zinc").value = "";
	document.getElementById("copper").value = "";
	document.getElementById("molybdenum").value = "";
	document.getElementById("iodine").value = "";
	document.getElementById("selenium").value = "";
    document.getElementById("varICheckbox").checked = false;
    document.getElementById("pStatus").innerHTML ="---";
    document.getElementById("mnStatus").innerHTML ="---";
    document.getElementById("znStatus").innerHTML ="---";
    document.getElementById("cuStatus").innerHTML ="---";
    document.getElementById("moStatus").innerHTML ="---";
    document.getElementById("iStatus").innerHTML ="---";
    document.getElementById("seStatus").innerHTML ="---";
}

// function googleTranslateElementInit() {
// 	new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
// 	}

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'en',
	  includedLanguages: 'en,fr',
      layout: google.translate.TranslateElement.InlineLayout
    }, 'google_translate_element');
  }