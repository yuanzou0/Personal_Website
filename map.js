(() => {
  const element = document.getElementById('map');
  if (!element) return;
  const zh = document.documentElement.lang.startsWith('zh');
  if (typeof L === 'undefined') {
    element.textContent = zh ? '地图暂时无法加载。' : 'The map is temporarily unavailable.';
    element.classList.add('map-fallback');
    return;
  }
  const map = L.map(element).setView([35, -10], 2);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map);
  const locations = [
    { en: 'New York University (NYU)<br>M.S. Data Science', zh: '纽约大学<br>数据科学硕士', coords: [40.7295, -73.9965] },
    { en: 'Mount Holyoke College<br>Undergraduate study', zh: '曼荷莲女子学院<br>本科阶段学习', coords: [42.2556, -72.5745] },
    { en: 'MicroPort (Shanghai)<br>Data Intern', zh: '微创医疗（上海）<br>数据分析实习', coords: [31.2304, 121.4737] },
    { en: 'Duke Kunshan University<br>Research Intern', zh: '昆山杜克大学<br>研究实习', coords: [31.3846, 120.9807] },
    { en: 'Boston', zh: '波士顿', coords: [42.3601, -71.0589] },
    { en: 'Los Angeles', zh: '洛杉矶', coords: [34.0522, -118.2437] },
    { en: 'Miami', zh: '迈阿密', coords: [25.7617, -80.1918] },
    { en: 'Tampa', zh: '坦帕', coords: [27.9506, -82.4572] },
    { en: 'Orlando', zh: '奥兰多', coords: [28.5383, -81.3792] },
    { en: 'Yellowstone National Park', zh: '黄石国家公园', coords: [44.4280, -110.5885] },
    { en: 'Las Vegas', zh: '拉斯维加斯', coords: [36.1699, -115.1398] },
    { en: 'Hawaii', zh: '夏威夷', coords: [21.3069, -157.8583] },
    { en: 'Paris, France', zh: '法国巴黎', coords: [48.8566, 2.3522] },
    { en: 'Rome, Italy', zh: '意大利罗马', coords: [41.9028, 12.4964] },
    { en: 'Florence, Italy', zh: '意大利佛罗伦萨', coords: [43.7696, 11.2558] },
    { en: 'Milan, Italy', zh: '意大利米兰', coords: [45.4642, 9.1900] },
    { en: 'Barcelona, Spain', zh: '西班牙巴塞罗那', coords: [41.3851, 2.1734] },
    { en: 'Beijing', zh: '北京', coords: [39.9042, 116.4074] },
    { en: 'Suzhou', zh: '苏州', coords: [31.2989, 120.5853] },
    { en: 'Fujian', zh: '福建', coords: [26.0745, 119.2965] },
    { en: 'Xinjiang', zh: '新疆', coords: [43.8256, 87.6168] },
    { en: 'Yangzhou', zh: '扬州', coords: [32.3942, 119.4129] },
    { en: 'Nanjing', zh: '南京', coords: [32.0603, 118.7969] },
    { en: 'Hainan', zh: '海南', coords: [19.0208, 109.8256] },
    { en: 'Indonesia', zh: '印度尼西亚', coords: [-0.7893, 113.9213] },
    { en: 'Bali, Indonesia', zh: '印度尼西亚巴厘岛', coords: [-8.4095, 115.1889] },
    { en: 'Thailand', zh: '泰国', coords: [13.7563, 100.5018] },
    { en: 'Seoul, South Korea', zh: '韩国首尔', coords: [37.5665, 126.9780] },
    { en: 'Okinawa, Japan', zh: '日本冲绳', coords: [26.2124, 127.6809] },
    { en: 'Australia', zh: '澳大利亚', coords: [-25.2744, 133.7751] }
  ];
  locations.forEach(place => {
    L.marker(place.coords).addTo(map).bindPopup(zh ? place.zh : place.en);
  });
})();
