/*'0' <-> 'O'      '5' <-> 'S'
'1' <-> 'I'      '6' <-> 'G'
'2' <-> 'Z'      '7' <-> 'L'
'3' <-> 'E'      '8' <-> 'B'
'4' <-> 'h'      '9' <-> 'q'*/

/*"PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770." */ 

// There is a string function for replace.. but how do I use it if I need many things replaced and swaped? can I string them all along? 

function day1(input){
    input.replaceAll("0","O").replaceAll("1","I").replaceAll("2","Z").replaceAll("3","E").replaceAll("4","h").replaceAll("5","S").replaceAll("6","G").replaceAll("7","L").replaceAll("9","q").replaceAll("8","B")
}

console.log(day1("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."))