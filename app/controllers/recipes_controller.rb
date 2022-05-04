class RecipesController < ApplicationController
    # before_action :authorize 
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        #take params, convert them to array, assign array to variable. 
        #use method select_by_ingredients to find recipes and pass in the variable as argument
        #to find the recipes that contain those ingredients.
        selected_ingredients = params[:ingredients].split(",")
        recipes = Recipe.select_by_ingredients(selected_ingredients)
        render json: recipes
    end

    def show
        recipe = Recipe.find(params[:id])
        render json: recipe
    end

    private

    def render_not_found_response
        render json: {error: "Recipe not found"}, status: :not_found
    end

    # def authorize
    #     return render json: {error: "You are not authorized to view this content, please log in"}, status: :unauthorized unless session.include? :user_id
    # end

end
