var sieve = ((n) => {
	let arr = new Array(n+1).fill(true),
		res = [];
	arr[0] = arr[1] = false;
	let range = Math.sqrt(n) + 1;
	for(let i = 2; i <= range; i++){
		if(arr[i]){
			for(let j = i*2;  j <= n; j+= i){
				arr[j] = false;
			}
		}
	}
	for(let i = 2; i <= n; i++){
		if(arr[i])res.push(i);
	}	
	return res;
})(1000000);

const isPrime = (n) => {
    if(typeof n !== 'number'){
        throw TypeError('expect number got '+ (typeof n));
    }
    if(n > Number.MAX_SAFE_INTEGER){
        throw Error("Number Is To Big");
    }
    else if(n <= 1000000){
        return sieve.includes(n);
    }
    else {
        let sqrt = Math.sqrt(n);
        for(let i = 2; i <= sqrt; i++){
            if(n%i === 0)return false;
        }
        return true;
    }
};

module.exports = isPrime;