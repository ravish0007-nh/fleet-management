class Order < ApplicationRecord
  belongs_to :payment
  validates :status, :payment_id, presence: true
end
