// Wine24.com - Main JavaScript

// ========== Region Data ==========
const regionData = {
  france: {
    name: 'France',
    regions: {
      'bordeaux': {
        name: 'Bordeaux',
        subregions: ['Left Bank', 'Right Bank', 'Pessac-Léognan', 'Sauternes'],
        varieties: ['Cabernet Sauvignon', 'Merlot', 'Cabernet Franc', 'Petit Verdot'],
        style: { weight: 8, identity: 9, nuance: 8, emotion: 7, xfactor: 7, balance: 8.5 },
        profile: 'Classic Bordeaux blend structure with firm tannins, cedar, and blackcurrant notes.'
      },
      'burgundy': {
        name: 'Burgundy',
        subregions: ['Côte de Nuits', 'Côte de Beaune', 'Chablis', 'Côte Chalonnaise'],
        varieties: ['Pinot Noir', 'Chardonnay'],
        style: { weight: 6, identity: 10, nuance: 9, emotion: 9, xfactor: 8, balance: 9 },
        profile: 'Ethereal elegance with exceptional terroir expression. Red fruit, earth, and floral complexity.'
      },
      'champagne': {
        name: 'Champagne',
        subregions: ['Montagne de Reims', 'Côte des Blancs', 'Vallée de la Marne'],
        varieties: ['Chardonnay', 'Pinot Noir', 'Pinot Meunier'],
        style: { weight: 5, identity: 9, nuance: 9, emotion: 9, xfactor: 8, balance: 9.5 },
        profile: 'Precision acidity, fine mousse, autolytic complexity with brioche and citrus.'
      },
      'rhône': {
        name: 'Rhône Valley',
        subregions: ['Northern Rhône', 'Southern Rhône', 'Châteauneuf-du-Pape'],
        varieties: ['Syrah', 'Grenache', 'Mourvèdre', 'Viognier'],
        style: { weight: 8, identity: 8, nuance: 8, emotion: 8, xfactor: 7, balance: 8 },
        profile: 'Dark fruit, pepper, and Mediterranean herbs. Powerful yet balanced.'
      },
      'loire': {
        name: 'Loire Valley',
        subregions: ['Sancerre', 'Pouilly-Fumé', 'Chinon', 'Vouvray'],
        varieties: ['Sauvignon Blanc', 'Cabernet Franc', 'Chenin Blanc'],
        style: { weight: 5, identity: 8, nuance: 7, emotion: 7, xfactor: 6, balance: 8.5 },
        profile: 'Crisp, mineral-driven whites and elegant, herbaceous reds.'
      },
      'alsace': {
        name: 'Alsace',
        subregions: ['Grand Cru Sites', 'Crémant d\'Alsace'],
        varieties: ['Riesling', 'Gewürztraminer', 'Pinot Gris'],
        style: { weight: 6, identity: 9, nuance: 8, emotion: 7, xfactor: 7, balance: 8 },
        profile: 'Aromatic intensity, petrol notes, and remarkable aging potential.'
      }
    }
  },
  usa: {
    name: 'United States',
    regions: {
      'napa-valley': {
        name: 'Napa Valley',
        subregions: ['Oakville', 'Rutherford', 'Stags Leap', 'Howell Mountain', 'Atlas Peak', 'Spring Mountain', 'Diamond Mountain', 'Carneros', 'Calistoga'],
        varieties: ['Cabernet Sauvignon', 'Merlot', 'Cabernet Franc', 'Chardonnay', 'Pinot Noir'],
        style: { weight: 9, identity: 8, nuance: 8, emotion: 8, xfactor: 9, balance: 8 },
        profile: 'Bold, opulent Cabernet-driven wines with concentrated dark fruit, polished tannins, and significant oak influence.'
      },
      'sonoma': {
        name: 'Sonoma County',
        subregions: ['Russian River Valley', 'Dry Creek Valley', 'Alexander Valley', 'Sonoma Coast'],
        varieties: ['Pinot Noir', 'Zinfandel', 'Cabernet Sauvignon', 'Chardonnay'],
        style: { weight: 7, identity: 8, nuance: 8, emotion: 8, xfactor: 7, balance: 8.5 },
        profile: 'Diverse styles from cool-climate Pinot Noir to powerful Zinfandel.'
      },
      'oregon': {
        name: 'Oregon',
        subregions: ['Willamette Valley', 'Dundee Hills', 'Eola-Amity Hills'],
        varieties: ['Pinot Noir', 'Chardonnay', 'Pinot Gris'],
        style: { weight: 6, identity: 9, nuance: 9, emotion: 8, xfactor: 7, balance: 9 },
        profile: 'Elegant Pinot Noir with Burgundian sensibility: earthy, red-fruited, and precise.'
      },
      'paso-robles': {
        name: 'Paso Robles',
        subregions: ['Adelaida District', 'Templeton Gap', 'Willow Creek'],
        varieties: ['Cabernet Sauvignon', 'Syrah', 'Grenache', 'Roussanne'],
        style: { weight: 9, identity: 7, nuance: 8, emotion: 8, xfactor: 8, balance: 7.5 },
        profile: 'Muscular, high-alcohol wines with dark fruit intensity and modern winemaking.'
      }
    }
  },
  china: {
    name: 'China',
    regions: {
      'ningxia': {
        name: 'Ningxia (宁夏)',
        subregions: ['Helan Mountain East (贺兰山东麓)', 'Yinchuan', 'Qingtongxia'],
        varieties: ['Cabernet Sauvignon', 'Marselan', 'Cabernet Gernischt', 'Merlot'],
        style: { weight: 8, identity: 8, nuance: 7, emotion: 7, xfactor: 9, balance: 7.5 },
        profile: 'Emerging powerhouse: bold structure, intense fruit, with Marselan showing unique Chinese character. Continental climate with extreme temperature variation.'
      },
      'yunnan': {
        name: 'Yunnan (云南)',
        subregions: ['Shangri-La (香格里拉)', 'Deqin', 'Meili Snow Mountain'],
        varieties: ['Cabernet Sauvignon', 'Merlot', 'Cabernet Gernischt'],
        style: { weight: 7, identity: 9, nuance: 8, emotion: 8, xfactor: 9, balance: 8 },
        profile: 'High-altitude (2,200-2,600m) terroir with exceptional purity. Intense UV, cool nights, and pure meltwater irrigation create wines with remarkable freshness and mountain energy.'
      },
      'xinjiang': {
        name: 'Xinjiang (新疆)',
        subregions: ['Tianshan North Slope (天山北麓)', 'Yanqi Basin', 'Turpan'],
        varieties: ['Cabernet Sauvignon', 'Marselan', 'Syrah'],
        style: { weight: 8, identity: 7, nuance: 7, emotion: 7, xfactor: 8, balance: 7 },
        profile: 'Extreme continental climate with abundant sunshine. Bold, ripe, concentrated wines.'
      },
      'shandong': {
        name: 'Shandong (山东)',
        subregions: ['Penglai (蓬莱)', 'Yantai'],
        varieties: ['Cabernet Gernischt', 'Cabernet Sauvignon', 'Chardonnay'],
        style: { weight: 6, identity: 7, nuance: 7, emotion: 6, xfactor: 6, balance: 7.5 },
        profile: 'Maritime-influanced, elegant wines. The birthplace of China\'s modern wine industry.'
      }
    }
  },
  japan: {
    name: 'Japan',
    regions: {
      'yamanashi': {
        name: 'Yamanashi (山梨)',
        subregions: ['Koshu Valley', 'Shiojiri'],
        varieties: ['Koshu', 'Muscat Bailey A', 'Cabernet Sauvignon', 'Chardonnay'],
        style: { weight: 5, identity: 9, nuance: 8, emotion: 8, xfactor: 8, balance: 9 },
        profile: 'Delicate, refined wines with Japanese aesthetic precision. Koshu produces ethereal whites with minerality.'
      },
      'hokkaido': {
        name: 'Hokkaido (北海道)',
        subregions: ['Ikeda', 'Tokachi', 'Furano'],
        varieties: ['Pinot Noir', 'Koshu', 'Merlot'],
        style: { weight: 5, identity: 8, nuance: 8, emotion: 7, xfactor: 7, balance: 8.5 },
        profile: 'Cool-climate elegance with Burgundian aspirations. Rising star in Japanese wine.'
      }
    }
  },
  'south-africa': {
    name: 'South Africa',
    regions: {
      'stellenbosch': {
        name: 'Stellenbosch',
        subregions: ['Simonsberg', 'Helderberg', 'Banghoek'],
        varieties: ['Cabernet Sauvignon', 'Pinotage', 'Chenin Blanc', 'Syrah'],
        style: { weight: 8, identity: 8, nuance: 8, emotion: 7, xfactor: 8, balance: 8 },
        profile: 'Post-apartheid quality renaissance. Coastal minerality meets New World power. Exceptional value.'
      }
    }
  },
  georgia: {
    name: 'Georgia',
    regions: {
      'kakheti': {
        name: 'Kakheti (Qvevri)',
        subregions: ['Telavi', 'Sighnaghi', 'Gurjaani'],
        varieties: ['Saperavi', 'Rkatsiteli', 'Kisi', 'Mtsvane'],
        style: { weight: 7, identity: 10, nuance: 8, emotion: 9, xfactor: 10, balance: 7.5 },
        profile: '8,000 years of winemaking tradition. Qvevri (clay vessel) amber wines with ancient character. Source meets future.'
      }
    }
  },
  lebanon: {
    name: 'Lebanon',
    regions: {
      'bekaa-valley': {
        name: 'Bekaa Valley',
        subregions: ['Zahlé', 'Chtaura', 'Anjar'],
        varieties: ['Cabernet Sauvignon', 'Syrah', 'Cinsault', 'Carignan'],
        style: { weight: 8, identity: 9, nuance: 7, emotion: 8, xfactor: 9, balance: 7.5 },
        profile: 'Ancient civilization meets modern winemaking. High altitude, Mediterranean climate, exceptional structure.'
      }
    }
  },
  italy: {
    name: 'Italy',
    regions: {
      'piedmont': {
        name: 'Piedmont',
        subregions: ['Barolo', 'Barbaresco', 'Asti'],
        varieties: ['Nebbiolo', 'Barbera', 'Dolcetto'],
        style: { weight: 7, identity: 10, nuance: 9, emotion: 8, xfactor: 8, balance: 9 },
        profile: 'Tar and roses. Nebbiolo\'s paradoxical combination of pale color and monumental structure.'
      },
      'tuscany': {
        name: 'Tuscany',
        subregions: ['Chianti Classico', 'Brunello di Montalcino', 'Bolgheri'],
        varieties: ['Sangiovese', 'Cabernet Sauvignon', 'Merlot'],
        style: { weight: 7, identity: 9, nuance: 8, emotion: 8, xfactor: 8, balance: 8.5 },
        profile: 'Sour cherry, leather, and Tuscan terroir. From traditional Chianti to Super Tuscan innovation.'
      }
    }
  },
  spain: {
    name: 'Spain',
    regions: {
      'rioja': {
        name: 'Rioja',
        subregions: ['Rioja Alta', 'Rioja Alavesa', 'Rioja Oriental'],
        varieties: ['Tempranillo', 'Garnacha', 'Graciano', 'Mazuelo'],
        style: { weight: 7, identity: 8, nuance: 8, emotion: 7, xfactor: 7, balance: 8.5 },
        profile: 'Vanilla, leather, and red fruit. Extended oak aging tradition.'
      },
      'priorat': {
        name: 'Priorat',
        subregions: ['Gratallops', 'Torroja', 'Bellmunt'],
        varieties: ['Garnacha', 'Cariñena', 'Cabernet Sauvignon'],
        style: { weight: 9, identity: 9, nuance: 8, emotion: 8, xfactor: 8, balance: 7.5 },
        profile: 'Llicorella slate soils. Concentrated, mineral-driven power from extreme slopes.'
      }
    }
  },
  australia: {
    name: 'Australia',
    regions: {
      'barossa': {
        name: 'Barossa Valley',
        subregions: ['Eden Valley', 'High Eden'],
        varieties: ['Shiraz', 'Cabernet Sauvignon', 'Grenache'],
        style: { weight: 9, identity: 8, nuance: 7, emotion: 8, xfactor: 8, balance: 7.5 },
        profile: 'Opulent, high-alcohol Shiraz with dark chocolate and blackberry intensity.'
      },
      'margaret-river': {
        name: 'Margaret River',
        subregions: ['Wilyabrup', 'Karridale'],
        varieties: ['Cabernet Sauvignon', 'Chardonnay'],
        style: { weight: 8, identity: 8, nuance: 8, emotion: 7, xfactor: 7, balance: 8.5 },
        profile: 'Elegant Cabernet with Bordeaux structure and Australian fruit purity.'
      }
    }
  }
};

