class ShoppingCartController < ApplicationController
    def add_to_cart 
        user = User.find_by(id: session[:user_id])
        shopping_cart_id = user.shopping_cart.id
        cart_item = CartItem.create(quantity: params[:quantity], product_id: params[:product_id], shopping_cart_id: shopping_cart_id)
        cart_item.save
        
        # cart_items = cart_item.shopping_cart
        # cart_items.map do |item|
        #     item.product = Product.find_by(id: item.product_id)
        #     item
        # end
        render json: cart_item.shopping_cart, status: :ok
    end

    private

    def cart_params
        params.permit(:product_id, :quantity)
    end

end
