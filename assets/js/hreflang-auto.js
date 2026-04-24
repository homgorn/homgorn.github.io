<!-- Hreflang SEO Generator - Auto-detects language version -->
<script>
(function() {
  const BASE_URL = 'https://homgorn.github.io';
  const path = window.location.pathname;
  
  // Determine if this is English page (/en/ prefix)
  const isEnglish = path.startsWith('/en/') || path === '/en';
  
  // Generate Russian URL (remove /en/ prefix)
  const ruUrl = isEnglish 
    ? path.replace(/^\/en/, '') || '/'
    : path;
  
  // Generate English URL (add /en/ prefix)
  const enUrl = isEnglish 
    ? path 
    : '/en' + path;
  
  // Build complete hreflang set (must be bidirectional)
  const hreflangs = [
    { lang: 'ru', url: BASE_URL + (ruUrl === '/' ? '' : ruUrl) },
    { lang: 'en', url: BASE_URL + enUrl },
    { lang: 'x-default', url: BASE_URL + (ruUrl === '/' ? '' : ruUrl) }
  ];
  
  // Add tags to head
  const head = document.querySelector('head');
  hreflangs.forEach(function(h) {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = h.lang;
    link.href = h.url;
    head.appendChild(link);
  });
})();
</script>