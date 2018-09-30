class UsersController < ApplicationController
  skip_before_action :authenticate_user, only: [:create, :test]

  def test
    render json: {'test': 'successful'}
  end

  def create
    @user = User.new(auth_params)
    if @user && @user.save
      render json: @user
    else
      render json: @user.errors.full_messages.to_json, status: :bad_request
    end
  end

  def show
    render json: current_user
  end

  def update
    @user = current_user
    @user.update(auth_params)
    if @user.save
      render json: @user
    else
      render json: @user.errors.full_messages.to_json, status: :bad_request
    end
  end

  def destroy
    @user = User.find_by(id: params[:id])
    @user.delete
    render body: nil, status: :no_content
  end

  private

  def auth_params
    params.require(:auth).permit(:first_name, :last_name, :email, :password)
  end
end
