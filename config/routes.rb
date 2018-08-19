Rails.application.routes.draw do
  scope '/api' do
    resources :users, only: [:create, :edit, :update, :destroy]
    resources :searches, only: [:create, :show, :destroy]
    get 'user' => 'users#show'
    post 'news_request' => 'news_request#create'
    post 'user_token' => 'user_token#create'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
