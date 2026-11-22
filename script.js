
// CARRINHO
let carrinho = [];

// AUXILIAR PARA CADASTRAR PERFUMES (gera o caminho da imagem a partir do nome)
function slugImagem(texto) {
    return texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

function perfume(nome, preco, genero, categoria, descricao) {
    return {
        nome: nome,
        preco: preco,
        imagem: "imagens/perfumes/" + slugImagem(nome) + ".jpg",
        categoria: categoria,
        genero: genero,
        descricao: descricao
    };
}

// PRODUTOS
const produtos = [
    {
        nome: "Sahari Sultana Halima EDP 100ml",
        preco: 239.90,
        imagem: "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mhdi0ye3l4ate4",
        categoria: "principais",
        genero: "feminino",
        descricao: "Uma fragrância feminina de assinatura árabe, pensada para presença marcante e elegância atemporal."
    },
    {
        nome: "kit perfumação com 5 Body Splash Xerosa",
        preco: 150.30,
        imagem: "https://www.salonline.com.br/ccstore/v1/images/?source=/file/v8372869211055809370/products/33653.jpg&height=940&width=940",
        categoria: "principais"
    },
    {
        nome: "Kit Completo SOS Cachos De Repente Pronta",
        preco: 160.20,
        imagem: "https://www.salonline.com.br/ccstore/v1/images/?source=/file/v5155328260216366914/products/32720.jpg&height=940&width=940",
        categoria: "principais"
    },
    {
        nome: "Kit Tratamento e Finalização Cachos Ostentação",
        preco: 148.95,
        imagem: "https://www.salonline.com.br/ccstore/v1/images/?source=/file/v883330640618203797/products/33691.jpg&height=940&width=940",
        categoria: "novidades"
    },
    {
        nome: "Kit 2 Cremes para Pentear Cachos de Sereia e Cachos à Prova",
        preco: 75.60,
        imagem: "https://www.salonline.com.br/ccstore/v1/images/?source=/file/v5125349893167266216/products/33678.jpg&height=940&width=940",
        categoria: "novidades"
    },
    {
        nome: "Duplinha de Kits Xêrosa Body Splash e Creme para Pentear",
        preco: 160.20,
        imagem: "https://www.salonline.com.br/ccstore/v1/images/?source=/file/v1187472468471536226/products/33706.jpg&height=940&width=940",
        categoria: "novidades"
    },
    {
        nome: "Kit Definição Natural com Mousse e Creme para Pentear",
        preco: 64.35,
        imagem: "https://www.salonline.com.br/ccstore/v1/images/?source=/file/v5155328260216366914/products/32720.jpg&height=940&width=940",
        categoria: "maisVendidos"
    },
    {
        nome: "Kit Completo de Definição Natural + De Repente Pronta",
        preco: 191.70,
        imagem: "https://www.salonline.com.br/ccstore/v1/images/?source=/file/v6244206327497156262/products/33408_.jpg&height=940&width=940",
        categoria: "maisVendidos"
    },
    {
        nome: "Kit Definição Natural com Mousse, Óleo Booster, Máscara e Óleo de Tratamento",
        preco: 106.20,
        imagem: "https://www.salonline.com.br/ccstore/v1/images/?source=/file/v7013296204912457392/products/33728.png&height=940&width=940",
        categoria: "maisVendidos"
    },

    // ================= LATTAFA =================
    perfume("Lattafa Asad EDP 100ml", 229.00, "masculino", "maisVendidos", "Intenso e envolvente: pimenta-preta, abacaxi, tabaco, baunilha e patchouli compõem um masculino de grande projeção."),
    perfume("Lattafa Asad Bourbon EDP 100ml", 239.00, "masculino", "novidades", "Releitura gourmand e amadeirada de Asad, com calor aveludado e acabamento sofisticado."),
    perfume("Lattafa Asad Elixir EDP 100ml", 259.00, "masculino", "novidades", "Versão mais concentrada de Asad, para quem busca presença noturna e rastro duradouro."),
    perfume("Lattafa Khamrah EDP 100ml", 289.00, "unissex", "maisVendidos", "Canela, tâmara, praliné, baunilha e fava tonka em um oriental gourmand caloroso e sedutor."),
    perfume("Lattafa Khamrah Qahwa EDP 100ml", 299.00, "unissex", "maisVendidos", "Café, cardamomo, canela e baunilha em uma interpretação luxuosa e aconchegante."),
    perfume("Lattafa Yara EDP 100ml", 199.00, "feminino", "maisVendidos", "Orquídea, heliotrópio, frutas tropicais, baunilha e almíscar em um floral doce, suave e delicado."),
    perfume("Lattafa Yara Candy EDP 100ml", 199.00, "feminino", "novidades", "Da linha Yara: doce, frutado e luminoso, com personalidade jovem e romântica."),
    perfume("Lattafa Yara Tous EDP 100ml", 199.00, "feminino", "novidades", "Da linha Yara: delicadeza feminina em um perfil suave, confortável e envolvente."),
    perfume("Lattafa Yara Moi EDP 100ml", 199.00, "feminino", "principais", "Da linha Yara: charme leve e cremoso, para o dia a dia com um toque de sofisticação."),
    perfume("Lattafa Raghba EDP 100ml", 189.00, "masculino", "principais", "Baunilha, âmbar, oud, sândalo e incenso: um oriental masculino quente e marcante."),
    perfume("Lattafa Raghba Wood Intense EDP 100ml", 209.00, "masculino", "novidades", "Releitura amadeirada e intensa de Raghba, com profundidade e elegância noturna."),
    perfume("Lattafa Oud Mood EDP 100ml", 249.00, "unissex", "principais", "Um oud refinado e acolhedor, que traduz a tradição olfativa do Oriente com sofisticação."),
    perfume("Lattafa Oud Mood Elixir EDP 100ml", 269.00, "unissex", "novidades", "Versão mais profunda de Oud Mood, com acordes escuros, amadeirados e sedutores."),
    perfume("Lattafa Eclaire EDP 100ml", 219.00, "feminino", "maisVendidos", "Caramelo, leite e baunilha em uma fragrância feminina gourmand, cremosa e irresistível."),
    perfume("Lattafa Haya EDP 100ml", 189.00, "feminino", "principais", "Feminina e elegante, com perfil suave e envolvente para uso diário."),
    perfume("Lattafa Hayaati EDP 100ml", 189.00, "masculino", "principais", "Masculino de caráter moderno, com frescor elegante e boa versatilidade."),
    perfume("Lattafa Qaed Al Fursan EDP 90ml", 169.00, "unissex", "principais", "Frutado e luminoso, com assinatura marcante e personalidade vibrante."),
    perfume("Lattafa Mayar EDP 100ml", 199.00, "feminino", "principais", "Floral e delicado, uma fragrância feminina de charme discreto e sofisticado."),
    perfume("Lattafa Ana Abiyedh EDP 60ml", 149.00, "unissex", "principais", "Um perfil limpo e luminoso, com sensação de pureza e elegância."),
    perfume("Lattafa Fakhar Lattafa Black EDP 100ml", 189.00, "masculino", "maisVendidos", "Masculino sofisticado e marcante, pensado para quem valoriza presença e distinção."),
    perfume("Lattafa Fakhar Lattafa Rose EDP 100ml", 189.00, "feminino", "principais", "Feminino floral e elegante, com delicadeza e acabamento luxuoso."),
    perfume("Lattafa Bade'e Al Oud Honor & Glory EDP 100ml", 229.00, "unissex", "novidades", "Cremoso e sofisticado, da linha Bade'e Al Oud, com nobreza oriental."),
    perfume("Lattafa Bade'e Al Oud Amethyst EDP 100ml", 229.00, "unissex", "principais", "Da linha Bade'e Al Oud: elegância árabe em uma composição envolvente e refinada."),
    perfume("Lattafa Bade'e Al Oud Sublime EDP 100ml", 229.00, "unissex", "principais", "Da linha Bade'e Al Oud: sofisticação oriental com profundidade e brilho."),
    perfume("Lattafa Bade'e Al Oud Oud for Glory EDP 100ml", 239.00, "unissex", "maisVendidos", "Açafrão, noz-moscada, oud e âmbar: um oriental opulento, de forte identidade árabe."),
    perfume("Lattafa Teriaq EDP 100ml", 219.00, "unissex", "novidades", "Uma fragrância de caráter oriental, envolvente e de grande presença."),
    perfume("Lattafa Maahir EDP 100ml", 169.00, "masculino", "principais", "Masculino versátil, com elegância discreta para o dia a dia."),
    perfume("Lattafa Her Confession EDP 100ml", 189.00, "feminino", "novidades", "Feminina e sedutora, com acabamento doce e delicado."),
    perfume("Lattafa Sakeena EDP 100ml", 189.00, "feminino", "principais", "Charme feminino em uma composição suave, serena e sofisticada."),
    perfume("Lattafa Atheeri EDP 100ml", 199.00, "unissex", "principais", "Perfil oriental acolhedor, que valoriza a tradição da perfumaria árabe."),
    perfume("Lattafa Mohra Silky Rose EDP 100ml", 219.00, "feminino", "novidades", "Rosa em tom aveludado e feminino, com delicadeza e elegância."),
    perfume("Lattafa Eternal Oud EDP 100ml", 229.00, "unissex", "principais", "Oud intenso e sofisticado, para quem aprecia a profundidade da perfumaria oriental."),
    perfume("Lattafa Ameeri EDP 100ml", 199.00, "masculino", "principais", "Masculino de postura nobre, com perfil elegante e duradouro."),
    perfume("Lattafa Musamam Black Intense EDP 100ml", 189.00, "unissex", "principais", "Intenso e misterioso, um perfil escuro para ocasiões noturnas."),
    perfume("Lattafa Hayaati Gold Elixir EDP 100ml", 209.00, "masculino", "novidades", "Versão mais rica de Hayaati, com acabamento luxuoso e rastro marcante."),

    // ================= AFNAN =================
    perfume("Afnan 9PM EDP 100ml", 329.00, "masculino", "maisVendidos", "Maçã, canela, lavanda, baunilha, fava tonka e âmbar: um masculino sedutor para as noites."),
    perfume("Afnan 9PM Rebel EDP 100ml", 339.00, "masculino", "novidades", "Da linha 9PM, com personalidade ousada e perfil noturno envolvente."),
    perfume("Afnan 9AM EDP 100ml", 319.00, "unissex", "principais", "Fresco e moderno, uma assinatura elegante para começar o dia."),
    perfume("Afnan 9AM Dive EDP 100ml", 329.00, "unissex", "novidades", "Da linha 9AM, com frescor energizante e acabamento sofisticado."),
    perfume("Afnan Supremacy Not Only Intense EDP 100ml", 359.00, "masculino", "maisVendidos", "Masculino intenso e de alta projeção, para quem deseja deixar marca por onde passa."),
    perfume("Afnan Supremacy Silver EDP 100ml", 349.00, "masculino", "principais", "Frescor refinado e postura elegante em uma assinatura masculina moderna."),
    perfume("Afnan Turathi Blue EDP 90ml", 299.00, "unissex", "maisVendidos", "Da linha Turathi: elegância árabe contemporânea, com frescor sofisticado."),
    perfume("Afnan Turathi Brown EDP 90ml", 299.00, "unissex", "principais", "Da linha Turathi: calor e profundidade em um perfil elegante e acolhedor."),
    perfume("Afnan Turathi Electric EDP 90ml", 299.00, "unissex", "principais", "Da linha Turathi: vibrante e moderno, com personalidade marcante."),
    perfume("Afnan Modest Pour Femme EDP 100ml", 289.00, "feminino", "principais", "Feminina e refinada, com delicadeza e acabamento elegante."),
    perfume("Afnan Rare Carbon EDP 100ml", 349.00, "masculino", "novidades", "Masculino sofisticado, de caráter moderno e presença discreta."),

    // ================= ARMAF =================
    perfume("Armaf Club de Nuit Intense Man EDT 105ml", 429.00, "masculino", "maisVendidos", "Limão, abacaxi, groselha-preta, bétula, âmbar e almíscar: um masculino icônico e intenso."),
    perfume("Armaf Club de Nuit Sillage EDP 105ml", 449.00, "masculino", "novidades", "Da linha Club de Nuit: elegância marcante com rastro de grande presença."),
    perfume("Armaf Club de Nuit Untold EDP 105ml", 449.00, "unissex", "novidades", "Da linha Club de Nuit: sofisticação intensa para ocasiões especiais."),
    perfume("Armaf Club de Nuit Milestone EDP 105ml", 429.00, "unissex", "principais", "Da linha Club de Nuit: moderno e sofisticado, com perfil versátil."),
    perfume("Armaf Club de Nuit Iconic EDP 105ml", 439.00, "masculino", "principais", "Da linha Club de Nuit: caráter marcante e acabamento luxuoso."),
    perfume("Armaf Club de Nuit Woman EDP 105ml", 389.00, "feminino", "principais", "Feminina e elegante, da linha Club de Nuit, para presença noturna sofisticada."),
    perfume("Armaf Club de Nuit Urban Elixir EDP 105ml", 459.00, "masculino", "principais", "Da linha Club de Nuit: perfil urbano, intenso e de longa duração."),
    perfume("Armaf Odyssey Mandarin Sky EDP 100ml", 329.00, "masculino", "principais", "Fresco e vibrante, um masculino moderno com elegância luminosa."),
    perfume("Armaf Odyssey Homme EDP 100ml", 319.00, "masculino", "principais", "Masculino de assinatura contemporânea, com sofisticação e boa versatilidade."),
    perfume("Armaf Tres Nuit EDP 100ml", 339.00, "masculino", "principais", "Fragrância masculina de perfil fresco e elegante, ideal para o dia a dia."),
    perfume("Armaf Hunter Intense EDP 100ml", 329.00, "masculino", "principais", "Masculino de presença forte e acabamento intenso, para quem gosta de se destacar."),
    perfume("Armaf Tag-Him EDP 100ml", 279.00, "masculino", "principais", "Elegância masculina clássica, com perfil limpo e versátil."),
    perfume("Armaf Vanity Femme Essence EDP 100ml", 329.00, "feminino", "novidades", "Feminina e luxuosa, com acabamento sofisticado e envolvente."),
    perfume("Armaf Derby Club House EDT 100ml", 269.00, "masculino", "principais", "Masculino clássico e elegante, com ar refinado de clube."),
    perfume("Armaf Le Parfait Pour Femme EDP 100ml", 299.00, "feminino", "principais", "Feminina e sofisticada, com delicadeza e charme atemporal."),

    // ================= MAISON ALHAMBRA =================
    perfume("Maison Alhambra Jean Lowe Immortel EDP 100ml", 239.00, "masculino", "maisVendidos", "Masculino de presença elegante e rastro marcante, com acabamento refinado."),
    perfume("Maison Alhambra Jean Lowe Ombre EDP 100ml", 239.00, "masculino", "novidades", "Perfil masculino profundo e misterioso, para noites sofisticadas."),
    perfume("Maison Alhambra Salvo EDP 100ml", 219.00, "masculino", "principais", "Masculino fresco e moderno, com elegância natural e versatilidade."),
    perfume("Maison Alhambra Salvo Elixir EDP 100ml", 239.00, "masculino", "novidades", "Versão mais intensa de Salvo, com profundidade e presença."),
    perfume("Maison Alhambra Delilah EDP 100ml", 219.00, "feminino", "principais", "Feminina e sedutora, com charme sofisticado e envolvente."),
    perfume("Maison Alhambra Kismet EDP 100ml", 209.00, "feminino", "principais", "Feminina e delicada, com perfil romântico e elegante."),
    perfume("Maison Alhambra Kismet Angel EDP 100ml", 209.00, "feminino", "novidades", "Da linha Kismet: leveza e doçura em uma assinatura feminina encantadora."),
    perfume("Maison Alhambra Philos Centro EDP 100ml", 219.00, "unissex", "principais", "Unissex de perfil moderno, com sofisticação discreta e elegante."),
    perfume("Maison Alhambra Philos Pura EDP 100ml", 219.00, "unissex", "principais", "Unissex limpo e luminoso, com acabamento refinado."),
    perfume("Maison Alhambra Tobacco Touch EDP 100ml", 219.00, "masculino", "principais", "Masculino de caráter quente e envolvente, com acorde de tabaco."),

    // ================= PARIS CORNER =================
    perfume("Paris Corner Emir Sacred Wood EDP 100ml", 259.00, "unissex", "novidades", "Amadeirado e sofisticado, com perfil sereno e elegante."),

    // ================= RASASI =================
    perfume("Rasasi Hawas For Him EDP 100ml", 389.00, "masculino", "maisVendidos", "Aquático e frutado, um masculino vibrante, refrescante e de grande projeção."),
    perfume("Rasasi Hawas Ice EDP 100ml", 399.00, "masculino", "novidades", "Da linha Hawas: frescor gelado e energia, perfeito para os dias quentes."),
    perfume("Rasasi Hawas Elixir EDP 100ml", 419.00, "masculino", "novidades", "Da linha Hawas, em versão mais concentrada e de maior presença."),
    perfume("Rasasi Hawas Black EDP 100ml", 399.00, "masculino", "maisVendidos", "Da linha Hawas: perfil escuro, sofisticado e noturno."),
    perfume("Rasasi Hawas For Her EDP 100ml", 379.00, "feminino", "principais", "Feminina e vibrante, da linha Hawas, com frescor e sensualidade."),
    perfume("Rasasi La Yuqawam EDP 75ml", 449.00, "masculino", "principais", "Fragrância masculina de caráter oriental, com elegância e longa fixação."),
    perfume("Rasasi Fattan Pour Homme EDP 100ml", 399.00, "masculino", "principais", "Masculino sofisticado e envolvente, com assinatura da tradição árabe."),
    perfume("Rasasi Fattan Pour Femme EDP 100ml", 399.00, "feminino", "principais", "Feminina e magnética, com sofisticação clássica."),
    perfume("Rasasi Egra EDP 75ml", 379.00, "feminino", "principais", "Feminina oriental, com charme marcante e acabamento elegante."),
    perfume("Rasasi Daarej Pour Homme EDP 100ml", 389.00, "masculino", "principais", "Masculino refinado, com perfil elegante e presença discreta."),
    perfume("Rasasi Faqat Lil Rijal EDP 50ml", 349.00, "masculino", "principais", "Pensado para o homem de personalidade forte, com assinatura marcante."),
    perfume("Rasasi Rumz Al Rasasi 9325 Pour Lui EDP 50ml", 369.00, "masculino", "principais", "Elegância masculina clássica, com perfil sofisticado e atemporal."),
    perfume("Rasasi Shuhrah Pour Homme EDP 90ml", 349.00, "masculino", "principais", "Masculino de charme oriental, envolvente e elegante."),
    perfume("Rasasi Blue Lady EDP 75ml", 339.00, "feminino", "principais", "Feminina e luminosa, com frescor delicado e elegância."),

    // ================= SWISS ARABIAN =================
    perfume("Swiss Arabian Layali EDP 50ml", 389.00, "unissex", "principais", "Oriental luxuoso, que celebra a opulência das noites árabes."),
    perfume("Swiss Arabian Casablanca EDP 100ml", 349.00, "unissex", "principais", "Inspirado no exotismo oriental, com elegância envolvente."),
    perfume("Swiss Arabian Shumoukh EDP 100ml", 359.00, "unissex", "principais", "Sofisticação árabe em um perfil intenso e de longa duração."),
    perfume("Swiss Arabian Mukhallat Malaki EDP 100ml", 379.00, "unissex", "principais", "Um mukhallat de nobreza oriental, pensado para ocasiões especiais."),
    perfume("Swiss Arabian Amaken EDP 100ml", 319.00, "unissex", "principais", "Perfil oriental acolhedor, com identidade elegante."),
    perfume("Swiss Arabian Rakaan EDP 100ml", 329.00, "unissex", "principais", "Fragrância de caráter marcante, com assinatura sofisticada."),

    // ================= AL HARAMAIN =================
    perfume("Al Haramain Amber Oud Gold Edition EDP 120ml", 499.00, "unissex", "maisVendidos", "Perfil âmbar amadeirado, opulento e luminoso, uma das assinaturas mais admiradas da casa."),
    perfume("Al Haramain Amber Oud Dubai Night EDP 120ml", 519.00, "unissex", "novidades", "Da linha Amber Oud: elegância noturna com sofisticação oriental."),
    perfume("Al Haramain Amber Oud Ruby Edition EDP 120ml", 509.00, "unissex", "novidades", "Da linha Amber Oud: intenso e sedutor, com perfil oriental marcante."),
    perfume("Al Haramain Amber Oud White Edition EDP 120ml", 509.00, "unissex", "principais", "Da linha Amber Oud: luminosidade e refinamento em perfil elegante."),
    perfume("Al Haramain Amber Oud Blue Edition EDP 120ml", 509.00, "unissex", "principais", "Da linha Amber Oud: frescor sofisticado e personalidade moderna."),
    perfume("Al Haramain Detour Noir EDP 100ml", 449.00, "unissex", "principais", "Escuro e elegante, para quem prefere uma assinatura misteriosa."),
    perfume("Al Haramain L'Aventure EDP 100ml", 389.00, "masculino", "maisVendidos", "Masculino de postura confiante, com frescor sofisticado e grande projeção."),
    perfume("Al Haramain L'Aventure Intense EDP 100ml", 419.00, "masculino", "novidades", "Versão mais profunda de L'Aventure, para presença forte e elegante."),

    // ================= KHADLAJ =================
    perfume("Khadlaj Shiyaaka EDP 100ml", 219.00, "masculino", "principais", "Masculino vibrante e moderno, com personalidade marcante."),
    perfume("Khadlaj Icon EDP 100ml", 229.00, "masculino", "principais", "Fragrância masculina de assinatura elegante e presença forte."),

    // ================= FRAGRANCE WORLD / FRENCH AVENUE =================
    perfume("Fragrance World Barakkat Rouge 540 Extrait 70ml", 249.00, "unissex", "maisVendidos", "Açafrão, jasmim, âmbar e cedro: um extrato luminoso, adocicado e de rastro envolvente."),
    perfume("Fragrance World Barakkat Rouge 540 EDP 100ml", 229.00, "unissex", "novidades", "Versão em eau de parfum da assinatura Barakkat Rouge, elegante e luminosa."),
    perfume("Fragrance World Barakkat Satin Oud EDP 100ml", 229.00, "unissex", "principais", "Oud de toque acetinado, com perfil oriental sofisticado."),
    perfume("French Avenue Liquid Brun EDP 100ml", 239.00, "masculino", "novidades", "Masculino quente e envolvente, com assinatura sofisticada."),
    perfume("French Avenue Vulcan Feu EDP 100ml", 239.00, "unissex", "novidades", "Intenso e marcante, com personalidade ardente."),

    // ================= AJMAL =================
    perfume("Ajmal Evoke Him EDP 90ml", 389.00, "masculino", "principais", "Masculino moderno e elegante, com a tradição de perfumaria da Ajmal."),
    perfume("Ajmal Evoke Her EDP 90ml", 389.00, "feminino", "principais", "Feminina e sofisticada, uma fragrância de charme moderno."),
    perfume("Ajmal Sacrifice Him EDP 100ml", 419.00, "masculino", "principais", "Masculino intenso e sedutor, de grande personalidade."),
    perfume("Ajmal Sacrifice Her EDP 100ml", 419.00, "feminino", "principais", "Feminina e sensual, com perfil envolvente e marcante."),
    perfume("Ajmal Wisal EDP 50ml", 359.00, "unissex", "principais", "Unissex de caráter oriental, com elegância e profundidade."),
    perfume("Ajmal Aristocrat EDP 75ml", 349.00, "masculino", "principais", "Masculino clássico, com sofisticação nobre e atemporal."),
    perfume("Ajmal Amber Wood EDP 50ml", 399.00, "unissex", "principais", "Âmbar e madeiras em um perfil quente, acolhedor e refinado."),
    perfume("Ajmal Aurum EDP 100ml", 429.00, "feminino", "principais", "Feminina luxuosa, com brilho dourado e presença elegante."),

    // ================= ARD AL ZAAFARAN =================
    perfume("Ard Al Zaafaran Dirham EDP 100ml", 189.00, "unissex", "principais", "Oriental de assinatura acolhedora, com elegância e bom custo-benefício."),
    perfume("Ard Al Zaafaran Mousuf EDP 100ml", 189.00, "unissex", "principais", "Sofisticação árabe em perfil intenso e duradouro."),
    perfume("Ard Al Zaafaran Ameer Al Oud EDP 100ml", 199.00, "unissex", "principais", "Oud nobre e envolvente, pensado para quem aprecia tradição oriental."),

    // ================= ORIENTICA =================
    perfume("Orientica Amber Rouge EDP 80ml", 349.00, "unissex", "novidades", "Âmbar luminoso e quente, com elegância sofisticada."),
    perfume("Orientica Royal Amber EDP 80ml", 349.00, "unissex", "principais", "Âmbar de ar nobre, em um perfil quente e luxuoso."),
    perfume("Orientica Velvet Gold EDP 80ml", 349.00, "unissex", "principais", "Aveludado e elegante, com brilho dourado e presença envolvente."),
    perfume("Orientica Oud Saffron EDP 80ml", 379.00, "unissex", "principais", "Oud e açafrão em uma assinatura oriental opulenta."),
    perfume("Orientica Azure Aoud EDP 80ml", 349.00, "unissex", "principais", "Oud com frescor azulado, em um perfil moderno e sofisticado."),

    // ================= AMOUAGE =================
    perfume("Amouage Interlude Man EDP 100ml", 2490.00, "masculino", "principais", "Uma obra de alta perfumaria omani: complexa, enfumaçada e profundamente marcante."),
    perfume("Amouage Reflection Man EDP 100ml", 2290.00, "masculino", "principais", "Elegância floral e atemporal, na linguagem da alta perfumaria árabe."),
    perfume("Amouage Honour Woman EDP 100ml", 2490.00, "feminino", "principais", "Feminina e majestosa, um floral luxuoso de presença inesquecível."),
    perfume("Amouage Epic Woman EDP 100ml", 2490.00, "feminino", "principais", "Opulenta e sofisticada, com a assinatura de luxo da casa Amouage."),

    // ================= ARABIAN OUD =================
    perfume("Arabian Oud Kalemat EDP 100ml", 499.00, "unissex", "principais", "Uma fragrância oriental de requinte, celebrando a tradição do oud.")
];

// LOCAL STORAGE
let dados = localStorage.getItem("carrinho");
if (dados) {
    carrinho = JSON.parse(dados);
}

// LIMPAR PRODUTOS DA TELA ANTES DE RE-RENDERIZAR (usado nos filtros)
function limparProdutos() {
    document.getElementById("principais").innerHTML = "";
    document.getElementById("novidades").innerHTML = "";
    document.getElementById("maisVendidos").innerHTML = "";
}

// CARREGAR PRODUTOS
function carregarProdutos(listaProdutos = produtos) {
    const principais = document.getElementById("principais");
    const novidades = document.getElementById("novidades");
    const maisVendidos = document.getElementById("maisVendidos");

    listaProdutos.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("produto");

        if (item.preco > 1000) {
            div.style.border = "3px solid red";
        }

        // escapa aspas simples para não quebrar o onclick
        const nomeSeguro = item.nome.replace(/'/g, "\\'");

        div.innerHTML = `
            <img src="${item.imagem}" class="fotos" alt="${item.nome}">
            <h3>${item.nome}</h3>
            ${item.descricao ? `<p class="descricao">${item.descricao}</p>` : ""}
            <p>R$ ${item.preco.toFixed(2)}</p>
            <button onclick="adicionarCarrinho('${nomeSeguro}', ${item.preco})">Adicionar</button>
        `;

        if (item.categoria === "principais") {
            principais.appendChild(div);
        } else if (item.categoria === "novidades") {
            novidades.appendChild(div);
        } else if (item.categoria === "maisVendidos") {
            maisVendidos.appendChild(div);
        }
    });
}

