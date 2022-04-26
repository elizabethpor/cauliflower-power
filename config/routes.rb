Rails.application.routes.draw do
  
  # Login / Logout Routes
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post "/signup", to: "users#create"
  get "/me", to: "users#show"

end
