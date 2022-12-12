Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root :to => 'pages#home'

  get '/portfolio' => 'pages#portfolio'
  get '/about' => 'pages#about'
  get '/experience' => 'pages#experience'
  

end
