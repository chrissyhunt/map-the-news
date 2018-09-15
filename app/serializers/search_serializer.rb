class SearchSerializer < ActiveModel::Serializer
  attributes :id, :q, :start_date, :end_date
  belongs_to :user
end
