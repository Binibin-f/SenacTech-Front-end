


function dizOi(umnome, umaidade, umano){
	let name = umnome
	let hello1 = "Oii " + name
	console.info (hello1)


	let number = umaidade
	let hello2 = "Você tem "+ number + " anos"
	console.info(hello2)
	
	let year = umano
	let nascimento = year - number
	let calculo = "Você nasceu em " + nascimento
	console.info (calculo)
	//dizOi("Bin", 23, 2024) "é como a main"
}


function dizOpa(nome) {
	console.info("Opa " + nome)
	
	
	//let nomes é como a "main"
	let nomes = ["Matheus", "Ingrid", "Bernardo", "Miguel"]
	
	dizOpa(nomes[0])
	dizOpa(nomes[1])
	dizOpa(nomes[2])
	dizOpa(nomes[3])
}

	
	
/*	let idade = 2
	
	if(idade >= 10) 
	{
		console.info("Bem vindo") 	
	} 
		else 
		{
			console.info("Não") 
		}
			console.info ("Fim")
*/




let umPremios =["Bolo", "Sorvete", "a", "b", "c", "d"] 


umPremios.forEach(umPremio => {
	console.info(umPremio)
})


let dado = parseInt(Math.random()*6) + 1
console.info("Sorteado foi: "+umPremios[dado-1])

if (dado <= 3)
{
	console.info("Você perdeu")	
}
else
	{
	console.info("Você ganhou")
	}

	