let a = 1;
let b = 1;
let c = 5;

if( a >= 1){
    console.log("A variavel A é válida");
    let delta = b**2 - (4*a*c);
    if(delta > 0){
        let x1 = (b*-1 + delta**0.5)/2*a
        let x2 = (b*-1 - delta**0.5)/2*a
        console.log("A equação possui duas raizes, " + x1 + " e " + x2);
    } else if( delta == 0){
        let xunico = (b*-1)/(2*a);
        console.log("A equação possui apenas uma raiz, " + xunico);
    }else{
        console.log("Não possui raizes")
    }

}else{
    console.log("A variável A n é valida ")
}
