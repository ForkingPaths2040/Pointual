Rails.application.routes.draw do
  resources :employees, only: [:index, :show] do
    resources :infractions, only: [:create, :update, :destroy]
  end
  
  # resources :employees
  # resources :infractions
  get '/logs', to: 'infractions#allLogs'
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
