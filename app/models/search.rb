class Search < ApplicationRecord
  belongs_to :user
  validates :q, presence: true

end