// ADICIONAR AO CARRINHO
function adicionarCarrinho(nome, preco) {
    alert(nome + " foi adicionado ao carrinho!");

    let itemNoCarrinho = carrinho.find(item => item.nome === nome);

    if (itemNoCarrinho) {
        itemNoCarrinho.quantidade++;
    } else {
        carrinho.push({ nome, preco, quantidade: 1 });
    }

    atualizarCarrinho();
}

// REMOVER ITEM
function removerCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

// ALTERAR QUANTIDADE
function alterarQuantidade(index, novaQtd) {
    novaQtd = parseInt(novaQtd);
    if (isNaN(novaQtd) || novaQtd <= 0) {
        removerCarrinho(index);
        return;
    }
    carrinho[index].quantidade = novaQtd;
    atualizarCarrinho();
}

// TOTAL REAL DO CARRINHO
function totalCarrinho() {
    return carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
}

// ATUALIZAR CARRINHO
function atualizarCarrinho() {
    let lista = document.getElementById("listaCarrinho");
    let contador = document.getElementById("contador");
    let totalSpan = document.getElementById("total");

    lista.innerHTML = "";

    carrinho.forEach((item, index) => {
        let subtotal = item.preco * item.quantidade;

        let li = document.createElement("li");
        li.innerHTML = `
            <strong>${item.nome}</strong><br>
            R$ ${item.preco.toFixed(2)} x
            <input type="number" min="1" value="${item.quantidade}" onchange="alterarQuantidade(${index}, this.value)">
            = R$ ${subtotal.toFixed(2)}
            <br><br>
            <button onclick="removerCarrinho(${index})">Remover</button>
            <hr>
        `;
        lista.appendChild(li);
    });

    contador.innerText = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
    totalSpan.innerText = totalCarrinho().toFixed(2);

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    // mantém o Valor Final sempre sincronizado com o carrinho
    calcularTotal();
}

