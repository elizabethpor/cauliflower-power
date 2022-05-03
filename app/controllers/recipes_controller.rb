class RecipesController < ApplicationController
    # before_action :authorize 
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        #take params, convert them to array, assign array to variable. 
        #use variable in where, column being ingredient_list
        # Model.where(:column => ["value", "other_value"]
        selected_ingredients = params[:ingredients].split(",")
        recipes = Recipe.by_ingredient(selected_ingredients)
        # recipes = Recipe.where(:ingredients => [params[:ingredients].split(" ")])
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
