async function showScores(){
let res = await fetch("data/scores.json")
let scores = await res.json()
let html = "<h2>Clinical Scores</h2>"
scores.forEach(s=>{
html += `<div>${s.name}</div>`
})
document.getElementById("content").innerHTML = html
}

async function showDrugs(){
let res = await fetch("data/drugs.json")
let drugs = await res.json()
let html = "<h2>Drug Dosing</h2>"
drugs.forEach(d=>{
html += `
<div>
<h3>${d.name}</h3>
Adult: ${d.adult}<br>
Pediatric: ${d.pediatric}
</div>`
})
document.getElementById("content").innerHTML = html
}

async function showGuidelines(){
let res = await fetch("data/guidelines.json")
let diseases = await res.json()
let html = "<h2>Disease Guidelines</h2>"
diseases.forEach(d=>{
html += `<div>${d.disease}</div>`
})
document.getElementById("content").innerHTML = html
}

function showPediatric(){
document.getElementById("content").innerHTML = `
<h2>Pediatric Dose Calculator</h2>
Weight (kg): <input id="weight" type="number">
<br><br>
<button onclick="calcDose()">Calculate</button>
<h3 id="doseResult"></h3>
`
}

function calcDose(){
let w = Number(document.getElementById("weight").value)
let dose = w * 10
document.getElementById("doseResult").innerText = "Example dose: " + dose + " mg"
}

function showAI(){
document.getElementById("content").innerHTML = `
<h2>AI Symptom Helper</h2>
<textarea id="sym" rows="4" cols="30" placeholder="Enter symptoms..."></textarea>
<br><br>
<button onclick="aiCheck()">Check</button>
<h3 id="aiResult"></h3>
`
}

function aiCheck(){
let s = document.getElementById("sym").value.toLowerCase()
let result = "Need more information"
if(s.includes("fever") && s.includes("cough")){
result = "Possible: Pneumonia"
}
if(s.includes("rlq pain")){
result = "Possible: Appendicitis"
}
document.getElementById("aiResult").innerText = result
}