// ABRIR / FECHAR CARRINHO
function abrirCarrinho() {
    document.getElementById("carrinho").style.right = "0";
}

function fecharCarrinho() {
    document.getElementById("carrinho").style.right = "-300px";
}

// MODO ESCURO
function modoEscuro() {
    document.body.classList.toggle("dark");
}

// PESQUISA DE PRODUTOS
document.getElementById("pesquisa").addEventListener("keyup", function () {
    let texto = this.value.toLowerCase();

    document.querySelectorAll(".produto").forEach(produto => {
        let nome = produto.innerText.toLowerCase();
        produto.style.display = nome.includes(texto) ? "block" : "none";
    });
});

// ORDENAR
function ordenarMenor() {
    limparProdutos();
    carregarProdutos([...produtos].sort((a, b) => a.preco - b.preco));
}

function ordenarMaior() {
    limparProdutos();
    carregarProdutos([...produtos].sort((a, b) => b.preco - a.preco));
}

function ordenarAZ() {
    limparProdutos();
    carregarProdutos([...produtos].sort((a, b) => a.nome.localeCompare(b.nome)));
}

// FORMA DE PAGAMENTO: mostra ou esconde o campo de desconto
function verificarFormaPagamento() {
    const forma = document.getElementById("formaPagamento").value;
    const campoDesconto = document.getElementById("campoDesconto");

    if (forma === "prazo") {
        campoDesconto.style.display = "block";
    } else {
        campoDesconto.style.display = "none";
        document.getElementById("porcentagemDesconto").value = 0;
    }

    calcularTotal();
}

