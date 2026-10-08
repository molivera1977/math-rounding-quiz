/* ═══════════════════════════════════════════════════════
   FORM P — PRACTICE (Step 2, before the review; added 10/8)
   Marcos 10/8: "add a practice for the mechanics edition with hints"
   and "their biggest mistake is thinking that rounding down means
   the number goes down 1."
   Quiz 1 (10/6) agrees: A04 "the 2 … becomes 1" picked by 7 of 19;
   A11 rounding digit vs. look-at digit missed by 15 of 19; A17
   649,870 → 650,000 picked by 8.
   Four numbers × five steps, IN ORDER (not shuffled):
     1 find the rounding digit · 2 find the digit you look at ·
     3 round up or down · 4 what the rounding digit becomes ·
     5 the rounded number
   Three of the four numbers round DOWN, so "stays the same — it
   never goes down 1" comes up again and again; 58,512 rounds UP
   for contrast. Every step-4 item offers the "goes down 1" choice.
   pv = place-value chart under the question. hint = opt-in (closed
   until the student taps 💡 Need a hint?).
═══════════════════════════════════════════════════════ */
window.FORM_P = [
  // ── 4,627 → nearest hundred (rounds DOWN) ──
  { id:"P01", q:"Round 4,627 to the nearest hundred. Step 1: Which digit is in the hundreds place?", hint:"Read the place names under the digits.",
    choices:["6","4","2","7"], answer:"6", pv:{ n:4627, round:"hundreds" },
    explanation:"The 6 is in the hundreds place. The 6 is the rounding digit." },
  { id:"P02", q:"Round 4,627 to the nearest hundred. Step 2: Which digit do you look at?", hint:"Look at the digit just to the right of the rounding digit.",
    choices:["2","6","4","7"], answer:"2", pv:{ n:4627, round:"hundreds", roundMark:true },
    explanation:"Look one place to the right of the 6. That is the tens place. The digit there is 2." },
  { id:"P03", q:"Round 4,627 to the nearest hundred. Step 3: The digit you look at is 2. Round up or round down?", hint:"0, 1, 2, 3, 4 → round down. 5, 6, 7, 8, 9 → round up.",
    choices:["Round down","Round up"], answer:"Round down", pv:{ n:4627, round:"hundreds", roundMark:true, look:true },
    explanation:"2 is less than 5. So we round down." },
  { id:"P04", q:"Round 4,627 to the nearest hundred. Step 4: We round down. What happens to the 6?", hint:"Rounding down does not take 1 away.",
    choices:["It stays 6","It becomes 5","It becomes 7","It becomes 0"], answer:"It stays 6", pv:{ n:4627, round:"hundreds", roundMark:true, look:true },
    explanation:"Rounding down means the rounding digit stays the same. The 6 stays 6. It does not go down to 5." },
  { id:"P05", q:"Round 4,627 to the nearest hundred. Step 5: What is 4,627 rounded to the nearest hundred?", hint:"Keep the 6. Make the digits after it 0.",
    choices:["4,600","4,500","4,700","4,000"], answer:"4,600", pv:{ n:4627, round:"hundreds", roundMark:true, look:true },
    explanation:"The 6 stays 6. The digits after it become 0. The answer is 4,600. 4,627 is between 4,600 and 4,700, and it is closer to 4,600." },

  // ── 23,418 → nearest ten thousand (rounds DOWN) — Quiz 1's "becomes 1" item ──
  { id:"P06", q:"Round 23,418 to the nearest ten thousand. Step 1: Which digit is in the ten thousands place?", hint:"Read the place names under the digits.",
    choices:["2","3","4","8"], answer:"2", pv:{ n:23418, round:"ten thousands" },
    explanation:"The 2 is in the ten thousands place. The 2 is the rounding digit." },
  { id:"P07", q:"Round 23,418 to the nearest ten thousand. Step 2: Which digit do you look at?", hint:"Look at the digit just to the right of the rounding digit.",
    choices:["3","2","4","1"], answer:"3", pv:{ n:23418, round:"ten thousands", roundMark:true },
    explanation:"Look one place to the right of the 2. That is the thousands place. The digit there is 3." },
  { id:"P08", q:"Round 23,418 to the nearest ten thousand. Step 3: The digit you look at is 3. Round up or round down?", hint:"0, 1, 2, 3, 4 → round down. 5, 6, 7, 8, 9 → round up.",
    choices:["Round down","Round up"], answer:"Round down", pv:{ n:23418, round:"ten thousands", roundMark:true, look:true },
    explanation:"3 is less than 5. So we round down." },
  { id:"P09", q:"Round 23,418 to the nearest ten thousand. Step 4: We round down. What happens to the 2?", hint:"Rounding down does not take 1 away.",
    choices:["It stays 2","It becomes 1","It becomes 3","It becomes 0"], answer:"It stays 2", pv:{ n:23418, round:"ten thousands", roundMark:true, look:true },
    explanation:"Rounding down means the rounding digit stays the same. The 2 stays 2. It does not become 1." },
  { id:"P10", q:"Round 23,418 to the nearest ten thousand. Step 5: What is 23,418 rounded to the nearest ten thousand?", hint:"Keep the 2. Make the digits after it 0.",
    choices:["20,000","10,000","30,000","23,000"], answer:"20,000", pv:{ n:23418, round:"ten thousands", roundMark:true, look:true },
    explanation:"The 2 stays 2. The digits after it become 0. The answer is 20,000, not 10,000. 23,418 is between 20,000 and 30,000, and it is closer to 20,000." },

  // ── 58,512 → nearest thousand (rounds UP — the contrast) ──
  { id:"P11", q:"Round 58,512 to the nearest thousand. Step 1: Which digit is in the thousands place?", hint:"Read the place names under the digits.",
    choices:["8","5","1","2"], answer:"8", pv:{ n:58512, round:"thousands" },
    explanation:"The 8 is in the thousands place. The 8 is the rounding digit." },
  { id:"P12", q:"Round 58,512 to the nearest thousand. Step 2: Which digit do you look at?", hint:"Look at the digit just to the right of the rounding digit.",
    choices:["5 (the hundreds digit)","8","1","2"], answer:"5 (the hundreds digit)", pv:{ n:58512, round:"thousands", roundMark:true },
    explanation:"Look one place to the right of the 8. That is the hundreds place. The digit there is 5." },
  { id:"P13", q:"Round 58,512 to the nearest thousand. Step 3: The digit you look at is 5. Round up or round down?", hint:"0, 1, 2, 3, 4 → round down. 5, 6, 7, 8, 9 → round up.",
    choices:["Round up","Round down"], answer:"Round up", pv:{ n:58512, round:"thousands", roundMark:true, look:true },
    explanation:"5 means round up. 5, 6, 7, 8, and 9 all round up." },
  { id:"P14", q:"Round 58,512 to the nearest thousand. Step 4: We round up. What happens to the 8?", hint:"Rounding up adds 1 to the rounding digit.",
    choices:["It becomes 9","It stays 8","It becomes 7","It becomes 0"], answer:"It becomes 9", pv:{ n:58512, round:"thousands", roundMark:true, look:true },
    explanation:"Rounding up means the rounding digit goes up by 1. The 8 becomes 9. Only rounding UP changes the digit." },
  { id:"P15", q:"Round 58,512 to the nearest thousand. Step 5: What is 58,512 rounded to the nearest thousand?", hint:"The 8 becomes 9. Make the digits after it 0.",
    choices:["59,000","58,000","58,500","60,000"], answer:"59,000", pv:{ n:58512, round:"thousands", roundMark:true, look:true },
    explanation:"The 8 becomes 9. The digits after it become 0. The answer is 59,000." },

  // ── 649,870 → nearest hundred thousand (rounds DOWN) — Quiz 1's 650,000 item ──
  { id:"P16", q:"Round 649,870 to the nearest hundred thousand. Step 1: Which digit is in the hundred thousands place?", hint:"Read the place names under the digits.",
    choices:["6","4","9","8"], answer:"6", pv:{ n:649870, round:"hundred thousands" },
    explanation:"The 6 is in the hundred thousands place. The 6 is the rounding digit." },
  { id:"P17", q:"Round 649,870 to the nearest hundred thousand. Step 2: Which digit do you look at?", hint:"Look at the digit just to the right of the rounding digit.",
    choices:["4","6","9","8"], answer:"4", pv:{ n:649870, round:"hundred thousands", roundMark:true },
    explanation:"Look one place to the right of the 6. That is the ten thousands place. The digit there is 4. Do not look at the 9." },
  { id:"P18", q:"Round 649,870 to the nearest hundred thousand. Step 3: The digit you look at is 4. Round up or round down?", hint:"0, 1, 2, 3, 4 → round down. 5, 6, 7, 8, 9 → round up.",
    choices:["Round down","Round up"], answer:"Round down", pv:{ n:649870, round:"hundred thousands", roundMark:true, look:true },
    explanation:"4 is less than 5. So we round down." },
  { id:"P19", q:"Round 649,870 to the nearest hundred thousand. Step 4: We round down. What happens to the 6?", hint:"Rounding down does not take 1 away.",
    choices:["It stays 6","It becomes 5","It becomes 7","It becomes 0"], answer:"It stays 6", pv:{ n:649870, round:"hundred thousands", roundMark:true, look:true },
    explanation:"Rounding down means the rounding digit stays the same. The 6 stays 6. It does not become 5." },
  { id:"P20", q:"Round 649,870 to the nearest hundred thousand. Step 5: What is 649,870 rounded to the nearest hundred thousand?", hint:"Keep the 6. Make every digit after it 0.",
    choices:["600,000","500,000","650,000","700,000"], answer:"600,000", pv:{ n:649870, round:"hundred thousands", roundMark:true, look:true },
    explanation:"The 6 stays 6. Every digit after it becomes 0. The answer is 600,000. It is not 500,000, and it is not 650,000." },
];
