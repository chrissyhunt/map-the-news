class SearchesController < ApplicationController

  def create
    @search = Search.new(search_params)
    @search.user = current_user
    if @search && @search.save
      render json: @search
    end
  end

  def show
    @search = Search.find_by(id: params[:id])
    render json: @search, status: 200
  end

  def destroy
    @search = Search.find_by(id: params[:id])
    @search.delete
    render body: nil, status: :no_content
  end

  private

  def search_params
    params.permit(:q, :startDate, :endDate)
  end

end
