//index section
function toggleMenu() {
    var dropdown = document.querySelector('.dropdown-content');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}



//horoscope section
function displayHoroscope() {
    const zodiacSelector = document.getElementById("zodiacSelector");
    const selectedZodiac = zodiacSelector.value;

    switch (selectedZodiac) {
        case "aries":
            let k1=document.getElementById("aries").innerHTML;
            document.getElementById('horoscopeMessage').innerHTML=k1;
            break;
        case "taurus":
            let k2=document.getElementById("taurus").innerHTML;
            document.getElementById('horoscopeMessage').innerHTML=k2;
            break;
        case "gemini":
            let k3=document.getElementById("gemini").innerHTML;
            document.getElementById('horoscopeMessage').innerHTML=k3;
            break;
        case "cancer":
            let k4=document.getElementById("cancer").innerHTML;
            document.getElementById('horoscopeMessage').innerHTML=k4;
            break;
        case "scorpio":
            let k5=document.getElementById("scorpio").innerHTML;
            document.getElementById('horoscopeMessage').innerHTML=k5;
            break;
        case "pisces":
            let k6=document.getElementById("pisces").innerHTML;
            document.getElementById('horoscopeMessage').innerHTML=k6;
            break;
        case "leo":
            let k7=document.getElementById("leo").innerHTML;
            document.getElementById('horoscopeMessage').innerHTML=k7;
            break;
        case "aquarius":
            let k8=document.getElementById("aquarius").innerHTML;
            document.getElementById('horoscopeMessage').innerHTML=k8;
            break;
        case "virgo":
            let k9=document.getElementById("virgo").innerHTML;
            document.getElementById('horoscopeMessage').innerHTML=k9;
            break;
        case "sagittarius":
            let k10=document.getElementById("sagittarius").innerHTML;
            document.getElementById('horoscopeMessage').innerHTML=k10;
            break;
        case "capricorn":
            let k11=document.getElementById("capricorn").innerHTML;
            document.getElementById('horoscopeMessage').innerHTML=k11;
            break;
        case "libra":
            let k12=document.getElementById("libra").innerHTML;
            document.getElementById('horoscopeMessage').innerHTML=k12;
            break;
        default:
            horoscopeMessage.textContent = "Please select a valid zodiac sign.";
    }
}


//...this is for find your sign
function findZodiacSign() {
    const birthdate = new Date(document.getElementById("birthdate").value);
    const month = birthdate.getMonth() + 1; // JavaScript months are 0-based
    const day = birthdate.getDate();

    let zodiacSign = '';

    if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        zodiacSign = "Capricorn";
    } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        zodiacSign = "Aquarius";
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        zodiacSign = "Pisces";
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        zodiacSign = "Aries";
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        zodiacSign = "Taurus";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        zodiacSign = "Gemini";
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        zodiacSign = "Cancer";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        zodiacSign = "Leo";
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        zodiacSign = "Virgo";
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        zodiacSign = "Libra";
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        zodiacSign = "Scorpio";
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        zodiacSign = "Sagittarius";
    }

    const result = document.getElementById("zodiacResult");
    result.textContent = `Your zodiac sign is: ${zodiacSign}`;
}

// numerology

function findNumerologyNumber() {
    const birthdate = document.getElementById("birthdate-num").value;
    let sum = birthdate.split('-').join('').split('').reduce((acc, num) => acc + parseInt(num), 0);

    // Reduce the number to a single digit
    while (sum >= 10) {
        let temp = sum;
        sum = 0;
        while (temp > 0) {
            sum += temp % 10;
            temp = Math.floor(temp / 10);
        }
    }

    document.getElementById("numerology-result").innerText = "Your Numerology Number is: " + sum;
}

// ... (existing code)

function showNumerologyContent() {
    const number = parseInt(document.getElementById("number-select").value);
    const descriptionElem = document.getElementById("number-description");
    
    const contentSection = document.querySelector(`.hidden-content[data-number="${number}"]`);
    
    if(contentSection) {
        descriptionElem.innerText = contentSection.textContent || "Content not found.";
    } else {
        descriptionElem.innerText = "Select a valid number to view its description.";
    }
}
