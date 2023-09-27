/* opgave 1 */
console.group("opgave 1");
// din kode her

let result1 = "";

for (let i = 1; i <= 10; i++) {
	console.log(i);
	result1 += `${i}, `;
}

let output = document.getElementById("opgave1");
let outPutElement = document.createElement("p");
outPutElement.innerText = result1;
output.appendChild(outPutElement);

console.groupEnd();

/* opgave 2 */
console.group("opgave 2");
// din kode her
let result2 = "";
for (let i = 10; i <= 11; i++) {
	console.log(i);
	result2 += `${i}, `;
}

let output2 = document.getElementById("opgave2");
let outPutElement2 = document.createElement("p");
outPutElement2.innerText = result2;
output2.appendChild(outPutElement2);

console.groupEnd();

/* opgave 3 */
console.group("opgave 3");
// din kode her
let result3 = document.getElementById("opgave3");
for (let i = 2; i <= 40; i += 2) {
	console.log(i);
	if (i < 40) {
		result3.innerText += ` ${i},`;
	} else {
		result3.innerText += ` ${i}.`;
	}
}

console.groupEnd();
