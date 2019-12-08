Rails.application.routes.draw do
  
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :admins, only: [:create]
    resources :users, only: [:create, :destroy, :index]
    resource :session, only: [:create, :destroy]
    resources :albums, only: [:create, :update, :show, :index, :destroy]
    resources :gigs, only: [:create, :update, :show, :index, :destroy]
    resources :songs, only: [:create, :update, :show, :index, :destroy]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
