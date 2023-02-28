class Api::V1::PaymentsController < ApplicationController
  before_action :set_payment, only: %i[ show update destroy ]

  # GET /payments
  def index
    @payments = Payment \
                .where(user_id: @current_user.id, status: 'completed')
    puts @payments

    render json: @payments
  end

  # GET /payments/1
  def show
    render json: @payment
  end

  # POST /payments
  def create
    @payment = Payment.new(user_id: @current_user.id, machine_id: params[:machine_id], amount: 5, paid_at: DateTime.now, status: 'pending')

    if @payment.save
        Order.create(payment_id: @payment.id, status: 'created')
        render json: @payment, status: :created
    else
      render json: @payment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /payments/1
  def update
    @order = Order.find_by_payment_id(@payment.id)
    @order.update(status: 'payment initiated')

    case params[:status]
    when 'completed'
      @payment.update(status: 'completed')
      @order.update(status: 'payment successful')
      @order.update(status: 'dispensed')
      render json: @payment
    when 'rejected'
      @payment.update(status: 'rejected')
      @order.update(status: 'payment rejected')
      render json: @payment
    else
      render json: @payment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /payments/1
  def destroy
    @payment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_payment
      @payment = Payment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def payment_params
      params.permit(:machine_id)
    end
end