// ========== Wine Analysis Engine ==========
function updateRegions() {
  const country = document.getElementById('sel-country').value;
  const regionSelect = document.getElementById('sel-region');
  const subregionSelect = document.getElementById('sel-subregion');
  
  regionSelect.innerHTML = '<option value="">Select Region</option>';
  subregionSelect.innerHTML = '<option value="">Select Sub-Region</option>';
  
  if (regionData[country]) {
    Object.entries(regionData[country].regions).forEach(([key, region]) => {
      const opt = document.createElement('option');
      opt.value = key;
      opt.textContent = region.name;
      regionSelect.appendChild(opt);
    });
  }
}

function updateSubregions() {
  const country = document.getElementById('sel-country').value;
  const region = document.getElementById('sel-region').value;
  const subregionSelect = document.getElementById('sel-subregion');
  
  subregionSelect.innerHTML = '<option value="">Select Sub-Region</option>';
  
  if (regionData[country]?.regions[region]) {
    regionData[country].regions[region].subregions.forEach(sub => {
      const opt = document.createElement('option');
      opt.value = sub;
      opt.textContent = sub;
      subregionSelect.appendChild(opt);
    });
  }
}

function getQualityLabel(score) {
  if (score >= 9) return { label: 'Iconic', class: 'badge-gold' };
  if (score >= 7.5) return { label: 'Excellent', class: 'badge-green' };
  if (score >= 6) return { label: 'Very Good', class: 'badge-green' };
  return { label: 'Good', class: '' };
}

