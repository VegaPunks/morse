const inputRuText = document.querySelector(".blockText")
const inputText = document.querySelector(".showText")
const btnTranslate = document.querySelector(".btn")
console.log(inputRuText)

let morse = {
	"А": ".-",
	"Б": "-...",	
	"В":	".--",	
	"Г":	"--.",	
	"Д":	"-..",	
	"Е":	".",
	"Ж":	"...-",	
	"З":	"--..",	
	"И":	"..",	
	"Й":	".---",	
	"К":	"-.-",	
	"Л":	".-..",
	"М":	"--",	
	"Н":	"-.",	
	"О":	"---",	
	"П":	".--.",	
	"Р":	".-.",	
	"С":	"...",
	"Т":	"-",	
	"У":	"..-",	
	"Ф":	"..-.",	
	"Х":	"....",	
	"Ц":	"-.-.",	
	"Ч":	"---.",
	"Ш":	"----",	
	"Щ":	"--.-",	
	"Ъ":	"--.--",	
	"Ы":	"-.--",	
	"Ь":	"-..-",	
	"Э":	"..-..",
	"Ю":	"..--",	
	"Я":	".-.-",	
	"Ї":	".---.",	
	"Є":	"..-..",	
	"І":	"..",	
	"Ґ":	"--.",
	"0":	"-----",	
	"1":	".----",	
	"2":	"..---",	
	"3":	"...--",	
	"4":	"....-",	
	"5":	".....",
	"6":	"-....",	
	"7":	"--...",	
	"8":	"---..",	
	"9":	"----.",
	".":	".-.-.-",	
	",":	"--..--",	
	"?":	"..--..",	
	"'":	".----.",	
	"!":	"-.-.--",	
	"/":	"-..-.",
	"(":	"-.--.",	
	")":	"-.--.-",	
	"&":	".-...",	
	":":	"---...",	
	";":	"-.-.-.",	
	"=":	"-...-",
	"+":	".-.-.",	
	"-":	"-....-",	
	"_":	"..--.-",	
	'"':	".-..-.",	
	"$":	"...-..-",	
	"@":	".--.-.",
	"¿":	"..-.-",
	"¡":	"--...-",
}

let resText = ""

inputRuText.addEventListener("change", e => {
	let text = e.target.value
	let arr = text.split("")
	let res = ""
	for(let i = 0; i < arr.length; i++) {
		let toUpper = arr[i].toUpperCase()
		res += morse[toUpper]
	}
	resText = res
}) 

btnTranslate.addEventListener("click", e => {
	console.log(resText)
	inputText.value = resText
})
