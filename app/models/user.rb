class User < ApplicationRecord
  has_many :searches
  validates :first_name, :email, presence: true
  validates :email, uniqueness: { message: "%{value} is already taken" }
  has_secure_password

end
