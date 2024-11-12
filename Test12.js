/*const textFirst = document.querySelector('.html-text');
console.log(textFirst.length)*/

var str = "у лукоморья клён зелёный; златая цепь на клён том; и днём и ночью кот учёный; всё ходит по цепи кругом; идёт направо — песнь заводит; налево — сказку говорит; там чудеса: там леший бродит; русалка на ветвях сидит; там на неведомых дорожках; следы невиданных зверей; избушка там на курьих ножках; стоит без окон, без дверей; там лес и дол видений полны; там о заре прихлынут волны; на брег песчаный и пустой; и тридцать витязей прекрасных; чредой из вод выходят ясных; и с ними дядька их морской; там королевич мимоходом; пленяет грозного царя; там в облаках перед народом; через леса, через моря; колдун несёт богатыря; в темнице там царевна тужит; а бурый волк ей верно служит; там ступа с бабою ягой; идёт, бредёт сама собой; там царь кащей над златом чахнет; там русский дух… там русью пахнет!; и там я был, и мёд я пил; у моря видел клён зелёный; под ним сидел, и кот учёный; свои мне сказки говорил.";
//console.log(str.length);

let result = str.replace(/;/g, ";\n");
//console.log(result);

let substring = result.replaceAll(' ', '');
//console.log(substring);

let newText = result.slice(28, 50);
//console.log(newText);

let replacedText = newText.replace(/клён/gi, "дубе")
//console.log(replacedText)

let replacedText2 = result.toUpperCase();
//console.log(replacedText2);

let replacedText3 = result.replace(/клён/, "дуб");
//console.log(replacedText3);

let index = str.indexOf('моря');
//console.log(index);

let firstLetter = replacedText.charAt(0).toUpperCase();
let modifiedText = firstLetter + replacedText.slice(1);
//console.log(modifiedText);


console.log(`1. Количество символов в тексте: ${str.length}`);
console.log(`2. Текст с переносами строк: \n ${result}`);
console.log(`3. Текст с удалёнными пробелами: ${substring}`);
console.log(`4. Извлечение подстроки: ${newText}`);
console.log(`5. Замена "клён" на "дубе": ${replacedText}`);
console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);
console.log(`7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`);
console.log(`8. Индекс первого вхождения "моря": ${index}`);
console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);
