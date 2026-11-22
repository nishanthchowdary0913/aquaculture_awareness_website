const weeks=[{"n": 1, "title": "Community survey & introduction", "dates": "01/06/2026 – 06/06/2026", "days": [["01/06/2026", "Visited the village and met local leaders, fish farmers and fisheries extension staff.", "Learned how to introduce the project and build trust with the community."], ["02/06/2026", "Surveyed households and visited ponds to note fish species, pond size and farming methods.", "Understood the current fish farming practices and common problems."], ["03/06/2026", "Spoke with farmers about pond preparation, seed selection and feeding.", "Learned how to talk respectfully with farmers about their methods."], ["04/06/2026", "Observed water colour, smell and fish behaviour in ponds with farmers.", "Understood how water quality affects fish health."], ["05/06/2026", "Collected details of Fisheries Department schemes, subsidies and training programmes.", "Learned how farmers can access government support."], ["06/06/2026", "Prepared a report of survey findings and planned the next week.", "Learned the importance of documentation, reflection and planning."]]}, {"n": 2, "title": "Awareness sessions & preparation", "dates": "08/06/2026 – 13/06/2026", "days": [["08/06/2026", "Held an awareness session with farmers on benefits of scientific fish farming.", "Learned how to explain technical ideas in simple words."], ["09/06/2026", "Explained pond preparation: drying, liming, filling and fertilising.", "Understood the steps that make a pond ready for stocking."], ["10/06/2026", "Made posters and pamphlets on feed, water quality and disease prevention.", "Learned how to design clear messages people can understand."], ["11/06/2026", "Distributed posters and pamphlets at ponds, shops and public places.", "Understood how visible messages spread awareness."], ["12/06/2026", "Demonstrated simple water checks (colour, transparency, pH strips) at a pond.", "Learned how to show practical monitoring to farmers."], ["13/06/2026", "Prepared a weekly report and planned the village meeting.", "Learned the importance of teamwork, reflection and planning."]]}, {"n": 3, "title": "Meetings & demonstrations", "dates": "15/06/2026 – 20/06/2026", "days": [["15/06/2026", "Prepared a short presentation on sustainable aquaculture.", "Learned to turn survey findings into a clear message."], ["16/06/2026", "Held a pond-side demonstration on feeding rate and feed storage.", "Understood how correct feeding reduces waste and pollution."], ["17/06/2026", "Conducted an awareness session with school students and teachers on fish and water conservation.", "Learned how to engage young audiences."], ["18/06/2026", "Held the village awareness meeting with farmers and local leaders.", "Learned how public awareness encourages community action."], ["19/06/2026", "Explained common fish diseases and safe use of medicines and chemicals.", "Understood responsible disease management."], ["20/06/2026", "Collected feedback, took attendance and prepared the weekly report.", "Learned the importance of documentation and evaluating impact."]]}, {"n": 4, "title": "Follow-up & government support", "dates": "22/06/2026 – 27/06/2026", "days": [["22/06/2026", "Visited farmers who attended earlier sessions and checked if they had adopted new practices.", "Learned the importance of follow-up."], ["23/06/2026", "Shared details of Fisheries Department schemes, subsidies and insurance with farmers.", "Learned how farmers can benefit from government support."], ["24/06/2026", "Helped farmers fill in scheme and subsidy application forms.", "Learned how to guide families through forms and documents."], ["25/06/2026", "Met fisheries extension staff to discuss training and water testing support.", "Understood the role of experts in supporting farmers."], ["26/06/2026", "Met local leaders to discuss protecting village ponds and tanks from pollution.", "Learned how leaders can protect water resources."], ["27/06/2026", "Collected feedback and prepared the weekly report.", "Learned the importance of documentation and reflection."]]}, {"n": 5, "title": "Community outreach & youth involvement", "dates": "29/06/2026 – 04/07/2026", "days": [["29/06/2026", "Held the awareness session again in another part of the village.", "Learned how repeated outreach reaches more people."], ["30/06/2026", "Organised a drawing and slogan competition on fish farming and water conservation in school.", "Learned how creative activities help children understand."], ["01/07/2026", "Put up information boards on pond management and helpline contacts at the village centre.", "Understood how visible information helps farmers."], ["02/07/2026", "Held a pledge meeting with farmers for sustainable and chemical-safe fish farming.", "Learned how to encourage responsibility politely."], ["03/07/2026", "Formed a small group of youth volunteers to continue the awareness work.", "Learned leadership and how to keep a project going."], ["04/07/2026", "Collected community feedback and prepared the weekly report.", "Learned how to evaluate the impact of our work."]]}, {"n": 6, "title": "Review & final report", "dates": "06/07/2026 – 11/07/2026", "days": [["06/07/2026", "Revisited ponds to review the first survey and check progress.", "Learned how to measure change created by a project."], ["07/07/2026", "Collected photographs, feedback forms and records of all activities.", "Learned the importance of keeping proper records."], ["08/07/2026", "Thanked local leaders, officials and farmers for their support.", "Learned to value community cooperation and gratitude."], ["09/07/2026", "Wrote the final project report with findings and results.", "Learned how to present work clearly and honestly."], ["10/07/2026", "Reviewed the project and discussed lessons learned and future suggestions.", "Learned the importance of reflection and social responsibility."], ["11/07/2026", "Submitted the final report and logbook to the person in-charge.", "Learned the value of completing a project responsibly."]]}, {"n": 7, "title": "Mini-project review & guide submission", "dates": "Mini-project phase", "days": []}, {"n": 8, "title": "Aquaculture awareness website", "dates": "Mini-project phase", "days": []}];
const photos={"2": ["week-2-photo-1.jpeg", "week-2-photo-2.jpeg"], "3": ["week-3-photo-1.png"], "4": ["week-4-photo-1.jpeg", "week-4-photo-2.jpeg"], "5": ["week-5-photo-1.jpeg"], "6": ["week-6-photo-1.jpeg", "week-6-photo-2.jpeg"], "7": ["week-7-photo-1.jpeg", "week-7-photo-2.jpeg"]};

