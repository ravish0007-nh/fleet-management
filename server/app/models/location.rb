class Location < ApplicationRecord
  has_many :machines
  validates :latitude, :longitude, :address, presence: true
  validates :latitude, :longitude, numericality: true
end
