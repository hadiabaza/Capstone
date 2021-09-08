class ProductController < ApplicationController
    def index
        sacks = Product.all 
        render json: sacks
    end

    def show
        sack = Product.find(params[:id])
        render json: sack
    end

    
end
