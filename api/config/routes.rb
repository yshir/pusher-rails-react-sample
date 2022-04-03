Rails.application.routes.draw do
  resources :ping, only: :index

  resources :tasks, only: :index
end
