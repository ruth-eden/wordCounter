const btn = document.getElementById('btn');
const count = document.getElementById('wordCount');
const letters = document.getElementById('letterCount');
const finalPara = document.getElementById('fullText');

btn.addEventListener('click', function() {
  const sentence = document.getElementById('text').value;
  const words = sentence.split(' ');
  count.innerText = words.length;
  letters.innerText = sentence.replaceAll(' ', '').length;
  finalPara.innerText = sentence;
});
