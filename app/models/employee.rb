class Employee < ApplicationRecord
has_many :infractions, dependent: :destroy
end
