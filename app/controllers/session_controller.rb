class SessionController < ApplicationController

    # /login
    def create
        user = User.find_by(email: params[:email])
        puts "this is the email"
        
        puts params[:password]
        puts params[:email]
        if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user, status: :ok
        else
          render json: {errors: "Please Enter a valid Username or Password"}, status: :unauthorized
        end
    end


    # logout 
    def destroy
        session.delete :user_id
        head :no_content
    end
end
