'use strict';
//var categories = require('../models/categoriesModel');

var Categories = [
  {
    id: 1,
    name: 'Cozinha'
  },
  {
    id: 2,
    name: 'Quarto'
  },
  {
    id: 3,
    name: 'Sala'
  }
];

var Products = [
        {
            id:1,
            name: 'Panela de Pressão Tramontina Vancouver 4,5 Litros Alumínio',
            url: 'https://images-americanas.b2w.io/produtos/01/00/item/122606/0/122606086SZ.jpg',
            description: 'A Panela de Pressão Tramontina Vancouver é ideal para preparar os mais deliciosos pratos e deixar a sua cozinha mais completa.',
            categoryId: 1
        },
        {
            id:2,
            name: 'Fritadeira Philco Air Fry Saúde Inox PH 3 Litros Preto',
            url: 'https://images-americanas.b2w.io/produtos/01/00/item/127878/8/127878831SZ.jpg',
            description: 'Com a Fritadeira Philco Air Fry Saúde Inox você terá a oportunidade de fazer seu alimento mais saudável e claro, muito mais delicioso. Com a tecnologia avançada, frita com pouquíssimo ou nenhum óleo. Prepare seus alimentos no tempo certo, controle ajustável de temperatura de 80º a 200ºC, muito mais opções de temperatura para o preparo do alimento. Além disso, possui cesto removível com capacidade para 3 litros, luzes indicadoras de funcionamento e aquecimento, base antiderrapante garantindo a segurança e o bem estar.',
            categoryId: 1
        },
        {
            id:3,
            name: 'Liquidificador Philco PH900 2L 12 Velocidades Vermelho - 900W',
            url: 'https://images-americanas.b2w.io/produtos/01/00/item/125215/7/125215742SZ.jpg',
            description: 'O Liquidificador Philco conta com 12 velocidades + pulsar/Autolimpeza é ideal para preparar diversos tipos de alimentos, como vitaminas, molhos, sopas cremosas e muito mais. Além disso, acompanha também um filtro separador, uma base antiderrapante e um sistema de segurança que só funciona com o copo devidamente encaixado, oferecendo mais segurança na hora de utilizá-lo.',
            categoryId: 1
        },
        {
            id:4,
            name: 'Micro-ondas Philco PME25 25 Litros com Tecla Preparo Rápido Prata Espelhado',
            url: 'https://images-americanas.b2w.io/produtos/01/00/item/113998/2/113998217SZ.jpg',
            description: 'Obtenha mais praticidade ao cozinhar com este forno micro-ondas PME25, desse jeito é possível preparar deliciosas refeições para você e toda família rapidamente.',
            categoryId: 1
        },
        {
            id:5,
            name: 'Cama Box Casal Mônaco Tcil Móveis Imbuia Rustic',
            url: 'https://images-americanas.b2w.io/produtos/01/00/sku/24246/2/24246208_1SZ.jpg',
            description: 'Com linhas retas e design minimalista, a Cama Box Casal Mônaco é a melhor opção para trazer conforto e elegância ao seu quarto. Produzida em MDP com pés em PVC, estrado de madeira reflorestada com quinto e sexto pés trazendo durabilidade e resistência ao móvel. Acabamento resistente com impressão UV e verniz de alta duração. Ideal para colchoes de 138cmx188cm.',
            categoryId: 2
        },
        {
            id:6,
            name: 'Cômoda Havana Master Hannover 2 Portas 4 Gavetas - at.home by Santos Andirá',
            url: 'https://images-americanas.b2w.io/produtos/01/00/item/130283/5/130283598SZ.jpg',
            description: 'Para organizar seu quarto de maneira ainda mais inteligente e sofisticada, a dica é investir em móveis compactos e com prática distribuição de espaços. Produzida com materiais de excelente qualidade, essa cômoda conta com 2 portas com dobradiças metálicas, 4 gavetas com corrediças metálicas, 2 prateleiras, 1 cabideiro metálico alumínio e local para acomodar aparelho de DVD. Aproveite!',
            categoryId: 2
        },        
        {
            id:7,
            name: 'Guarda-Roupa com Espelho 3 Portas Poe Siena Móveis Avelã',
            url: 'https://images-americanas.b2w.io/produtos/01/00/sku/14725/7/14725733_1SZ.jpg',
            description: 'Guarda-Roupa com maior resistência, durabilidade e acabamento, revestimento interno e externo: Pintura em estufas modernas com UV (ultra violeta), são túneis que secam os produtos através de lâmpadas especiais que reproduzem artificialmente os raios ultra-violetas do sol. Modelo com corrediça metálica em aço, 4 gavetas espaçosas.',
            categoryId: 2
        },        
        {
            id:8,
            name: 'Kit Cortina Riviera 2 metros Tabaco e Avelã + Varão Simples 19mm',
            url: 'https://images-americanas.b2w.io/produtos/01/00/sku/28638/5/28638556_1SZ.jpg',
            description: 'Kit Cortina Riviera 2 metros Tabaco e Avelã + Varão Simples 19mmConteúdo da Embalagem:01 Cortina 2,00m (Larg.) x 1,70m (Alt.)01 Varão Simples de 2,00 Metros c/ Suporte, Ponteiras (podem variar) e Parafusos(O varão será enviado em 2 barras de 1 metro, já pronto para emenda, por motivo de transporte.)Composição da Cortina:Tecido: Malha Gel 100% PoliésterComposição do Varão:Ferro: Espessura 19 mmTodas as informações divulgadas são de responsabilidade do fabricante/fornecedor. Imagens Meramente Ilustrativas.Verifique com os fabricantes do produto e de seus componentes eventuais limitações à utilização de todos os recursos e funcionalidades.Não nos responsabilizamos pela montagem/instalação dos produtos.',
            categoryId: 2
        },
        {
            id:9,
            name: 'Conjunto De Mesa Para Sala De Jantar Detalhes Com Vidro 6 Cadeiras Nogueira/Gold',
            url: 'https://images-americanas.b2w.io/produtos/01/00/sku/29307/1/29307120_1SZ.jpg',
            description: 'O novo conjunto de sala de jantar Detalhes com 6 lugares compostas pelas nova cadeiras Venus , foi projetado para dar mais elegância e comodidade para sua casa. Composta com material de alta qualidade e durabilidade. Com um lindo acabamento em pintura UV semi brilho. Estrutura da mesa em MDP, tampo da mesa de vidro, cadeiras com estrutura em MDF.',
            categoryId: 3
        },
        {
            id:10,
            name: 'Tapete Para Sala E Quarto Felpudo Soft Casa Dona 150x200 Marrom',
            url: 'https://images-americanas.b2w.io/produtos/01/00/sku/23254/7/23254744_1SZ.jpg',
            description: 'Os Tapetes Apolos proporcionam uma bela decoração com estilo, transformando qualquer ambiente! Tecido em 100% Poliéster de grande durabilidade, fácil lavagem e manutenção. Sua casa ainda mais bonita e elegante, aproveite!',
            categoryId: 3
        },
        {
            id:11,
            name: 'Sofá 3 Lugares Laguna Assento Retrátil e Encosto Reclinável em Suede Amassado Nogal',
            url: 'https://images-americanas.b2w.io/produtos/01/00/sku/19216/3/19216348_1SZ.jpg',
            description: 'O Sofá Laguna tem tudo a ver com a sua casa. Com 3 lugares, assentos retráteis, encostos reclináveis se encaixa perfeitamente em qualquer ambiente. Além de possuir design diferenciado, praticidade e conforto, o Sofá Laguna é 100% fibra e com madeira de eucalipto de áreas de reflorestamento. Uma combinação perfeita para quem procura sintonia entre qualidade e bom gosto. Aproveite!',
            categoryId: 3
        }
    ];

exports.list_all_categories = function(req, res) {
  res.json(Categories);
};

exports.read_a_category = function(req, res) {
    var selectedProducts = [];
    Products.forEach(function(product){
        if(product.categoryId==req.params.categoryId){
            selectedProducts.push(product);
        }
    });
    res.json(selectedProducts);
};

exports.choose_a_product = function(req, res) {
    Products.forEach(function(product){
        if(product.id==req.params.productId){
            req.session.cart.push(product);
            res.json([{status:true}]);
        }
    });
    res.json([{status:false}]);
};

exports.get_cart = function(req, res) {
    res.json(req.session.cart);
}