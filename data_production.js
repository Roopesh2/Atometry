// Temporary Data file in JS. Will be later converted to JSON or Firebase Database

var propertyKeys = {
  a: "Name",
  b: "Symbol",
  c: "Electronic Configuration",
  d: "Period", // G
  e: "Group", // G
  f: "Block", // G
  g: "Shell-wise Electronic Configuration", // G
  h: "Type",
  i: "Mass"
}

var typeKeys = {
  α: "Nonmetal",
  β: "Noble Gas",
  γ: "Alkali Metals",
  θ: "Alkaline Earth Metals",
  η: "Metalloid",
  σ: "Halogen",
  τ: "Post Transition Metals",
  ζ: "Transition Metals",
  φ: "Actinoid",
  μ: "Lanthanoid"
}
/**
 * [Atomic number]: {
 *   [prop1]: [v1],
 *   [prop2]: [v2],
 *   [prop3]: [v3],
 *   ...
 * }
 */
var Data = {
  1: {
    a: "Hydrogen",
    b: "H",
    h: α,
    i: 1.0079
  },
  2: {
    a: "Helium",
    b: "He",
    h: β,
    i: 4.00260
  },
  3: {
    a: "Lithium",
    b: "Li",
    h: γ,
    i: 6.941
  },
  4: {
    a: "Beryllium",
    b: "Be",
    h: θ,
    i: 4.00260
  },
  5: {
    a: "Boron",
    b: "B",
    h: η,
    i: 10.811
  },
  6: {
    a: "Carbon",
    b: "C",
    h: α,
    i: 12.011
  },
  7: {
    a: "Nitrogen",
    b: "N",
    h: α,
    i: 14.0067
  },
  8: {
    a: "Oxygen",
    b: "O",
    h: α,
    i: 15.9993
  },
  9: {
    a: "Fluorine",
    b: "F",
    h: σ,
    i: 18.9984
  },
  10: {
    a: "Neon",
    b: "Ne",
    h: β,
    i: 20.1797
  },
  11: {
    a: "Sodium",
    b: "Na",
    h: γ,
    i: 22.989768
  },
  12: {
    a: "Magnesium",
    b: "Mg",
    h: θ,
    i: 24.305
  },
  13: {
    a: "Aluminum",
    b: "Al",
    h: τ,
    i: 26.981539
  },
  14: {
    a: "Silicon",
    b: "Si",
    h: η,
    i: 28.0855
  },
  15: {
    a: "Phosphorus",
    b: "P",
    h: α,
    i: 30.973762
  },
  16: {
    a: "Sulphur",
    b: "S",
    h: α,
    i: 32.066
  },
  17: {
    a: "Chlorine",
    b: "Cl",
    h: σ,
    i: 35.4527
  },
  18: {
    a: "Argon",
    b: "Ar",
    h: β,
    i: 39.948
  },
  19: {
    a: "Potassium",
    b: "K",
    h: γ,
    i: 39.0983
  },
  20: {
    a: "Calcium",
    b: "Ca",
    h: θ,
    i: 40.078
  },
  21: {
    a: "Scandium",
    b: "Sc",
    h: ζ,
    i: 44.95591
  },
  22: {
    a: "Titanium",
    b: "Ti",
    h: ζ,
    i: 47.88
  },
  23: {
    a: "Vanadium",
    b: "V",
    h: ζ,
    i: 50.9415
  },
  24: {
    a: "Chromium",
    b: "Cr",
    h: ζ,
    i: 51.9961
  },
  25: {
    a: "Manganese",
    b: "Mn",
    h: ζ,
    i: 54.938
  },
  26: {
    a: "Iron",
    b: "Fe",
    h: ζ,
    i: 55.847
  },
  27: {
    a: "Cobalt",
    b: "Co",
    h: ζ,
    i: 58.9332
  },
  28: {
    a: "Nickel",
    b: "Ni",
    h: ζ,
    i: 58.6934
  },
  29: {
    a: "Copper",
    b: "Cu",
    h: ζ,
    i: 63.546
  },
  30: {
    a: "Zinc",
    b: "Zn",
    h: ζ,
    i: 65.29
  },
  31: {
    a: "Gallium",
    b: "Ga",
    h: τ,
    i: 69.732
  },
  32: {
    a: "Germanium",
    b: "Ge",
    h: η,
    i: 73.64
  },
  33: {
    a: "Arsenic",
    b: "As",
    h: η,
    i: 74.92159
  },
  34: {
    a: "Selenium",
    b: "Se",
    h: α,
    i: 78.96
  },
  35: {
    a: "Bromine",
    b: "Br",
    h: σ,
    i: 79.904
  },
  36: {
    a: "Krypton",
    b: "Kr",
    h: β,
    i: 83.80
  },
  37: {
    a: "Rubidium",
    b: "Rb",
    h: γ,
    i: 85.4678
  },
  38: {
    a: "Strontium",
    b: "Sr",
    h: θ,
    i: 87.62
  },
  39: {
    a: "Yttrium",
    b: "Y",
    h: ζ,
    i: 88.90585
  },
  40: {
    a: "Zirconium",
    b: "Zr",
    h: ζ,
    i: 91.224
  },
  41: {
    a: "Niobium",
    b: "Nb",
    h: ζ,
    i: 92.90638
  },
  42: {
    a: "Molybdenum",
    b: "Mo",
    h: ζ,
    i: 95.94
  },
  43: {
    a: "Technetium",
    b: "Tc",
    h: ζ,
    i: 98.9072
  },
  44: {
    a: "Ruthenium",
    b: "Ru",
    h: ζ,
    i: 101.07
  },
  45: {
    a: "Rhodium",
    b: "Rh",
    h: ζ,
    i: 102.9055
  },
  46: {
    a: "Palladium",
    b: "Pd",
    h: ζ,
    i: 106.42
  },
  47: {
    a: "Silver",
    b: "Ag",
    h: ζ,
    i: 107.8682
  },
  48: {
    a: "Cadmium",
    b: "Cd",
    h: ζ,
    i: 112.411
  },
  49: {
    a: "Indium",
    b: "In",
    h: τ,
    i: 114.818
  },
  50: {
    a: "Tin",
    b: "Sn",
    h: τ,
    i: 118.71
  },
  51: {
    a: "Antimony",
    b: "Sb",
    h: η,
    i: 121.760
  },
  52: {
    a: "Tellurium",
    b: "Te",
    h: η,
    i: 127.6
  },
  53: {
    a: "Iodine",
    b: "I",
    h: σ,
    i: 126.90447
  },
  54: {
    a: "Xenon",
    b: "Xe",
    h: β,
    i: 131.29
  },
  55: {
    a: "Caesium",
    b: "Cs",
    h: γ,
    i: 132.90543
  },
  56: {
    a: "Barium",
    b: "Ba",
    h: θ,
    i: 137.327
  },
  57: {
    a: "Lanthanum",
    b: "La",
    h: μ,
    i: 138.9055
  },
  58: {
    a: "Corium",
    b: "Ce",
    h: μ,
    i: 140.115
  },
  59: {
    a: "Praseodymium",
    b: "Pr",
    h: μ,
    i: 140.90785
  },
  60: {
    a: "Neodymium",
    b: "Nd",
    h: μ,
    i: 144.24
  },
  61: {
    a: "Promethium",
    b: "Pm",
    h: μ,
    i: 144.9127
  },
  62: {
    a: "Samarium",
    b: "Sm",
    h: μ,
    i: 150.36
  },
  63: {
    a: "Europium",
    b: "Eu",
    h: μ,
    i: 151.9655
  },
  64: {
    a: "Gadolinium",
    b: "Gd",
    h: μ,
    i: 157.25
  },
  65: {
    a: "Terbium",
    b: "Tb",
    h: μ,
    i: 158.92534
  },
  66: {
    a: "Dysprosium",
    b: "Dy",
    h: μ,
    i: 162.50
  },
  67: {
    a: "Holmium",
    b: "Ho",
    h: μ,
    i: 164.93421
  },
  68: {
    a: "Erbium",
    b: "Er",
    h: μ,
    i: 167.26
  },
  69: {
    a: "Thulium",
    b: "Tm",
    h: μ,
    i: 168.93421
  },
  70: {
    a: "Ytterbium",
    b: "Yb",
    h: μ,
    i: 173.04
  },
  71: {
    a: "Lutetium",
    b: "Lu",
    h: μ,
    i: 174.967
  },
  72: {
    a: "Hafnium",
    b: "Hf",
    h: ζ,
    i: 178.49
  },
  73: {
    a: "Tantalum",
    b: "Ta",
    h: ζ,
    i: 180.9479
  },
  74: {
    a: "Tungsten",
    b: "W",
    h: ζ,
    i: 183.85
  },
  75: {
    a: "Rhenium",
    b: "Re",
    h: ζ,
    i: 186.207
  },
  76: {
    a: "Osmium",
    b: "Os",
    h: ζ,
    i: 190.23
  },
  77: {
    a: "Iridium",
    b: "Ir",
    h: ζ,
    i: 192.22
  },
  78: {
    a: "Platinum",
    b: "Pt",
    h: ζ,
    i: 185.08
  },
  79: {
    a: "Gold",
    b: "Au",
    h: ζ,
    i: 196.9665
  },
  80: {
    a: "Mercury",
    b: "Hg",
    h: ζ,
    i: 200.59
  },
  81: {
    a: "Thallium",
    b: "Ti",
    h: τ,
    i: 204.3833
  },
  82: {
    a: "Lead",
    b: "Pb",
    h: τ,
    i: 207.2
  },
  83: {
    a: "Bismuth",
    b: "Bi",
    h: τ,
    i: 208.98037
  },
  84: {
    a: "Polonium",
    b: "Po",
    h: η,
    i: 208.9824
  },
  85: {
    a: "Astatine",
    b: "At",
    h: σ,
    i: 209.9871
  },
  86: {
    a: "Radon",
    b: "Rn",
    h: β,
    i: 222.0176
  },
  87: {
    a: "Francium",
    b: "Fr",
    h: γ,
    i: 223.0197
  },
  88: {
    a: "Radium",
    b: "Ra",
    h: θ,
    i: 226.0254
  },
  89: {
    a: "Actinium",
    b: "Ac",
    h: φ,
    i: 227.0278
  },
  90: {
    a: "Thorium",
    b: "Th",
    h: φ,
    i: 232.0381
  },
  91: {
    a: "Protactinium",
    b: "Pa",
    h: φ,
    i: 231.03588
  },
  92: {
    a: "Uranium",
    b: "U",
    h: φ,
    i: 238.0289
  },
  93: {
    a: "Neptunium",
    b: "Np",
    h: φ,
    i: 243.0614
  },
  94: {
    a: "Plutonium",
    b: "Pu",
    h: φ,
    i: 247.0703
  },
  95: {
    a: "Americium",
    b: "Am",
    h: φ,
    i: 243.0614
  },
  96: {
    a: "Curium",
    b: "Cm",
    h: φ,
    i: 247.0703
  },
  97: {
    a: "Berkelium",
    b: "Bk",
    h: φ,
    i: 247.0703
  },
  98: {
    a: "Californium",
    b: "Cf",
    h: φ,
    i: 251.0796
  },
  99: {
    a: "Einsteinium",
    b: "Es",
    h: φ,
    i: 254
  },
  100: {
    a: "Fermium",
    b: "Fm",
    h: φ,
    i: 257.0951
  },
  101: {
    a: "Mendelevium",
    b: "Md",
    h: φ,
    i: 258.1
  },
  102: {
    a: "Nobelium",
    b: "No",
    h: φ,
    i: 259.1009
  },
  103: {
    a: "Lawrencium",
    b: "Lr",
    h: φ,
    i: 262
  },
  104: {
    a: "Rutherfordium",
    b: "Rf",
    h: ζ,
    i: 261
  },
  105: {
    a: "Dubnium",
    b: "Db",
    h: ζ,
    i: 262
  },
  106: {
    a: "Seaborgium",
    b: "Sg",
    h: ζ,
    i: 266
  },
  107: {
    a: "Bohrium",
    b: "Bh",
    h: ζ,
    i: 264
  },
  108: {
    a: "Hassium",
    b: "Hs",
    h: ζ,
    i: 269
  },
  109: {
    a: "Meltnerium",
    b: "Mt",
    h: ζ,
    i: 268
  },
  110: {
    a: "Darmstandtium",
    b: "Ds",
    h: ζ,
    i: 269
  },
  111: {
    a: "Roentgenlum",
    b: "Rg",
    h: ζ,
    i: 272
  },
  112: {
    a: "Copernicium",
    b: "Cn",
    h: ζ,
    i: 277
  },
  113: {
    a: "Nihonium",
    b: "Nh",
    h: τ,
    i: 286
  },
  114: {
    a: "Flerovium",
    b: "Fl",
    h: τ,
    i: 289
  },
  115: {
    a: "Moscovium",
    b: "Mc",
    h: τ,
    i: 288
  },
  116: {
    a: "Livermonium",
    b: "Lv",
    h: τ,
    i: 298
  },
  117: {
    a: "Tennessine",
    b: "Ts",
    h: σ,
    i: 294
  },
  118: {
    a: "Oganesson",
    b: "Og",
    h: β,
    i: 294
  },
}