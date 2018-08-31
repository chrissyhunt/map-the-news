class SearchController < ApplicationController

  def create
    @search = Search.new(search_params)
    if @search.save
      render json: @search, status: 200
    end
  end

  def show
    @search = Search.find_by(id: params[:id])
    render json: @search, status: 200
  end

  def destroy
    @search = Search.find_by(id: params[:id])
    @search.deletes
    render body: nil, status: :no_content
  end

  private

  def search_params
    params.require(:search).permit(:q, :start_date, :end_date)
  end

end
