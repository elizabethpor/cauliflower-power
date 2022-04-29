Rails.application.routes.draw do
  post '/charges', to: 'charges#purchase'
  resources :recipes, only: [:index, :show]
  resources :ingredients, only: [:index]

  # Login / Logout Routes
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post "/signup", to: "users#create"
  get "/me", to: "users#show"

end
