export const BOARD_QUESTIONS = {
  A1: {
    coordenada: "A1",
    linha: "A",
    coluna: 1,
    pergunta: "Uma pessoa fez compras no mercado e as levará para casa. Pensando em diminuir o impacto ambiental, qual seria a melhor opção?",
    alternativas: {
      A: "Utilizar menos sacolinhas plásticas, acondicionando o máximo de produtos em cada sacola.",
      B: "Usar sacolas reutilizáveis, preferencialmente de fibras naturais e/ou biodegradáveis.",
      C: "Utilizar caixas de papelão para levar os alimentos para casa, colocando-os em sacolinhas de plástico para separá-los melhor nas caixas."
    },
    correta: "B",
    explicacao: "Reduzir o número de sacolas plásticas diminui o desperdício, mas ainda há impacto, pois o plástico demora séculos para se decompor e contribui para a poluição. Reutilizar sacolas reduz drasticamente o consumo de plásticos descartáveis. Optar por materiais biodegradáveis ou recicláveis diminui a poluição ambiental. Reutilizar caixas de papelão pode ser uma boa alternativa, mas ainda há consumo de plástico nas sacolas internas, o que reduz a eficácia ambiental da escolha.",
    pegadaImg: "/assets/pegada_plastico.jpg"
  },
  A2: {
    coordenada: "A2",
    linha: "A",
    coluna: 2,
    pergunta: "Você percebeu que suas ações geram impacto ambiental e quer fazer algo para ajudar a evitar isso. Uma ótima opção seria começar por:",
    alternativas: {
      A: "Separar o seu lixo reciclável do lixo não reciclável ou orgânico, destinando-os à lixeira comum do prédio.",
      B: "Optar por produtos descartáveis como copos de fibra biodegradável, diminuindo o consumo de água para lavar louça.",
      C: "Comprar alimentos na quitanda do bairro, sempre que possível, por saber que vendem produtos locais, de pessoas que têm hortas orgânicas."
    },
    correta: "C",
    explicacao: "Separar resíduos é importante, mas não basta separar; é fundamental destinar corretamente os recicláveis para a coleta seletiva. Jogá-los na lixeira comum pode impedir a reciclagem. Embora biodegradáveis sejam melhores que plásticos convencionais, o ideal é evitar descartáveis sempre que possível. Lavar louça de forma econômica tem impacto menor do que gerar mais resíduos. Comprar de produtores locais reduz o impacto ambiental porque evita longos transportes, reduzindo a emissão de CO₂ e incentivando práticas agrícolas sustentáveis.",
    pegadaImg: "/assets/pegada_ar.jpg"
  },
  A3: {
    coordenada: "A3",
    linha: "A",
    coluna: 3,
    pergunta: "Produtos locais são feitos próximos de onde são vendidos, sem precisar de transporte de longas distâncias. Por que comprar produtos locais pode ajudar o meio ambiente?",
    alternativas: {
      A: "Porque transportar alimentos de longe e armazená-los em grandes mercados consome mais energia e gera mais poluição.",
      B: "Porque comprar de produtores locais é mais barato, ajudando a economizar dinheiro.",
      C: "Porque os produtos locais têm menos calorias, evitando o aquecimento global."
    },
    correta: "A",
    explicacao: "O transporte de alimentos por longas distâncias utiliza energia, em parte ou totalmente, obtida por meio da queima de combustíveis. Dessa forma, esse transporte contribui para a emissão de gases poluentes. Além disso, muitos produtos vindos de longa distância exigem refrigeração para ser conservados, o que consome energia não renovável. Comprar de produtores locais reduz esses impactos, pois evita transporte por longas distâncias e diminui o consumo de energia.",
    pegadaImg: "/assets/pegada_ar.jpg"
  },
  A4: {
    coordenada: "A4",
    linha: "A",
    coluna: 4,
    pergunta: "Uma fábrica decidiu aumentar sua produção e, para isso, precisa de mais energia. Desse modo, passou a queimar mais combustíveis fósseis, porque utiliza esse tipo de fonte de energia. Como essa ação impacta o meio ambiente?",
    alternativas: {
      A: "A queima de combustíveis fósseis libera diversos gases poluentes, o que contribui para a alteração do clima no planeta Terra.",
      B: "O uso de combustíveis fósseis não impacta o meio ambiente, já que os gases liberados não são tão poluentes.",
      C: "O uso de combustíveis fósseis aquece apenas as áreas próximas às fábricas, não tendo impacto global."
    },
    correta: "A",
    explicacao: "O gás carbônico (CO₂) liberado pelo uso de carvão, petróleo e gás natural permanece na atmosfera, aumentando a temperatura global e contribuindo para mudanças climáticas extremas. Os oceanos absorvem parte do CO₂ liberado, mas isso causa acidificação, prejudicando corais e ecossistemas marinhos. O aumento da temperatura causado pelo gás carbônico acontece em escala global, afetando o clima de todo o planeta.",
    pegadaImg: "/assets/pegada_ar.jpg"
  },
  A5: {
    coordenada: "A5",
    linha: "A",
    coluna: 5,
    pergunta: "Uma grande área de floresta está sendo desmatada para dar lugar a plantações e criação de gado. Como essa atividade pode afetar o aquecimento global?",
    alternativas: {
      A: "O desmatamento reduz a quantidade de árvores, e isso ajuda a aumentar a concentração de gases do efeito estufa na atmosfera.",
      B: "O desmatamento não influencia o aquecimento global, já que a floresta se recupera rapidamente, de forma natural.",
      C: "O desmatamento não tem impacto global, somente aquecendo a região próxima à mata."
    },
    correta: "A",
    explicacao: "As árvores retiram o gás carbônico (CO₂) da atmosfera durante a fotossíntese. Quando são derrubadas, há menos absorção desse gás, agravando o efeito estufa e contribuindo para o aquecimento global. A recuperação de uma floresta desmatada pode levar séculos, e muitas áreas não se regeneram sem intervenção humana. Além disso, o carbono acumulado no solo e na vegetação é liberado na atmosfera.",
    pegadaImg: "/assets/pegada_desmatamento.jpg"
  },
  B1: {
    coordenada: "B1",
    linha: "B",
    coluna: 1,
    pergunta: "Como a expansão das cidades pode afetar os animais que vivem em áreas de mata?",
    alternativas: {
      A: "As cidades são boas para os animais silvestres, pois existe muito alimento disponível para eles em áreas urbanas.",
      B: "Os animais podem construir novas casas de forma fácil e continuar vivendo como antes.",
      C: "Muitas áreas naturais são destruídas para dar espaço a prédios e estradas, reduzindo os habitats dos animais."
    },
    correta: "C",
    explicacao: "A expansão urbana reduz as áreas naturais, prejudicando os habitats de diversas espécies de animais. Embora algumas consigam se adaptar, muitas perdem abrigo e alimento, levando ao declínio populacional e até à extinção. O aumento de estradas e construções também dificulta o deslocamento dos animais e aumenta os atropelamentos.",
    pegadaImg: "/assets/pegada_desmatamento.jpg"
  },
  B2: {
    coordenada: "B2",
    linha: "B",
    coluna: 2,
    pergunta: "Marcelo gosta de trocar de celular todo ano, mesmo quando o antigo ainda funciona. Se muitas pessoas fizerem o mesmo, qual pode ser o impacto dessa prática para o meio ambiente?",
    alternativas: {
      A: "Comprar celulares novos frequentemente é bom para a economia e não afeta o meio ambiente, pois os materiais podem ser reaproveitados facilmente.",
      B: "O aumento da produção de eletrônicos consome mais recursos naturais, como água e metais, além de gerar mais lixo eletrônico.",
      C: "Os recursos naturais são infinitos, então a fabricação constante de novos eletrônicos não causa problemas ambientais."
    },
    correta: "B",
    explicacao: "A produção de eletrônicos consome grandes quantidades de metais (por exemplo, lítio e cobalto) além de muita água e energia. O descarte frequente desses itens também gera lixo eletrônico, que, dependendo do modo como é tratado, pode conter substâncias tóxicas e poluir o solo e a água. O consumo consciente ajuda a reduzir esse impacto.",
    pegadaImg: "/assets/pegada_rio.jpg"
  },
  B3: {
    coordenada: "B3",
    linha: "B",
    coluna: 3,
    pergunta: "Por que a poluição dos oceanos ameaça a vida marinha?",
    alternativas: {
      A: "Muitos peixes e outros animais acabam ingerindo plásticos e produtos químicos devido à poluição do mar, ficando doentes ou morrendo.",
      B: "Os oceanos são muito grandes, então somente uma parte da vida marinha, pouco significativa, é afetada pelo lixo despejado nos mares.",
      C: "A poluição deixa a água do mar mais suja, mas os animais marinhos conseguem se adaptar facilmente."
    },
    correta: "A",
    explicacao: "A poluição dos oceanos prejudica diretamente a vida marinha. Muitos animais ingerem plástico e resíduos tóxicos, confundindo-os com alimentos, o que pode levá-los à morte. Além da ingestão, os animais podem ficar emaranhados nos resíduos sem conseguirem se movimentar ou se alimentar corretamente, e substâncias químicas alteram a qualidade da água e prejudicam corais e peixes.",
    pegadaImg: "/assets/pegada_plastico.jpg"
  },
  B4: {
    coordenada: "B4",
    linha: "B",
    coluna: 4,
    pergunta: "Você sabia que a criação de gado pode influenciar o aquecimento global? Sobre esse tema, escolha a alternativa correta.",
    alternativas: {
      A: "O gado libera um gás chamado metano, que contribui para o aumento da temperatura do planeta; para criar gado, também são necessárias grandes áreas de pastagem, o que pode levar ao desmatamento.",
      B: "O gado ajuda a diminuir o aquecimento global, pois, quando respira, absorve gases que esquentam o planeta.",
      C: "O impacto ambiental da criação de gado é baixo, pois os bois e vacas comem capim, que cresce naturalmente."
    },
    correta: "A",
    explicacao: "A pecuária é uma das grandes responsáveis pela emissão de metano (CH₄), um gás com efeito estufa mais potente que o gás carbônico (CO₂). Além disso, a criação de gado traz como consequência, muitas vezes, a derrubada de florestas para a formação de pastagens, aumentando o desmatamento.",
    pegadaImg: "/assets/pegada_desmatamento.jpg"
  },
  B5: {
    coordenada: "B5",
    linha: "B",
    coluna: 5,
    pergunta: "Mariana foi à praia e notou muito lixo espalhado na areia e no mar. O que ela pode fazer para ajudar a evitar a poluição dos oceanos?",
    alternativas: {
      A: "Levar o próprio lixo de volta para casa e reduzir o uso de plásticos descartáveis, como canudos e sacolas plásticas.",
      B: "Jogar o lixo na areia, pois a maré levará tudo para longe e o lixo se dissolverá na água.",
      C: "Fazer uma campanha pedindo que as pessoas recolham o lixo, mas continuar usando plásticos descartáveis no dia a dia."
    },
    correta: "A",
    explicacao: "Diminuir o uso de plásticos é uma das maneiras mais eficazes de evitar que esses resíduos acabem nos oceanos. O lixo plástico pode permanecer no ambiente por centenas de anos e prejudicar a vida marinha. Jogar lixo na areia esperando que a maré o leve piora a poluição dos oceanos.",
    pegadaImg: "/assets/pegada_plastico.jpg"
  },
  C1: {
    coordenada: "C1",
    linha: "C",
    coluna: 1,
    pergunta: "Como o derretimento das geleiras pode afetar o planeta?",
    alternativas: {
      A: "O aumento do nível dos oceanos pode causar inundações em cidades próximas do mar e afetar as populações que vivem nelas.",
      B: "O derretimento das geleiras não afeta o nível dos oceanos, pois a água do gelo derretido evapora completamente.",
      C: "As geleiras derretem apenas nas montanhas, sem afetar outras regiões do planeta."
    },
    correta: "A",
    explicacao: "O derretimento das geleiras contribui para o aumento do nível do mar, ameaçando cidades litorâneas e comunidades próximas. Além disso, esse fenômeno altera padrões climáticos e prejudica ecossistemas inteiros. As geleiras são de extrema importância, pois mantêm a temperatura global mais baixa e refletem a radiação solar de volta para o espaço.",
    pegadaImg: "/assets/pegada_queimada.jpg"
  },
  C2: {
    coordenada: "C2",
    linha: "C",
    coluna: 2,
    pergunta: "As queimadas são incêndios em vegetações, que podem ser naturais ou causadas por humanos. Devemos nos preocupar com elas?",
    alternativas: {
      A: "As queimadas destroem florestas, matam animais e poluem o ar, piorando a qualidade da respiração.",
      B: "As queimadas ajudam as florestas, pois deixam o solo mais fértil para novas plantas crescerem rapidamente.",
      C: "As queimadas afetam o meio ambiente, mas em poucos dias a natureza se recupera."
    },
    correta: "A",
    explicacao: "As queimadas destroem grandes áreas de vegetação, prejudicam a biodiversidade e liberam fumaça tóxica, aumentando problemas respiratórios e agravando o aquecimento global. Embora o solo possa ficar momentaneamente mais fértil, a recuperação completa da floresta pode levar décadas, tornando o impacto ambiental severo.",
    pegadaImg: "/assets/pegada_queimada.jpg"
  },
  C3: {
    coordenada: "C3",
    linha: "C",
    coluna: 3,
    pergunta: "As mudanças climáticas podem causar escassez de água potável?",
    alternativas: {
      A: "O aumento da temperatura pode provocar secas mais longas, reduzindo a disponibilidade de água para consumo.",
      B: "As mudanças climáticas não afetam a disponibilidade de água, pois o ciclo da água continua funcionando normalmente.",
      C: "A escassez de água ocorre por causa da poluição, mas sem relação com o clima."
    },
    correta: "A",
    explicacao: "O aumento da temperatura global altera o regime de chuvas, tornando algumas regiões mais secas e dificultando o acesso à água potável. Secas prolongadas reduzem os reservatórios de água, e a menor disponibilidade hídrica impacta diretamente o consumo humano e a produção agrícola.",
    pegadaImg: "/assets/pegada_queimada.jpg"
  },
  C4: {
    coordenada: "C4",
    linha: "C",
    coluna: 4,
    pergunta: "Amanda identificou que o rio perto de sua casa está cheio de garrafas plásticas e sujeira. O que ela pode fazer para ajudar?",
    alternativas: {
      A: "Participar de mutirões de limpeza e retirar os resíduos sólidos do rio.",
      B: "Esperar que a correnteza leve a sujeira embora com o tempo.",
      C: "Jogar produtos químicos na água para dissolver o lixo."
    },
    correta: "A",
    explicacao: "A poluição dos rios prejudica a biodiversidade e pode afetar a qualidade da água potável. A melhor atitude é participar de ações de limpeza e conscientizar a comunidade sobre o descarte correto do lixo. Esperar que a correnteza leve o lixo transfere o problema para outro lugar, e jogar produtos químicos pode causar danos ainda maiores.",
    pegadaImg: "/assets/pegada_rio.jpg"
  },
  C5: {
    coordenada: "C5",
    linha: "C",
    coluna: 5,
    pergunta: "As pilhas e baterias usadas contêm metais pesados que podem poluir o solo e a água quando descartadas de maneira incorreta. O que deve ser feito para evitar esse problema?",
    alternativas: {
      A: "Jogar as pilhas no lixo reciclável, junto com plástico e papel, pois assim podem ser reaproveitadas corretamente.",
      B: "Enterrar as pilhas no quintal ou em terrenos baldios para evitar que contaminem o lixo doméstico.",
      C: "Levar as pilhas e baterias usadas para postos de coleta específicos, onde serão descartadas e recicladas."
    },
    correta: "C",
    explicacao: "Pilhas e baterias contêm substâncias tóxicas que, se descartadas incorretamente, podem contaminar o solo e os lençóis freáticos. O descarte correto deve ser feito em postos de coleta específicos, garantindo o tratamento adequado desses materiais. Enterrá-las ou jogá-las junto com plásticos e papéis não resolve o problema e ainda agrava a poluição ambiental.",
    pegadaImg: "/assets/pegada_rio.jpg"
  }
};

export const ROWS = ["A", "B", "C"];
export const COLS = [1, 2, 3, 4, 5];
export const ALL_COORDS = [
  "A1", "A2", "A3", "A4", "A5",
  "B1", "B2", "B3", "B4", "B5",
  "C1", "C2", "C3", "C4", "C5"
];
