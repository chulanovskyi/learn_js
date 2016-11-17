http://jscourse.com/task/extend-object-simple
<<<
function extend(obj1, obj2) {
    for (var key in obj2){
        obj1[key] = obj2[key];
    };
    return obj1;
}
>>>

http://jscourse.com/task/create-object-from-arrays
<<<
function createObject(arrOfKeys, arrOfData) {
	var obj = {};
	arrOfKeys.forEach(function(key, ind, arrOfKeys){
		obj[key] = arrOfData[ind];
	});
	return obj;
}
>>>

http://jscourse.com/task/summ-all-arguments
<<<
function sum() {
	var args = [];
	for (var argKey in arguments){
		args.push(arguments[argKey]);
	};
	result = args.reduce(function(val1, val2){
		return val1 + val2;
	});
	return result;
}
>>>

http://jscourse.com/task/is-in-array
<<<
function isInArray(arr) {
	for (var i=1; i < arguments.length; i++){
		if(arr.indexOf(arguments[i]) === -1){
			return false;
		};
	};
	return true;
}
>>>

http://jscourse.com/task/every
<<<
function every(arr, func) {
	for (var i=0; i<arr.length; i++){
		if (!func(arr[i], i, arr)){
			return false;
		};
	};
	return true;
}
>>>

http://jscourse.com/task/exec-each-function-in-array
<<<
function execFunctions(arrOfFunctions) {
	var result = [];
	for (var func in arrOfFunctions){
		result.push(arrOfFunctions[func].call());
	};
	return result;
}
>>>

http://jscourse.com/task/get-name-from-path
<<<
function getName(path) {
	while(path.slice(-1) === '/'){
		path = path.slice(0, -1);
	}
	return path.split('/').slice(-1).pop();
}
>>>

http://jscourse.com/task/array-like-object-to-array
<<<
function toArray(obj) {
	var result = [];
	for (var elem in obj){
		if(elem != 'length'){
			result.push(obj[elem]);
		};
	};
	return result;
}
>>>

http://jscourse.com/task/query-string-to-object
<<<
function queryStringToObject(queryString) {
	if (!queryString){
		return {};
	};
	var obj = {};
	var pairs = queryString.split('&');
	for (var item in pairs){
		var keyValue = pairs[item].split('=');
		var key = keyValue[0], value = keyValue[1];
		var intValue = parseInt(keyValue[1],10);
		if (intValue){
			obj[key] = intValue;
		} else if (value == 'true'){
			obj[key] = true;
		} else if (value == 'false'){
			obj[key] = false;
		} else {
			obj[key] = decodeURIComponent(keyValue[1]);
		};
	};
	return obj;
}
>>>

http://jscourse.com/task/fix-object-in-sequence
<<<
function fixStruct(struct) {
	for (var i=struct.length-1; i>0; i--){
		var expVal = struct[i].value - struct[i].delta; 
		if (struct[i-1].value != expVal){
			struct[i-1].value = expVal;
			struct[i-1].delta = expVal - struct[i-2].value;
		};
	};
}
>>>

http://jscourse.com/task/get-unique
<<<
function getUnique(list) {
	var result = [];
	for (var elem in list){
		var inResult = result.indexOf(list[elem]) == -1;
		if(inResult && elem != 'length'){
			result.push(list[elem]);
		};
	};
	return result;
}
>>>

http://jscourse.com/task/incapsulated-counter
<<<
function createSummator(initialValue) {
	var current = initialValue || 0;
		
	var actions = {
		inc:  function(val){
			return current += val || 1;
		},
		dec: function(val){
			return current -= val || 1;
		},
		get: function(){
			return current;
		},
	};
	
	return actions;
}
>>>

http://jscourse.com/task/compose
<<<
function compose() {
	var funcs = Array.prototype.slice.call(arguments);
	
	return funcs.reduce(function(next_func, func){
		return function(){
			return func(next_func.apply(this, arguments));
		};
	});
};
>>>

http://jscourse.com/task/simple-templater
<<<
function templater(templateString, dataObj) {
	var newStr = templateString;
	var reCount = templateString.match(/\$\{/g);
	for (var i=0; i<reCount.length; i++){
		for(var key in dataObj){
			var re = new RegExp('\\$\\{'+key+'\\}');
			newStr = newStr.replace(re, dataObj[key]);
		};
	};
	return newStr;
}
>>>

http://jscourse.com/task/keeper
<<<TEMP
function createKeeper() {
	var keyring = {};
	var actions = {
		put: function(key, value){
			console.log('PUT ', key, value);
			return keyring[key] = value;
		},
		get: function(key){
			console.log('GET', key, keyring[key]);
			return keyring[key] || null;
		},
	};
	console.log('---');
	return actions;
}


Замечание:

Не отрабатывает с несуществующими ключами.

var keeper = createKeeper();
keeper.put({}, 999);
keeper.get({});

не вычисляется в null ---->>>> И НЕ ДОЛЖНО! WTF!?

>>>

http://jscourse.com/task/sequence-prototype
<<<
function Sequence(arr) {
	this.pos = 0;
	this.arr = arr;
	
	Sequence.prototype.go = function(ind){
		this.pos = ind;
		if (this.pos > this.arr.length-1){
			this.pos = this.arr.length-1;
		};
		return this.arr[this.pos];
	};
	
	Sequence.prototype.next = function(){
		this.pos++;
		if (this.pos > this.arr.length-1){
			this.pos = 0;
		};
		return this.arr[this.pos];
	};
	
	Sequence.prototype.prev = function(){
		this.pos--;
		if (this.pos < 0){
			this.pos = this.arr.length-1;
		};
		return this.arr[this.pos];
	};
}
>>>

http://jscourse.com/task/to-matrix
<<<
function toMatrix (data, rowSize) {
	var dataCopy = data.slice();
	var matrix = [];
	while (dataCopy.length > 0){
		var row = [];
		for (var i=0; i < rowSize; i++){
			var item = dataCopy.shift();
			if (typeof item != 'undefined'){
				row.push(item);
			};
		};
		matrix.push(row);
	}
	return matrix;
}
>>>

http://jscourse.com/task/pick
<<<
function pick(obj, keys) {
	var newObj = {};
	for (var key in keys){
		if(obj.hasOwnProperty(keys[key])){
			newObj[keys[key]] = obj[keys[key]];
		};
	};
	return newObj;
}
>>>
