Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :payments
      resources :orders
      resources :machines
      resources :locations
      resources :users
    end
  end

  post 'auth/signup', to: 'authentication#signup'
  post 'auth/login', to: 'authentication#login'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
