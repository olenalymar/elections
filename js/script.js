'use strict';

const 	overlay = document.querySelector('.overlay'),
main = document.querySelector('.main'),
mainCards = document.querySelector('.main-cards'),
mainCardsItems = document.querySelectorAll('.main-cards-item'),
popup = document.querySelector('.popup'),
custom = document.querySelector('.custom'),
customInfo = document.querySelector('.custom-info'),
customChar = document.querySelector('.custom-char'),
customStyle = document.querySelector('.custom-style'),
prev = document.querySelectorAll('.prev'),
next = document.querySelectorAll('.next'),
skin = document.querySelector('.skin'),
skinColors = document.getElementsByClassName('skin-color'),
hairStyle = document.getElementsByClassName('hair-style'),
hair = document.querySelector('.hair'),
clothesStyle = document.getElementsByClassName('clothes-style'),
personSkin = document.getElementById('person-skin'),
personHair = document.getElementById('person-hair'),
personClothes = document.getElementById('person-clothes'),
popupBtn = document.getElementById('popup-btn'),
name = document.getElementById('name'),
age = document.getElementById('age'),
bio = document.getElementById('bio'),
select = document.getElementById('select'),
male = document.getElementById('male'),
female = document.getElementById('female'),
sex = document.getElementsByName('sex'),
radio = document.querySelector('.radio'),
mainCardsItem = document.querySelector('.main-cards-item'),
personConstruct = document.querySelector('.person.construct'),
progressBars = document.getElementsByClassName('progress-bar'),
resultCounts = document.getElementsByClassName('result-count'),


ready = document.getElementById('ready'),
reset = document.getElementById('reset'),
voting = document.getElementById('voting'),
crime = document.getElementById('crime');



var slideIndex = 1,
props = [skinColors, hairStyle, clothesStyle],
prop = props[0];

console.log(sex);


overlay.addEventListener('click', function () {
	overlay.classList.add('hide');
});




popupBtn.addEventListener('click', function () {
	main.classList.add('hide');
	custom.classList.add('show-flex');
	customInfo.classList.add('show');
	customChar.classList.add('show');
	customStyle.classList.add('show');
});



// slide styles



if (male.checked) {
	personSkin.style.background = `url(img/skin/skin-1.png) center no-repeat`;
	personSkin.style.backgroundSize = 'cover';
	personHair.style.background = `url("img/hair/construct/hair-1.png") center no-repeat`;
	personHair.style.backgroundSize = 'cover';
	personClothes.style.background = `url("img/clothes/construct/clothes-1.png") center no-repeat`;
	personClothes.style.backgroundSize = 'cover';
}





radio.addEventListener('change', function () {
	for ( var i = 0; i < sex.length; i++ ) {
		if (sex[i].checked) {
			console.log('Выбран '+ sex[i].value +' radiobutton');
			sexValue = sex[i].value;
			candidateSex.textContent = sexValue;

			if ( sex[i].checked && sex[i].value == 'Женский') {
				personSkin.style.background = `url(img/skin/skin-4.png) center no-repeat`;
				personSkin.style.backgroundSize = 'cover';

				personHair.style.background = `url("img/hair/construct/hair-4.png") center no-repeat`;
				personHair.style.backgroundSize = 'cover';

				personClothes.style.background = `url("img/clothes/construct/clothes-4.png") center no-repeat`;
				personClothes.style.backgroundSize = 'cover';


				for (var i = 0; i < hairStyle.length; i++) {
					hairStyle[i].classList.remove('hide');
					hairStyle[i].classList.remove('show');
				};

				for (var i = 0; i < clothesStyle.length; i++) {
					clothesStyle[i].classList.remove('hide');
					clothesStyle[i].classList.remove('show');
				};

				hairStyle[0].classList.add('hide');
				hairStyle[3].classList.add('show');

				clothesStyle[0].classList.add('hide');
				clothesStyle[3].classList.add('show');

		} else {
			personSkin.style.background = `url(img/skin/skin-1.png) center no-repeat`;
			personSkin.style.backgroundSize = 'cover';
			personHair.style.background = `url("img/hair/construct/hair-1.png") center no-repeat`;
			personHair.style.backgroundSize = 'cover';
			personClothes.style.background = `url("img/clothes/construct/clothes-1.png") center no-repeat`;
			personClothes.style.backgroundSize = 'cover';


			for (var i = 0; i < hairStyle.length; i++) {
				hairStyle[i].classList.remove('hide');
				hairStyle[i].classList.remove('show');
			};
			for (var i = 0; i < clothesStyle.length; i++) {
					clothesStyle[i].classList.remove('hide');
					clothesStyle[i].classList.remove('show');
			};

			hairStyle[0].classList.add('show');
			clothesStyle[0].classList.add('show');

		}
	}
}
newCandidate.innerHTML = personConstruct.innerHTML ;
candidateBlock.appendChild(newCandidate);
});




function plusSlides (n, prop) {
	showSlides(slideIndex += n)
}


