class Payment < ApplicationRecord
  has_one :user
  has_one :machine
  has_one :order
  validates :user_id, :machine_id, :amount, :paid_at, :status,  presence: true
  validates :amount, numericality: true
end
