/* =====================================================================
   장내바이러스연구실 홈페이지 데이터
   ---------------------------------------------------------------------
   자주 바뀌는 내용(News, 과제, 논문, 구성원)은 이 파일만 고치면 됩니다.
   - 항목을 추가할 때는 기존 항목 하나를 복사해서 맨 위에 붙이고
     내용만 바꾸세요. 따옴표(" "), 쉼표(,), 중괄호({ })는 그대로 둡니다.
   - 저장한 뒤 Claude에게 "올려줘"라고 하면 홈페이지에 반영됩니다.
   ===================================================================== */

window.LAB = {

  /* ---------------- 화면 설정 ----------------
     showJoin: true 로 바꾸면 '함께하기'(학생 모집) 섹션이 다시 보입니다. */
  settings: { showJoin: true },

  /* ---------------- News (최신이 위로) ---------------- */
  news: [
    { date: "2026.10", text: "한국연구재단 개인기초연구 과제 선정 — 국내 하수·하천 환경 내 H5N1 인수공통감염 감시체계 구축 및 인체노출 위험평가 (연구책임자, 2026.09부터 5년간)" },
    { date: "2026.09", text: "식품의약품안전처 식품위생심의위원회 미생물분과 위원 위촉 (2026.09–2028.08)" },
    { date: "2026.09", text: "교육부 글로컬 R&D 지원사업 신규과제 선정 (식품생명공학과 김병용 교수 공동, 3년간 6억 원) — Akkermansia 유래 포스트바이오틱스의 항노로바이러스 기전 연구, UMass Amherst Matthew D. Moore 교수팀 국제공동연구", link: "https://www.hdnews.co.kr/news/articleView.html?idxno=356692", source: "현대경제" },
    { date: "2026.07", text: "식품의약품안전평가원 새로운 식품원료 전문가 자문단 위원 위촉 (2026.07–2028.07)" },
    { date: "2026.06", text: "한국미생물·생명공학회 국제학술대회(KMB 2026, 경주 HICO) 참가 — 윤송이 학생 포스터 발표: 한국 전통 된장의 지역별 미생물 다양성과 유익 미생물 구성" },
    { date: "2026", text: "논문 게재 — 된장 미생물 군집과 휘발성 성분 비교 분석 (LWT, 교신저자)" },
    { date: "2026", text: "논문 게재 — Liraglutide에 의한 장내 미생물 변화와 혈관 내피 기능 개선 (Biomedicine & Pharmacotherapy, 제1저자)" },
    { date: "2026.04", text: "섭화림(Hualin Nie) 연구원, 과학기술정보통신부·한국연구재단 2026 세종과학펠로우십 선정 — 국내 고구마 품종 기반 고부가가치 단백질 생산 플랫폼 개발", link: "https://www.dtnews24.com/news/articleView.html?idxno=811062", source: "디트NEWS24" },
    { date: "2026.03", text: "식약처 용역과제 시작 — 식용얼음 미생물 규격 조사 및 재평가 (연구책임자)" },
    { date: "2026.02", text: "식약처 용역과제 시작 — 면역저하자 대상 식품의 바실루스 세레우스 미생물 기준 재평가 (연구책임자)" },
    { date: "2025.09", text: "건양대학교 총장 표창 (RISE 사업 선정 기여)" },
    { date: "2025.07", text: "제약생명공학과 학과장 취임" },
    { date: "2025.04", text: "식품의약품안전처 위해성평가 전문위원회 위원 위촉 (식품 분야, 2025.04–2028.04)" },
    { date: "2024.09", text: "건양대학교 제약생명공학과 조교수 부임" }
  ],

  /* ---------------- 연구과제 ---------------- */
  projects: [
    { title: "국내 하수·하천 환경 내 H5N1 인수공통감염 감시체계 구축 및 인체노출 위험평가",
      funder: "한국연구재단 개인기초연구", role: "연구책임자", period: "2026.09–2031.08 (5년)" },
    { title: "차세대 프로바이오틱스 Akkermansia 유래 포스트바이오틱스 발굴 및 인체 장 오가노이드 기반 항노로바이러스 기전 규명",
      funder: "교육부 글로컬 R&D 지원사업 · UMass Amherst 국제공동연구", role: "공동연구원", period: "2026.09–2029.08" },
    { title: "면역저하자 대상 식품의 바실루스 세레우스 미생물 기준 재평가",
      funder: "식품의약품안전처", role: "연구책임자", period: "2026.02–2027.12" },
    { title: "식용얼음 미생물 규격 조사 및 재평가",
      funder: "식품의약품안전처", role: "연구책임자", period: "2026.03–2026.10" },
    { title: "식중독 바이러스 원인조사 시험법 개선 및 유효성 검증 연구 (2세부)",
      funder: "식품의약품안전처 · 중앙대학교 주관", role: "세부책임자", period: "2025.02–2026.12" }
  ],

  /* ---------------- 논문 ----------------
     topic 값: virus(장내 바이러스) · micro(마이크로바이옴) · risk(위해성평가) · detect(검출기술) · etc(기타)
     role 값 : "1st"(제1저자) · "co1st"(공동제1저자) · "corr"(교신저자) · "cocorr"(교신저자로 표시) · ""(공저자) */
  publications: [
    { year: 2026, authors: "H Nie, K Sim, MK Kim, SH Suh", title: "Comparative analysis of microbial communities and volatile profiles in traditional Korean soybean paste (Doenjang)", journal: "LWT", cite: "120026", topic: "micro", role: "cocorr" },
    { year: 2026, authors: "EY Oh, SH Suh, S Byeon, J Lee, YH Lee, SK Choi", title: "Liraglutide alters gut microbiota and improves endothelium-dependent relaxation in db/db mice", journal: "Biomedicine & Pharmacotherapy", cite: "196, 119042", topic: "micro", role: "co1st" },
    { year: 2025, authors: "WJ Park, BJ Kim, DW Seo, YC Park, I Joo, SH Suh", title: "Molecular epidemiology of norovirus outbreaks in childcare centers and schools in South Korea in 2023", journal: "Journal of Microbiology and Biotechnology", cite: "35, e2503025", topic: "virus", role: "corr" },
    { year: 2025, authors: "JA Han, S Hwang, N Son, HS Kwak, IS Joo, S Ryu, SH Suh", title: "Surveillance of microbial pathogens and development of a predictive model for Staphylococcus aureus in dried fish fillet", journal: "Food Science and Biotechnology", cite: "34(9), 2061–2070", topic: "risk", role: "corr" },
    { year: 2024, authors: "SH Suh, JS Lee, SH Kim, J Vinjé, SH Kim, GW Park", title: "Evaluation of crAssphages as a potential marker of human viral contamination in environmental water and fresh leafy greens", journal: "Frontiers in Microbiology", cite: "15, 1374568", topic: "virus", role: "1st" },
    { year: 2022, authors: "EJ Heo, HY Kim, SH Suh, JS Moon", title: "Comparison of DNA extraction methods for the quantification of Listeria monocytogenes in dairy products by real-time quantitative PCR", journal: "Journal of Food Protection", cite: "85(11), 1531–1537", topic: "detect", role: "" },
    { year: 2022, authors: "M Jeong, GW Nam, EJ Heo, MG Kim, HS Kwak, SH Kim, SH Suh", title: "Comparison of enrichment methods for isolating enterohemorrhagic Escherichia coli in kimchi", journal: "Journal of Microbiological Methods", cite: "200, 106543", topic: "detect", role: "corr" },
    { year: 2022, authors: "Y Shin, SH Suh, MK Kim", title: "The influence of packaging materials on the physiochemical properties, antioxidant properties, microbial community, and sensory characteristics of doenjang", journal: "Journal of Sensory Studies", cite: "37(4), e12747", topic: "micro", role: "" },
    { year: 2022, authors: "JL Cannon, MH Seabolt, R Xu, A Montmayeur, SH Suh, M Diez-Valcarce, F Bucardo, S Becker-Dreps, J Vinjé", title: "Gut microbiome changes occurring with norovirus infection and recovery in infants enrolled in a longitudinal birth cohort in León, Nicaragua", journal: "Viruses", cite: "14(7), 1395", topic: "virus", role: "" },
    { year: 2022, authors: "J Park, YJ Kim, SH Suh, MG Kim, HS Kwak, SH Kim, EJ Heo", title: "Evaluation of hygiene indicators and sampling plan for detecting microbial contamination in health functional foods", journal: "Journal of Food Protection", cite: "85(5), 844–848", topic: "risk", role: "" },
    { year: 2021, authors: "YJ Kim, JY Park, SH Suh, MG Kim, HS Kwak, SH Kim, EJ Heo", title: "Development and validation of a predictive model for pathogenic Escherichia coli in fresh-cut produce", journal: "Food Science & Nutrition", cite: "9(12), 6866–6872", topic: "risk", role: "" },
    { year: 2021, authors: "YJ Kim, JY Park, SH Suh, MG Kim, HS Kwak, SH Kim, EJ Heo", title: "Determination of statistical sampling criteria for microbial contamination of cereal and Saeng-sik products", journal: "LWT", cite: "151, 112129", topic: "risk", role: "" },
    { year: 2021, authors: "GW Nam, M Jeong, EJ Heo, OK Chang, MG Kim, HS Kwak, SH Suh", title: "Quantitative microbial risk assessment of pathogenic Escherichia coli in commercial kimchi in South Korea", journal: "Food Science and Biotechnology", cite: "30(11), 1455–1464", topic: "risk", role: "corr" },
    { year: 2021, authors: "SH Suh, MK Kim", title: "Microbial communities related to sensory characteristics of commercial drinkable yogurt products in Korea", journal: "Innovative Food Science & Emerging Technologies", cite: "67, 102565", topic: "micro", role: "1st" },
    { year: 2020, authors: "GS Cho, M Stein, E Brinks, J Rathje, W Lee, SH Suh, CMAP Franz", title: "Serratia nevei sp. nov. and Serratia bockelmannii sp. nov., isolated from fresh produce in Germany and reclassification of Serratia marcescens subsp. sakuensis as a later heterotypic synonym of Serratia marcescens subsp. marcescens", journal: "Systematic and Applied Microbiology", cite: "43(2), 126055", topic: "etc", role: "" },
    { year: 2019, authors: "WS Choi, N Son, JI Cho, IS Joo, JA Han, HS Kwak, JH Hong, SH Suh", title: "Predictive model of Staphylococcus aureus growth on egg products", journal: "Food Science and Biotechnology", cite: "28(3), 913–922", topic: "risk", role: "corr" },
    { year: 2019, authors: "SH Suh, HS Yun, SE Lee, HS Kwak", title: "Novel peptide nucleic acid melting array for the detection and genotyping of Toxoplasma gondii", journal: "Microbiology and Biotechnology Letters", cite: "47(4), 645–650", topic: "detect", role: "1st" },
    { year: 2018, authors: "SH Suh, SJ Choi, HP Dwivedi, MD Moore, BI Escudero-Abarca, LA Jaykus", title: "Use of DNA aptamer for sandwich type detection of Listeria monocytogenes", journal: "Analytical Biochemistry", cite: "557, 27–33", topic: "detect", role: "1st" },
    { year: 2017, authors: "AN Kim, JI Cho, NR Son, WS Choi, SH Yoon, SH Suh, HS Kwak, IS Joo", title: "Development of a predictive model describing the growth of Staphylococcus aureus in pyeonyuk marketed", journal: "Journal of Food Hygiene and Safety", cite: "32(3)", topic: "risk", role: "" },
    { year: 2017, authors: "NR Son, AN Kim, WS Choi, SH Yoon, SH Suh, IS Joo, SH Kim, HS Kwak, JI Cho", title: "Development of a predictive model describing the growth of Staphylococcus aureus in processed meat product galbitang", journal: "Korean Journal of Food Science and Technology", cite: "49(3)", topic: "risk", role: "" },
    { year: 2017, authors: "HS Yun, SH Suh, HS Kwak, IS Joo", title: "Real-time PCR assay for the detection of Toxoplasma gondii in retail meats: proof-of-concept study", journal: "Journal of Food Hygiene and Safety", cite: "32(3), 199–205", topic: "detect", role: "" },
    { year: 2016, authors: "AA Rosimin, MJ Kim, IS Joo, SH Suh, KS Kim", title: "Simultaneous detection of pathogenic Listeria including atypical Listeria innocua in vegetables by a quadruplex PCR method", journal: "LWT – Food Science and Technology", cite: "69, 601–607", topic: "detect", role: "" },
    { year: 2016, authors: "SJ Choi, SS Oh, CR Kim, YK Kwon, SH Suh, JK Kim, GG Park, SY Son, DH Shin", title: "Perilla frutescens extract ameliorates acetylcholinesterase and trimethyltin chloride-induced neurotoxicity", journal: "Journal of Medicinal Food", cite: "19(3), 281–289", topic: "etc", role: "" },
    { year: 2015, authors: "MD Moore, BI Escudero-Abarca, SH Suh, LA Jaykus", title: "Generation and characterization of nucleic acid aptamers targeting the capsid P domain of a human norovirus GII.4 strain", journal: "Journal of Biotechnology", cite: "209, 41–49", topic: "virus", role: "" },
    { year: 2015, authors: "JK Kim, EC Shin, HJ Lim, SJ Choi, CR Kim, SH Suh, CJ Kim, GG Park, CS Park, HK Kim", title: "Characterization of nutritional composition, antioxidative capacity, and sensory attributes of Seomae mugwort, a native Korean variety of Artemisia argyi", journal: "Journal of Analytical Methods in Chemistry", cite: "2015, 916346", topic: "etc", role: "" },
    { year: 2014, authors: "BI Escudero-Abarca, SH Suh, MD Moore, HP Dwivedi, LA Jaykus", title: "Selection, characterization and application of nucleic acid aptamers for the capture and detection of human norovirus strains", journal: "PLoS ONE", cite: "9(9), e106805", topic: "virus", role: "" },
    { year: 2014, authors: "SJ Choi, JK Kim, SH Suh, CR Kim, HK Kim, CJ Kim, GG Park, CS Park, DH Shin", title: "Ligularia fischeri extract protects against oxidative-stress-induced neurotoxicity in mice and PC12 cells", journal: "Journal of Medicinal Food", cite: "17(11), 1222–1231", topic: "etc", role: "" },
    { year: 2014, authors: "SH Suh, HP Dwivedi, SJ Choi, LA Jaykus", title: "Selection and characterization of DNA aptamers specific for Listeria species", journal: "Analytical Biochemistry", cite: "459, 39–45", topic: "detect", role: "1st" },
    { year: 2014, authors: "BI Escudero-Abarca, H Rawsthorne, RM Goulter, SH Suh, LA Jaykus", title: "Molecular methods used to estimate thermal inactivation of a prototype human norovirus: more heat resistant than previously believed?", journal: "Food Microbiology", cite: "41, 91–95", topic: "virus", role: "" },
    { year: 2014, authors: "SH Suh, HP Dwivedi, LA Jaykus", title: "Development and evaluation of aptamer magnetic capture assay in conjunction with real-time PCR for detection of Campylobacter jejuni", journal: "LWT – Food Science and Technology", cite: "56(2), 256–260", topic: "detect", role: "1st" },
    { year: 2013, authors: "SH Suh, LA Jaykus", title: "Nucleic acid aptamers for capture and detection of Listeria spp.", journal: "Journal of Biotechnology", cite: "167(4), 454–461", topic: "detect", role: "1st" },
    { year: 2013, authors: "SH Suh, LA Jaykus, B Brehm-Stecher", title: "Advances in separation and concentration of microorganisms from food samples (book chapter)", journal: "Advances in Microbial Food Safety, Woodhead Publishing", cite: "173–192", topic: "detect", role: "1st" },
    { year: 2011, authors: "SJ Choi, JH Lee, HJ Heo, HY Cho, HK Kim, CJ Kim, MO Kim, SH Suh, DH Shin", title: "Punica granatum protects against oxidative stress in PC12 cells and oxidative stress-induced Alzheimer's symptoms in mice", journal: "Journal of Medicinal Food", cite: "14(7-8), 695–701", topic: "etc", role: "" },
    { year: 2007, authors: "SH Suh, S Rheem, JH Mah, W Lee, MW Byun, HJ Hwang", title: "Optimization of production of monacolin K from γ-irradiated Monascus mutant by use of response surface methodology", journal: "Journal of Medicinal Food", cite: "10(3), 408–415", topic: "etc", role: "1st" },
    { year: 2003, authors: "SY Shin, SH Suh, WD Cho, HK Lee, HJ Hwang", title: "탁주 제조 시 율무 첨가에 따른 휘발성 성분의 분석", journal: "한국식품영양과학회지", cite: "32(8), 1206–1213", topic: "etc", role: "" }
  ],

  /* ---------------- 구성원 ----------------
     학생이 합류하면 아래 형식으로 추가하세요.
     { name: "홍길동", nameEn: "Gildong Hong", role: "학부연구생", since: "2026", topic: "노로바이러스 분자역학" } */
  members: [
    { name: "섭화림", nameEn: "Hualin Nie", photo: "images/member-nie.jpg", role: "Ph.D. · 세종과학펠로우 · 제약생명공학과 강사, 산학협력단 박사후연구원", since: "", topic: "식물 기반 재조합 단백질 생산(면역관문 억제제 CTLA4·PD1), 니파바이러스·COVID-19 그린백신, 고구마 기반 고부가가치 단백질 생산 플랫폼, 발효식품 미생물 군집" }
    ,{ name: "심규민", role: "석사과정", since: "", topic: "" }
    ,{ name: "강민서", role: "학부연구생 · 22학번", since: "", topic: "" }
    ,{ name: "신승빈", role: "학부연구생 · 22학번", since: "", topic: "" }
    ,{ name: "윤송이", role: "학부연구생 · 23학번", since: "", topic: "" }
    ,{ name: "김아름", role: "학부연구생 · 24학번", since: "", topic: "" }
    ,{ name: "유희수", role: "학부연구생 · 24학번", since: "", topic: "" }
    ,{ name: "신하균", role: "학부연구생 · 25학번", since: "", topic: "" }
    ,{ name: "김채민", role: "학부연구생 · 25학번", since: "", topic: "" }
    ,{ name: "장서연", role: "학부연구생 · 25학번", since: "", topic: "" }
  ],

  alumni: []
};