function currentSlide(n, prop) {
	showSlides(slideIndex = n)
}

function showSlides(n) {
	if ( female.checked ) {
		if (n > prop.length) {
		slideIndex = prop.length - 2;
		}
		if (n < 4) {
		slideIndex = prop.length;
		}
	} else if ( male.checked ) {
		if (n > 3) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = prop.length - 3;
		}
	}

	for ( let i = 0; i < prop.length; i++ ) {
		prop[i].classList.remove('show');
		prop[i].classList.add('hide');
		// console.log(prop[i]);
	};

	prop[slideIndex - 1].classList.add('show');
	prop[slideIndex - 1].classList.remove('hide');

}




prev[0].addEventListener('click', function () {
	prop = props[0];
	plusSlides(-1);
	personSkin.style.background = `url(img/skin/skin-${slideIndex}.png) center no-repeat`;
	personSkin.style.backgroundSize = 'cover';
});
next[0].addEventListener('click', function(){
	prop = props[0];
	plusSlides(1);
	personSkin.style.background = `url(img/skin/skin-${slideIndex}.png) center no-repeat`;
	personSkin.style.backgroundSize = 'cover';
});




prev[1].addEventListener('click', function () {
	prop = props[1];
	plusSlides(-1);
	personHair.style.background = `url("img/hair/construct/hair-${slideIndex}.png") center no-repeat`;
	personHair.style.backgroundSize = 'cover';
});
next[1].addEventListener('click', function(){
	prop = props[1];
	plusSlides(1);
	personHair.style.background = `url("img/hair/construct/hair-${slideIndex}.png") center no-repeat`;
	personHair.style.backgroundSize = 'cover';
});


prev[2].addEventListener('click', function () {
	prop = props[2];
	plusSlides(-1);
	personClothes.style.background = `url("img/clothes/construct/clothes-${slideIndex}.png") center no-repeat`;
	personClothes.style.backgroundSize = 'cover';
	if (female.checked) {
		
	}
});
next[2].addEventListener('click', function(){
	prop = props[2];
	if (female.checked) {
	}
	plusSlides(1);
	personClothes.style.background = `url("img/clothes/construct/clothes-${slideIndex}.png") center no-repeat`;
	personClothes.style.backgroundSize = 'cover';
	
});



var nameValue,
ageValue,
sexValue,
viewsValue,
bioValue;

name.addEventListener('change', function () {
	nameValue = name.value;
	console.log('name ' + nameValue);
	candidateName.textContent = nameValue;
});


age.addEventListener('change', function () {
	ageValue = age.value;
	candidateAge.textContent = ageValue + ' лет';
});

bio.addEventListener('change', function () {
	bioValue = bio.value;
	candidateBio.textContent = bioValue;
});

select.addEventListener('change', function () {
	viewsValue = select.value;
	candidateViews.textContent = viewsValue;
});



// creating a new card

const newCard = document.createElement('div'),
candidateBlock = document.createElement('div'),
candidateName = document.createElement('div'),
candidateAge = document.createElement('div'),
candidateSex = document.createElement('div'),
candidateViews = document.createElement('div'),
candidateBio = document.createElement('div'),
photo = document.createElement('div'),

result = document.createElement('div'),
resultCount = document.createElement('div'),
progress = document.createElement('div'),
progressBar = document.createElement('div');



// adding classes to blocks

newCard.classList.add('main-cards-item');
candidateBlock.classList.add('candidate-block');
candidateName.classList.add('name');
candidateAge.classList.add('age');
candidateSex.classList.add('sex');
candidateViews.classList.add('views');
candidateBio.classList.add('bio');

result.classList.add('result');
resultCount.classList.add('result-count');
progress.classList.add('progress');
progressBar.classList.add('progress-bar');
progressBar.classList.add('progress-bar-3');

// inserting blocks to main div

newCard.appendChild(candidateBlock);
newCard.appendChild(candidateName);
newCard.appendChild(candidateAge);
newCard.appendChild(candidateSex);
newCard.appendChild(candidateViews);
newCard.appendChild(candidateBio);

candidateSex.insertAdjacentHTML('beforeBegin', 'Пол: ');
candidateViews.insertAdjacentHTML('beforeBegin', 'Полит. взгляды: ');
candidateBio.insertAdjacentHTML('beforeBegin', 'Биография: ');




for ( var i = 0; i < select.length; i++ ) {
	candidateViews.textContent = 'Либеральные';
	if (select[i].checked) {
		console.log('Выбран '+ select[i].value +' select');
		viewsValue = select[i].value;
		candidateViews.textContent = viewsValue;
	}
}


for ( var i = 0; i < sex.length; i++ ) {
	candidateSex.textContent = sexValue;
	if (sex[i].checked) {
		console.log('Выбран '+ sex[i].value +' radiobutton');
		sexValue = sex[i].value;
		candidateSex.textContent = sexValue;
	}
}





resultCount.textContent = '0%';
progressBar.style.height = '0%';





result.appendChild(resultCount);
result.appendChild(progress);
progress.appendChild(progressBar);


