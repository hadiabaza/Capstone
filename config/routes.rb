Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
  resources :user
  resources :session
  resources :product
  resources :shoppingcart

  post '/cart/add', to: 'shopping_cart#add_to_cart'
  get '/me', to: 'user#show'
  post '/login', to: 'session#create'
  post '/signup', to: 'user#signup'
  delete '/logout', to: 'session#destroy'
  get '/show', to: 'shopping_cart#show'
  delete '/cart/remove', to: 'shopping_cart#remove_from_cart'
  get '/checkout', to: 'shopping_cart#checkout'
end
