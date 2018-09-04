class NewsRequestController < ApplicationController

  def news_request
    @news_results = Faraday.get 'https://newsapi.org/v2/everything?' do |req|
      req.params['apiKey'] = my_key
      req.params['q'] = news_request_params[:q]
      req.params['sources'] = set_sources
      req.params['from'] = set_start_date
      req.params['to'] = set_end_date
      req.params['sortBy'] = 'relevancy'
      req.params['pageSize'] = '100'
    end

    render json: @news_results.body, status: 200
  end

  def top_headlines
    @news_results = Faraday.get 'https://newsapi.org/v2/top-headlines?' do |req|
      req.params['apiKey'] = my_key
      req.params['sources'] = set_sources
      req.params['pageSize'] = '100'
    end

    render json: @news_results.body, status: 200
  end

  private

  def set_start_date
    news_request_params[:startDate] ? news_request_params[:startDate] : DateTime.now.strftime('%F')
  end

  def set_end_date
    news_request_params[:endDate] ? news_request_params[:endDate] : DateTime.now.strftime('%F')
  end

  def news_request_params
    params.permit(:q, :startDate, :endDate)
  end

  def my_key
    ENV["NEWS_API_KEY"]
  end

  def set_sources
    'axios,bloomberg,breitbart-news,buzzfeed,cnn,fox-news,msnbc,national-review,reuters,the-american-conservative,the-huffington-post,the-new-york-times,the-wall-street-journal,the-washington-post,usa-today,the-hill,politico,the-economist,the-washington-times'
  end

end
