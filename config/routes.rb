Rails.application.routes.draw do
  post '/charges', to: 'charges#purchase'
  # get '/canceled', to: 'charges#purchase'
  get "/canceled", path:"/canceled"
  post '/add-fav-recipe/:id', to: 'users#add_fav_recipe'
  delete '/remove-fav-recipe/:id', to: 'users#remove_fav_recipe'
  resources :recipes, only: [:index, :show]
  resources :ingredients, only: [:index]

  # Login / Logout Routes
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post "/signup", to: "users#create"
  get "/me", to: "users#show"

end