function analyzeWine() {
  const country = document.getElementById('sel-country').value;
  const region = document.getElementById('sel-region').value;
  const subregion = document.getElementById('sel-subregion').value;
  const variety1 = document.getElementById('sel-variety1').value;
  const variety2 = document.getElementById('sel-variety2').value;
  const vintage = document.getElementById('sel-vintage').value;
  
  if (!country || !region || !variety1) {
    alert('Please select at least Country, Region, and Primary Variety.');
    return;
  }
  
  const regionInfo = regionData[country]?.regions[region];
  if (!regionInfo) {
    alert('Region data not available yet for this selection.');
    return;
  }
  
  // Calculate W.I.N.E.X scores based on region style profile
  const style = regionInfo.style;
  const scores = { ...style };
  
  // Adjust based on variety
  const varietyAdjustments = {
    'cabernet-sauvignon': { weight: +0.5, identity: 0, nuance: +0.3, emotion: 0, xfactor: +0.2, balance: 0 },
    'pinot-noir': { weight: -1, identity: +1, nuance: +1, emotion: +0.5, xfactor: +0.5, balance: +0.5 },
    'merlot': { weight: -0.3, identity: 0, nuance: +0.2, emotion: +0.3, xfactor: 0, balance: +0.3 },
    'cabernet-franc': { weight: -0.2, identity: +0.5, nuance: +0.5, emotion: +0.2, xfactor: +0.3, balance: +0.2 },
    'chardonnay': { weight: -1, identity: +0.5, nuance: +0.5, emotion: +0.3, xfactor: +0.2, balance: +0.5 },
    'marselan': { weight: +0.3, identity: +1, nuance: +0.2, emotion: +0.3, xfactor: +0.5, balance: 0 },
    'cabernet-gernischt': { weight: 0, identity: +1, nuance: +0.3, emotion: +0.2, xfactor: +0.5, balance: 0 }
  };
  
  const adj = varietyAdjustments[variety1] || {};
  Object.entries(adj).forEach(([key, val]) => {
    scores[key] = Math.min(10, Math.max(1, scores[key] + val));
  });
  
  const avgScore = (scores.weight + scores.identity + scores.nuance + scores.emotion + scores.xfactor + scores.balance) / 6;
  const quality = getQualityLabel(avgScore);
  
  // Generate narrative description
  const narratives = generateNarrative(country, region, variety1, scores);
  
  // Build result HTML
  const resultDiv = document.getElementById('analysis-result');
  resultDiv.innerHTML = `
    <div class="result-section">
      <h3>Wine Identity Card</h3>
      <table class="wine-table">
        <tr><td>Country</td><td>${regionData[country].name}</td></tr>
        <tr><td>Region</td><td>${regionInfo.name}${subregion ? ' — ' + subregion : ''}</td></tr>
        <tr><td>Primary Variety</td><td>${variety1.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</td></tr>
        ${variety2 ? `<tr><td>Secondary Variety</td><td>${variety2.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</td></tr>` : ''}
        ${vintage ? `<tr><td>Vintage</td><td>${vintage}</td></tr>` : ''}
        <tr><td>Recommended Serving</td><td>${getServingTemp(variety1)}</td></tr>
        <tr><td>Recommended Decanting</td><td>${getDecantTime(variety1)}</td></tr>
        <tr><td>Drinking Window</td><td>${getDrinkingWindow(variety1, vintage)}</td></tr>
      </table>
    </div>
    
    <div class="result-section">
      <h3>W.I.N.E.X Radar</h3>
      <div style="display:flex;flex-wrap:wrap;gap:2rem;align-items:center">
        <svg viewBox="0 0 400 400" style="max-width:300px;width:100%">
          <g stroke="#333" stroke-width="0.5" fill="none">
            <polygon points="200,40 338.6,120 338.6,280 200,360 61.4,280 61.4,120"/>
            <polygon points="200,80 304.2,140 304.2,260 200,320 95.8,260 95.8,140"/>
            <polygon points="200,120 269.8,160 269.8,240 200,280 130.2,240 130.2,160"/>
            <polygon points="200,160 235.4,180 235.4,220 200,240 164.6,220 164.6,180"/>
          </g>
          <g stroke="#555" stroke-width="1">
            <line x1="200" y1="200" x2="200" y2="40"/>
            <line x1="200" y1="200" x2="338.6" y2="120"/>
            <line x1="200" y1="200" x2="338.6" y2="280"/>
            <line x1="200" y1="200" x2="200" y2="360"/>
            <line x1="200" y1="200" x2="61.4" y2="280"/>
            <line x1="200" y1="200" x2="61.4" y2="120"/>
          </g>
          <polygon points="${getRadarPoints(scores)}" fill="rgba(57,255,20,0.15)" stroke="var(--accent-green)" stroke-width="2"/>
          <text x="200" y="25" text-anchor="middle" fill="var(--accent-green)" font-size="12" font-weight="600">W: ${scores.weight}</text>
          <text x="360" y="115" text-anchor="middle" fill="var(--accent-green)" font-size="12" font-weight="600">I: ${scores.identity}</text>
          <text x="360" y="295" text-anchor="middle" fill="var(--accent-green)" font-size="12" font-weight="600">N: ${scores.nuance}</text>
          <text x="200" y="385" text-anchor="middle" fill="var(--accent-green)" font-size="12" font-weight="600">E: ${scores.emotion}</text>
          <text x="40" y="295" text-anchor="middle" fill="var(--accent-green)" font-size="12" font-weight="600">X: ${scores.xfactor}</text>
          <text x="40" y="115" text-anchor="middle" fill="var(--accent-green)" font-size="12" font-weight="600">B: ${scores.balance}</text>
        </svg>
        <div>
          <p style="font-size:1.5rem;margin-bottom:0.5rem">Overall: <strong>${avgScore.toFixed(1)}</strong></p>
          <span class="badge ${quality.class}">${quality.label}</span>
          <p class="text-muted" style="margin-top:1rem;max-width:400px">${regionInfo.profile}</p>
        </div>
      </div>
    </div>
    
    <div class="result-section">
      <h3>Aroma Profile</h3>
      <table class="wine-table">
        <tr><td>Primary (Varietal)</td><td>${getPrimaryAromas(variety1)}</td></tr>
        <tr><td>Secondary (Winemaking)</td><td>${getSecondaryAromas(variety1)}</td></tr>
        <tr><td>Tertiary (Aging)</td><td>${getTertiaryAromas(variety1, vintage)}</td></tr>
      </table>
    </div>
    
    <div class="result-section">
      <h3>10-Second Palate Diagnosis</h3>
      <table class="wine-table">
        <tr><td>Peak (0-3s)</td><td>${getPeakFlavor(variety1)}</td></tr>
        <tr><td>Tail (3-10s)</td><td>${getTailFlavor(variety1)}</td></tr>
        <tr><td>Finish (10s+)</td><td>${getFinishFlavor(variety1)}</td></tr>
        <tr><td>Tannin Texture</td><td>${getTanninDesc(variety1)}</td></tr>
        <tr><td>Body</td><td>${getBodyDesc(variety1)}</td></tr>
      </table>
    </div>
    
    <div class="result-section">
      <h3>Narrative Tasting Description</h3>
      <table class="wine-table">
        <tr><td><strong>L1</strong> Scene</td><td>${narratives.l1}</td></tr>
        <tr><td><strong>L2</strong> Emotion</td><td>${narratives.l2}</td></tr>
        <tr><td><strong>L3</strong> Personification</td><td>${narratives.l3}</td></tr>
        <tr><td><strong>L4</strong> Metaphor</td><td>${narratives.l4}</td></tr>
      </table>
    </div>
    
    <div class="result-section">
      <h3>Food Pairing</h3>
      <p>${getFoodPairing(variety1)}</p>
    </div>
    
    <div class="result-section">
      <h3>Investment Tags</h3>
      ${getInvestmentTags(country, region, variety1)}
    </div>
  `;
  
  resultDiv.classList.add('active');
  resultDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ========== Helper Functions ==========
function getRadarPoints(scores) {
  const cx = 200, cy = 200, r = 160;
  const angles = [-90, -30, 30, 90, 150, 210];
  return angles.map((angle, i) => {
    const values = [scores.weight, scores.identity, scores.nuance, scores.emotion, scores.xfactor, scores.balance];
    const rad = (angle * Math.PI) / 180;
    const dist = (values[i] / 10) * r;
    return `${cx + dist * Math.cos(rad)},${cy + dist * Math.sin(rad)}`;
  }).join(' ');
}

function getServingTemp(variety) {
  const temps = {
    'cabernet-sauvignon': '16-18°C (60-64°F)',
    'merlot': '15-17°C (59-63°F)',
    'pinot-noir': '14-16°C (57-61°F)',
    'chardonnay': '10-12°C (50-54°F)',
    'sauvignon-blanc': '8-10°C (46-50°F)',
    'riesling': '8-10°C (46-50°F)',
    'syrah': '16-18°C (60-64°F)',
    'marselan': '16-18°C (60-64°F)',
    'cabernet-gernischt': '15-17°C (59-63°F)'
  };
  return temps[variety] || '15-17°C';
}

function getDecantTime(variety) {
  const times = {
    'cabernet-sauvignon': '45-90 minutes',
    'merlot': '30-60 minutes',
    'pinot-noir': '15-30 minutes (or none for old wines)',
    'chardonnay': 'Not recommended',
    'sauvignon-blanc': 'Not recommended',
    'syrah': '30-60 minutes',
    'marselan': '45-90 minutes',
    'cabernet-gernischt': '30-60 minutes'
  };
  return times[variety] || '30 minutes';
}

function getDrinkingWindow(variety, vintage) {
  const v = parseInt(vintage) || 2018;
  const windows = {
    'cabernet-sauvignon': [10, 30],
    'merlot': [5, 20],
    'pinot-noir': [3, 15],
    'chardonnay': [2, 8],
    'syrah': [5, 20],
    'marselan': [5, 20],
    'cabernet-gernischt': [5, 15]
  };
  const [min, max] = windows[variety] || [3, 15];
  const peak = v + Math.floor((min + max) / 2);
  return `${v + min} – ${v + max} (Peak: ~${peak})`;
}

function getPrimaryAromas(variety) {
  const aromas = {
    'cabernet-sauvignon': 'Blackcurrant 黑醋栗, Black Cherry 黑樱桃, Graphite 石墨, Violet 紫罗兰',
    'merlot': 'Plum 李子, Cherry 樱桃, Chocolate 巧克力, Herb 草本',
    'pinot-noir': 'Raspberry 覆盆子, Cherry 樱桃, Earth 泥土, Violet 紫罗兰',
    'chardonnay': 'Green Apple 青苹果, Citrus 柑橘, Butter 黄油, Brioche 布里欧修',
    'sauvignon-blanc': 'Passion Fruit 百香果, Grapefruit 葡萄柚, Cut Grass 割草, Wet Stone 湿石',
    'syrah': 'Blackberry 黑莓, Black Pepper 黑胡椒, Violet 紫罗兰, Smoked Meat 烟熏肉',
    'marselan': 'Dark Cherry 黑樱桃, Licorice 甘草, Violet 紫罗兰, Mint 薄荷',
    'cabernet-gernischt': 'Green Pepper 青椒, Blackcurrant 黑醋栗, Tobacco 烟草, Cedar 雪松'
  };
  return aromas[variety] || 'Fruit-forward varietal expression';
}

function getSecondaryAromas(variety) {
  const aromas = {
    'cabernet-sauvignon': 'Cedar 雪松, Vanilla 香草, Toast 烤面包, Coffee 咖啡',
    'merlot': 'Vanilla 香草, Mocha 摩卡, Baking Spice 烘焙香料',
    'pinot-noir': 'Vanilla 香草, Clove 丁香, Toast 烤面包 (if oaked)',
    'chardonnay': 'Butter 黄油, Vanilla 香草, Toast 烤面包, Brioche 布里欧修',
    'sauvignon-blanc': 'Minimal oak influence; focus on primary fruit',
    'syrah': 'Smoke 烟熏, Vanilla 香草, Pepper 胡椒, Chocolate 巧克力',
    'marselan': 'Vanilla 香草, Toast 烤面包, Spice 香料',
    'cabernet-gernischt': 'Cedar 雪松, Vanilla 香草, Tobacco 烟草'
  };
  return aromas[variety] || 'Oak-influenced aromas depending on winemaking';
}

function getTertiaryAromas(variety, vintage) {
  const v = parseInt(vintage);
  if (!v || v > 2016) return 'Still youthful; tertiary aromas not yet developed';
  if (v > 2010) return 'Early tertiary notes: subtle leather, dried herbs';
  return 'Tobacco 烟草, Forest Floor 森林地表, Leather 皮革, Cigar Box 雪茄盒, Truffle 松露';
}

function getPeakFlavor(variety) {
  const peaks = {
    'cabernet-sauvignon': 'Concentrated blackcurrant and dark fruit burst with graphite minerality',
    'merlot': 'Plush plum and cherry filling the palate with rounded warmth',
    'pinot-noir': 'Red fruit explosion with delicate earth and floral lift',
    'chardonnay': 'Citrus and stone fruit wave with buttery richness',
    'syrah': 'Dark berry and pepper assault with smoky depth',
    'marselan': 'Dark cherry and licorice with a minty freshness',
    'cabernet-gernischt': 'Classic green pepper and blackcurrant with cedar structure'
  };
  return peaks[variety] || 'Immediate varietal character';
}

function getTailFlavor(variety) {
  const tails = {
    'cabernet-sauvignon': 'Firm tannic structure emerges with cedar and pencil lead',
    'merlot': 'Velvety tannins integrate, revealing chocolate and spice notes',
    'pinot-noir': 'Fine-grained tannins with earthy complexity developing',
    'chardonnay': 'Oak-derived vanilla and toast layer over fruit',
    'syrah': 'Black pepper and smoked meat complexity builds',
    'marselan': 'Structured mid-palate with floral persistence',
    'cabernet-gernischt': 'Classic cedar and tobacco emerge with age'
  };
  return tails[variety] || 'Mid-palate structure develops';
}

function getFinishFlavor(variety) {
  const finishes = {
    'cabernet-sauvignon': 'Long, structured finish with graphite and dark chocolate — the signature Napa persistence',
    'merlot': 'Warm, rounded finish with plum and spice — comforting and approachable',
    'pinot-noir': 'Ethereal finish with red fruit and earth — like a fading sunset',
    'chardonnay': 'Buttery, mineral finish with citrus persistence',
    'syrah': 'Peppery, smoky finish that lingers like campfire smoke',
    'marselan': 'Elegant finish with licorice and violet — the Chinese terroir signature',
    'cabernet-gernischt': 'Classic Bordeaux-style finish with herbal elegance'
  };
  return finishes[variety] || 'Clean varietal finish';
}

function getTanninDesc(variety) {
  const tannins = {
    'cabernet-sauvignon': 'Fine-grained, polished, structured (Levels 11-14)',
    'merlot': 'Supple, silky, approachable (Levels 10-12)',
    'pinot-noir': 'Fine-grained, silky, delicate (Levels 12-14)',
    'chardonnay': 'N/A (white wine)',
    'syrah': 'Firm, grippy, supple (Levels 6-10)',
    'marselan': 'Fine-grained, structured, with elegance (Levels 10-13)',
    'cabernet-gernischt': 'Firm, grippy, developing suppleness with age (Levels 6-12)'
  };
  return tannins[variety] || 'Moderate tannin structure';
}

function getBodyDesc(variety) {
  const bodies = {
    'cabernet-sauvignon': 'Full-bodied with high density and weight',
    'merlot': 'Medium-full bodied with plush texture',
    'pinot-noir': 'Medium-bodied with ethereal weight',
    'chardonnay': 'Medium to full-bodied depending on oak treatment',
    'syrah': 'Full-bodied with dark intensity',
    'marselan': 'Medium-full bodied with Chinese elegance',
    'cabernet-gernischt': 'Medium-full bodied with classical structure'
  };
  return bodies[variety] || 'Medium-bodied';
}

function getFoodPairing(variety) {
  const pairings = {
    'cabernet-sauvignon': '<strong>Best:</strong> Grilled ribeye, lamb rack, aged cheddar. <strong>Avoid:</strong> Delicate seafood, spicy food.',
    'merlot': '<strong>Best:</strong> Roast chicken, mushroom risotto, soft cheeses. <strong>Avoid:</strong> Very spicy dishes.',
    'pinot-noir': '<strong>Best:</strong> Duck confit, salmon, mushroom dishes, charcuterie. <strong>Avoid:</strong> Heavy red meats.',
    'chardonnay': '<strong>Best:</strong> Lobster, creamy pasta, roasted chicken. <strong>Avoid:</strong> Spicy food, vinegar-based dishes.',
    'sauvignon-blanc': '<strong>Best:</strong> Oysters, goat cheese, ceviche, salads. <strong>Avoid:</strong> Heavy cream sauces.',
    'syrah': '<strong>Best:</strong> BBQ ribs, venison, hard cheeses, spicy stews. <strong>Avoid:</strong> Delicate fish.',
    'marselan': '<strong>Best:</strong> Peking duck, braised lamb, dark chocolate desserts. <strong>Avoid:</strong> Seafood.',
    'cabernet-gernischt': '<strong>Best:</strong> Braised beef, Chinese five-spice dishes, aged cheeses. <strong>Avoid:</strong> Delicate preparations.'
  };
  return pairings[variety] || 'Versatile pairing depending on style';
}

function getInvestmentTags(country, region, variety) {
  const tags = [];
  
  if (country === 'france' && (region === 'burgundy' || region === 'bordeaux')) {
    tags.push({ label: 'Investment-Grade', class: 'badge-gold', desc: 'Premium investment wine with established secondary market' });
    tags.push({ label: 'Scarcity-Driven', class: 'badge-gold', desc: 'Limited production from historic terroir' });
  } else if (country === 'usa' && region === 'napa-valley') {
    tags.push({ label: 'Investment-Grade', class: 'badge-gold', desc: 'Cult wine potential with strong Asian market demand' });
    tags.push({ label: 'Cultural-Premium', class: 'badge-green', desc: 'Napa cult following and Robert Parker legacy' });
  } else if (country === 'china') {
    tags.push({ label: 'Emerging Market', class: 'badge-green', desc: 'Rapidly improving quality with growing international recognition' });
    tags.push({ label: 'Scarcity-Driven', class: 'badge-green', desc: 'Limited distribution, high potential for appreciation' });
  } else if (country === 'japan') {
    tags.push({ label: 'Emerging Market', class: 'badge-green', desc: 'Premium pricing with limited availability' });
  } else if (country === 'georgia') {
    tags.push({ label: 'Cultural-Premium', class: 'badge-green', desc: '8,000-year heritage with growing natural wine following' });
  } else {
    tags.push({ label: 'Consumption-Grade', class: 'badge-red', desc: 'Excellent for drinking, limited investment potential' });
  }
  
  return tags.map(t => `<span class="badge ${t.class}" style="margin:0.3rem;cursor:pointer" title="${t.desc}">${t.label}</span>`).join('');
}

function generateNarrative(country, region, variety, scores) {
  const narratives = {
    'china-ningxia-cabernet-sauvignon': {
      l1: '站在贺兰山的东麓，风从戈壁吹来，带着砂砾的粗犷与阳光的热烈。',
      l2: '一位年轻的酿酒师站在葡萄园前，眼中是父辈未竟的梦想。',
      l3: '一个穿着冲锋衣的开拓者，站在东方葡萄酒革命的前沿。',
      l4: '沙漠中的第一滴水——不可思议的生命力，在不可能之地生根发芽。'
    },
    'china-yunnan-pinot-noir': {
      l1: '海拔2,400米的香格里拉，雪山的融水灌溉着每一株葡萄藤。',
      l2: '清晨的雾气还未散去，阳光已经穿透云层，照在梅里雪山的金顶上。',
      l3: '一位朝圣者，带着高原的纯净与虔诚，缓缓走向你。',
      l4: '雪山的回音——纯净、高冷，却有着直击灵魂的力量。'
    },
    'france-burgundy-pinot-noir': {
      l1: '清晨的勃艮第，露水打湿了裙摆，远处是千年的修道院钟声。',
      l2: '像一位隐士在葡萄园中独坐，与土地进行无声的对话。',
      l3: '一位穿着素色长袍的修道士，手中捧着一杯透明的红宝石。',
      l4: '时间的标本——每一口都是一个世纪的风土在舌尖上重生。'
    },
    'usa-napa-valley-cabernet-sauvignon': {
      l1: '纳帕谷的晨雾中，一排排整齐的葡萄藤伸向远方，阳光穿透薄雾。',
      l2: '一位成功的酒商举起酒杯，眼中是对卓越品质的自信与骄傲。',
      l3: '一位穿着高级定制西装、肌肉线条精悍的帝王。',
      l4: '流动的万花筒——力量与优雅在杯中交织，加州阳光与法国灵魂的完美融合。'
    }
  };
  
  // Try to find specific narrative, fallback to generic
  const key = `${country}-${region}-${variety}`;
  if (narratives[key]) return narratives[key];
  
  // Generate based on scores
  const isElegant = (scores.identity + scores.emotion) / 2 > 8;
  const isPowerful = (scores.weight + scores.xfactor) / 2 > 8;
  
  if (isElegant) {
    return {
      l1: `In the quiet corners of ${regionData[country].regions[region].name}, where tradition meets the morning light...`,
      l2: 'A gentle warmth that reminds you of a conversation with an old friend by the fireplace.',
      l3: 'A poet in a tailored coat, speaking softly but with undeniable presence.',
      l4: 'The indivisible circle — where every element finds its place in perfect harmony.'
    };
  }
  
  if (isPowerful) {
    return {
      l1: `The landscape of ${regionData[country].regions[region].name} reveals itself in bold strokes of color and texture.`,
      l2: 'An overwhelming presence that demands attention — like standing at the edge of a waterfall.',
      l3: 'A warrior-king, armored in velvet, wielding a sword of pure concentration.',
      l4: 'A liquid kaleidoscope — the convergence of moment, terroir, and the human hand.'
    };
  }
  
  return {
    l1: `The vineyards of ${regionData[country].regions[region].name} unfold like a well-composed symphony.`,
    l2: 'A wine that speaks in whispers rather than shouts — inviting you to lean in closer.',
    l3: 'A seasoned traveler with stories from every corner of the vineyard.',
    l4: 'An intellectual wine — sitting across from you, waiting for a soul-to-soul conversation.'
  };
}

// ========== Tab Switching ==========
function switchTab(tabName) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.getElementById(`tab-${tabName}`).classList.add('active');
  event.target.classList.add('active');
}

// ========== Language Toggle ==========
function setLang(lang) {
  document.querySelectorAll('.nav-lang button').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  
  document.querySelectorAll('[data-' + lang + ']').forEach(el => {
    const text = el.getAttribute('data-' + lang);
    if (text) {
      if (el.tagName === 'INPUT') {
        el.placeholder = text;
      } else {
        el.innerHTML = text;
      }
    }
  });
}

// ========== Wine Duel ==========
function startDuel() {
  const wineA = document.getElementById('duel-wine-a').value;
  const wineB = document.getElementById('duel-wine-b').value;
  
  if (!wineA || !wineB) {
    alert('Please enter both wines.');
    return;
  }
  
  // Simulate duel with sample data
  const resultDiv = document.getElementById('duel-result');
  resultDiv.style.display = 'block';
  resultDiv.innerHTML = `
    <h3 style="text-align:center;margin-bottom:2rem">${wineA} vs ${wineB}</h3>
    <div class="grid-2" style="margin-bottom:2rem">
      <div class="card">
        <h3 style="color:var(--accent-green)">${wineA}</h3>
        <table class="wine-table">
          <tr><td>W (Weight)</td><td><strong>8.5</strong></td></tr>
          <tr><td>I (Identity)</td><td><strong>8.0</strong></td></tr>
          <tr><td>N (Nuance)</td><td><strong>8.5</strong></td></tr>
          <tr><td>E (Emotion)</td><td><strong>8.0</strong></td></tr>
          <tr><td>X (X-Factor)</td><td><strong>8.5</strong></td></tr>
          <tr><td>B (Balance)</td><td><strong>8.0</strong></td></tr>
          <tr><td><strong>Average</strong></td><td><strong>8.25</strong></td></tr>
        </table>
      </div>
      <div class="card">
        <h3 style="color:var(--accent-gold)">${wineB}</h3>
        <table class="wine-table">
          <tr><td>W (Weight)</td><td><strong>8.0</strong></td></tr>
          <tr><td>I (Identity)</td><td><strong>9.0</strong></td></tr>
          <tr><td>N (Nuance)</td><td><strong>9.0</strong></td></tr>
          <tr><td>E (Emotion)</td><td><strong>9.0</strong></td></tr>
          <tr><td>X (X-Factor)</td><td><strong>7.5</strong></td></tr>
          <tr><td>B (Balance)</td><td><strong>9.0</strong></td></tr>
          <tr><td><strong>Average</strong></td><td><strong>8.58</strong></td></tr>
        </table>
      </div>
    </div>
    <div style="background:var(--bg-card);padding:1.5rem;border-radius:8px;border:1px solid var(--border)">
      <h4 style="color:var(--accent-green);margin-bottom:0.5rem">Duel Verdict</h4>
      <p>"${wineA} is like a heavy sword without edge — dominating through sheer power and structure. ${wineB} is the flowing blade — lighter on the surface but cutting deeper with every layer of complexity."</p>
      <p style="margin-top:1rem"><strong>Recommended for:</strong></p>
      <p>${wineA} → Grand occasions, red meat, celebratory toasts.</p>
      <p>${wineB} → Contemplative evenings, cheese courses, conversations that last until dawn.</p>
    </div>
  `;
}

// ========== Smooth Scroll ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ========== Intersection Observer for Animations ==========
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .apostle-card, .section').forEach(el => {
  observer.observe(el);
});
