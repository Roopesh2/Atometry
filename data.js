// Temporary Data file in JS. Will be later converted to JSON or Firebase Database
/*
var properties = [
  name,
  symbol,
  Electronic Configuration,
  Period, // G
  Group, // G
  Block, // G
  Shell-wise Electronic Configuration, // G
  type,
  mass
]


 * [Atomic number]: {
 *   [prop1]: [v1],
 *   [prop2]: [v2],
 *   [prop3]: [v3],
 *   ...
 * }
 */
var Data = {
  1: {
    name  : "Hydrogen",
    symbol: "H",
    type  : "Nonmetals",
    mass  : 1.0079
  },
  2: {
    name  : "Helium",
    symbol: "He",
    type  : "Noble Gas",
    mass  : 4.00260
  },
  3: {
    name  : "Lithium",
    symbol: "Li",
    type  : "Alkali metal",
    mass  : 6.941
  },
  4: {
    name  : "Beryllium",
    symbol: "Be",
    type  : "Alkaline Earth Metal",
    mass  : 4.00260
  },
  5: {
    name  : "Boron",
    symbol: "B",
    type  : "Metalloid",
    mass  : 10.811
  },
  6: {
    name  : "Carbon",
    symbol: "C",
    type  : "Nonmetals",
    mass  : 12.011
  },
  7: {
    name  : "Nitrogen",
    symbol: "N",
    type  : "Nonmetals",
    mass  : 14.0067
  },
  8: {
    name  : "Oxygen",
    symbol: "O",
    type  : "Nonmetals",
    mass  : 15.9993
  },
  9: {
    name  : "Fluorine",
    symbol: "F",
    type  : "Halogen",
    mass  : 18.9984
  },
  10: {
    name  : "Neon",
    symbol: "Ne",
    type  : "Noble Gas",
    mass  : 20.1797
  },
  11: {
    name  : "Sodium",
    symbol: "Na",
    type  : "Alkali metal",
    mass  : 22.989768
  },
  12: {
    name  : "Magnesium",
    symbol: "Mg",
    type  : "Alkaline Earth Metal",
    mass  : 24.305
  },
  13: {
    name  : "Aluminum",
    symbol: "Al",
    type  : "Post Transition Metal",
    mass  : 26.981539
  },
  14: {
    name  : "Silicon",
    symbol: "Si",
    type  : "Metalloid",
    mass  : 28.0855
  },
  15: {
    name  : "Phosphorus",
    symbol: "P",
    type  : "Nonmetals",
    mass  : 30.973762
  },
  16: {
    name  : "Sulphur",
    symbol: "S",
    type  : "Nonmetals",
    mass  : 32.066
  },
  17: {
    name  : "Chlorine",
    symbol: "Cl",
    type  : "Halogen",
    mass  : 35.4527
  },
  18: {
    name  : "Argon",
    symbol: "Ar",
    type  : "Noble Gas",
    mass  : 39.948
  },
  19: {
    name  : "Potassium",
    symbol: "K",
    type  : "Alkali metal",
    mass  : 39.0983
  },
  20: {
    name  : "Calcium",
    symbol: "Ca",
    type  : "Alkaline Earth Metal",
    mass  : 40.078
  },
  21: {
    name  : "Scandium",
    symbol: "Sc",
    type  : "Transition Metal",
    mass  : 44.95591
  },
  22: {
    name  : "Titanium",
    symbol: "Ti",
    type  : "Transition Metal",
    mass  : 47.88
  },
  23: {
    name  : "Vanadium",
    symbol: "V",
    type  : "Transition Metal",
    mass  : 50.9415
  },
  24: {
    name  : "Chromium",
    symbol: "Cr",
    type  : "Transition Metal",
    mass  : 51.9961
  },
  25: {
    name  : "Manganese",
    symbol: "Mn",
    type  : "Transition Metal",
    mass  : 54.938
  },
  26: {
    name  : "Iron",
    symbol: "Fe",
    type  : "Transition Metal",
    mass  : 55.847
  },
  27: {
    name  : "Cobalt",
    symbol: "Co",
    type  : "Transition Metal",
    mass  : 58.9332
  },
  28: {
    name  : "Nickel",
    symbol: "Ni",
    type  : "Transition Metal",
    mass  : 58.6934
  },
  29: {
    name  : "Copper",
    symbol: "Cu",
    type  : "Transition Metal",
    mass  : 63.546
  },
  30: {
    name  : "Zinc",
    symbol: "Zn",
    type  : "Transition Metal",
    mass  : 65.29
  },
  31: {
    name  : "Gallium",
    symbol: "Ga",
    type  : "Post Transition Metal",
    mass  : 69.732
  },
  32: {
    name  : "Germanium",
    symbol: "Ge",
    type  : "Metalloid",
    mass  : 73.64
  },
  33: {
    name  : "Arsenic",
    symbol: "As",
    type  : "Metalloid",
    mass  : 74.92159
  },
  34: {
    name  : "Selenium",
    symbol: "Se",
    type  : "Nonmetals",
    mass  : 78.96
  },
  35: {
    name  : "Bromine",
    symbol: "Br",
    type  : "Halogen",
    mass  : 79.904
  },
  36: {
    name  : "Krypton",
    symbol: "Kr",
    type  : "Noble Gas",
    mass  : 83.80
  },
  37: {
    name  : "Rubidium",
    symbol: "Rb",
    type  : "Alkali metal",
    mass  : 85.4678
  },
  38: {
    name  : "Strontium",
    symbol: "Sr",
    type  : "Alkaline Earth Metal",
    mass  : 87.62
  },
  39: {
    name  : "Yttrium",
    symbol: "Y",
    type  : "Transition Metal",
    mass  : 88.90585
  },
  40: {
    name  : "Zirconium",
    symbol: "Zr",
    type  : "Transition Metal",
    mass  : 91.224
  },
  41: {
    name  : "Niobium",
    symbol: "Nb",
    type  : "Transition Metal",
    mass  : 92.90638
  },
  42: {
    name  : "Molybdenum",
    symbol: "Mo",
    type  : "Transition Metal",
    mass  : 95.94
  },
  43: {
    name  : "Technetium",
    symbol: "Tc",
    type  : "Transition Metal",
    mass  : 98.9072
  },
  44: {
    name  : "Ruthenium",
    symbol: "Ru",
    type  : "Transition Metal",
    mass  : 101.07
  },
  45: {
    name  : "Rhodium",
    symbol: "Rh",
    type  : "Transition Metal",
    mass  : 102.9055
  },
  46: {
    name  : "Palladium",
    symbol: "Pd",
    type  : "Transition Metal",
    mass  : 106.42
  },
  47: {
    name  : "Silver",
    symbol: "Ag",
    type  : "Transition Metal",
    mass  : 107.8682
  },
  48: {
    name  : "Cadmium",
    symbol: "Cd",
    type  : "Transition Metal",
    mass  : 112.411
  },
  49: {
    name  : "Indium",
    symbol: "In",
    type  : "Post Transition Metal",
    mass  : 114.818
  },
  50: {
    name  : "Tin",
    symbol: "Sn",
    type  : "Post Transition Metal",
    mass  : 118.71
  },
  51: {
    name  : "Antimony",
    symbol: "Sb",
    type  : "Metalloid",
    mass  : 121.760
  },
  52: {
    name  : "Tellurium",
    symbol: "Te",
    type  : "Metalloid",
    mass  : 127.6
  },
  53: {
    name  : "Iodine",
    symbol: "I",
    type  : "Halogen",
    mass  : 126.90447
  },
  54: {
    name  : "Xenon",
    symbol: "Xe",
    type  : "Noble Gas",
    mass  : 131.29
  },
  55: {
    name  : "Caesium",
    symbol: "Cs",
    type  : "Alkali metal",
    mass  : 132.90543
  },
  56: {
    name  : "Barium",
    symbol: "Ba",
    type  : "Alkaline Earth Metal",
    mass  : 137.327
  },
  57: {
    name  : "Lanthanum",
    symbol: "La",
    type  : "Lanthanoid",
    mass  : 138.9055
  },
  58: {
    name  : "Corium",
    symbol: "Ce",
    type  : "Lanthanoid",
    mass  : 140.115
  },
  59: {
    name  : "Praseodymium",
    symbol: "Pr",
    type  : "Lanthanoid",
    mass  : 140.90785
  },
  60: {
    name  : "Neodymium",
    symbol: "Nd",
    type  : "Lanthanoid",
    mass  : 144.24
  },
  61: {
    name  : "Promethium",
    symbol: "Pm",
    type  : "Lanthanoid",
    mass  : 144.9127
  },
  62: {
    name  : "Samarium",
    symbol: "Sm",
    type  : "Lanthanoid",
    mass  : 150.36
  },
  63: {
    name  : "Europium",
    symbol: "Eu",
    type  : "Lanthanoid",
    mass  : 151.9655
  },
  64: {
    name  : "Gadolinium",
    symbol: "Gd",
    type  : "Lanthanoid",
    mass  : 157.25
  },
  65: {
    name  : "Terbium",
    symbol: "Tb",
    type  : "Lanthanoid",
    mass  : 158.92534
  },
  66: {
    name  : "Dysprosium",
    symbol: "Dy",
    type  : "Lanthanoid",
    mass  : 162.50
  },
  67: {
    name  : "Holmium",
    symbol: "Ho",
    type  : "Lanthanoid",
    mass  : 164.93421
  },
  68: {
    name  : "Erbium",
    symbol: "Er",
    type  : "Lanthanoid",
    mass  : 167.26
  },
  69: {
    name  : "Thulium",
    symbol: "Tm",
    type  : "Lanthanoid",
    mass  : 168.93421
  },
  70: {
    name  : "Ytterbium",
    symbol: "Yb",
    type  : "Lanthanoid",
    mass  : 173.04
  },
  71: {
    name  : "Lutetium",
    symbol: "Lu",
    type  : "Lanthanoid",
    mass  : 174.967
  },
  72: {
    name  : "Hafnium",
    symbol: "Hf",
    type  : "Transition Metal",
    mass  : 178.49
  },
  73: {
    name  : "Tantalum",
    symbol: "Ta",
    type  : "Transition Metal",
    mass  : 180.9479
  },
  74: {
    name  : "Tungsten",
    symbol: "W",
    type  : "Transition Metal",
    mass  : 183.85
  },
  75: {
    name  : "Rhenium",
    symbol: "Re",
    type  : "Transition Metal",
    mass  : 186.207
  },
  76: {
    name  : "Osmium",
    symbol: "Os",
    type  : "Transition Metal",
    mass  : 190.23
  },
  77: {
    name  : "Iridium",
    symbol: "Ir",
    type  : "Transition Metal",
    mass  : 192.22
  },
  78: {
    name  : "Platinum",
    symbol: "Pt",
    type  : "Transition Metal",
    mass  : 185.08
  },
  79: {
    name  : "Gold",
    symbol: "Au",
    type  : "Transition Metal",
    mass  : 196.9665
  },
  80: {
    name  : "Mercury",
    symbol: "Hg",
    type  : "Transition Metal",
    mass  : 200.59
  },
  81: {
    name  : "Thallium",
    symbol: "Ti",
    type  : "Post Transition Metal",
    mass  : 204.3833
  },
  82: {
    name  : "Lead",
    symbol: "Pb",
    type  : "Post Transition Metal",
    mass  : 207.2
  },
  83: {
    name  : "Bismuth",
    symbol: "Bi",
    type  : "Post Transition Metal",
    mass  : 208.98037
  },
  84: {
    name  : "Polonium",
    symbol: "Po",
    type  : "Metalloid",
    mass  : 208.9824
  },
  85: {
    name  : "Astatine",
    symbol: "At",
    type  : "Halogen",
    mass  : 209.9871
  },
  86: {
    name  : "Radon",
    symbol: "Rn",
    type  : "Noble Gas",
    mass  : 222.0176
  },
  87: {
    name  : "Francium",
    symbol: "Fr",
    type  : "Alkali metal",
    mass  : 223.0197
  },
  88: {
    name  : "Radium",
    symbol: "Ra",
    type  : "Alkaline Earth Metal",
    mass  : 226.0254
  },
  89: {
    name  : "Actinium",
    symbol: "Ac",
    type  : "Actinoid",
    mass  : 227.0278
  },
  90: {
    name  : "Thorium",
    symbol: "Th",
    type  : "Actinoid",
    mass  : 232.0381
  },
  91: {
    name  : "Protactinium",
    symbol: "Pa",
    type  : "Actinoid",
    mass  : 231.03588
  },
  92: {
    name  : "Uranium",
    symbol: "U",
    type  : "Actinoid",
    mass  : 238.0289
  },
  93: {
    name  : "Neptunium",
    symbol: "Np",
    type  : "Actinoid",
    mass  : 243.0614
  },
  94: {
    name  : "Plutonium",
    symbol: "Pu",
    type  : "Actinoid",
    mass  : 247.0703
  },
  95: {
    name  : "Americium",
    symbol: "Am",
    type  : "Actinoid",
    mass  : 243.0614
  },
  96: {
    name  : "Curium",
    symbol: "Cm",
    type  : "Actinoid",
    mass  : 247.0703
  },
  97: {
    name  : "Berkelium",
    symbol: "Bk",
    type  : "Actinoid",
    mass  : 247.0703
  },
  98: {
    name  : "Californium",
    symbol: "Cf",
    type  : "Actinoid",
    mass  : 251.0796
  },
  99: {
    name  : "Einsteinium",
    symbol: "Es",
    type  : "Actinoid",
    mass  : 254
  },
  100: {
    name  : "Fermium",
    symbol: "Fm",
    type  : "Actinoid",
    mass  : 257.0951
  },
  101: {
    name  : "Mendelevium",
    symbol: "Md",
    type  : "Actinoid",
    mass  : 258.1
  },
  102: {
    name  : "Nobelium",
    symbol: "No",
    type  : "Actinoid",
    mass  : 259.1009
  },
  103: {
    name  : "Lawrencium",
    symbol: "Lr",
    type  : "Actinoid",
    mass  : 262
  },
  104: {
    name  : "Rutherfordium",
    symbol: "Rf",
    type  : "Transition Metal",
    mass  : 261
  },
  105: {
    name  : "Dubnium",
    symbol: "Db",
    type  : "Transition Metal",
    mass  : 262
  },
  106: {
    name  : "Seaborgium",
    symbol: "Sg",
    type  : "Transition Metal",
    mass  : 266
  },
  107: {
    name  : "Bohrium",
    symbol: "Bh",
    type  : "Transition Metal",
    mass  : 264
  },
  108: {
    name  : "Hassium",
    symbol: "Hs",
    type  : "Transition Metal",
    mass  : 269
  },
  109: {
    name  : "Meltnerium",
    symbol: "Mt",
    type  : "Transition Metal",
    mass  : 268
  },
  110: {
    name  : "Darmstandtium",
    symbol: "Ds",
    type  : "Transition Metal",
    mass  : 269
  },
  111: {
    name  : "Roentgenlum",
    symbol: "Rg",
    type  : "Transition Metal",
    mass  : 272
  },
  112: {
    name  : "Copernicium",
    symbol: "Cn",
    type  : "Transition Metal",
    mass  : 277
  },
  113: {
    name  : "Nihonium",
    symbol: "Nh",
    type  : "Post Transition Metal",
    mass  : 286
  },
  114: {
    name  : "Flerovium",
    symbol: "Fl",
    type  : "Post Transition Metal",
    mass  : 289
  },
  115: {
    name  : "Moscovium",
    symbol: "Mc",
    type  : "Post Transition Metal",
    mass  : 288
  },
  116: {
    name  : "Livermonium",
    symbol: "Lv",
    type  : "Post Transition Metal",
    mass  : 298
  },
  117: {
    name  : "Tennessine",
    symbol: "Ts",
    type  : "Halogen",
    mass  : 294
  },
  118: {
    name  : "Oganesson",
    symbol: "Og",
    type  : "Noble Gas",
    mass  : 294
  },
}