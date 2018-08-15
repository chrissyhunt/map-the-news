require 'rest-client'

class NewsRequestController < ApplicationController

  def create
    @news_results = RestClient.get('https://newsapi.org/v2/everything?', {params: {
      apiKey: my_key,
      q: news_request_params.query,
      sources: sources,
      from: set_start_date,
      to: set_end_date,
      sortBy: relevancy
      }})
      if @news_results
        render json: format_news_results(@news_results)
      end
  end

  private

  def set_start_date
    news_request_params.start_date ? news_request_params.start_date : DateTime.now.strftime('%F')
  end

  def set_end_date
    news_request_params.end_date ? news_request_params.end_date : DateTime.now.strftime('%F')
  end

  def news_request_params
    params.require(:news_request).permit(:query, :start_date, :end_date)
  end

  def my_key
    ENV["NEWS_API_KEY"]
  end

  def sources
    'axios,bloomberg,breitbart-news,buzzfeed,cnn,fox-news,msnbc,national-review,reuters,the-american-conservative,the-huffington-post,the-new-york-times,the-wall-street-journal,the-washington-post,usa-today,the-hill,politico,the-economist,the-washington-times,time'
  end

end
