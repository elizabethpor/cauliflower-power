class UsersController < ApplicationController
        #POST /signup
        def create
            user = User.create!(user_params)
            session[:user_id] = user.id
            render json: user, status: :created
        rescue ActiveRecord::RecordInvalid => e
            render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
        end
    
        #GET /me
        def show
            if session[:user_id]
                render json: User.find(session[:user_id]), status: :ok
            else
                render json: {error: "Not logged in"}, status: :unauthorized
            end
        end
    
        #POST /add_fav_recipe
        def add_fav_recipe
            user = User.find(session[:user_id])
            fav_recipe = Recipe.find(params[:id])
            user.recipes << fav_recipe
            render json: user
        end
        
        #DESTROY /remove_fav_recipe
        def remove_fav_recipe
            user = User.find(session[:user_id])
            unfavd_recipe = Recipe.find(params[:id])
            user.recipes.find(unfavd_recipe.id).destroy
            head :no_content
        end

        private
    
        def user_params
            params.permit(:username, :password, :password_confirmation)
        end
        
end
