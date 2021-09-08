class UserController < ApplicationController
    # show all
    def index
        users = User.all
        render json: users
    end

    # create user if valid and login by creating session for user
    # /signup
    def signup
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            cart = ShoppingCart.create()
            cart.user = user
            cart.save
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    # /me
    def show 
        user = User.find_by(id: session[:user_id])
        render json: user
    end


    private 

    def user_params
        params.permit(:name, :email, :password, :password_confirmation)
    end
end
