'use strict';
module.exports = function(app) {
    var categories = require('../controllers/categoriesController');

    // categories Routes
    app.route('/categoria')
        .get(categories.list_all_categories);


    app.route('/categoria/:categoryId/produto')
        .get(categories.read_a_category);
    
     app.route('/carrinho/:productId')
        .post(categories.choose_a_product);

     app.route('/carrinho')
        .get(categories.get_cart);
        
        
};