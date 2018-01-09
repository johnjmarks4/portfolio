Rails.application.routes.draw do
  
  root 'static_pages#home'
  get '/static_pages/projects', as: '/projects'

end