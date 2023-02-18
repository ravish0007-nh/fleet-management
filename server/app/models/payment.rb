class Payment < ApplicationRecord
  has_one :user
  has_one :machine
  has_one :order
end
