class Machine < ApplicationRecord
  belongs_to :location
  has_many :payments
  validates :location_id, presence: true
end
