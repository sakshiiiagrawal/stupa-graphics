const countries = [
  {
    name: "CIV",
    src: "../flags/CIV.png",
    code: "CIV",
  },
  {
    name: "SUD",
    src: "../flags/SUD.png",
    code: "SUD",
  },
  {
    name: "VIN",
    src: "../flags/VIN.png",
    code: "VIN",
  },
  {
    name: "Qatar",
    src: "../flags/QAT.png",
    code: "QAT",
  },
  {
    name: "Ghana",
    src: "../flags/GHA.png",
    code: "GHA",
  },
  {
    name: "Guernsey",
    src: "../flags/GGY.png",
    code: "GGY",
  },
  {
    name: "GEQ",
    src: "../flags/GEQ.png",
    code: "GEQ",
  },
  {
    name: "Israel",
    src: "../flags/ISR.png",
    code: "ISR",
  },
  {
    name: "GRN",
    src: "../flags/GRN.png",
    code: "GRN",
  },
  {
    name: "New Zealand",
    src: "../flags/NZL.png",
    code: "NZL",
  },
  {
    name: "Suriname",
    src: "../flags/SUR.png",
    code: "SUR",
  },
  {
    name: "Sierra Leone",
    src: "../flags/SLE.png",
    code: "SLE",
  },
  {
    name: "Slovakia",
    src: "../flags/SVK.png",
    code: "SVK",
  },
  {
    name: "Venezuela, Bolivarian Republic of",
    src: "../flags/VEN.png",
    code: "VEN",
  },
  {
    name: "New Caledonia",
    src: "../flags/NCL.png",
    code: "NCL",
  },
  {
    name: "BUL",
    src: "../flags/BUL.png",
    code: "BUL",
  },
  {
    name: "GER",
    src: "../flags/GER.png",
    code: "GER",
  },
  {
    name: "Greenland",
    src: "../flags/GRL.png",
    code: "GRL",
  },
  {
    name: "BAH",
    src: "../flags/BAH.png",
    code: "BAH",
  },
  {
    name: "UAE",
    src: "../flags/UAE.png",
    code: "UAE",
  },
  {
    name: "Egypt",
    src: "../flags/EGY.png",
    code: "EGY",
  },
  {
    name: "BOT",
    src: "../flags/BOT.png",
    code: "BOT",
  },
  {
    name: "Syrian Arab Republic",
    src: "../flags/SYR.png",
    code: "SYR",
  },
  {
    name: "Falkland Islands (Malvinas)",
    src: "../flags/FLK.png",
    code: "FLK",
  },
  {
    name: "Cabo Verde",
    src: "../flags/CPV.png",
    code: "CPV",
  },
  {
    name: "Anguilla",
    src: "../flags/AIA.png",
    code: "AIA",
  },
  {
    name: "North Macedonia",
    src: "../flags/MKD.png",
    code: "MKD",
  },
  {
    name: "Mexico",
    src: "../flags/MEX.png",
    code: "MEX",
  },
  {
    name: "SOL",
    src: "../flags/SOL.png",
    code: "SOL",
  },
  {
    name: "SCO",
    src: "../flags/SCO.png",
    code: "SCO",
  },
  {
    name: "TGA",
    src: "../flags/TGA.png",
    code: "TGA",
  },
  {
    name: "Marshall Islands",
    src: "../flags/MHL.png",
    code: "MHL",
  },
  {
    name: "Lithuania",
    src: "../flags/LTU.png",
    code: "LTU",
  },
  {
    name: ".DS_Store",
    src: "../flags/.DS_STORE.png",
    code: ".DS_STORE",
  },
  {
    name: "LAT",
    src: "../flags/LAT.png",
    code: "LAT",
  },
  {
    name: "Iraq",
    src: "../flags/IRQ.png",
    code: "IRQ",
  },
  {
    name: "Lebanon",
    src: "../flags/LBN.png",
    code: "LBN",
  },
  {
    name: "KSA",
    src: "../flags/KSA.png",
    code: "KSA",
  },
  {
    name: "Gibraltar",
    src: "../flags/GIB.png",
    code: "GIB",
  },
  {
    name: "Sao Tome and Principe",
    src: "../flags/STP.png",
    code: "STP",
  },
  {
    name: "Somalia",
    src: "../flags/SOM.png",
    code: "SOM",
  },
  {
    name: "San Marino",
    src: "../flags/SMR.png",
    code: "SMR",
  },
  {
    name: "CGO",
    src: "../flags/CGO.png",
    code: "CGO",
  },
  {
    name: "PHI",
    src: "../flags/PHI.png",
    code: "PHI",
  },
  {
    name: "RSA",
    src: "../flags/RSA.png",
    code: "RSA",
  },
  {
    name: "Kenya",
    src: "../flags/KEN.png",
    code: "KEN",
  },
  {
    name: "ISV",
    src: "../flags/ISV.png",
    code: "ISV",
  },
  {
    name: "BAN",
    src: "../flags/BAN.png",
    code: "BAN",
  },
  {
    name: "Wallis and Futuna",
    src: "../flags/WLF.png",
    code: "WLF",
  },
  {
    name: "Eritrea",
    src: "../flags/ERI.png",
    code: "ERI",
  },
  {
    name: "HON",
    src: "../flags/HON.png",
    code: "HON",
  },
  {
    name: "CRO",
    src: "../flags/CRO.png",
    code: "CRO",
  },
  {
    name: "CHA",
    src: "../flags/CHA.png",
    code: "CHA",
  },
  {
    name: "Armenia",
    src: "../flags/ARM.png",
    code: "ARM",
  },
  {
    name: "Saint Martin (French part)",
    src: "../flags/MAF.png",
    code: "MAF",
  },
  {
    name: "Mozambique",
    src: "../flags/MOZ.png",
    code: "MOZ",
  },
  {
    name: "Andorra",
    src: "../flags/AND.png",
    code: "AND",
  },
  {
    name: "Tuvalu",
    src: "../flags/TUV.png",
    code: "TUV",
  },
  {
    name: "United States",
    src: "../flags/USA.png",
    code: "USA",
  },
  {
    name: "GAM",
    src: "../flags/GAM.png",
    code: "GAM",
  },
  {
    name: "PUR",
    src: "../flags/PUR.png",
    code: "PUR",
  },
  {
    name: "French Polynesia",
    src: "../flags/PYF.png",
    code: "PYF",
  },
  {
    name: "GUI",
    src: "../flags/GUI.png",
    code: "GUI",
  },
  {
    name: "NGR",
    src: "../flags/NGR.png",
    code: "NGR",
  },
  {
    name: "MYA",
    src: "../flags/MYA.png",
    code: "MYA",
  },
  {
    name: "Serbia",
    src: "../flags/SRB.png",
    code: "SRB",
  },
  {
    name: "Djibouti",
    src: "../flags/DJI.png",
    code: "DJI",
  },
  {
    name: "Morocco",
    src: "../flags/MAR.png",
    code: "MAR",
  },
  {
    name: "Faroe Islands",
    src: "../flags/FRO.png",
    code: "FRO",
  },
  {
    name: "MON",
    src: "../flags/MON.png",
    code: "MON",
  },
  {
    name: "South Sudan",
    src: "../flags/SSD.png",
    code: "SSD",
  },
  {
    name: "ANG",
    src: "../flags/ANG.png",
    code: "ANG",
  },
  {
    name: "Russian Federation",
    src: "../flags/RUS.png",
    code: "RUS",
  },
  {
    name: "Italy",
    src: "../flags/ITA.png",
    code: "ITA",
  },
  {
    name: "Ukraine",
    src: "../flags/UKR.png",
    code: "UKR",
  },
  {
    name: "PLE",
    src: "../flags/PLE.png",
    code: "PLE",
  },
  {
    name: "Malta",
    src: "../flags/MLT.png",
    code: "MLT",
  },
  {
    name: "MAD",
    src: "../flags/MAD.png",
    code: "MAD",
  },
  {
    name: "MAS",
    src: "../flags/MAS.png",
    code: "MAS",
  },
  {
    name: "Jersey",
    src: "../flags/JEY.png",
    code: "JEY",
  },
  {
    name: "ZAM",
    src: "../flags/ZAM.png",
    code: "ZAM",
  },
  {
    name: "Congo, The Democratic Republic of the",
    src: "../flags/COD.png",
    code: "COD",
  },
  {
    name: "MAW",
    src: "../flags/MAW.png",
    code: "MAW",
  },
  {
    name: "Hong Kong",
    src: "../flags/HKG.png",
    code: "HKG",
  },
  {
    name: "OMA",
    src: "../flags/OMA.png",
    code: "OMA",
  },
  {
    name: "Czechia",
    src: "../flags/CZE.png",
    code: "CZE",
  },
  {
    name: "Brunei Darussalam",
    src: "../flags/BRN.png",
    code: "BRN",
  },
  {
    name: "Ethiopia",
    src: "../flags/ETH.png",
    code: "ETH",
  },
  {
    name: "Guyana",
    src: "../flags/GUY.png",
    code: "GUY",
  },
  {
    name: "Nauru",
    src: "../flags/NRU.png",
    code: "NRU",
  },
  {
    name: "ENG",
    src: "../flags/ENG.png",
    code: "ENG",
  },
  {
    name: "URU",
    src: "../flags/URU.png",
    code: "URU",
  },
  {
    name: "Poland",
    src: "../flags/POL.png",
    code: "POL",
  },
  {
    name: "Palau",
    src: "../flags/PLW.png",
    code: "PLW",
  },
  {
    name: "Japan",
    src: "../flags/JPN.png",
    code: "JPN",
  },
  {
    name: "ANT",
    src: "../flags/ANT.png",
    code: "ANT",
  },
  {
    name: "CAY",
    src: "../flags/CAY.png",
    code: "CAY",
  },
  {
    name: "Canada",
    src: "../flags/CAN.png",
    code: "CAN",
  },
  {
    name: "Timor-Leste",
    src: "../flags/TLS.png",
    code: "TLS",
  },
  {
    name: "Macao",
    src: "../flags/MAC.png",
    code: "MAC",
  },
  {
    name: "Micronesia, Federated States of",
    src: "../flags/FSM.png",
    code: "FSM",
  },
  {
    name: "Singapore",
    src: "../flags/SGP.png",
    code: "SGP",
  },
  {
    name: "PAR",
    src: "../flags/PAR.png",
    code: "PAR",
  },
  {
    name: "GBS",
    src: "../flags/GBS.png",
    code: "GBS",
  },
  {
    name: "KUW",
    src: "../flags/KUW.png",
    code: "KUW",
  },
  {
    name: "Guam",
    src: "../flags/GUM.png",
    code: "GUM",
  },
  {
    name: "Bonaire, Sint Eustatius and Saba",
    src: "../flags/BES.png",
    code: "BES",
  },
  {
    name: "Ecuador",
    src: "../flags/ECU.png",
    code: "ECU",
  },
  {
    name: "Uganda",
    src: "../flags/UGA.png",
    code: "UGA",
  },
  {
    name: "BER",
    src: "../flags/BER.png",
    code: "BER",
  },
  {
    name: "BHU",
    src: "../flags/BHU.png",
    code: "BHU",
  },
  {
    name: "Türkiye",
    src: "../flags/TUR.png",
    code: "TUR",
  },
  {
    name: "Azerbaijan",
    src: "../flags/AZE.png",
    code: "AZE",
  },
  {
    name: "SEY",
    src: "../flags/SEY.png",
    code: "SEY",
  },
  {
    name: "CAM",
    src: "../flags/CAM.png",
    code: "CAM",
  },
  {
    name: "Senegal",
    src: "../flags/SEN.png",
    code: "SEN",
  },
  {
    name: "Cook Islands",
    src: "../flags/COK.png",
    code: "COK",
  },
  {
    name: "DEN",
    src: "../flags/DEN.png",
    code: "DEN",
  },
  {
    name: "MTN",
    src: "../flags/MTN.png",
    code: "MTN",
  },
  {
    name: "Brazil",
    src: "../flags/BRA.png",
    code: "BRA",
  },
  {
    name: "India",
    src: "../flags/IND.png",
    code: "IND",
  },
  {
    name: "GUA",
    src: "../flags/GUA.png",
    code: "GUA",
  },
  {
    name: "IVB",
    src: "../flags/IVB.png",
    code: "IVB",
  },
  {
    name: "Liechtenstein",
    src: "../flags/LIE.png",
    code: "LIE",
  },
  {
    name: "NIG",
    src: "../flags/NIG.png",
    code: "NIG",
  },
  {
    name: "NED",
    src: "../flags/NED.png",
    code: "NED",
  },
  {
    name: "Papua New Guinea",
    src: "../flags/PNG.png",
    code: "PNG",
  },
  {
    name: "Cyprus",
    src: "../flags/CYP.png",
    code: "CYP",
  },
  {
    name: "VAN",
    src: "../flags/VAN.png",
    code: "VAN",
  },
  {
    name: "Finland",
    src: "../flags/FIN.png",
    code: "FIN",
  },
  {
    name: "Mali",
    src: "../flags/MLI.png",
    code: "MLI",
  },
  {
    name: "TOG",
    src: "../flags/TOG.png",
    code: "TOG",
  },
  {
    name: "Australia",
    src: "../flags/AUS.png",
    code: "AUS",
  },
  {
    name: "TAN",
    src: "../flags/TAN.png",
    code: "TAN",
  },
  {
    name: "SRI",
    src: "../flags/SRI.png",
    code: "SRI",
  },
  {
    name: "Trinidad and Tobago",
    src: "../flags/TTO.png",
    code: "TTO",
  },
  {
    name: "BRU",
    src: "../flags/BRU.png",
    code: "BRU",
  },
  {
    name: "LES",
    src: "../flags/LES.png",
    code: "LES",
  },
  {
    name: "Bosnia and Herzegovina",
    src: "../flags/BIH.png",
    code: "BIH",
  },
  {
    name: "Romania",
    src: "../flags/ROU.png",
    code: "ROU",
  },
  {
    name: "Pakistan",
    src: "../flags/PAK.png",
    code: "PAK",
  },
  {
    name: "Norfolk Island",
    src: "../flags/NFK.png",
    code: "NFK",
  },
  {
    name: "NEP",
    src: "../flags/NEP.png",
    code: "NEP",
  },
  {
    name: "ALG",
    src: "../flags/ALG.png",
    code: "ALG",
  },
  {
    name: "Comoros",
    src: "../flags/COM.png",
    code: "COM",
  },
  {
    name: "Cameroon",
    src: "../flags/CMR.png",
    code: "CMR",
  },
  {
    name: "SKN",
    src: "../flags/SKN.png",
    code: "SKN",
  },
  {
    name: "Central African Republic",
    src: "../flags/CAF.png",
    code: "CAF",
  },
  {
    name: "Tunisia",
    src: "../flags/TUN.png",
    code: "TUN",
  },
  {
    name: "Gabon",
    src: "../flags/GAB.png",
    code: "GAB",
  },
  {
    name: "Isle of Man",
    src: "../flags/IMN.png",
    code: "IMN",
  },
  {
    name: "BIZ",
    src: "../flags/BIZ.png",
    code: "BIZ",
  },
  {
    name: "Benin",
    src: "../flags/BEN.png",
    code: "BEN",
  },
  {
    name: "KOS",
    src: "../flags/KOS.png",
    code: "KOS",
  },
  {
    name: "Korea, Republic of",
    src: "../flags/KOR.png",
    code: "KOR",
  },
  {
    name: "Panama",
    src: "../flags/PAN.png",
    code: "PAN",
  },
  {
    name: "Rwanda",
    src: "../flags/RWA.png",
    code: "RWA",
  },
  {
    name: "POR",
    src: "../flags/POR.png",
    code: "POR",
  },
  {
    name: "Cuba",
    src: "../flags/CUB.png",
    code: "CUB",
  },
  {
    name: "Albania",
    src: "../flags/ALB.png",
    code: "ALB",
  },
  {
    name: "Northern Mariana Islands",
    src: "../flags/MNP.png",
    code: "MNP",
  },
  {
    name: "Colombia",
    src: "../flags/COL.png",
    code: "COL",
  },
  {
    name: "Montenegro",
    src: "../flags/MNE.png",
    code: "MNE",
  },
  {
    name: "Curaçao",
    src: "../flags/CUW.png",
    code: "CUW",
  },
  {
    name: "FIJ",
    src: "../flags/FIJ.png",
    code: "FIJ",
  },
  {
    name: "Yemen",
    src: "../flags/YEM.png",
    code: "YEM",
  },
  {
    name: "INA",
    src: "../flags/INA.png",
    code: "INA",
  },
  {
    name: "Burundi",
    src: "../flags/BDI.png",
    code: "BDI",
  },
  {
    name: "Belgium",
    src: "../flags/BEL.png",
    code: "BEL",
  },
  {
    name: "Kazakhstan",
    src: "../flags/KAZ.png",
    code: "KAZ",
  },
  {
    name: "Niue",
    src: "../flags/NIU.png",
    code: "NIU",
  },
  {
    name: "France",
    src: "../flags/FRA.png",
    code: "FRA",
  },
  {
    name: "Austria",
    src: "../flags/AUT.png",
    code: "AUT",
  },
  {
    name: "Thailand",
    src: "../flags/THA.png",
    code: "THA",
  },
  {
    name: "MGL",
    src: "../flags/MGL.png",
    code: "MGL",
  },
  {
    name: "Turkmenistan",
    src: "../flags/TKM.png",
    code: "TKM",
  },
  {
    name: "SLO",
    src: "../flags/SLO.png",
    code: "SLO",
  },
  {
    name: "Sweden",
    src: "../flags/SWE.png",
    code: "SWE",
  },
  {
    name: "ESW",
    src: "../flags/ESW.png",
    code: "ESW",
  },
  {
    name: "Norway",
    src: "../flags/NOR.png",
    code: "NOR",
  },
  {
    name: "Georgia",
    src: "../flags/GEO.png",
    code: "GEO",
  },
  {
    name: "WAL",
    src: "../flags/WAL.png",
    code: "WAL",
  },
  {
    name: "Korea, Democratic People's Republic of",
    src: "../flags/PRK.png",
    code: "PRK",
  },
  {
    name: "IRI",
    src: "../flags/IRI.png",
    code: "IRI",
  },
  {
    name: "Iceland",
    src: "../flags/ISL.png",
    code: "ISL",
  },
  {
    name: "Belarus",
    src: "../flags/BLR.png",
    code: "BLR",
  },
  {
    name: "LBA",
    src: "../flags/LBA.png",
    code: "LBA",
  },
  {
    name: "ESA",
    src: "../flags/ESA.png",
    code: "ESA",
  },
  {
    name: "HAI",
    src: "../flags/HAI.png",
    code: "HAI",
  },
  {
    name: "CRC",
    src: "../flags/CRC.png",
    code: "CRC",
  },
  {
    name: "Moldova, Republic of",
    src: "../flags/MDA.png",
    code: "MDA",
  },
  {
    name: "Tokelau",
    src: "../flags/TKL.png",
    code: "TKL",
  },
  {
    name: "Maldives",
    src: "../flags/MDV.png",
    code: "MDV",
  },
  {
    name: "Dominican Republic",
    src: "../flags/DOM.png",
    code: "DOM",
  },
  {
    name: "Hungary",
    src: "../flags/HUN.png",
    code: "HUN",
  },
  {
    name: "Namibia",
    src: "../flags/NAM.png",
    code: "NAM",
  },
  {
    name: "BUR",
    src: "../flags/BUR.png",
    code: "BUR",
  },
  {
    name: "Estonia",
    src: "../flags/EST.png",
    code: "EST",
  },
  {
    name: "Lao People's Democratic Republic",
    src: "../flags/LAO.png",
    code: "LAO",
  },
  {
    name: "GRE",
    src: "../flags/GRE.png",
    code: "GRE",
  },
  {
    name: "Afghanistan",
    src: "../flags/AFG.png",
    code: "AFG",
  },
  {
    name: "TPE",
    src: "../flags/TPE.png",
    code: "TPE",
  },
  {
    name: "VIE",
    src: "../flags/VIE.png",
    code: "VIE",
  },
  {
    name: "China",
    src: "../flags/CHN.png",
    code: "CHN",
  },
  {
    name: "ARU",
    src: "../flags/ARU.png",
    code: "ARU",
  },
  {
    name: "Tajikistan",
    src: "../flags/TJK.png",
    code: "TJK",
  },
  {
    name: "Luxembourg",
    src: "../flags/LUX.png",
    code: "LUX",
  },
  {
    name: "Uzbekistan",
    src: "../flags/UZB.png",
    code: "UZB",
  },
  {
    name: "BAR",
    src: "../flags/BAR.png",
    code: "BAR",
  },
  {
    name: "Kyrgyzstan",
    src: "../flags/KGZ.png",
    code: "KGZ",
  },
  {
    name: "Peru",
    src: "../flags/PER.png",
    code: "PER",
  },
  {
    name: "Spain",
    src: "../flags/ESP.png",
    code: "ESP",
  },
  {
    name: "NCA",
    src: "../flags/NCA.png",
    code: "NCA",
  },
  {
    name: "ZIM",
    src: "../flags/ZIM.png",
    code: "ZIM",
  },
  {
    name: "Dominica",
    src: "../flags/DMA.png",
    code: "DMA",
  },
  {
    name: "Argentina",
    src: "../flags/ARG.png",
    code: "ARG",
  },
  {
    name: "Jamaica",
    src: "../flags/JAM.png",
    code: "JAM",
  },
  {
    name: "CHI",
    src: "../flags/CHI.png",
    code: "CHI",
  },
  {
    name: "ASA",
    src: "../flags/ASA.png",
    code: "ASA",
  },
  {
    name: "SAM",
    src: "../flags/SAM.png",
    code: "SAM",
  },
  {
    name: "Saint Lucia",
    src: "../flags/LCA.png",
    code: "LCA",
  },
  {
    name: "Liberia",
    src: "../flags/LBR.png",
    code: "LBR",
  },
  {
    name: "Ireland",
    src: "../flags/IRL.png",
    code: "IRL",
  },
  {
    name: "Kiribati",
    src: "../flags/KIR.png",
    code: "KIR",
  },
  {
    name: "Bolivia, Plurinational State of",
    src: "../flags/BOL.png",
    code: "BOL",
  },
  {
    name: "MRI",
    src: "../flags/MRI.png",
    code: "MRI",
  },
  {
    name: "SUI",
    src: "../flags/SUI.png",
    code: "SUI",
  },
  {
    name: "Jordan",
    src: "../flags/JOR.png",
    code: "JOR",
  },
];
