const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const practices = [
  ['Pond preparation', 'Prepare the pond before stocking. Dry and lime the pond, fill it with clean water and allow natural food to develop.', '🪷'],
  ['Healthy seed selection', 'Buy healthy seed from reliable hatcheries. Choose stocking density suited to the pond and species.', '🐟'],
  ['Stocking management', 'Use a stocking density suited to the pond and species. Avoid overcrowding and monitor fish growth.', '⚖️'],
  ['Feeding management', 'Use quality feed from trusted suppliers, feed measured quantities at regular times and store it in a dry place. Excess feed can pollute water.', '🥣'],
  ['Water-quality monitoring', 'Check water colour and transparency. Monitor pH, dissolved oxygen and ammonia regularly. Watch for fish gathering at the surface or stopping feeding.', '💧'],
  ['Disease prevention', 'Keep the pond clean, avoid overcrowding, remove dead fish promptly and use medicines or chemicals only on expert advice.', '🩺'],
  ['Waste management', 'Do not release pond waste into canals, tanks or farmland without proper treatment. Reduce excess feed and manage pond sludge responsibly.', '🌿'],
  ['Harvest & records', 'Handle fish hygienically at harvest. Keep records of stocking dates, feed, water readings, growth and sales.', '📋']
];

const practiceGrid = document.getElementById('practiceGrid');
const practiceDetail = document.getElementById('practiceDetail');

if (practiceGrid && practiceDetail) {
  const practiceButtons = practices.map((practice, index) => {
    const button = document.createElement('button');
    button.className = 'practice-card';
    button.type = 'button';
    button.setAttribute('aria-pressed', 'false');
    button.innerHTML = `
      <span class="practice-card-icon" aria-hidden="true">${practice[2]}</span>
      <span class="practice-card-number">PRACTICE 0${index + 1}</span>
      <strong>${practice[0]}</strong>
      <span class="practice-card-action">View guidance <span aria-hidden="true">→</span></span>
    `;
    button.addEventListener('click', () => selectPractice(index));
    practiceGrid.appendChild(button);
    return button;
  });

  function selectPractice(index) {
    const practice = practices[index];
    practiceButtons.forEach((button, buttonIndex) => {
      button.setAttribute('aria-pressed', String(buttonIndex === index));
    });
    practiceDetail.innerHTML = `<h3>${practice[0]}</h3><p>${practice[1]}</p>`;
  }

  selectPractice(0);
}