// CALCULA O VALOR FINAL (com desconto, se for a prazo)
function calcularTotal() {
    const forma = document.getElementById("formaPagamento").value;
    const total = totalCarrinho();
    let valorFinal = total;

    if (forma === "prazo") {
        let desconto = parseFloat(document.getElementById("porcentagemDesconto").value) || 0;
        desconto = Math.min(Math.max(desconto, 0), 100); // limita entre 0 e 100
        valorFinal = total - (total * desconto) / 100;
    }

    document.getElementById("valorFinalExibido").innerText = valorFinal.toFixed(2);
    return valorFinal;
}

// FINALIZAR COMPRA
function finalizarCompra() {
    if (carrinho.length === 0) {
        alert("Carrinho vazio");
        return;
    }

    const forma = document.getElementById("formaPagamento").value;
    const valorFinal = calcularTotal();
    let mensagem = "";

    if (forma === "vista") {
        mensagem = `Compra finalizada com sucesso!\nForma de pagamento: À Vista\nTotal: R$ ${valorFinal.toFixed(2)}`;
    } else {
        const desconto = document.getElementById("porcentagemDesconto").value || 0;
        mensagem = `Compra finalizada com sucesso!\nForma de pagamento: A Prazo\nDesconto aplicado: ${desconto}%\nTotal com desconto: R$ ${valorFinal.toFixed(2)}`;
    }

    alert(mensagem);

    carrinho = [];
    atualizarCarrinho();
    fecharCarrinho();
}

