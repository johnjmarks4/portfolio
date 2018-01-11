Rails.application.routes.draw do
  
  root 'static_pages#home'

  get '/home',     to: "static_pages#home"
  get '/about',    to: "static_pages#about"
  get '/skills',   to: "static_pages#skills"
  get '/my_work',  to: "static_pages#my_work"
  get '/contact',  to: "static_pages#contact"

end