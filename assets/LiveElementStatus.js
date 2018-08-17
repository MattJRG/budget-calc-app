function LiveElementStatus(x){

	if (x === "milk") {
		this.pStatusLive = function(pLevel){
			if (pLevel<350 && pLevel>0){
				return "Very Low";
			} else if (pLevel>=350 && pLevel<600){
				return "Low";
			} else if (pLevel>=600 && pLevel<900){
				return "Marginal";
			} else if (pLevel>=900 && pLevel<1500){
				return "Satisfactory";
			} else if (pLevel>=1500 && pLevel<1750){
				return "High";
			} else if (pLevel>=1750 && pLevel<2500){
				return "Very high";
			} else if (pLevel>2500){
				return "Extremely high";
			} else if (pLevel<0){
				return "Value cannot be negative";
			} else if (pLevel==0){
				return "Please enter value";
			} else {
				return "---";
			}
		}

		this.mnStatusLive = function(mnLevel){
			if (mnLevel<10 && mnLevel>0){
				return "Very Low";
			} else if (mnLevel>=10 && mnLevel<15){
				return "Low";
			} else if (mnLevel>=15 && mnLevel<20){
				return "Marginal";
			} else if (mnLevel>=20 && mnLevel<30){
				return "Satisfactory";
			} else if (mnLevel>=30 && mnLevel<35){
				return "High";
			} else if (mnLevel>=35 && mnLevel<70){
				return "Very high";
			} else if (mnLevel>70){
				return "Extremely high";
			} else if (mnLevel<0){
				return "Value cannot be negative";
			} else if (mnLevel==0){
				return "Please enter value";
			} else {
				return "---";
			}
		}

		this.znStatusLive = function(znLevel){
			if (znLevel<2000 && znLevel>0){
				return "Very Low";
			} else if (znLevel>=2000 && znLevel<2500){
				return "Low";
			} else if (znLevel>=2500 && znLevel<3000){
				return "Marginal";
			} else if (znLevel>=3000 && znLevel<4500){
				return "Satisfactory";
			} else if (znLevel>=4500 && znLevel<5000){
				return "High";
			} else if (znLevel>=5000 && znLevel<7500){
				return "Very high";
			} else if (znLevel>7500){
				return "Extremely high";
			} else if (znLevel<0){
				return "Value cannot be negative";
			} else if (znLevel==0){
				return "Please enter value";
			} else {
				return "---";
			}
		}


		this.cuStatusLive = function(cuLevel){
			if (cuLevel<35 && cuLevel>0){
				return "Very Low";
			} else if (cuLevel>=35 && cuLevel<40){
				return "Low";
			} else if (cuLevel>=40 && cuLevel<50){
				return "Marginal";
			} else if (cuLevel>=50 && cuLevel<65){
				return "Satisfactory";
			} else if (cuLevel>=65 && cuLevel<75){
				return "High";
			} else if (cuLevel>=75 && cuLevel<120){
				return "Very high";
			} else if (cuLevel>120){
				return "Extremely high";
			} else if (cuLevel<0){
				return "Value cannot be negative";
			} else if (cuLevel==0){
				return "Please enter value";
			} else {
				return "---";
			}
		}

		this.moStatusLive = function(moLevel){
			if (moLevel<30 && moLevel>0){
				return "Very Low";
			} else if (moLevel>=30 && moLevel<35){
				return "Low";
			} else if (moLevel>=35 && moLevel<40){
				return "Marginal";
			} else if (moLevel>=40 && moLevel<60){
				return "Satisfactory";
			} else if (moLevel>=60 && moLevel<70){
				return "High";
			} else if (moLevel>=70 && moLevel<100){
				return "Very high";
			} else if (moLevel>100){
				return "Extremely high";
			} else if (moLevel<0){
				return "Value cannot be negative";
			} else if (moLevel==0){
				return "Please enter value";
			} else {
				return "---";
			}
		}

		this.iStatusLive = function(iLevel){
			if (iLevel<20 && iLevel>0){
				return "Very Low";
			} else if (iLevel>=20 && iLevel<40){
				return "Low";
			} else if (iLevel>=40 && iLevel<60){
				return "Marginal";
			} else if (iLevel>=60 && iLevel<150){
				return "Satisfactory";
			} else if (iLevel>=150 && iLevel<250){
				return "High";
			} else if (iLevel>=250 && iLevel<400){
				return "Very high";
			} else if (iLevel>400){
				return "Extremely high";
			} else if (iLevel<0){
				return "Value cannot be negative";
			} else if (iLevel==0){
				return "Please enter value";
			} else {
				return "---";
			}
		}

		this.seStatusLive = function(seLevel){
			if (seLevel<5 && seLevel>0){
				return "Very Low";
			} else if (seLevel>=5 && seLevel<10){
				return "Low";
			} else if (seLevel>=10 && seLevel<15){
				return "Marginal";
			} else if (seLevel>=15 && seLevel<25){
				return "Satisfactory";
			} else if (seLevel>=25 && seLevel<30){
				return "High";
			} else if (seLevel>=30 && seLevel<65){
				return "Very high";
			} else if (seLevel>65){
				return "Extremely high";
			} else if (seLevel<0){
				return "Value cannot be negative";
			} else if (seLevel==0){
				return "Please enter value";
			} else {
				return "---";
			}
		}
	} else if (x === 'water') {

		this.phStatusLive = function(phLevel){
			if (phLevel<6 && phLevel>0){
				return "Low";
			} else if (phLevel>=6 && phLevel<8.5){
				return "Medium";
			} else if (phLevel>=8.5 && phLevel<10){
				return "High";
			} else if (phLevel>=10 && phLevel<14){
				return "Very high";
			} else if (phLevel>=14){
				return "Extremely high";
			} else if (phLevel<0){
				return "Value cannot be negative";
			} else if (phLevel==0){
				return "Please enter value";
			} else {
				return "---";
			}
		}
	
		this.hardnessStatusLive = function(hardnessLevel){
			if (hardnessLevel<50){
				return "Very soft";
			} else if (hardnessLevel>=50 && hardnessLevel<150){
				return "Soft";
			} else if (hardnessLevel>=150 && hardnessLevel<175){
				return "Slightly soft";
			} else if (hardnessLevel>=175 && hardnessLevel<250){
				return "Slightly hard";
			} else if (hardnessLevel>=250 && hardnessLevel<420){
				return "Hard";
			} else if (hardnessLevel>=420 && hardnessLevel<1000){
				return "Very Hard";
			} else if (hardnessLevel>=1000){
				return "Extremely Hard";
			} else if (hardnessLevel<0){
				return "Value cannot be negative";
			} else if (hardnessLevel==0){
				return "Please enter value";
			} else {
				return "---";
			}
		}
	
		this.pStatusLive = function(pLevel){
			if (pLevel<1 && pLevel>0){
				return "Low";
			} else if (pLevel>=1 && pLevel<2){
				return "Medium";
			} else if (pLevel>=2 && pLevel<4){
				return "High";
			} else if (pLevel>=4 && pLevel<12){
				return "Very high";
			} else if (pLevel>12){
				return "Extremely high";
			} else if (pLevel<0){
				return "Value cannot be negative";
			} else if (pLevel==0){
				return "Please enter value";
			} else {
				return "---";
			}
		}
	
		this.mnStatusLive = function(mnLevel){
			if (mnLevel<25 && mnLevel>0){
				return "Low";
			} else if (mnLevel>=25 && mnLevel<50){
				return "Medium";
			} else if (mnLevel>=50 && mnLevel<250){
				return "High";
			} else if (mnLevel>=250 && mnLevel<1000){
				return "Very high";
			} else if (mnLevel>1000){
				return "Extremely high";
			} else if (mnLevel<0){
				return "Value cannot be negative";
			} else if (mnLevel==0){
				return "Please enter value";
			} else {
				return "---";
			}
		}
	
		this.znStatusLive = function(znLevel){
			if (znLevel<2500 && znLevel>0){
				return "Low";
			} else if (znLevel>=2500 && znLevel<5000){
				return "Medium";
			} else if (znLevel>=5000 && znLevel<7500){
				return "High";
			} else if (znLevel>=7500 && znLevel<20000){
				return "Very high";
			} else if (znLevel>20000){
				return "Extremely high";
			} else if (znLevel<0){
				return "Value cannot be negative";
			} else if (znLevel==0){
				return "Please enter value";
			} else {
				return "---";
			}
		}
	
	
		this.cuStatusLive = function(cuLevel){
			if (cuLevel<100 && cuLevel>0){
				return "Low";
			} else if (cuLevel>=100 && cuLevel<500){
				return "Medium";
			} else if (cuLevel>=500 && cuLevel<2000){
				return "High";
			} else if (cuLevel>=2000 && cuLevel<10000){
				return "Very high";
			} else if (cuLevel>20000){
				return "Extremely high";
			} else if (cuLevel<0){
				return "Value cannot be negative";
			} else if (cuLevel==0){
				return "Please enter value";
			} else {
				return "---";
			}
		}
	
		this.mgStatusLive = function(mgLevel){
			if (mgLevel<50 && mgLevel>0){
				return "Low";
			} else if (mgLevel>=50 && mgLevel<75){
				return "Medium";
			} else if (mgLevel>=75 && mgLevel<100){
				return "High";
			} else if (mgLevel>=100 && mgLevel<600){
				return "Very high";
			} else if (mgLevel>600){
				return "Extremely high";
			} else if (mgLevel<0){
				return "Value cannot be negative";
			} else if (mgLevel==0){
				return "Please enter value";
			} else {
				return "---";
			}
		}
	
		this.caStatusLive = function(caLevel){
			if (caLevel<100 && caLevel>0){
				return "Low";
			} else if (caLevel>=100 && caLevel<250){
				return "Medium";
			} else if (caLevel>=250 && caLevel<500){
				return "High";
			} else if (caLevel>=500 && caLevel<1000){
				return "Very high";
			} else if (caLevel>2000){
				return "Extremely high";
			} else if (caLevel<0){
				return "Value cannot be negative";
			} else if (caLevel==0){
				return "Please enter value";
			} else {
				return "---";
			}
		}
	
		this.feStatusLive = function(feLevel){
			if (feLevel<100 && feLevel>0){
				return "Low";
			} else if (feLevel>=100 && feLevel<200){
				return "Medium";
			} else if (feLevel>=200 && feLevel<500){
				return "High";
			} else if (feLevel>=500 && feLevel<2000){
				return "Very high";
			} else if (feLevel>2000){
				return "Extremely high";
			} else if (feLevel<0){
				return "Value cannot be negative";
			} else if (feLevel==0){
				return "Please enter value";
			} else {
				return "---";
			}
		}
	
		this.naStatusLive = function(naLevel){
			if (naLevel<50 && naLevel>0){
				return "Low";
			} else if (naLevel>=50 && naLevel<100){
				return "Medium";
			} else if (naLevel>=100 && naLevel<200){
				return "High";
			} else if (naLevel>=200 && naLevel<800){
				return "Very high";
			} else if (naLevel>800){
				return "Extremely high";
			} else if (naLevel<0){
				return "Value cannot be negative";
			} else if (naLevel==0){
				return "Please enter value";
			} else {
				return "---";
			}
		}
	}
}