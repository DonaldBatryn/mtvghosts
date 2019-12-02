Rails.application.routes.draw do
  namespace :api do
    get 'sessions/create'
    get 'sessions/destroy'
  end
  namespace :api do
    get 'gigs/create'
    get 'gigs/destroy'
    get 'gigs/show'
    get 'gigs/index'
    get 'gigs/update'
  end
  namespace :api do
    get 'songs/create'
    get 'songs/destroy'
    get 'songs/show'
  end
  namespace :api do
    get 'albums/create'
    get 'albums/destroy'
    get 'albums/index'
    get 'albums/show'
  end
  namespace :api do
    get 'users/create'
    get 'users/destroy'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
