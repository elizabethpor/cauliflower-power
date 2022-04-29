class IngredientsController < ApplicationController
# before_action :authorize

    def index
        render json: Ingredient.all
    end

    private

    # def authorize
    #     return render json: {error: "You are not authorized to view this content, please log in"}, status: :unauthorized unless session.include? :user_id
    # end

end
