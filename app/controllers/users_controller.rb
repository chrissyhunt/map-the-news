class UsersController < ApplicationController
  before_action :authenticate_user
  skip_before_action :authenticate_user, only: [:create]

  def create
    @user = User.new(auth_params)
    if @user && @user.save
      render json: @user
    end
  end

  def show
    # couldn't get serializers working to shorten this on 1st pass, but should revisit
    render json: current_user.to_json(only: [:id, :first_name, :last_name, :email],
                                      include: [:searches])
  end

  def update
    @user = current_user
    @user.update(auth_params)
    if @user.save
      render json: @user.to_json(only: [:id, :first_name, :last_name, :email],
                                  include: [:searches])
    end
  end

  def destroy
    @user = User.find_by(id: params[:id])
    @user.delete
    render body: nil, status: :no_content
  end

  private

  def auth_params
    params.permit(:id, :first_name, :last_name, :email, :password)
  end

  # def set_first_name
  #   params[:auth][:firstName]
  # end
  #
  # def set_last_name
  #   params[:auth][:lastName]
  # end
  #
  # def set_email
  #   params[:auth][:email]
  # end
  #
  # def set_password
  #   params[:auth][:password]
  # end
end