const weeks = [
  {
    n: 1,
    title: 'Community survey & introduction',
    dates: '01/06/2026 – 06/06/2026',
    days: [
      ['01/06/2026', 'Visited the village and met local leaders, fish farmers and fisheries extension staff.', 'Learned how to introduce the project and build trust with the community.'],
      ['02/06/2026', 'Surveyed households and visited ponds to note fish species, pond size and farming methods.', 'Understood the current fish farming practices and common problems.'],
      ['03/06/2026', 'Spoke with farmers about pond preparation, seed selection and feeding.', 'Learned how to talk respectfully with farmers about their methods.'],
      ['04/06/2026', 'Observed water colour, smell and fish behaviour in ponds with farmers.', 'Understood how water quality affects fish health.'],
      ['05/06/2026', 'Collected details of Fisheries Department schemes, subsidies and training programmes.', 'Learned how farmers can access government support.'],
      ['06/06/2026', 'Prepared a report of survey findings and planned the next week.', 'Learned the importance of documentation, reflection and planning.']
    ]
  },
  {
    n: 2,
    title: 'Awareness sessions & preparation',
    dates: '08/06/2026 – 13/06/2026',
    days: [
      ['08/06/2026', 'Held an awareness session with farmers on benefits of scientific fish farming.', 'Learned how to explain technical ideas in simple words.'],
      ['09/06/2026', 'Explained pond preparation: drying, liming, filling and fertilising.', 'Understood the steps that make a pond ready for stocking.'],
      ['10/06/2026', 'Made posters and pamphlets on feed, water quality and disease prevention.', 'Learned how to design clear messages people can understand.'],
      ['11/06/2026', 'Distributed posters and pamphlets at ponds, shops and public places.', 'Understood how visible messages spread awareness.'],
      ['12/06/2026', 'Demonstrated simple water checks (colour, transparency, pH strips) at a pond.', 'Learned how to show practical monitoring to farmers.'],
      ['13/06/2026', 'Prepared a weekly report and planned the village meeting.', 'Learned the importance of teamwork, reflection and planning.']
    ]
  },
  {
    n: 3,
    title: 'Meetings & demonstrations',
    dates: '15/06/2026 – 20/06/2026',
    days: [
      ['15/06/2026', 'Prepared a short presentation on sustainable aquaculture.', 'Learned to turn survey findings into a clear message.'],
      ['16/06/2026', 'Held a pond-side demonstration on feeding rate and feed storage.', 'Understood how correct feeding reduces waste and pollution.'],
      ['17/06/2026', 'Conducted an awareness session with school students and teachers on fish and water conservation.', 'Learned how to engage young audiences.'],
      ['18/06/2026', 'Held the village awareness meeting with farmers and local leaders.', 'Learned how public awareness encourages community action.'],
      ['19/06/2026', 'Explained common fish diseases and safe use of medicines and chemicals.', 'Understood responsible disease management.'],
      ['20/06/2026', 'Collected feedback, took attendance and prepared the weekly report.', 'Learned the importance of documentation and evaluating impact.']
    ]
  },
  {
    n: 4,
    title: 'Follow-up & government support',
    dates: '22/06/2026 – 27/06/2026',
    days: [
      ['22/06/2026', 'Visited farmers who attended earlier sessions and checked if they had adopted new practices.', 'Learned the importance of follow-up.'],
      ['23/06/2026', 'Shared details of Fisheries Department schemes, subsidies and insurance with farmers.', 'Learned how farmers can benefit from government support.'],
      ['24/06/2026', 'Helped farmers fill in scheme and subsidy application forms.', 'Learned how to guide families through forms and documents.'],
      ['25/06/2026', 'Met fisheries extension staff to discuss training and water testing support.', 'Understood the role of experts in supporting farmers.'],
      ['26/06/2026', 'Met local leaders to discuss protecting village ponds and tanks from pollution.', 'Learned how leaders can protect water resources.'],
      ['27/06/2026', 'Collected feedback and prepared the weekly report.', 'Learned the importance of documentation and reflection.']
    ]
  },
  {
    n: 5,
    title: 'Community outreach & youth involvement',
    dates: '29/06/2026 – 04/07/2026',
    days: [
      ['29/06/2026', 'Held the awareness session again in another part of the village.', 'Learned how repeated outreach reaches more people.'],
      ['30/06/2026', 'Organised a drawing and slogan competition on fish farming and water conservation in school.', 'Learned how creative activities help children understand.'],
      ['01/07/2026', 'Put up information boards on pond management and helpline contacts at the village centre.', 'Understood how visible information helps farmers.'],
      ['02/07/2026', 'Held a pledge meeting with farmers for sustainable and chemical-safe fish farming.', 'Learned how to encourage responsibility politely.'],
      ['03/07/2026', 'Formed a small group of youth volunteers to continue the awareness work.', 'Learned leadership and how to keep a project going.'],
      ['04/07/2026', 'Collected community feedback and prepared the weekly report.', 'Learned how to evaluate the impact of our work.']
    ]
  },
  {
    n: 6,
    title: 'Review & final report',
    dates: '06/07/2026 – 11/07/2026',
    days: [
      ['06/07/2026', 'Revisited ponds to review the first survey and check progress.', 'Learned how to measure change created by a project.'],
      ['07/07/2026', 'Collected photographs, feedback forms and records of all activities.', 'Learned the importance of keeping proper records.'],
      ['08/07/2026', 'Thanked local leaders, officials and farmers for their support.', 'Learned to value community cooperation and gratitude.'],
      ['09/07/2026', 'Wrote the final project report with findings and results.', 'Learned how to present work clearly and honestly.'],
      ['10/07/2026', 'Reviewed the project and discussed lessons learned and future suggestions.', 'Learned the importance of reflection and social responsibility.'],
      ['11/07/2026', 'Submitted the final report and logbook to the person in-charge.', 'Learned the value of completing a project responsibly.']
    ]
  },
  { n: 7, title: 'Mini-project review & guide submission', dates: 'Mini-project phase', days: [] },
  { n: 8, title: 'Aquaculture awareness website', dates: 'Mini-project phase', days: [] }
];

const weekGrid = document.getElementById('weekGrid');
const weekReport = document.getElementById('weekReport');

if (weekGrid && weekReport) {
  const weekButtons = weeks.map((week) => {
    const button = document.createElement('button');
    button.className = 'week-card';
    button.type = 'button';
    button.setAttribute('aria-pressed', 'false');
    button.innerHTML = `
      <span class="week-card-top">
        <span class="week-card-number">WEEK ${String(week.n).padStart(2, '0')}</span>
        <span class="week-card-icon" aria-hidden="true">+</span>
      </span>
      <strong>${week.title}</strong>
      <small>${week.dates}</small>
    `;
    button.addEventListener('click', () => selectWeek(week.n));
    weekGrid.appendChild(button);
    return button;
  });

  function selectWeek(weekNumber) {
    const week = weeks.find((item) => item.n === weekNumber);
    weekButtons.forEach((button, index) => {
      button.setAttribute('aria-pressed', String(weeks[index].n === weekNumber));
    });

    let reportContent;
    if (week.days.length) {
      reportContent = `<div class="day-grid">${week.days.map((day, index) => `
        <article class="day-card">
          <span>DAY ${String(index + 1).padStart(2, '0')} · ${day[0]}</span>
          <p>${day[1]}</p>
          <div class="day-learning"><strong>LEARNING OUTCOME:</strong> ${day[2]}</div>
        </article>
      `).join('')}</div>`;
    } else {
      const milestone = week.n === 7
        ? 'Mini-project review and submission to the faculty guide.'
        : 'Website mini-project: Home, About, Practices and Activity Log, with a separate page for each area.';
      reportContent = `<div class="milestone-note"><strong>MINI-PROJECT MILESTONE</strong><p>${milestone}</p></div>`;
    }

    weekReport.innerHTML = `
      <div class="report-header">
        <div><p class="eyebrow">WEEK ${String(week.n).padStart(2, '0')}</p><h3>${week.title}</h3></div>
        <span class="report-date">${week.dates}</span>
      </div>
      ${reportContent}
    `;
  }

  selectWeek(1);
}