const practices=[
["Pond preparation","Prepare the pond before stocking. Dry and lime the pond, fill it with clean water and allow natural food to develop.","🪷"],
["Healthy seed selection","Buy healthy seed from reliable hatcheries. Choose stocking density suited to the pond and species.","🐟"],
["Stocking management","Use a stocking density suited to the pond and species. Avoid overcrowding and monitor fish growth.","⚖️"],
["Feeding management","Use quality feed from trusted suppliers, feed measured quantities at regular times and store it in a dry place. Excess feed can pollute water.","🥣"],
["Water-quality monitoring","Check water colour and transparency. Monitor pH, dissolved oxygen and ammonia regularly. Watch for fish gathering at the surface or stopping feeding.","💧"],
["Disease prevention","Keep the pond clean, avoid overcrowding, remove dead fish promptly and use medicines or chemicals only on expert advice.","🩺"],
["Waste management","Do not release pond waste into canals, tanks or farmland without proper treatment. Reduce excess feed and manage pond sludge responsibly.","🌿"],
["Harvest & records","Handle fish hygienically at harvest. Keep records of stocking dates, feed, water readings, growth and sales.","📋"]
];
const pg=document.getElementById('practiceGrid');
practices.forEach((p,i)=>{let a=document.createElement('a');a.className='practice-card';a.href=new URL(`#practice-${i+1}`,location.href).href;a.target='_blank';a.rel='noopener noreferrer';a.innerHTML=`<small>PRACTICE 0${i+1} · ${p[2]}</small><b>${p[0]}</b><p>Open guidance in a new tab →</p>`;pg.appendChild(a)});
const wg=document.getElementById('weekGrid'),wr=document.getElementById('weekReport');
weeks.forEach(w=>{let a=document.createElement('a');a.className='week-card';a.href=new URL(`#week-${w.n}`,location.href).href;a.target='_blank';a.rel='noopener noreferrer';a.innerHTML=`<b>WEEK 0${w.n}</b><small>${w.dates}</small><p>${w.title} · Open report in new tab ↗</p>`;wg.appendChild(a)});
const gallery=document.getElementById('photos'),filters=document.getElementById('filters');
function showPhotos(which='all'){gallery.innerHTML='';Object.entries(photos).filter(([w])=>which==='all'||w===which).forEach(([w,files])=>files.forEach((f,i)=>{let fig=document.createElement('figure');fig.innerHTML=`<img loading="lazy" src="assets/${f}" alt="Community fieldwork week ${w}"><figcaption>Week ${w} · Field activity photograph ${i+1}</figcaption>`;gallery.appendChild(fig)}))}
const galleryWeek=new URLSearchParams(location.search).get('gallery');
const initialGalleryWeek=galleryWeek==='all'||['2','3','4','5','6'].includes(galleryWeek)?galleryWeek:'all';
['All','Week 2','Week 3','Week 4','Week 5','Week 6'].forEach((t,i)=>{let a=document.createElement('a');let week=i===0?'all':String(i+1);let url=new URL(location.href);url.searchParams.set('gallery',week);url.hash='gallery';a.href=url.href;a.target='_blank';a.rel='noopener noreferrer';a.textContent=t;if(week===initialGalleryWeek)a.className='active';filters.appendChild(a)});showPhotos(initialGalleryWeek);
document.getElementById('menu').onclick=()=>document.getElementById('nav').classList.toggle('open');document.querySelectorAll('#nav a').forEach(a=>a.onclick=()=>document.getElementById('nav').classList.remove('open'));
document.getElementById('feedback').onsubmit=e=>{e.preventDefault();let d=new FormData(e.target);let body=`Hello, my name is ${d.get('name')}. My question is: ${d.get('question')}`;document.getElementById('formMsg').textContent='Opening your email app to send this question.';window.open('mailto:?subject='+encodeURIComponent('Aquaculture question')+'&body='+encodeURIComponent(body),'_blank','noopener,noreferrer')};

