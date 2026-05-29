/* ============================================
   UNIVERSAL SERVICE DETAILS COMPONENT
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const serviceData = {
    rudrabhishek: {
      badge: "पवित्र वैदिक अनुष्ठान",
      titleHindi: "रुद्राभिषेक पूजा",
      titleEnglish: "Sacred Rudrabhishek Puja",
      description: `भगवान शिव का रुद्र अभिषेक बहुत शक्तिशाली और पवित्र पूजा मानी जाती है। इसमें शिवलिंग पर जल, दूध, दही, घी, शहद, गंगाजल, बेलपत्र आदि चढ़ाकर <strong>"ॐ नमः शिवाय"</strong> और रुद्र मंत्रों का जाप किया जाता है।`,
      mantraOm: "ॐ",
      mantraText: "॥ ॐ नमः शिवाय ॥",
      image: "assets/images/rudra_abhishek.jpeg",
      waText: "रुद्राभिषेक पूजा के बारे में जानकारी चाहिए।",
      whyTitleHindi: "रुद्र अभिषेक क्यों किया जाता है?",
      whyTitleEnglish: "Why Perform Rudrabhishek",
      benefits: [
        { icon: "🙏", text: "जीवन की बाधाएँ और कष्ट दूर करने के लिए" },
        { icon: "🪐", text: "ग्रह दोष और नकारात्मकता शांत करने के लिए" },
        { icon: "🧘", text: "मन की शांति और मानसिक बल पाने के लिए" },
        { icon: "💪", text: "बीमारी, डर और चिंता कम करने के लिए" },
        { icon: "💰", text: "धन, सुख और समृद्धि की कामना के लिए" },
        { icon: "👨‍👩‍👧‍👦", text: "संतान सुख और परिवार की रक्षा के लिए" },
        { icon: "💍", text: "विवाह और नौकरी के कार्यों में सफलता के लिए" },
        { icon: "🔱", text: "भगवान शिव की कृपा प्राप्त करने के लिए" }
      ],
      resultsTitleHindi: "रुद्र अभिषेक से क्या फल मिलता है?",
      resultsTitleEnglish: "Benefits of Each Abhishek",
      results: [
        { icon: "💧", title: "जल से अभिषेक", desc: "मन शांत होता है, घर में सुख-शांति बढ़ती है" },
        { icon: "🥛", title: "दूध से अभिषेक", desc: "स्वास्थ्य और सौभाग्य की प्राप्ति मानी जाती है, परिवार में प्रेम बढ़ता है" },
        { icon: "🍶", title: "दही से अभिषेक", desc: "धन और वैभव में वृद्धि होती है" },
        { icon: "🧈", title: "घी से अभिषेक", desc: "शक्ति और तेज बढ़ने का प्रतीक माना जाता है" },
        { icon: "🍯", title: "शहद से अभिषेक", desc: "वाणी मधुर होती है, रिश्तों में मिठास आती है" },
        { icon: "🏞️", title: "गंगाजल से अभिषेक", desc: "पाप और नकारात्मकता दूर होने की मान्यता है" }
      ],
      samagri: [
        { icon: "💧", name: "जल" }, { icon: "🥛", name: "दूध" }, { icon: "🍶", name: "दही" },
        { icon: "🧈", name: "घी" }, { icon: "🍯", name: "शहद" }, { icon: "🏞️", name: "गंगाजल" },
        { icon: "🍃", name: "बेलपत्र" }, { icon: "🌸", name: "पुष्प" }, { icon: "🔥", name: "धूप-दीप" },
        { icon: "🪔", name: "कपूर" }, { icon: "🌿", name: "चंदन" }, { icon: "🔴", name: "सिंदूर" }
      ],
      ctaHeading: "रुद्राभिषेक पूजा बुक करें",
      ctaEnglish: "Book Your Rudrabhishek Puja Today",
      ctaDesc: "भगवान शिव की कृपा प्राप्त करने के लिए आज ही रुद्राभिषेक पूजा बुक करें। पंडित शुभम शर्मा जी शुद्ध वैदिक विधि से पूजा सम्पन्न कराते हैं।",
      particleColors: ['#D4A017', '#FF6F00']
    },
    mahamrityunjay: {
      badge: "मोक्षदायक वैदिक मंत्र",
      titleHindi: "महामृत्युंजय जाप",
      titleEnglish: "Mahamrityunjay Jaap",
      description: `महामृत्युंजय जप भगवान शिव का अत्यंत शक्तिशाली और मोक्षदायक मंत्र है। इसे <strong>'रुद्र मंत्र'</strong> भी कहा जाता है। नियमित या विशेष पूजा के दौरान इस मंत्र के जाप से अकाल मृत्यु का भय दूर होता है, आरोग्यता प्राप्त होती है, और सकारात्मक ऊर्जा का संचार होता है।`,
      mantraOm: "ॐ",
      mantraText: "॥ ॐ त्र्यम्बकं यजामहे ॥",
      image: "assets/images/mahamritumjay_jap.jpeg",
      waText: "महामृत्युंजय जाप के बारे में जानकारी चाहिए।",
      whyTitleHindi: "महामृत्युंजय जाप के लाभ",
      whyTitleEnglish: "Benefits of Mahamrityunjay Jaap",
      benefits: [
        { icon: "🏥", title: "आरोग्य और लंबी आयु", titleEn: "Health & Longevity", desc: "नियमित जाप से असाध्य रोगों से मुक्ति मिलती है और स्वास्थ्य बेहतर होता है।" },
        { icon: "🛡️", title: "अकाल मृत्यु से बचाव", titleEn: "Protection from Untimely Death", desc: "इस मंत्र में प्राणों की रक्षा करने की असीम शक्ति मानी जाती है।" },
        { icon: "🧘", title: "मानसिक शांति", titleEn: "Mental Peace & Calm", desc: "भय, तनाव और नकारात्मक विचारों को दूर करने में यह अत्यधिक सहायक है।" }
      ],
      customSection: `
        <div class="ud-mantra-showcase">
          <div class="ud-section-divider ud-reveal">
            <span class="divider-icon">🙏</span>
            <h3 class="divider-title">महामृत्युंजय मंत्र</h3>
            <p class="divider-subtitle">The Sacred Mahamrityunjay Mantra</p>
            <div class="om-divider"><span class="line"></span><span class="om">ॐ</span><span class="line"></span></div>
          </div>
          <div class="ud-mantra-box ud-reveal-scale">
            <span class="mantra-om-top">ॐ</span>
            <p class="mantra-label">पवित्र मंत्र</p>
            <p class="mantra-label-en">Sacred Mantra</p>
            <p class="ud-mantra-text">
              ॐ त्र्यम्बकं यजामहे<br>सुगन्धिं पुष्टिवर्धनम्।<br>उर्वारुकमिव बन्धनान्<br>मृत्योर्मुक्षीय मामृतात्।।
            </p>
            <div class="ud-mantra-divider"><span class="line"></span><span class="dot"></span><span class="line"></span></div>
          </div>
        </div>
      `,
      ctaHeading: "महामृत्युंजय जाप बुक करें",
      ctaEnglish: "Book Your Mahamrityunjay Jaap Today",
      ctaDesc: "भगवान शिव की कृपा और प्राणों की रक्षा के लिए आज ही महामृत्युंजय जाप बुक करें। पंडित शुभम शर्मा जी शुद्ध वैदिक विधि से जाप सम्पन्न कराते हैं।",
      particleColors: ['#D4A017', '#8B0000']
    },
    kaalsarp: {
      badge: "ज्योतिषीय दोष निवारण",
      titleHindi: "काल सर्प दोष पूजा",
      titleEnglish: "Kaal Sarp Dosh Nivaran Puja",
      description: `ज्योतिष में राहु को सर्प का मुख और केतु को उसकी पूंछ माना जाता है। जब सारे ग्रह राहु और केतु की धुरी के एक ही तरफ आ जाते हैं, तब <strong>काल सर्प योग या दोष</strong> बनता है। यह दोष व्यक्ति के जीवन में मानसिक तनाव, बाधाएं और संघर्ष उत्पन्न कर सकता है।`,
      mantraOm: "ॐ",
      mantraText: "॥ ॐ रां राहवे नमः ॥",
      image: "assets/images/kalsarp_dosh.jpeg",
      waText: "काल सर्प दोष पूजा के बारे में जानकारी चाहिए।",
      whyTitleHindi: "मुख्य लक्षण और प्रभाव",
      whyTitleEnglish: "Symptoms & Effects",
      benefits: [
        { icon: "😰", title: "मानसिक तनाव", desc: "अज्ञात भय, बेचैनी और आत्मविश्वास में कमी बनी रहती है।" },
        { icon: "🚧", title: "बाधाएं", desc: "करियर में रुकावट, व्यापार में नुकसान और विवाह में देरी जैसी समस्याएं आती हैं।" },
        { icon: "🏥", title: "स्वास्थ्य समस्याएं", desc: "पेट और त्वचा से संबंधित परेशानियां बनी रहती हैं।" },
        { icon: "⚔️", title: "संघर्ष", desc: "छोटी सफलता के लिए भी अत्यधिक मेहनत करनी पड़ती है।" }
      ],
      resultsTitleHindi: "उपाय और पूजा",
      resultsTitleEnglish: "Remedies & Puja",
      results: [
        { icon: "🐍", title: "नाग पूजा", desc: "काल सर्प दोष निवारण पूजा एवं नागबली अनुष्ठान करवाएं।" },
        { icon: "🕉️", title: "उज्जैन महाकाल क्षेत्र", desc: "श्री महाकाल क्षेत्र उज्जैन को इस पूजा के लिए सबसे प्रसिद्ध और प्रामाणिक स्थान माना जाता है।" },
        { icon: "📿", title: "दान और मंत्र", desc: "चांदी के नाग-नागिन का जोड़ा बहते जल में प्रवाहित करें और शिव मंत्रों का जाप करें।" }
      ],
      ctaHeading: "काल सर्प दोष पूजा बुक करें",
      ctaEnglish: "Book Your Kaal Sarp Dosh Puja Today",
      ctaDesc: "काल सर्प दोष से मुक्ति पाने के लिए आज ही पूजा बुक करें। पंडित शुभम शर्मा जी उज्जैन के प्रसिद्ध महाकाल क्षेत्र में शुद्ध वैदिक विधि से पूजा सम्पन्न कराते हैं।",
      particleColors: ['#4A4A4A', '#D4A017']
    },
    mangaldosh: {
      badge: "मांगलिक दोष शांति",
      titleHindi: "मंगल दोष निवारण",
      titleEnglish: "Mangal Dosh Puja",
      description: `कुंडली में मंगल ग्रह की अशुभ स्थिति से <strong>मंगल दोष</strong> (मांगलिक दोष) बनता है। यह विशेष रूप से विवाह, वैवाहिक जीवन और स्वभाव को प्रभावित करता है। भात पूजा (उज्जैन मंगलनाथ मंदिर में) द्वारा इस दोष की शांति की जाती है।`,
      mantraOm: "ॐ",
      mantraText: "॥ ॐ क्रां क्रीं क्रौं सः भौमाय नमः ॥",
      image: "assets/images/mangalnath.jpeg",
      waText: "मंगल दोष निवारण (भात पूजा) के बारे में जानकारी चाहिए।",
      whyTitleHindi: "मंगल दोष के प्रभाव",
      whyTitleEnglish: "Effects of Mangal Dosh",
      benefits: [
        { icon: "💍", title: "विवाह में विलंब", desc: "विवाह तय होने में रुकावटें आना या विवाह टूट जाना।" },
        { icon: "💔", title: "वैवाहिक कलह", desc: "जीवनसाथी के साथ वैचारिक मतभेद और बेवजह विवाद।" },
        { icon: "😡", title: "क्रोध और स्वभाव", desc: "स्वभाव में उग्रता, क्रोध और जल्दबाजी बढ़ जाना।" },
        { icon: "💼", title: "करियर में अस्थिरता", desc: "कार्यक्षेत्र में बेवजह अड़चनें और कर्ज की स्थिति बनना।" }
      ],
      resultsTitleHindi: "उपाय और शांति",
      resultsTitleEnglish: "Remedies & Shanti",
      results: [
        { icon: "🍚", title: "भात पूजा (उज्जैन)", desc: "उज्जैन स्थित मंगलनाथ मंदिर में पके हुए चावल (भात) से मंगल देव का अभिषेक।" },
        { icon: "🌺", title: "लाल वस्तुओं का दान", desc: "मसूर दाल, लाल वस्त्र, और गुड़ का दान करना लाभकारी होता है।" }
      ],
      ctaHeading: "मंगल दोष शांति पूजा बुक करें",
      ctaEnglish: "Book Your Mangal Dosh Puja",
      ctaDesc: "मंगल दोष की शांति और सुखमय वैवाहिक जीवन के लिए आज ही उज्जैन में भात पूजा बुक करें।",
      particleColors: ['#FF0000', '#D4A017']
    },
    navgrah: {
      badge: "ग्रह दोष निवारण",
      titleHindi: "नवग्रह शांति",
      titleEnglish: "Navgrah Shanti",
      description: `नवग्रह (सूर्य, चंद्र, मंगल, बुध, गुरु, शुक्र, शनि, राहु, और केतु) हमारे जीवन के हर पहलू को नियंत्रित करते हैं। जब ग्रहों की स्थिति प्रतिकूल होती है, तो जीवन में कई परेशानियां आती हैं। <strong>नवग्रह शांति पूजा</strong> सभी नौ ग्रहों को प्रसन्न करने और उनके दुष्प्रभाव को कम करने के लिए की जाती है।`,
      mantraOm: "ॐ",
      mantraText: "॥ ब्रह्मा मुरारिस्त्रिपुरान्तकारी भानुः शशी भूमिसुतो बुधश्च ॥",
      image: "assets/images/navgrah.jpeg",
      waText: "नवग्रह शांति पूजा के बारे में जानकारी चाहिए।",
      whyTitleHindi: "नवग्रह शांति के लाभ",
      whyTitleEnglish: "Benefits of Navgrah Shanti",
      benefits: [
        { icon: "⚖️", title: "जीवन में संतुलन", desc: "सभी ग्रहों की अनुकूलता से जीवन में स्थिरता और संतुलन आता है।" },
        { icon: "🛡️", title: "बाधाओं से रक्षा", desc: "ग्रहों के नकारात्मक प्रभाव और अचानक आने वाली बाधाएं दूर होती हैं।" },
        { icon: "📈", title: "सफलता और उन्नति", desc: "करियर, व्यापार और शिक्षा में आ रही रुकावटें दूर होती हैं।" },
        { icon: "😊", title: "पारिवारिक सुख", desc: "घर-परिवार में कलह समाप्त होती है और सुख-शांति का वास होता है।" }
      ],
      ctaHeading: "नवग्रह शांति पूजा बुक करें",
      ctaEnglish: "Book Your Navgrah Shanti Puja",
      ctaDesc: "ग्रहों के अशुभ प्रभाव को दूर करने और जीवन में सुख-समृद्धि लाने के लिए आज ही नवग्रह शांति अनुष्ठान बुक करें।",
      particleColors: ['#FFFFFF', '#D4A017', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#000000']
    },
    vivah: {
      badge: "वैदिक संस्कार",
      titleHindi: "विवाह संस्कार",
      titleEnglish: "Vivah Sanskar",
      description: `हिन्दू धर्म के 16 संस्कारों में <strong>विवाह संस्कार</strong> सबसे महत्वपूर्ण माना गया है। यह केवल दो व्यक्तियों का ही नहीं, बल्कि दो परिवारों और आत्माओं का पवित्र मिलन है। वैदिक मंत्रों और अग्नि के साक्षित्व में संपन्न विवाह जीवनभर का बंधन बनता है।`,
      mantraOm: "ॐ",
      mantraText: "॥ मङ्गलम् भगवान विष्णुः मङ्गलम् गरुडध्वजः ॥",
      image: "assets/images/vivah.jpeg",
      waText: "विवाह संस्कार सम्पन्न कराने के लिए संपर्क करना है।",
      whyTitleHindi: "विवाह संस्कार के मुख्य चरण",
      whyTitleEnglish: "Key Rituals of Vivah",
      benefits: [
        { icon: "🤝", title: "पाणिग्रहण", desc: "वर द्वारा वधू का हाथ थामना, जीवनभर साथ निभाने का संकल्प।" },
        { icon: "🔥", title: "अग्नि परिणय", desc: "अग्नि देव को साक्षी मानकर पवित्र वेदी के चारों ओर परिक्रमा (फेरे)।" },
        { icon: "👣", title: "सप्तपदी", desc: "विवाह के 7 वचन, जो जीवन के 7 महत्वपूर्ण स्तंभों को दर्शाते हैं।" },
        { icon: "🌸", title: "सिंदूरदान व मंगलसूत्र", desc: "वर द्वारा वधू की मांग में सिंदूर भरना और मंगलसूत्र पहनाना।" }
      ],
      ctaHeading: "विवाह संस्कार बुक करें",
      ctaEnglish: "Book Pandit Ji for Vivah",
      ctaDesc: "शास्त्रीय और वैदिक विधि-विधान से विवाह संपन्न कराने के लिए हमारे अनुभवी पंडित जी से संपर्क करें।",
      particleColors: ['#FF1493', '#D4A017']
    },
    grihpravesh: {
      badge: "शुभ गृह प्रवेश",
      titleHindi: "गृह प्रवेश",
      titleEnglish: "Griha Pravesh",
      description: `नये घर में प्रवेश करने से पहले <strong>गृह प्रवेश पूजा</strong> करना अत्यंत शुभ और आवश्यक माना जाता है। इससे घर में उपस्थित किसी भी प्रकार की नकारात्मक ऊर्जा और वास्तु दोष का नाश होता है तथा देवी-देवताओं का आशीर्वाद प्राप्त होता है।`,
      mantraOm: "ॐ",
      mantraText: "॥ ॐ वास्तोष्पते प्रति जानीह्यस्मान् ॥",
      image: "assets/images/grah_pravesh.jpeg",
      waText: "गृह प्रवेश एवं वास्तु शांति पूजा बुक करनी है।",
      whyTitleHindi: "गृह प्रवेश पूजा के लाभ",
      whyTitleEnglish: "Benefits of Griha Pravesh",
      benefits: [
        { icon: "🏠", title: "वास्तु दोष निवारण", desc: "घर के निर्माण में अनजाने में हुए वास्तु दोष शांत होते हैं।" },
        { icon: "✨", title: "सकारात्मक ऊर्जा", desc: "नकारात्मक शक्तियों का नाश होता है और घर में शुभ ऊर्जा का प्रवेश होता है।" },
        { icon: "💰", title: "सुख-समृद्धि", desc: "परिवार के सदस्यों को स्वास्थ्य, धन और ऐश्वर्य की प्राप्ति होती है।" },
        { icon: "🛡️", title: "सुरक्षा कवच", desc: "ईश्वर की कृपा से घर और परिवार सुरक्षित रहते हैं।" }
      ],
      samagri: [
        { icon: "🥥", name: "कलश व नारियल" }, { icon: "🌾", name: "चावल व गेहूं" }, { icon: "🥭", name: "आम के पत्ते" },
        { icon: "🌸", name: "पुष्पमाला" }, { icon: "🔥", name: "हवन सामग्री" }, { icon: "🪙", name: "स्वर्ण/रजत सिक्का" },
        { icon: "🍯", name: "पंचामृत" }, { icon: "🐄", name: "गाय का दूध" }
      ],
      ctaHeading: "गृह प्रवेश पूजा बुक करें",
      ctaEnglish: "Book Griha Pravesh Puja",
      ctaDesc: "अपने नए आशियाने में सुख-समृद्धि के साथ प्रवेश करने के लिए पूर्ण वैदिक विधि से वास्तु शांति और गृह प्रवेश पूजा बुक करें।",
      particleColors: ['#00FF00', '#D4A017']
    },
    havan: {
      badge: "यज्ञ एवं अनुष्ठान",
      titleHindi: "हवन एवं अनुष्ठान",
      titleEnglish: "Havan & Rituals",
      description: `सनातन धर्म में अग्नि को देवता और मनुष्य के बीच का दूत माना गया है। <strong>हवन (यज्ञ)</strong> के माध्यम से देवी-देवताओं को आहुति प्रदान की जाती है। यह पर्यावरण को शुद्ध करता है और वायुमंडल में औषधीय तत्वों का संचार करता है।`,
      mantraOm: "ॐ",
      mantraText: "॥ ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं ॥",
      image: "assets/images/hawan.jpeg",
      waText: "हवन एवं वैदिक अनुष्ठान के बारे में जानकारी चाहिए।",
      whyTitleHindi: "हवन का महत्व",
      whyTitleEnglish: "Importance of Havan",
      benefits: [
        { icon: "🌿", title: "पर्यावरण शुद्धि", desc: "हवन की औषधीय समिधा और घी के धुएं से वायुमंडल शुद्ध और रोगाणुमुक्त होता है।" },
        { icon: "🙏", title: "देव कृपा", desc: "अग्नि देव के माध्यम से हमारा समर्पण सीधे इष्ट देव तक पहुंचता है।" },
        { icon: "🧘", title: "मानसिक शांति", desc: "हवन के मंत्रोच्चार से घर में आध्यात्मिक ऊर्जा और शांति फैलती है।" },
        { icon: "🛡️", title: "नकारात्मकता का नाश", desc: "किसी भी प्रकार की बुरी नजर या तंत्र बाधा का प्रभाव समाप्त होता है।" }
      ],
      ctaHeading: "हवन अनुष्ठान बुक करें",
      ctaEnglish: "Book Havan Ritual",
      ctaDesc: "जन्मदिन, वर्षगांठ, सफलता या किसी भी शुभ अवसर पर घर/कार्यालय में हवन करवाने हेतु संपर्क करें।",
      particleColors: ['#FF6F00', '#FF4500']
    }
  };

  const universalDetail = document.getElementById('universalDetail');
  const udCloseBtn = document.getElementById('udCloseBtn');
  const udParticles = document.getElementById('udParticles');
  
  if (!universalDetail) return;

  let isExpanded = false;
  let currentCard = null;
  let activeParticleColors = ['#D4A017'];

  // Setup generic click listener for all cards
  const cards = document.querySelectorAll('.service-card[data-detail]');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const detailKey = card.getAttribute('data-detail');
      
      if (isExpanded && currentCard === card) {
        closeDetail();
      } else {
        if (isExpanded) {
          closeDetail(false);
          setTimeout(() => openDetail(card, detailKey), 400); // Wait for transition
        } else {
          openDetail(card, detailKey);
        }
      }
    });
  });

  function openDetail(card, detailKey) {
    const data = serviceData[detailKey];
    if (!data) return;

    currentCard = card;
    activeParticleColors = data.particleColors || ['#D4A017'];

    populateData(data);

    isExpanded = true;
    card.classList.add('sd-active');
    universalDetail.classList.add('expanded');

    // Smooth scroll
    setTimeout(() => {
      const offset = universalDetail.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }, 300);

    setTimeout(() => {
      triggerReveals();
    }, 600);

    createParticles();
  }

  function closeDetail(scrollBack = true) {
    if (!isExpanded) return;
    
    isExpanded = false;
    if (currentCard) currentCard.classList.remove('sd-active');
    universalDetail.classList.remove('expanded');

    resetReveals();

    if (udParticles) {
      udParticles.innerHTML = '';
    }

    if (scrollBack) {
      setTimeout(() => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          const offset = servicesSection.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }
      }, 200);
    }
    
    currentCard = null;
  }

  if (udCloseBtn) {
    udCloseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeDetail();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isExpanded) closeDetail();
  });

  // Populate HTML dynamically
  function populateData(data) {
    universalDetail.querySelector('.ud-badge').innerHTML = `<span class="badge-dot"></span>${data.badge}`;
    universalDetail.querySelector('.ud-main-title').textContent = data.titleHindi;
    universalDetail.querySelector('.ud-english-title').textContent = data.titleEnglish;
    universalDetail.querySelector('.ud-description').innerHTML = data.description;
    universalDetail.querySelector('.ud-mantra-om').textContent = data.mantraOm;
    universalDetail.querySelector('.ud-mantra-text').textContent = data.mantraText;
    
    const heroImg = universalDetail.querySelector('.ud-hero-image img');
    // For local testing if assets are not present
    heroImg.src = data.image;
    heroImg.onerror = () => { heroImg.src = 'assets/images/rudra_abhishek.jpeg'; }; // fallback
    heroImg.alt = data.titleHindi;
    
    const waLinkHero = universalDetail.querySelector('.ud-cta-row .btn-secondary');
    waLinkHero.href = `https://wa.me/919131606735?text=${encodeURIComponent('🙏 नमस्कार पंडित जी, मुझे ' + data.waText)}`;

    // Custom sections (like MMJ Mantra)
    const customSectionContainer = universalDetail.querySelector('#udCustomSection');
    if (data.customSection) {
      customSectionContainer.innerHTML = data.customSection;
      customSectionContainer.style.display = 'block';
    } else {
      customSectionContainer.innerHTML = '';
      customSectionContainer.style.display = 'none';
    }

    // Benefits
    universalDetail.querySelector('#udWhyTitle').textContent = data.whyTitleHindi;
    universalDetail.querySelector('#udWhySubtitle').textContent = data.whyTitleEnglish;
    
    const benefitsGrid = universalDetail.querySelector('#udBenefitsGrid');
    benefitsGrid.innerHTML = '';
    data.benefits.forEach((b, i) => {
      let content = '';
      if (b.title) {
        content = `
          <h4 class="benefit-title">${b.title}</h4>
          ${b.titleEn ? '<p class="benefit-title-en">' + b.titleEn + '</p>' : ''}
          <p class="benefit-desc">${b.desc}</p>
        `;
      } else {
        content = `<p class="benefit-text">${b.text}</p>`;
      }
      benefitsGrid.innerHTML += `
        <div class="ud-benefit-card ud-reveal ud-stagger-${(i%8)+1}">
          <span class="benefit-icon">${b.icon}</span>
          ${content}
        </div>
      `;
    });

    // Results (Optional)
    const resultsContainer = universalDetail.querySelector('#udResultsContainer');
    if (data.results) {
      universalDetail.querySelector('#udResultsTitle').textContent = data.resultsTitleHindi;
      universalDetail.querySelector('#udResultsSubtitle').textContent = data.resultsTitleEnglish;
      const resultsGrid = universalDetail.querySelector('#udResultsGrid');
      resultsGrid.innerHTML = '';
      data.results.forEach((r, i) => {
        let isResultClass = r.title && r.desc && !data.benefits[0].title; // rough heuristic to match old styling
        resultsGrid.innerHTML += `
          <div class="ud-result-card ud-reveal ud-stagger-${(i%8)+1}">
            ${isResultClass ? `
              <div class="result-header"><span class="result-icon">${r.icon}</span><span class="result-substance">${r.title}</span></div>
              <p class="result-benefit">${r.desc}</p>
            ` : `
              <span class="remedy-icon">${r.icon}</span>
              <h4 class="remedy-title">${r.title}</h4>
              <p class="remedy-desc">${r.desc}</p>
            `}
          </div>
        `;
      });
      resultsContainer.style.display = 'block';
    } else {
      resultsContainer.style.display = 'none';
    }

    // Samagri (Optional)
    const samagriContainer = universalDetail.querySelector('#udSamagriContainer');
    if (data.samagri) {
      const samagriGrid = universalDetail.querySelector('#udSamagriGrid');
      samagriGrid.innerHTML = '';
      data.samagri.forEach((s) => {
        samagriGrid.innerHTML += `<div class="samagri-chip"><span class="chip-icon">${s.icon}</span> ${s.name}</div>`;
      });
      samagriContainer.style.display = 'block';
    } else {
      samagriContainer.style.display = 'none';
    }

    // CTA
    universalDetail.querySelector('.ud-bottom-cta .cta-mantra').textContent = data.mantraText;
    universalDetail.querySelector('.ud-bottom-cta .cta-heading').textContent = data.ctaHeading;
    universalDetail.querySelector('.ud-bottom-cta .cta-english').textContent = data.ctaEnglish;
    universalDetail.querySelector('.ud-bottom-cta .cta-desc').textContent = data.ctaDesc;
    
    const waLinkCta = universalDetail.querySelector('.ud-bottom-cta .btn-secondary');
    waLinkCta.href = `https://wa.me/919131606735?text=${encodeURIComponent('🙏 नमस्कार पंडित जी, मुझे ' + data.waText)}`;
  }

  // ==================== REVEAL ANIMATIONS ====================
  function triggerReveals() {
    const reveals = universalDetail.querySelectorAll('.ud-reveal, .ud-reveal-left, .ud-reveal-right, .ud-reveal-scale');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('ud-visible');
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    reveals.forEach(el => observer.observe(el));

    reveals.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setTimeout(() => el.classList.add('ud-visible'), 100);
      }
    });

    // Hover glows setup after render
    const cards = universalDetail.querySelectorAll('.ud-benefit-card, .ud-result-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', function () {
        this.style.boxShadow = '0 15px 40px rgba(0,0,0,0.3), 0 0 30px rgba(212,160,23,0.12)';
      });
      card.addEventListener('mouseleave', function () {
        this.style.boxShadow = '';
      });
    });
    
    const samagriChips = universalDetail.querySelectorAll('.samagri-chip');
    samagriChips.forEach((chip, index) => {
      chip.style.transitionDelay = `${index * 0.05}s`;
    });
  }

  function resetReveals() {
    const reveals = universalDetail.querySelectorAll('.ud-reveal, .ud-reveal-left, .ud-reveal-right, .ud-reveal-scale, .ud-visible');
    reveals.forEach(el => el.classList.remove('ud-visible'));
  }

  // ==================== PARTICLES ====================
  function createParticles() {
    if (!udParticles) return;
    udParticles.innerHTML = '';
    const count = window.innerWidth < 768 ? 12 : 25;
    
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.classList.add('ud-particle');
      const size = Math.random() * 3 + 1;
      const left = Math.random() * 100;
      const duration = Math.random() * 12 + 10;
      const delay = Math.random() * 8;
      
      const color = activeParticleColors[Math.floor(Math.random() * activeParticleColors.length)];

      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${left}%;
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
        background: ${color};
        box-shadow: 0 0 6px ${color}80;
      `;
      udParticles.appendChild(particle);
    }
  }
});
