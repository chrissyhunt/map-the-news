class User < ApplicationRecord
  has_many :searches
  validates :first_name, :email, presence: true
  validates :email, uniqueness: true
  has_secure_password

end