function openPracticeFromHash(){
const match=location.hash.match(/^#practice-(\d+)$/);
if(!match)return;
const i=Number(match[1])-1;
const p=practices[i];
if(!p)return;
document.querySelectorAll('.practice-card').forEach((card,index)=>card.classList.toggle('selected',index===i));
const detail=document.getElementById('practiceDetail');
detail.innerHTML=`<h3>${p[0]}</h3><p>${p[1]}</p>`;
detail.scrollIntoView({behavior:'smooth',block:'start'});
}

function openWeekFromHash(){
const match=location.hash.match(/^#week-(\d+)$/);
if(!match)return;
const w=weeks.find(item=>item.n===Number(match[1]));
if(!w)return;
document.querySelectorAll('.week-card').forEach((card,index)=>card.classList.toggle('selected',index===w.n-1));
let body='';
if(w.days.length){
body='<div class="daygrid">'+w.days.map((d,i)=>`<article class="day"><b>DAY 0${i+1} · ${d[0]}</b><p>${d[1]}</p><div class="learning"><b>LEARNING OUTCOME:</b> ${d[2]}</div></article>`).join('')+'</div>';
}else{
body='<p class="note">'+(w.n===7?'Mini-project review and submission to the faculty guide.':'Website mini-project: Home, About, Issues, Practices and Precautions, Schemes, Gallery and Contact Us.')+'</p>';
}
wr.innerHTML=`<h3>${w.title}</h3><p class="note">${w.dates}</p>${body}`;
wr.hidden=false;
wr.scrollIntoView({behavior:'smooth',block:'start'});
}

function openCardFromHash(){
openPracticeFromHash();
openWeekFromHash();
}
openCardFromHash();
window.addEventListener('hashchange',openCardFromHash);