var newCandidate = personConstruct.cloneNode(true);

candidateBlock.appendChild(newCandidate);
candidateBlock.appendChild(result);
newCandidate.classList.add('photo');


customStyle.addEventListener('click', function () {
	newCandidate.innerHTML = personConstruct.innerHTML ;
	candidateBlock.appendChild(newCandidate);
	console.log('changed');
});





// creating a card, ready listener

ready.addEventListener('click', function () {
	custom.classList.add('hide');
	custom.classList.remove('show-flex');
	main.classList.remove('hide');
	mainCards.appendChild(newCard);
});





// reset results

reset.addEventListener('click', function () {
	console.log(resultCounts);
	for (var i = 0; i < resultCounts.length; i++) {
		resultCounts[i].textContent = '0%';
	}
	for (var i = 0; i < progressBars.length; i++) {
		progressBars[i].style.height = '0';
	}

	const mainCardsItems = document.querySelectorAll('.main-cards-item');

	for (var i = 0; i < mainCardsItems.length; i++) {
		mainCardsItems[i].classList.remove('main-cards-item-active');
	}

});



voting.addEventListener('click', function () {
	var num1, num2, num3, num4, num5, maxNumber, maxNumber2;
	const mainCardsItems = document.querySelectorAll('.main-cards-item');

	num1 = Math.round(Math.random() * 100);
	num2 = Math.round(Math.random() * (100 - num1));
	num3 = 100 - (num1 + num2);

	num4 = Math.round(Math.random() * 100);
	num5 = 100 - num4;

	maxNumber = Math.max(num1, num2, num3);
	maxNumber2 = Math.max(num4, num5);

	console.log(num1, num2, num3);

	if (mainCardsItems.length == 3) {
		resultCounts[0].textContent = `${num1}%`;;
		progressBars[0].style.height = `${num1}%`;
		resultCounts[1].textContent = `${num2}%`;;
		progressBars[1].style.height = `${num2}%`;
		resultCounts[2].textContent = `${num3}%`;;
		progressBars[2].style.height = `${num3}%`;	
		console.log(maxNumber);

	// max number blue border
	for (var i = 0; i < mainCardsItems.length; i++) {
		mainCardsItems[i].classList.remove('main-cards-item-active');
		if (mainCardsItems[i].querySelector('.result-count').textContent == `${maxNumber}%`) {
			mainCardsItems[i].classList.add('main-cards-item-active');
		}
	}


} else if (mainCardsItems.length == 2) {
	resultCounts[0].textContent = `${num4}%`;;
	progressBars[0].style.height = `${num4}%`;
	resultCounts[1].textContent = `${num5}%`;;
	progressBars[1].style.height = `${num5}%`;

	// max number blue border
	for (var i = 0; i < mainCardsItems.length; i++) {
		mainCardsItems[i].classList.remove('main-cards-item-active');
		if (mainCardsItems[i].querySelector('.result-count').textContent == `${maxNumber2}%`) {
			mainCardsItems[i].classList.add('main-cards-item-active');
		}
	}


}

});





crime.addEventListener('click', function () {
	var num1, num2, num3, num4, num5, maxNumber, maxNumber2;
	const mainCardsItems = document.querySelectorAll('.main-cards-item');



	num3 = Math.round(Math.random() * 75) + 25;
	num2 = Math.round(Math.random() * (100 - num3));
	num1 = 100 - (num3 + num2);


	num4 = Math.round(Math.random() * 75) + 25;
	num5 = 100 - num4;


	maxNumber = Math.max(num1, num2, num3);
	maxNumber2 = Math.max(num4, num5);


	if (mainCardsItems.length == 3) {
		resultCounts[0].textContent = `${num1}%`;;
		progressBars[0].style.height = `${num1}%`;
		resultCounts[1].textContent = `${num2}%`;;
		progressBars[1].style.height = `${num2}%`;
		resultCounts[2].textContent = `${num3}%`;;
		progressBars[2].style.height = `${num3}%`;

		// max number blue border
		for (var i = 0; i < mainCardsItems.length; i++) {
			mainCardsItems[i].classList.remove('main-cards-item-active');
			if (mainCardsItems[i].querySelector('.result-count').textContent == `${maxNumber}%`) {
				mainCardsItems[i].classList.add('main-cards-item-active');
			}
		}
		console.log(maxNumber)



	} else if (mainCardsItems.length == 2) {
		resultCounts[0].textContent = `${num4}%`;;
		progressBars[0].style.height = `${num4}%`;
		resultCounts[1].textContent = `${num5}%`;;
		progressBars[1].style.height = `${num5}%`;

		// max number blue border
		for (var i = 0; i < mainCardsItems.length; i++) {
			mainCardsItems[i].classList.remove('main-cards-item-active');
			if (mainCardsItems[i].querySelector('.result-count').textContent == `${maxNumber2}%`) {
				mainCardsItems[i].classList.add('main-cards-item-active');
			}
		}
	}

});

