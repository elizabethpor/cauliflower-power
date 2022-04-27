Rails.application.routes.draw do
  resources :recipes, only: [:index]
  resources :ingredients, only: [:index]

  # Login / Logout Routes
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post "/signup", to: "users#create"
  get "/me", to: "users#show"

end
