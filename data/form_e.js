/* ═══════════════════════════════════════════════════════
   FORM E — PRACTICE A (Step 1, the easy start; added 10/8)
   Marcos 10/8: "add another easier practice A for the Mechanics
   Edition and relabel Practice to Practice B."
   Small numbers first, one idea at a time, IN ORDER (not shuffled):
     E01–E04  place names (which digit is in which place)
     E05–E07  the digit you look at (one place to the right)
     E08–E10  up or down (0–4 down · 5–9 up)
     E11–E15  ROUNDING DOWN KEEPS THE DIGIT — the class's biggest
              mistake ("rounding down means it goes down 1"):
              43 → 40 and 231 → 200; E15 rounds UP for contrast
     E16–E20  round small numbers, start to finish
   Every question has an opt-in hint; pv = place-value chart.
═══════════════════════════════════════════════════════ */
window.FORM_E = [
  // ── Place names ──
  { id:"E01", q:"In 47, which digit is in the tens place?", hint:"Read the place names under the digits.",
    choices:["4","7","47","0"], answer:"4", pv:{ n:47, round:"tens" },
    explanation:"The 4 is in the tens place. The 7 is in the ones place." },
  { id:"E02", q:"In 362, which digit is in the hundreds place?", hint:"Read the place names under the digits.",
    choices:["3","6","2","36"], answer:"3", pv:{ n:362, round:"hundreds" },
    explanation:"The 3 is in the hundreds place. The 6 is in the tens place. The 2 is in the ones place." },
  { id:"E03", q:"In 4,718, which digit is in the thousands place?", hint:"Read the place names under the digits.",
    choices:["4","7","1","8"], answer:"4", pv:{ n:4718, round:"thousands" },
    explanation:"The 4 is in the thousands place. It means 4 thousands." },
  { id:"E04", q:"In 5,206, what place is the 2 in?", hint:"Find the 2. Read the place name under it.",
    choices:["hundreds","tens","thousands","ones"], answer:"hundreds", pv:{ n:5206, round:"hundreds" },
    explanation:"The 2 is in the hundreds place. It means 2 hundreds." },

  // ── The digit you look at ──
  { id:"E05", q:"We round 47 to the nearest ten. Which digit do we look at?", hint:"Look one place to the right of the tens place.",
    choices:["7","4","47","0"], answer:"7", pv:{ n:47, round:"tens", roundMark:true },
    explanation:"The rounding digit is the 4. Look one place to the right. That is the ones place. The digit there is 7." },
  { id:"E06", q:"We round 362 to the nearest hundred. Which digit do we look at?", hint:"Look one place to the right of the hundreds place.",
    choices:["6","3","2","36"], answer:"6", pv:{ n:362, round:"hundreds", roundMark:true },
    explanation:"The rounding digit is the 3. Look one place to the right. That is the tens place. The digit there is 6." },
  { id:"E07", q:"We round 4,718 to the nearest thousand. Which digit do we look at?", hint:"Look one place to the right of the thousands place.",
    choices:["7","4","1","8"], answer:"7", pv:{ n:4718, round:"thousands", roundMark:true },
    explanation:"The rounding digit is the 4. Look one place to the right. That is the hundreds place. The digit there is 7." },

  // ── Up or down ──
  { id:"E08", q:"The digit you look at is 3. Round up or round down?", hint:"0, 1, 2, 3, 4 → round down. 5, 6, 7, 8, 9 → round up.",
    choices:["Round down","Round up"], answer:"Round down",
    explanation:"3 is less than 5. So we round down." },
  { id:"E09", q:"The digit you look at is 7. Round up or round down?", hint:"0, 1, 2, 3, 4 → round down. 5, 6, 7, 8, 9 → round up.",
    choices:["Round up","Round down"], answer:"Round up",
    explanation:"7 is 5 or more. So we round up." },
  { id:"E10", q:"The digit you look at is 5. Round up or round down?", hint:"5 is in the round-up group.",
    choices:["Round up","Round down"], answer:"Round up",
    explanation:"5 means round up. 5, 6, 7, 8, and 9 all round up." },

  // ── Rounding down keeps the digit (the big one) ──
  { id:"E11", q:"We round 43 to the nearest ten. We round down. What happens to the 4?", hint:"Rounding down does not take 1 away.",
    choices:["It stays 4","It becomes 3","It becomes 5","It becomes 0"], answer:"It stays 4", pv:{ n:43, round:"tens", roundMark:true, look:true },
    explanation:"Rounding down means the 4 stays 4. It does not become 3. 43 is between 40 and 50. It is closer to 40." },
  { id:"E12", q:"Round 43 to the nearest ten.", hint:"Keep the 4. Make the ones digit 0.",
    choices:["40","30","50","43"], answer:"40", pv:{ n:43, round:"tens", roundMark:true, look:true },
    explanation:"The 4 stays 4. The 3 becomes 0. The answer is 40, not 30." },
  { id:"E13", q:"We round 231 to the nearest hundred. We round down. What happens to the 2?", hint:"Rounding down does not take 1 away.",
    choices:["It stays 2","It becomes 1","It becomes 3","It becomes 0"], answer:"It stays 2", pv:{ n:231, round:"hundreds", roundMark:true, look:true },
    explanation:"Rounding down means the 2 stays 2. It does not become 1. 231 is between 200 and 300. It is closer to 200." },
  { id:"E14", q:"Round 231 to the nearest hundred.", hint:"Keep the 2. Make the tens and ones 0.",
    choices:["200","100","300","230"], answer:"200", pv:{ n:231, round:"hundreds", roundMark:true, look:true },
    explanation:"The tens digit is 3, so we round down. The 2 stays 2. The 3 and the 1 become 0. The answer is 200, not 100." },
  { id:"E15", q:"We round 47 to the nearest ten. We round up. What happens to the 4?", hint:"Rounding up adds 1 to the rounding digit.",
    choices:["It becomes 5","It stays 4","It becomes 3","It becomes 0"], answer:"It becomes 5", pv:{ n:47, round:"tens", roundMark:true, look:true },
    explanation:"Rounding up means the 4 goes up by 1. It becomes 5. The answer is 50. Only rounding UP changes the digit." },

  // ── Round small numbers, start to finish ──
  { id:"E16", q:"Round 86 to the nearest ten.", hint:"Look at the ones digit. Is it 5 or more?",
    choices:["90","80","70","86"], answer:"90", pv:{ n:86, round:"tens", roundMark:true, look:true },
    explanation:"The ones digit is 6. 6 means round up. The 8 becomes 9. The answer is 90." },
  { id:"E17", q:"Round 612 to the nearest hundred.", hint:"Look at the tens digit. Is it 5 or more?",
    choices:["600","500","700","610"], answer:"600", pv:{ n:612, round:"hundreds", roundMark:true, look:true },
    explanation:"The tens digit is 1. 1 means round down. The 6 stays 6. The answer is 600, not 500." },
  { id:"E18", q:"Round 3,284 to the nearest thousand.", hint:"Look at the hundreds digit. Is it 5 or more?",
    choices:["3,000","2,000","4,000","3,200"], answer:"3,000", pv:{ n:3284, round:"thousands", roundMark:true, look:true },
    explanation:"The hundreds digit is 2. 2 means round down. The 3 stays 3. The answer is 3,000, not 2,000." },
  { id:"E19", q:"Round 758 to the nearest hundred.", hint:"Look at the tens digit. Is it 5 or more?",
    choices:["800","700","600","760"], answer:"800", pv:{ n:758, round:"hundreds", roundMark:true, look:true },
    explanation:"The tens digit is 5. 5 means round up. The 7 becomes 8. The answer is 800." },
  { id:"E20", q:"Round 5,431 to the nearest thousand.", hint:"Look at the hundreds digit. Is it 5 or more?",
    choices:["5,000","4,000","6,000","5,400"], answer:"5,000", pv:{ n:5431, round:"thousands", roundMark:true, look:true },
    explanation:"The hundreds digit is 4. 4 means round down. The 5 stays 5. The answer is 5,000, not 4,000." },
];
