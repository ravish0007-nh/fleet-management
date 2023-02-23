# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_02_23_095737) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "locations", force: :cascade do |t|
    t.float "latitude"
    t.float "longitude"
    t.text "address"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "machines", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "location_id", null: false
    t.index ["location_id"], name: "index_machines_on_location_id"
  end

  create_table "orders", force: :cascade do |t|
    t.string "status"
    t.text "error_message"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "payment_id", null: false
    t.index ["payment_id"], name: "index_orders_on_payment_id"
  end

  create_table "payments", force: :cascade do |t|
    t.float "amount"
    t.datetime "paid_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "machine_id", null: false
    t.bigint "user_id", null: false
    t.index ["machine_id"], name: "index_payments_on_machine_id"
    t.index ["user_id"], name: "index_payments_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "full_name"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password_digest"
  end

  add_foreign_key "machines", "locations"
  add_foreign_key "orders", "payments"
  add_foreign_key "payments", "machines"
  add_foreign_key "payments", "users"
end
