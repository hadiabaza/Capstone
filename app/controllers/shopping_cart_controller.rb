class ShoppingCartController < ApplicationController
    def add_to_cart 
        # //check if quantity is more than 1 
        user = User.find_by(id: session[:user_id])
        shopping_cart_id = user.shopping_cart.id
        item_in_cart = user.shopping_cart.cart_items.find_by(product_id: params[:product_id])
        if item_in_cart == nil
            cart_item = CartItem.create(quantity: params[:quantity], product_id: params[:product_id], shopping_cart_id: shopping_cart_id)
            cart_item.save
        else
            quantity = item_in_cart.quantity 
            item_in_cart.update(quantity: quantity + params[:quantity])
        end
        
        render json: user.shopping_cart.cart_items, status: :ok
    end

    def index
        carts = ShoppingCart.all
        render json: carts
    end

    def show
        user = User.find_by(id: session[:user_id])
        cart_items = user.shopping_cart.cart_items
        render json: cart_items
    end

    def remove_from_cart
        user = User.find_by(id: session[:user_id])
        shopping_cart_id = user.shopping_cart.id
        item_in_cart = user.shopping_cart.cart_items.find_by(id: params[:id])
        item_in_cart.destroy
        render json: user.shopping_cart.cart_items, status: :ok
    end

   
    private

    def cart_params
        params.permit(:product_id, :quantity)
    end

end
