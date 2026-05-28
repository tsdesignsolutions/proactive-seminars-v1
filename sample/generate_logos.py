import os

images_dir = r"d:\Projects\Antigravity\Robert Phillips\Final Designs\final_design\images"
if not os.path.exists(images_dir):
    os.makedirs(images_dir)

logos = {
    "logo_kw.svg": '''<svg width="200" height="80" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="80" fill="transparent"/>
        <text x="50%" y="60%" font-family="Arial" font-size="48" font-weight="bold" fill="#b0101c" text-anchor="middle" dominant-baseline="middle">KW</text>
    </svg>''',
    
    "logo_frost.svg": '''<svg width="200" height="80" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="80" fill="transparent"/>
        <circle cx="40" cy="40" r="20" fill="#003f7a" />
        <path d="M40 10 L40 70 M10 40 L70 40 M20 20 L60 60 M20 60 L60 20" stroke="#fff" stroke-width="3"/>
        <text x="70" y="52" font-family="Arial" font-size="32" font-weight="bold" fill="#003f7a">Frost</text>
    </svg>''',
    
    "logo_capital.svg": '''<svg width="200" height="80" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="80" fill="transparent"/>
        <text x="100" y="52" font-family="Georgia" font-size="28" font-weight="bold" fill="#333" text-anchor="middle">CAPITAL TITLE</text>
        <path d="M20 60 L180 60" stroke="#d4af37" stroke-width="3"/>
    </svg>''',
    
    "logo_remax.svg": '''<svg width="200" height="80" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="80" fill="transparent"/>
        <text x="100" y="52" font-family="Arial" font-size="36" font-weight="bold" fill="#e11b22" text-anchor="middle">RE<tspan fill="#003f7a">/MAX</tspan></text>
    </svg>''',
    
    "logo_coldwell.svg": '''<svg width="200" height="80" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="80" fill="transparent"/>
        <rect x="20" y="20" width="40" height="40" fill="#002d72"/>
        <text x="40" y="48" font-family="Arial" font-size="24" font-weight="bold" fill="#fff" text-anchor="middle">CB</text>
        <text x="75" y="42" font-family="Arial" font-size="16" font-weight="bold" fill="#002d72">COLDWELL</text>
        <text x="75" y="58" font-family="Arial" font-size="16" font-weight="bold" fill="#002d72">BANKER</text>
    </svg>''',
    
    "logo_firstam.svg": '''<svg width="200" height="80" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="80" fill="transparent"/>
        <path d="M40 20 L20 60 L60 60 Z" fill="#003a70"/>
        <path d="M30 40 L50 40 L40 60 Z" fill="#fff"/>
        <text x="75" y="48" font-family="Arial" font-size="18" font-weight="bold" fill="#003a70">First American</text>
    </svg>''',
    
    "logo_allegiance.svg": '''<svg width="200" height="80" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="80" fill="transparent"/>
        <path d="M40 20 Q50 20 50 30 L50 50 Q40 70 30 50 L30 30 Q30 20 40 20" fill="#8b0000"/>
        <text x="70" y="48" font-family="Times New Roman" font-size="22" font-weight="bold" fill="#333">Allegiance Title</text>
    </svg>''',
    
    "logo_fidelity.svg": '''<svg width="200" height="80" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="80" fill="transparent"/>
        <circle cx="40" cy="40" r="15" fill="#333" />
        <path d="M40 25 L55 55 L25 55 Z" fill="#fff"/>
        <text x="70" y="48" font-family="Arial" font-size="20" font-weight="bold" fill="#333">Fidelity National</text>
    </svg>'''
}

for filename, content in logos.items():
    filepath = os.path.join(images_dir, filename)
    with open(filepath, 'w') as f:
        f.write(content)

print("Generated all SVGs.")
