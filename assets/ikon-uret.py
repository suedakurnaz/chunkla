# İkon üretici. Gerekenler: pip install cairosvg pillow
# Çalıştır: cd assets && python3 ikon-uret.py  → PNG dosyalarını www/icons/ altına kopyala.

import cairosvg, io
from PIL import Image, ImageFilter
BG='#0433DD'
def mark(scale):
    # 512 koordinat sisteminde, merkez 256,256
    return f'''
<g transform="translate(256 256) rotate(-12) scale({scale}) translate(-270 -270)">
  <rect x="172" y="172" width="236" height="236" rx="48" fill="none" stroke="#fff" stroke-width="13"/>
  <rect x="132" y="132" width="250" height="250" rx="52" fill="{BG}" stroke="{BG}" stroke-width="40"/>
  <rect x="132" y="132" width="250" height="250" rx="52" fill="none" stroke="#fff" stroke-width="16"/>
  <g stroke="#fff" stroke-width="15" stroke-linecap="round" fill="none">
    <path d="M203 196 L205 318"/>
    <path d="M238 192 L239 322"/>
    <path d="M273 196 L272 318"/>
    <path d="M308 192 L309 322"/>
    <path d="M180 294 L336 222"/>
  </g>
</g>'''
def svg(scale, bg=True):
    rect = f'<rect width="512" height="512" fill="{BG}"/>' if bg else ''
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{rect}{mark(scale)}</svg>'
def render(scale, size):
    big = size*4
    base = Image.open(io.BytesIO(cairosvg.svg2png(bytestring=svg(scale).encode(), output_width=big, output_height=big))).convert('RGBA')
    fg = Image.open(io.BytesIO(cairosvg.svg2png(bytestring=svg(scale,False).encode(), output_width=big, output_height=big))).convert('RGBA')
    # yalnızca beyaz çizgilerden hafif parıltı
    r,g,b,a = fg.split()
    white = Image.eval(r, lambda v: 255 if v>200 else 0)
    glow = Image.new('RGBA', fg.size, (255,255,255,0)); glow.putalpha(Image.eval(white.filter(ImageFilter.GaussianBlur(big/90)), lambda v:int(v*0.35)))
    out = Image.new('RGBA', base.size, BG); out.alpha_composite(glow); 
    fgw = Image.new('RGBA', fg.size, (255,255,255,0)); fgw.putalpha(white)
    out.alpha_composite(base); out.alpha_composite(glow); out.alpha_composite(fgw)
    return out.convert('RGB').resize((size,size), Image.LANCZOS)
open('icon.svg','w').write(svg(0.9))
render(0.9,512).save('icon-512.png')
render(0.9,192).save('icon-192.png')
render(0.74,512).save('icon-maskable-512.png')
render(0.74,192).save('icon-maskable-192.png')
render(0.78,180).save('apple-touch-icon.png')
render(0.95,48).save('favicon-48.png')
