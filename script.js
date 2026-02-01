/**
 * Global Language Data
 * Միավորված բոլոր էջերի թարգմանությունները
 */
const langData = {
    hy: {
        // Modal
        "m-title": "Հանրային Օֆերտա",
        "m-desc": "<strong>Հարգելի օգտատեր,</strong><br><br>Սույն փաստաթուղթը հանդիսանում է Ընկերության կողմից տրամադրվող ծառայությունների և ապրանքների վերաբերյալ հրապարակային առաջարկ (օֆերտա)՝ համաձայն <strong>ՀՀ Քաղաքացիական օրենսգրքի 453-462 հոդվածների</strong>։<br><br><span class='highlight-text'>Օֆերտայի ընդունում համարվող գործողություններ՝</span><ul class='modal-list'><li>Կայք մուտք գործելը կամ օգտագործելը</li><li>Պատվերի ձևավորում՝ անկախ վճարելու հանգամանքից</li><li>Կայքում ցանկացած կոճակի սեղմում, որը տանում է պատվերի հաստատմանը</li></ul><br>Սույնով հաստատում եմ Պայմանագրի դրույթներին, Կանոններին և Պայմաններին լիարժեք ծանոթանալու և դրանք անվերապահորեն ընդունելու հանգամանքը:",
        "m-accept": "ՀԱՍՏԱՏԵԼ",
        "m-decline": "Մերժել",

        // Navigation
        "nav-home": "Գլխավոր",
        "nav-pricing": "Սակագներ",
        "nav-services": "Ծառայություններ",
        "nav-about": "Մեր մասին",
        "nav-contact": "Կապ",

        // Hero
        "h-p1": "Գլոբալ ֆինանսական պրոցեսինգային էկոհամակարգ միջազգային բիզնեսի համար:",
        "h-p2": "Մենք կառուցում ենք անվտանգ և թափանցիկ կամուրջներ աշխարհի ցանկացած կետում:",

        // Pricing
        "p-desc": "Միջազգային լիարժեք պրոցեսինգ",
        "p-1": "Տեխնիկական սպասարկում",
        "p-2": "Գործարքների մշակում",
        "p-3": "Ռիսկերի կառավարում",
        "p-4": "Հաշվետվություն",
        "p-note": "* Վերջնական պայմանները անհատական են:",

        // FAQ
        "faq-title": "Հաճախ տրվող հարցեր",
        "f1-q": "Որքա՞ն ժամանակ է տևում փոխանցումը",
        "f1-a": "Սկսած ակնթարթայինից մինչև 1 աշխատանքային օր։",
        "f2-q": "Ո՞ւմ համար են ծառայությունները",
        "f2-a": "Միջազգային բիզնեսների, IT ընկերությունների և անհատ ձեռներեցների համար:",

        // Footer
        "f-contact": "Կոնտակտներ",
        "f-country": "ՀՀ, ք. Երևան",
        "l1-t": "Compliance",
        "f-legal": "Իրավական",
        "footer-rights": "Բոլոր իրավունքները պաշտպանված են"
    },
    ru: {
        // Modal
        "m-title": "Публичная Оферта",
        "m-desc": "<strong>Уважаемый пользователь,</strong><br><br>Данный документ является публичным предложением (офертой) услуг и товаров Компании в соответствии со <strong>статьями 453-462 Гражданского кодекса РА</strong>.<br><br><span class='highlight-text'>Действия, считающиеся принятием оферты:</span><ul class='modal-list'><li>Вход или использование сайта</li><li>Оформление заказа, независимо от факта оплаты</li><li>Нажатие любой кнопки на сайте, ведущей к подтверждению заказа</li></ul><br>Настоящим подтверждаю полное ознакомление и безоговорочное принятие положений Договора, Правил и Условий.",
        "m-accept": "ПОДТВЕРДИТЬ",
        "m-decline": "Отклонить",

        // Navigation
        "nav-home": "Главная",
        "nav-pricing": "Тарифы",
        "nav-services": "Услуги",
        "nav-about": "О нас",
        "nav-contact": "Контакты",

        // Hero
        "h-p1": "Глобальная финансовая процессинговая экосистема для международного бизнеса.",
        "h-p2": "Мы строим безопасные и прозрачные мосты в любую точку мира.",

        // Pricing
        "p-desc": "Полный международный процессинг",
        "p-1": "Техническая поддержка",
        "p-2": "Обработка транзакций",
        "p-3": "Управление рисками",
        "p-4": "Отчетность",
        "p-note": "* Конечные условия индивидуальны.",

        // FAQ
        "faq-title": "Часто задаваемые вопросы",
        "f1-q": "Сколько времени занимает перевод?",
        "f1-a": "От мгновенного до 1 рабочего дня.",
        "f2-q": "Для кого предназначены услуги?",
        "f2-a": "Для международного бизнеса, IT-компаний и индивидуальных предпринимателей.",

        // Footer
        "f-contact": "Контакты",
        "f-country": "РА, г. Ереван",
        "l1-t": "Комплаенс",
        "f-legal": "Юридическая информация",
        "footer-rights": "Все права защищены"
    }
};

/**
 * Language Switcher
 */
function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    
    // Update text content
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (langData[lang][key]) el.innerText = langData[lang][key];
    });

    // Update placeholders
    document.querySelectorAll('[data-placeholder]').forEach(el => {
        const key = el.getAttribute('data-placeholder');
        if (langData[lang][key]) el.placeholder = langData[lang][key];
    });

    // Update active button UI
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.innerText.toLowerCase() === lang);
    });
}

/**
 * Menu Toggle (Burger)
 */
function toggleMenu() {
    const nav = document.getElementById("mobileNav");
    const spans = document.querySelectorAll('.burger span');
    
    nav.classList.toggle("active");
    
    if (nav.classList.contains("active")) {
        if(spans.length >= 3) {
            spans[0].style.transform = "rotate(45deg) translate(6px, 6px)";
            spans[1].style.opacity = "0";
            spans[2].style.transform = "rotate(-45deg) translate(6px, -6px)";
        }
    } else {
        spans.forEach(s => { s.style.transform = "none"; s.style.opacity = "1"; });
    }
}

/**
 * Terms and Modal Logic
 */
function acceptTerms() {
    const modal = document.getElementById('termsModal');
    if(modal) {
        modal.style.opacity = '0';
        setTimeout(() => { modal.style.display = 'none'; }, 500);
    }
    localStorage.setItem('termsAccepted', 'true');
}

function declineTerms() {
    window.location.href = 'https://google.com';
}

function toggleSubmitBtn() {
    const checkbox = document.getElementById('termsCheckbox');
    const btn = document.getElementById('submitBtn');
    if (checkbox && btn) {
        btn.disabled = !checkbox.checked;
        btn.classList.toggle('disabled', !checkbox.checked);
    }
}

/**
 * FAQ Toggle
 */
function toggleFaq(item) {
    item.classList.toggle('active');
    const answer = item.querySelector('.faq-answer');
    if(answer) {
        answer.style.maxHeight = item.classList.contains('active') ? answer.scrollHeight + "px" : null;
    }
}

/**
 * Init on Load
 */
window.onload = () => {
    // Check terms
    if (localStorage.getItem('termsAccepted')) {
        const modal = document.getElementById('termsModal');
        if(modal) modal.style.display = 'none';
    }
    
    // Set initial language
    const savedLang = localStorage.getItem('lang') || 'hy';
    setLanguage(savedLang);
};