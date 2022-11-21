function roll(x, y, z){
	var sides = x;
	var dice = y;
	var rolls = z;
	var results = new Array(z);
	for (let i = 0; i < rolls; i++){
		var result = 0;
		for(let j = 1; j < dice; j++){
			result = Math.floor(Math.random()*sides)+1 + result;
		}
		results[i] = result;
	}
	return JSON.stringify({
        "sides": sides,
        "dice": dice,
        "rolls": rolls,
        "results": results
      });
}
export {roll}; 