// ================= EXTRAS VISUAIS (novos, não alteram nada acima) =================

// Estilo de luxo para a descrição dos perfumes
(function () {
    const estilo = document.createElement("style");
    estilo.textContent = `
        .produto .descricao {
            font-family: Georgia, "Times New Roman", serif;
            font-style: italic;
            font-size: 0.85rem;
            line-height: 1.45;
            letter-spacing: 0.2px;
            opacity: 0.8;
            margin: 6px 0 10px;
        }
        .produto h3 {
            letter-spacing: 0.5px;
        }
    `;
    document.head.appendChild(estilo);
})();

// Imagem de reserva da YARA caso o arquivo/link do frasco não carregue
(function () {
    const svg =
        "<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'>" +
        "<rect width='400' height='400' fill='#111'/>" +
        "<rect x='8' y='8' width='384' height='384' fill='none' stroke='#c9a24a' stroke-width='2'/>" +
        "<text x='200' y='195' font-family='Georgia,serif' font-size='54' fill='#c9a24a' text-anchor='middle' letter-spacing='10'>YARA</text>" +
        "<text x='200' y='235' font-family='Georgia,serif' font-size='16' fill='#c9a24a' text-anchor='middle' letter-spacing='6'>ARABIA PERFUMES</text>" +
        "</svg>";
    const placeholder = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);

    document.addEventListener("error", function (e) {
        const img = e.target;
        if (img && img.tagName === "IMG" && img.classList.contains("fotos") && !img.dataset.fallback) {
            img.dataset.fallback = "1";
            img.src = placeholder;
        }
    }, true);
})();

// INICIAR SISTEMA
carregarProdutos();
atualizarCarrinho();